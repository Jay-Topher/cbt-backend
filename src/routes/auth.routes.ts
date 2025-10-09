// path: src/routes/auth.routes.ts
import { Router } from "express";
import { adminLogin, studentLogin } from "../controllers/auth.controller.js";

const r = Router();
r.post("/admin/login", adminLogin);
r.post("/student/login", studentLogin);
export default r;
