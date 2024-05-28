"use client";

import { createContext, useContext } from "react";
import { useLocalStorage } from "usehooks-ts";
import { DATA } from "~/data";
import { useResults } from "~/hooks";
import { NUM_QUIZES_PER_PLAY, shuffle } from "~/utils";

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
  const [deck, setDeck] = useLocalStorage("deck", defaultDeck.deck);

  const { quizeIdsPlayed } = useResults();
  const initializeRandomDeck = (canPlayOld = false) => {
    const allQuizIds = [...DATA.keys()];
    const quizIdsToShuffle = canPlayOld
      ? [...allQuizIds]
      : allQuizIds.filter((quizId) => !quizeIdsPlayed.includes(quizId));
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
