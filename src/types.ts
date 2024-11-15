import type { DIFFICULTIES } from "~/utils";

export type QuizResultRecord = Record<
  string,
  {
    isCorrect?: boolean;
  }
>;

export type Difficulty = (typeof DIFFICULTIES)[number];

export type QuizPageSearchParams = {
  difficulty: Difficulty;
};
