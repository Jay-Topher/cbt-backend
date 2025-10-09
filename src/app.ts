// path: src/app.ts
import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import pinoHttp from "pino-http";
import { rateLimit } from "./middleware/rateLimit.js";
import { errorHandler } from "./middleware/errorHandler.js";
import authRoutes from "./routes/auth.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import subjectRoutes from "./routes/subject.routes.js";
import examRoutes from "./routes/exam.routes.js";
import progressRoutes from "./routes/progress.routes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json({ limit: "1mb" }));
app.use(cors({ origin: process.env.CORS_ORIGIN?.split(",") || true, credentials: true }));
app.use(helmet());
app.use(morgan("dev"));
app.use(pinoHttp());

app.get("/health", (_req: Request, res: Response) => res.json({ ok: true }));

app.use("/api/auth", rateLimit, authRoutes);
app.use("/api/admin", rateLimit, adminRoutes);
app.use("/api/subjects", subjectRoutes);
app.use("/api/exam", examRoutes);
app.use("/api/progress", progressRoutes);

app.use(errorHandler);

export default app;
