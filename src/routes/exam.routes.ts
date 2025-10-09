// path: src/routes/exam.routes.ts
import { Router } from "express";
import { requireAuth } from "../middleware/auth.js";
import {
  startSession, getAssignedSubjects, startSubject, submitAnswer, finishSubject,
  getSubjectState, getSessionSummary
} from "../controllers/exam.controller.js";

const r = Router();
r.use(requireAuth(["STUDENT"]));
r.post("/start", startSession);
r.get("/assigned-subjects", getAssignedSubjects);
r.post("/subject/:subjectId/start", startSubject);
r.get("/subject/:subjectId/state", getSubjectState);
r.post("/subject/:subjectId/answer", submitAnswer);
r.post("/subject/:subjectId/finish", finishSubject);
r.get("/summary", getSessionSummary);
export default r;
