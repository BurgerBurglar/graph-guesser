import { useDeckStore } from "~/lib/zustand";
import type { Difficulty, QuizPageSearchParams } from "./types";

export function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex]!,
      array[currentIndex]!,
    ];
  }

  return array;
}

export const NUM_QUIZES_PER_PLAY = 5;

export const DIFFICULTIES = ["easy", "medium", "hard"] as const;

export const validateSearchParams = (searchParams: QuizPageSearchParams) => {
  const keys = Array.from(Object.keys(searchParams));
  if (keys.length !== 1) return false;
  if (!keys.includes("difficulty")) return false;

  const difficulty = searchParams.difficulty;
  if (!difficulty) return false;
  return DIFFICULTIES.includes(difficulty);
};

export const getQuizLink = (quizId: string, difficulty?: Difficulty) => {
  if (!difficulty) {
    difficulty = useDeckStore.getState().difficulty;
  }
  const searchParams = new URLSearchParams({
    difficulty,
  });
  return `/quizes/${quizId}?${searchParams.toString()}`;
};
