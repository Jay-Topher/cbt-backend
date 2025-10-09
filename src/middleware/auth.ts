// path: src/middleware/auth.ts
import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface AuthPayload {
  sub: string;
  role: "ADMIN" | "STUDENT";
}

declare global {
  namespace Express {
    interface Request {
      user?: AuthPayload
    }
  }
}

export function requireAuth(roles?: Array<AuthPayload['role']>) {
  return (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers.authorization;
    if (!header?.startsWith("Bearer ")) return res.status(401).json({ error: "Unauthorized" });
    const token = header.slice(7);
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET!) as AuthPayload;
      if (roles && !roles.includes(payload.role)) return res.status(403).json({ error: "Forbidden" });
      req.user = payload;
      next();
    } catch (e) {
      return res.status(401).json({ error: "Invalid token" });
    }
  };
}
