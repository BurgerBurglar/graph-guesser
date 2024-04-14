"use client";

import type { NextPage } from "next";
import Image from "next/image";
import { useIsClient } from "usehooks-ts";
import ResultDisplay from "~/app/results/ResultsDisplay";
import {
  CloseButton,
  NeutralButton,
  PrimaryButton,
} from "~/components/ui/button";
import { useDeck } from "~/context/DeckContext";
import { usePlay, useResults } from "~/hooks";

const Results: NextPage = () => {
  const {
    deck: { quizIds },
  } = useDeck();
  const { numCorrectResultsInDeck, numCorrectResults, numResults } =
    useResults();
  const { playRandomGame } = usePlay();
  const isClient = useIsClient();

  return (
    <main className="container relative flex min-h-[100dvh] flex-col items-center justify-between gap-6 bg-gradient-to-b px-4 pb-6 pt-16">
      <CloseButton />
      <div className="flex flex-col items-center gap-2">
        <Image
          src="/you-did-great.webp"
          alt="you did great!"
          width={350}
          height={350}
        />
        <div className="text-center font-medium">
          <p>You learned so much about the world today!</p>
          <p>Wanna learn more?</p>
        </div>
        <div className="flex gap-4">
          {!!quizIds.length && (
            <ResultDisplay
              header="JUST NOW"
              numCorrect={numCorrectResultsInDeck}
              numTotal={quizIds.length}
            />
          )}
          {isClient && !!numResults && (
            <ResultDisplay
              header="OVERALL"
              numCorrect={numCorrectResults}
              numTotal={numResults}
            />
          )}
        </div>
      </div>
      <div className="flex w-full flex-col items-stretch gap-2">
        <NeutralButton>SHARE</NeutralButton>
        <NeutralButton>SEE RESULTS</NeutralButton>
        <PrimaryButton onClick={() => playRandomGame(false)}>
          PLAY AGAIN
        </PrimaryButton>
      </div>
    </main>
  );
};
export default Results;
