// path: src/routes/admin.routes.ts
import { Router } from "express";
import { requireAuth } from "../middleware/auth.js";
import {
  createStudent, listStudents, upsertSubject, addQuestion, setSubjectDuration,
  leaderboard, createAdmin, deleteStudent, resetSession,
  listQuestions
} from "../controllers/admin.controller.js";

const r = Router();
r.use(requireAuth(["ADMIN"]));
r.post("/students", createStudent);
r.get("/students", listStudents);
r.delete("/students/:id", deleteStudent);
r.post("/subjects", upsertSubject);
r.post("/subjects/:subjectId/questions", addQuestion);
r.get("/subjects/:subjectId/questions", listQuestions);
r.patch("/subjects/:subjectId/duration", setSubjectDuration);
r.get("/leaderboard", leaderboard);
r.post("/admins", createAdmin);
r.post("/sessions/:studentId/reset", resetSession);
export default r;
