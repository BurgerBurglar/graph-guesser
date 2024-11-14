export type QuizResultRecord = Record<
  string,
  {
    isCorrect?: boolean;
  }
>;

export type Difficulty = "easy" | "medium" | "hard";

export type QuizPageSearchParams = {
  difficulty: Difficulty;
};
