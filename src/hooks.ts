/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDeck } from "./context/DeckContext";
import type { Results } from "./types";

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
export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  const setValue = (value: T) => {
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  useEffect(() => {
    const value = window.localStorage.getItem(key);

    if (value) {
      try {
        const parsed = JSON.parse(value) as T;
        setStoredValue(parsed);
      } catch (error) {
        console.log(error);
        setStoredValue(initialValue);
      }
    } else {
      setStoredValue(initialValue);
    }
  }, []);

  useEffect(() => {
    if (storedValue) {
      setValue(storedValue);
    }
  }, [storedValue]);

  return [storedValue, setStoredValue] as const;
};

export const useResults = () => {
  "use client";
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
