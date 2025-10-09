// path: src/routes/progress.routes.ts
import { Router } from "express";
import { requireAuth } from "../middleware/auth.js";
import { getProgress } from "../controllers/progress.controller.js";

const r = Router();
r.use(requireAuth(["STUDENT"]));
r.get("/", getProgress);
export default r;
