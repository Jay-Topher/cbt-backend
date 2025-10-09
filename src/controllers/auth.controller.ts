// path: src/controllers/auth.controller.ts
import type { Request, Response } from "express";
import { prisma } from "../db.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

function sign(sub: string, role: "ADMIN" | "STUDENT") {
  return jwt.sign({ sub, role }, process.env.JWT_SECRET!, { expiresIn: "8h" });
}

export async function adminLogin(req: Request, res: Response) {
  const { email, password } = req.body;
  const admin = await prisma.adminUser.findUnique({ where: { email } });
  if (!admin) return res.status(401).json({ error: "Invalid credentials" });
  const ok = await argon2.verify(admin.password, password);
  if (!ok) return res.status(401).json({ error: "Invalid credentials" });
  const token = sign(admin.id, "ADMIN");
  const { password: adminPassword, ...rest } = admin;
  res.json({ token, user: { ...rest, role: "admin" } });
}

export async function studentLogin(req: Request, res: Response) {
  const { username } = req.body;
  const student = await prisma.student.findUnique({ where: { username } });
  if (!student) return res.status(404).json({ error: "Student not found" });
  const token = sign(student.id, "STUDENT");
  res.json({ token, user: { ...student, role: "student" } });
}
