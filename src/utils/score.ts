// path: src/utils/score.ts
import { Answer } from "@prisma/client";

export function computeScore(answers: Pick<Answer, "isCorrect">[]): number {
  return answers.reduce((acc, a) => acc + (a.isCorrect ? 1 : 0), 0);
}
