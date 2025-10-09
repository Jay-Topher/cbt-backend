// path: src/routes/subject.routes.ts
import { Router } from "express";
import { listSubjects, getSubject } from "../controllers/subject.controller.js";
import { requireAuth } from "../middleware/auth.js";

const r = Router();
r.get("/", listSubjects);
// r.get("/:subjectId", getSubject);
r.get("/:id", requireAuth(["ADMIN", "STUDENT"]), getSubject);
export default r;
