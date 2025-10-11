// path: src/controllers/admin.controller.ts
import type { Request, Response } from "express";
import { prisma } from "../db.js";
import argon2 from "argon2";
import { Prisma } from "@prisma/client";

export async function createAdmin(req: Request, res: Response) {
  const { email, password } = req.body;
  const hashed = await argon2.hash(password);
  const admin = await prisma.adminUser.create({
    data: { email, password: hashed },
  });
  res.status(201).json({ id: admin.id, email: admin.email });
}

export async function createStudent(req: Request, res: Response) {
  const { firstName, lastName, category, password } = req.body;
  const username = `${firstName}.${lastName}`.toLowerCase();
  const hashed = await argon2.hash(password);
  const student = await prisma.student.create({
    data: { firstName, lastName, category, username, password: hashed },
  });
  res.status(201).json(student);
}

export async function deleteStudent(req: Request, res: Response) {
  const { id } = req.params;
  await prisma.student.delete({ where: { id } });
  res.status(204).send();
}

export async function listStudents(req: Request, res: Response) {
  const { sortBy = "createdAt", order = "desc", category } = req.query as any;
  const where: Prisma.StudentWhereInput = category
    ? { category: category }
    : {};
  const students = await prisma.student.findMany({
    where,
    orderBy: [{ [sortBy]: order === "asc" ? "asc" : "desc" }],
    include: {
      sessions: {
        include: {
          subjectAttempts: { include: { answers: true, subject: true } },
        },
      },
    },
  });
  res.json(students);
}

export async function upsertSubject(req: Request, res: Response) {
  const { name, code, defaultMinutes = 25 } = req.body;
  const s = await prisma.subject.upsert({
    where: { code },
    create: { name, code, defaultMinutes },
    update: { name, defaultMinutes },
  });
  res.status(201).json(s);
}

export async function addQuestion(req: Request, res: Response) {
  const { subjectId } = req.params;
  const { prompt, options, answerIndex, isSandbox = false } = req.body;
  const q = await prisma.question.create({
    data: { subjectId, prompt, options, answerIndex, isSandbox },
  });
  res.status(201).json(q);
}

export async function listQuestions(req: Request, res: Response) {
  const { subjectId } = req.params;
  const questions = await prisma.question.findMany({ where: { subjectId } });
  res.json(questions);
}

export async function setSubjectDuration(req: Request, res: Response) {
  const { subjectId } = req.params;
  const { minutes } = req.body;
  const s = await prisma.subject.update({
    where: { id: subjectId },
    data: { defaultMinutes: minutes },
  });
  res.json(s);
}

export async function leaderboard(_req: Request, res: Response) {
  // Compute totals for latest sessions
  const students = await prisma.student.findMany({
    include: {
      sessions: {
        orderBy: { createdAt: "desc" },
        take: 1,
        include: { subjectAttempts: true },
      },
    },
  });
  const data = students
    .map((s) => {
      const session = s.sessions[0];
      const total = session
        ? session.subjectAttempts.reduce((acc, a) => acc + (a.score || 0), 0)
        : 0;
      return { student: s, total };
    })
    .sort((a, b) => b.total - a.total);
  res.json(data);
}

export async function resetSession(req: Request, res: Response) {
  const { studentId } = req.params;
  await prisma.examSession.deleteMany({ where: { studentId } });
  res.json({ ok: true });
}
