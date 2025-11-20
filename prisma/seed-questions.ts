// path: prisma/seed-questions.ts
import { PrismaClient } from "@prisma/client";
import questionBank from "../src/data/questions.js"; // <-- ensure this path exists from our earlier step

type MCQ = {
  prompt: string;
  options: [string, string, string, string];
  answerIndex: 0 | 1 | 2 | 3;
};

// Subject codes -> human names (used if subject is missing)
const SUBJECT_META: Record<string, { name: string }> = {
  BIO: { name: "Biology" },
  CHE: { name: "Chemistry" },
  ECO: { name: "Economics" },
  GOV: { name: "Government" },
  CIV: { name: "Civic Education" },
  PHY: { name: "Physics" },
  // ENG: { name: "English Language" },
  // MTH: { name: "Mathematics" },
};

const prisma = new PrismaClient();

function normalizePrompt(p: string) {
  // Normalize whitespace & trailing punctuation to avoid near-duplicate prompts
  return p.replace(/\s+/g, " ").replace(/\s+([?.!,;:])/g, "$1").trim();
}

async function ensureSubject(code: string) {
  const meta = SUBJECT_META[code] || { name: code };
  const subject = await prisma.subject.upsert({
    where: { code },
    update: { name: meta.name },
    create: { code, name: meta.name, defaultMinutes: 25 }
  });
  return subject;
}

async function upsertQuestionsForSubject(code: string, questions: MCQ[]) {
  const subject = await ensureSubject(code);

  // Fetch existing question prompts for this subject (normalized)
  const existing = await prisma.question.findMany({
    where: { subjectId: subject.id },
    select: { id: true, prompt: true }
  });
  const existingSet = new Set(existing.map(q => normalizePrompt(q.prompt).toLowerCase()));

  let created = 0;
  let skipped = 0;

  for (const q of questions) {
    const norm = normalizePrompt(q.prompt).toLowerCase();

    if (existingSet.has(norm)) {
      skipped++;
      continue;
    }

    // Safety: enforce 4 options
    if (!Array.isArray(q.options) || q.options.length !== 4) {
      console.warn(`Skipping (not 4 options): [${code}] ${q.prompt}`);
      skipped++;
      continue;
    }

    // Safety: enforce valid answerIndex
    if (![0, 1, 2, 3].includes(q.answerIndex)) {
      console.warn(`Skipping (invalid answerIndex): [${code}] ${q.prompt}`);
      skipped++;
      continue;
    }

    await prisma.question.create({
      data: {
        subjectId: subject.id,
        prompt: normalizePrompt(q.prompt),
        options: [...q.options], // string[]
        answerIndex: q.answerIndex,
        isSandbox: false
      }
    });

    existingSet.add(norm);
    created++;
  }

  return { subject, created, skipped };
}

async function main() {
  // questionBank should look like: { BIO: MCQ[], CHE: MCQ[], ECO: MCQ[], GOV: MCQ[] }
  const entries = Object.entries(questionBank) as [string, MCQ[]][];

  let totalCreated = 0;
  let totalSkipped = 0;

  for (const [code, questions] of entries) {
    if (!SUBJECT_META[code]) {
      console.warn(`Unknown subject code "${code}" in questionBank; will create with same code.`);
    }
    const { subject, created, skipped } = await upsertQuestionsForSubject(code, questions);
    totalCreated += created;
    totalSkipped += skipped;
    console.log(
      `Subject ${subject.name} (${code}): +${created} created, ${skipped} skipped (already present or invalid).`
    );
  }

  console.log(`\nDone. Total created: ${totalCreated}, total skipped: ${totalSkipped}.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
