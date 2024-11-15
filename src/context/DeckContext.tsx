"use client";

import { useDeckStore } from "~/lib/zustand";

export const useDeck = () => {
  const { deck, initializeRandomDeck } = useDeckStore();
  return {
    deck,
    initializeRandomDeck,
  };
};
