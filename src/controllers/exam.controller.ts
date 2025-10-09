// path: src/controllers/exam.controller.ts
import type { Request, Response } from "express";
import { prisma } from "../db.js";
import { shuffle } from "../utils/shuffle.js";
import { computeScore } from "../utils/score.js";
import { Category } from "@prisma/client";

const SCIENCE_SUBJECT_CODES = ["ENG", "MTH", "CHE", "BIO", "PHY"];
const ARTS_SUBJECT_CODES = ["ENG", "MTH", "CIV", "ECO", "GOV"];

async function getActiveSession(studentId: string) {
  return prisma.examSession.findFirst({
    where: { studentId },
    orderBy: { createdAt: "desc" },
    include: { subjectAttempts: true }
  });
}

export async function startSession(req: Request, res: Response) {
  const studentId = req.user!.sub;
  // create new session if none active or last is completed
  const existing = await getActiveSession(studentId);
  if (existing && existing.status === "IN_PROGRESS") {
    return res.json(existing);
  }
  const session = await prisma.examSession.create({
    data: { studentId }
  });
  res.status(201).json(session);
}

export async function getAssignedSubjects(req: Request, res: Response) {
  const student = await prisma.student.findUnique({ where: { id: req.user!.sub } });
  if (!student) return res.status(404).json({ error: "Student not found" });
  const codes = student.category === Category.SCIENCE ? SCIENCE_SUBJECT_CODES : ARTS_SUBJECT_CODES;
  const subjects = await prisma.subject.findMany({ where: { code: { in: codes } }, orderBy: { name: "asc" } });
  res.json(subjects);
}

export async function startSubject(req: Request, res: Response) {
  const studentId = req.user!.sub;
  const { subjectId } = req.params;
  const session = await getActiveSession(studentId) || await prisma.examSession.create({ data: { studentId } });
  // idempotent: if attempt exists return it
  let attempt = await prisma.subjectAttempt.findUnique({ where: { sessionId_subjectId: { sessionId: session.id, subjectId } }, include: { answers: true } });
  if (attempt?.startedAt) return res.json(attempt);
  const subject = await prisma.subject.findUnique({ where: { id: subjectId } });
  if (!subject) return res.status(404).json({ error: "Subject not found" });
  const questions = await prisma.question.findMany({ where: { subjectId, isSandbox: false }, orderBy: { createdAt: "asc" } });
  if (questions.length === 0) return res.status(400).json({ error: "No questions for this subject" });
  const randomized = shuffle(questions.map(q => q.id));
  attempt = await prisma.subjectAttempt.upsert({
    where: { sessionId_subjectId: { sessionId: session.id, subjectId } },
    create: {
      sessionId: session.id,
      subjectId,
      startedAt: new Date(),
      durationMin: subject.defaultMinutes,
      questionOrder: randomized,
      answers: { create: randomized.map(qid => ({ questionId: qid })) }
    },
    update: {
      startedAt: new Date(),
      durationMin: subject.defaultMinutes,
      questionOrder: randomized
    },
    include: { answers: true, subject: true }
  });
  res.status(201).json(attempt);
}

export async function getSubjectState(req: Request, res: Response) {
  const studentId = req.user!.sub;
  const { subjectId } = req.params;
  const session = await getActiveSession(studentId);
  if (!session) return res.status(404).json({ error: "No active session" });
  const attempt = await prisma.subjectAttempt.findUnique({
    where: { sessionId_subjectId: { sessionId: session.id, subjectId } },
    include: { answers: true, subject: true }
  });
  if (!attempt) return res.status(404).json({ error: "Subject not started" });
  // fetch questions in order
  const questions = await prisma.question.findMany({ where: { id: { in: attempt.questionOrder } } });
  const qById = new Map(questions.map(q => [q.id, q]));
  const ordered = attempt.questionOrder.map(id => qById.get(id));
  res.json({ attempt, questions: ordered });
}

export async function submitAnswer(req: Request, res: Response) {
  const studentId = req.user!.sub;
  const { subjectId } = req.params;
  const { questionId, selectedIndex } = req.body;
  const session = await getActiveSession(studentId);
  if (!session) return res.status(404).json({ error: "No active session" });
  const attempt = await prisma.subjectAttempt.findUnique({ where: { sessionId_subjectId: { sessionId: session.id, subjectId } } });
  if (!attempt?.startedAt) return res.status(400).json({ error: "Subject not started" });
  if (attempt.endedAt) return res.status(400).json({ error: "Subject already finished" });
  // timer check (server-side)
  const elapsedMin = (Date.now() - new Date(attempt.startedAt).getTime()) / 60000;
  if (elapsedMin > attempt.durationMin) {
    return res.status(400).json({ error: "Time elapsed - finish subject" });
  }
  const correctIndex = (await prisma.question.findUnique({ where: { id: questionId }, select: { answerIndex: true } }))?.answerIndex;
  const isCorrect = (selectedIndex ?? -1) === correctIndex;
  const answer = await prisma.answer.update({
    where: { attemptId_questionId: { attemptId: attempt.id, questionId } },
    data: { selectedIndex, isCorrect, answeredAt: new Date() }
  });
  res.json(answer);
}

export async function finishSubject(req: Request, res: Response) {
  const studentId = req.user!.sub;
  const { subjectId } = req.params;
  const session = await getActiveSession(studentId);
  if (!session) return res.status(404).json({ error: "No active session" });
  let attempt = await prisma.subjectAttempt.findUnique({
    where: { sessionId_subjectId: { sessionId: session.id, subjectId } },
    include: { answers: true }
  });
  if (!attempt) return res.status(404).json({ error: "Subject not started" });
  // compute score
  const score = computeScore(attempt.answers);
  attempt = await prisma.subjectAttempt.update({
    where: { id: attempt.id },
    data: { score, endedAt: new Date() },
    include: { answers: true, subject: true }
  });
  res.json({ score, attempt });
}

export async function getSessionSummary(req: Request, res: Response) {
  const studentId = req.user!.sub;
  const session = await getActiveSession(studentId);
  if (!session) return res.status(404).json({ error: "No active session" });
  const attempts = await prisma.subjectAttempt.findMany({
    where: { sessionId: session.id },
    include: { subject: true }
  });
  const total = attempts.reduce((acc, a) => acc + (a.score || 0), 0);
  res.json({ attempts, total });
}
