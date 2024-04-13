"use client";

import { useRouter } from "next/navigation";
import { useLocalStorage } from "usehooks-ts";
import { useDeck } from "~/context/DeckContext";
import type { Results } from "~/types";

export const usePlay = () => {
  const router = useRouter();
  const { initializeRandomDeck } = useDeck();

  const playRandomGame = (canPlayOld = false) => {
    const newQuizIds = initializeRandomDeck(canPlayOld);
    if (newQuizIds.length === 0) {
      router.push("/all-done");
      return;
    }
    void router.push(`quizes/${newQuizIds[0]}`);
  };
  return { playRandomGame };
};

export const useResults = () => {
  const [results, saveResults] = useLocalStorage<Results>("results", {});
  const { deck } = useDeck();

  const numCorrectResultsInDeck = Object.entries(results).filter(
    ([quizId, { isCorrect }]) => deck.quizIds.includes(quizId) && isCorrect,
  ).length;
  const numCorrectResults = Object.entries(results).filter(
    ([_, { isCorrect }]) => isCorrect,
  ).length;
  const numResults = Object.entries(results).length;

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
    numCorrectResultsInDeck,
    numCorrectResults,
    numResults,
  };
};
