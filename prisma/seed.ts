// path: prisma/seed.ts
import { PrismaClient, Category } from "@prisma/client";
import argon2 from "argon2";

const prisma = new PrismaClient();

const subjects = [
  { code: "ENG", name: "English Language" },
  { code: "MTH", name: "Mathematics" },
  { code: "CHE", name: "Chemistry" },
  { code: "BIO", name: "Biology" },
  { code: "PHY", name: "Physics" },
  { code: "CIV", name: "Civic Education" },
  { code: "ECO", name: "Economics" },
  { code: "GOV", name: "Government" }
];

async function main() {
  // Admin
  const admin = await prisma.adminUser.upsert({
    where: { email: "admin@cbt.local" },
    update: {},
    create: { email: "admin@cbt.local", password: await argon2.hash("admin123") }
  });
  console.log("Admin:", admin.email, "password: admin123");

  // Subjects
  for (const s of subjects) {
    await prisma.subject.upsert({
      where: { code: s.code },
      update: { name: s.name, defaultMinutes: 25 },
      create: { code: s.code, name: s.name, defaultMinutes: 25 }
    });
  }

  // Mock questions (5 per subject; duplicate to reach 50 in real data)
  const all = await prisma.subject.findMany();
  for (const sub of all) {
    const existing = await prisma.question.count({ where: { subjectId: sub.id } });
    if (existing > 0) continue;
    for (let i = 1; i <= 5; i++) {
      await prisma.question.create({
        data: {
          subjectId: sub.id,
          prompt: `${sub.name} sample question ${i}?`,
          options: ["Option A", "Option B", "Option C", "Option D"],
          answerIndex: i % 4
        }
      });
    }
    // Sandbox question
    await prisma.question.create({
      data: {
        subjectId: sub.id,
        prompt: `Sandbox: ${sub.name} practice question?`,
        options: ["Opt 1", "Opt 2", "Opt 3", "Opt 4"],
        answerIndex: 0,
        isSandbox: true
      }
    });
  }

  // Demo students
  await prisma.student.createMany({
    data: [
      { firstName: "Ada", lastName: "Lovelace", username: "ada.lovelace", category: Category.SCIENCE },
      { firstName: "Chinua", lastName: "Achebe", username: "chinua.achebe", category: Category.ARTS }
    ],
    skipDuplicates: true
  });

  console.log("Seed completed.");
}

main().finally(() => prisma.$disconnect());
