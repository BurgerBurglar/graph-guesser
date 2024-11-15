"use client";

import { useRouter } from "next/navigation";
import { useDeckStore } from "~/lib/zustand";
import type { Difficulty } from "~/types";
import { getQuizLink } from "./utils";

export const usePlay = () => {
  const router = useRouter();
  const { initializeRandomDeck, setDifficulty } = useDeckStore();

  const playRandomGame = ({
    canPlayOld = false,
    selectedDifficulty,
  }: {
    canPlayOld?: boolean;
    selectedDifficulty?: Difficulty;
  }) => {
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
