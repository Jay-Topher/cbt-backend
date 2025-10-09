# CBT Platform Backend (Node + TS + Express + Prisma + PostgreSQL)

## Quickstart

```bash
cp .env.example .env
docker compose up -d
pnpm install   # or npm/yarn
pnpm prisma:generate
pnpm prisma:migrate
pnpm db:seed
pnpm dev
```

- Health check: `GET /health`
- Admin login (seeded): `POST /api/auth/admin/login` { "email": "admin@cbt.local", "password": "admin123" }
- Student login: `POST /api/auth/student/login` { "username": "ada.lovelace" }

## Key Endpoints

- `GET /api/subjects` — list subjects
- `GET /api/subjects/:subjectId` — get subject info
- `POST /api/admin/students` — create student (ADMIN)
- `GET /api/admin/students?category=SCIENCE&sortBy=createdAt&order=desc` — list/sort (ADMIN)
- `POST /api/admin/subjects` — create/update subject (ADMIN)
- `POST /api/admin/subjects/:subjectId/questions` — add question (ADMIN)
- `GET /api/admin/subjects/:subjectId/questions` — get questions list (ADMIN)
- `PATCH /api/admin/subjects/:subjectId/duration` — set per-subject duration (ADMIN)
- `GET /api/admin/leaderboard` — get totals (ADMIN)
- `POST /api/exam/start` — create/get active session (STUDENT)
- `GET /api/exam/assigned-subjects` — list assigned 5 subjects based on category (STUDENT)
- `POST /api/exam/subject/:subjectId/start` — start a subject attempt; randomizes question order (STUDENT)
- `GET /api/exam/subject/:subjectId/state` — get attempt + ordered questions (STUDENT)
- `POST /api/exam/subject/:subjectId/answer` — save one answer and auto-check correctness (STUDENT)
- `POST /api/exam/subject/:subjectId/finish` — finish and get score (STUDENT)
- `GET /api/exam/summary` — per-subject scores + total (STUDENT)
- `GET /api/progress` — progress snapshot (STUDENT)

## Notes
- Question order is randomized per student per subject and persisted in `SubjectAttempt.questionOrder`.
- Server-side timer enforcement using `startedAt + durationMin`.
- All questions for a subject can be fetched at once via `GET /api/exam/subject/:subjectId/state`.
- Sandbox questions are flagged (`Question.isSandbox=true`) and can be filtered client-side for a practice mode.
- The system is designed for 30+ concurrent students and horizontally scalable (stateless API, Postgres).
