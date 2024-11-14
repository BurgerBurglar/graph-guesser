export type QuizResultRecord = Record<
  string,
  {
    isCorrect?: boolean;
  }
>;

export type QuizPageSearchParams = {
  difficulty: "easy" | "medium" | "hard";
};
