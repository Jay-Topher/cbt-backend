// path: src/controllers/progress.controller.ts
import type { Request, Response } from "express";
import { prisma } from "../db.js";

export async function getProgress(req: Request, res: Response) {
  const studentId = req.user!.sub;
  const session = await prisma.examSession.findFirst({
    where: { studentId },
    orderBy: { createdAt: "desc" },
    include: {
      subjectAttempts: {
        include: { answers: true, subject: true },
      },
    },
  });
  if (!session) return res.json({ sessionId: null, progress: [] });
  // compute answered counts
  const progress = session.subjectAttempts.map((a) => ({
    subjectId: a.subjectId,
    subjectName: a.subject.name,
    answered: a.answers.filter(
      (x) => x.selectedIndex !== null && x.selectedIndex !== undefined
    ).length,
    total: a.answers.length,
    startedAt: a.startedAt,
    endedAt: a.endedAt,
    durationMin: a.durationMin,
    score: a.score ?? null,
  }));
  res.json({ sessionId: session.id, progress });
}
