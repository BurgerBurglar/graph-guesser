"use client";

import { useRouter } from "next/navigation";
import { useLocalStorage } from "usehooks-ts";
import { useDeck } from "~/context/DeckContext";
import { DATA } from "~/data";
import type { Difficulty, QuizResultRecord } from "~/types";
import { getQuizLink } from "./utils";

export const usePlay = () => {
  const router = useRouter();
  const { initializeRandomDeck } = useDeck();

  const playRandomGame = ({
    canPlayOld = false,
    difficulty,
  }: {
    canPlayOld?: boolean;
    difficulty?: Difficulty;
  }) => {
    if (difficulty) {
      localStorage.setItem("difficulty", difficulty);
    }

    const newQuizIds = initializeRandomDeck(canPlayOld);

    const newQuizId = newQuizIds[0];
    if (newQuizId === undefined) {
      router.push("/all-done");
      return;
    }
    void router.push(getQuizLink(newQuizId, difficulty));
  };
  return { playRandomGame };
};

const quizIds = Array.from(DATA).map(([quizId]) => quizId);
const initialResults: QuizResultRecord = Object.fromEntries(
  quizIds.map((quizId) => [quizId, { isCorrect: undefined }]),
);

export const useResults = () => {
  const [results, saveResults] = useLocalStorage<QuizResultRecord>(
    "results",
    initialResults,
  );
  const { deck } = useDeck();

  const numCorrectResultsInDeck = Object.entries(results).filter(
    ([quizId, { isCorrect }]) => deck.quizIds.includes(quizId) && isCorrect,
  ).length;
  const numCorrectResults = Object.entries(results).filter(
    ([_, { isCorrect }]) => isCorrect,
  ).length;

  const quizeIdsPlayed = Object.entries(results)
    .filter(([_, { isCorrect }]) => isCorrect !== undefined)
    .map(([quizId]) => quizId);
  const numQuizesPlayed = quizeIdsPlayed.length;

  const setResult = ({
    quizId,
    isCorrect,
  }: {
    quizId: string;
    isCorrect: boolean;
  }) => {
    saveResults((prev) => ({
      ...prev,
      [quizId]: { ...prev[quizId], isCorrect },
    }));
  };
  return {
    results,
    setResult,
    quizeIdsPlayed,
    numCorrectResultsInDeck,
    numCorrectResults,
    numQuizesPlayed,
  };
};
