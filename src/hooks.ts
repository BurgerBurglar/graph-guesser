"use client";

import { useRouter } from "next/navigation";
import { useDeckStore } from "~/lib/zustand";
import { getQuizLink } from "./utils";

export const usePlay = () => {
  const router = useRouter();
  const { initializeRandomDeck } = useDeckStore();

  const playRandomGame = ({ canPlayOld = false }: { canPlayOld?: boolean }) => {
    initializeRandomDeck(canPlayOld);
    const newDeck = useDeckStore.getState().deck;

    const firstQuizId = newDeck.quizIds[0];
    if (firstQuizId === undefined) {
      router.push("/all-done");
      return;
    }
    void router.push(getQuizLink(firstQuizId));
  };
  return { playRandomGame };
};
