"use client";

import { createContext, useContext, useState } from "react";
import { NUM_QUIZES_PER_PLAY, shuffle, useResults } from "./utils";
import { DATA } from "./data";

type DeckContextState = {
  quizIds: string[];
};

type DeckContextValue = {
  deck: DeckContextState;
  initializeRandomDeck: (canPlayOld?: boolean) => DeckContextState["quizIds"];
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
  const { results } = useResults();
  const initializeRandomDeck = (canPlayOld = false) => {
    const allQuizIds = [...DATA.keys()];
    const quizIdsToShuffle = canPlayOld
      ? [...allQuizIds]
      : allQuizIds.filter((quizId) => !Object.keys(results).includes(quizId));
    const quizIds = shuffle(quizIdsToShuffle).slice(0, NUM_QUIZES_PER_PLAY);
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
