// path: src/controllers/subject.controller.ts
import type { Request, Response } from "express";
import { prisma } from "../db.js";

export async function listSubjects(_req: Request, res: Response) {
  const subs = await prisma.subject.findMany({ orderBy: { name: "asc" } });
  res.json(subs);
}

export async function getSubject(req: Request, res: Response) {
  const { id } = req.params;
  const s = await prisma.subject.findUnique({ where: { id } });
  if (!s) return res.status(404).json({ error: "Not found" });
  res.json(s);
}
