"use client";

import { createContext, useContext, useState } from "react";
import { NUM_QUIZES_PER_PLAY, shuffle } from "./utils";
import { DATA } from "./data";

type DeckContextState = {
  quizIds: string[];
};

type DeckContextValue = {
  deck: DeckContextState;
  initializeRandomDeck: () => DeckContextState["quizIds"];
};

const defaultDeck: DeckContextValue = {
  deck: { quizIds: [] },
  initializeRandomDeck: () => [],
};

const DeckContext = createContext<DeckContextValue>(defaultDeck);

export const DeckContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [deck, setDeck] = useState(defaultDeck.deck);
  const initializeRandomDeck = () => {
    const quizIds = shuffle([...DATA.keys()]).slice(0, NUM_QUIZES_PER_PLAY);
    setDeck({
      quizIds,
    });
    return quizIds;
  };
  return (
    <DeckContext.Provider value={{ deck, initializeRandomDeck }}>
      {children}
    </DeckContext.Provider>
  );
};

export const useDeck = () => useContext(DeckContext);
