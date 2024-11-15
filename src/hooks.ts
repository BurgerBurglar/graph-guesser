"use client";

import { useRouter } from "next/navigation";
import { useDeck } from "~/context/DeckContext";
import {
  numCorrectResults,
  numCorrectResultsInDeck,
  numQuizesPlayed,
  useDeckStore,
} from "~/lib/zustand";
import type { Difficulty } from "~/types";
import { getQuizLink } from "./utils";

export const usePlay = () => {
  const router = useRouter();
  const { initializeRandomDeck } = useDeck();
  const { setDifficulty } = useDeckStore();

  const playRandomGame = ({
    canPlayOld = false,
    selectedDifficulty,
  }: {
    canPlayOld?: boolean;
    selectedDifficulty?: Difficulty;
  }) => {
    console.log("difficulty", selectedDifficulty);
    if (selectedDifficulty) {
      setDifficulty(selectedDifficulty);
    }
    const difficulty = useDeckStore.getState().difficulty;

    initializeRandomDeck(canPlayOld);
    const newDeck = useDeckStore.getState().deck;

    const firstQuizId = newDeck.quizIds[0];
    if (firstQuizId === undefined) {
      router.push("/all-done");
      return;
    }
    void router.push(getQuizLink(firstQuizId, difficulty));
  };
  return { playRandomGame };
};

export const useResults = () => {
  const { results, setResult, quizeIdsPlayed } = useDeckStore();

  return {
    results,
    setResult,
    quizeIdsPlayed: quizeIdsPlayed(),
    numCorrectResultsInDeck: numCorrectResultsInDeck(),
    numCorrectResults: numCorrectResults(),
    numQuizesPlayed: numQuizesPlayed(),
  };
};
