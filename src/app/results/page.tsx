"use client";

import type { NextPage } from "next";
import Image from "next/image";
import {
  CloseButton,
  NeutralButton,
  PrimaryButton,
} from "~/components/ui/button";
import { useDeck } from "~/context/DeckContext";
import { usePlay, useResults } from "~/hooks";

interface ResultDisplayProps {
  header: string;
  numCorrect: number;
  numTotal: number;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({
  header,
  numCorrect,
  numTotal,
}) => {
  return (
    <div className="flex flex-col items-stretch rounded-xl border-2 border-t-0 border-green-700 text-center">
      <div className="min-w-32 rounded-t-xl bg-green-700 py-1 font-bold text-white">
        {header}
      </div>
      <div className="px-10 py-2 text-lg font-medium text-green-700">
        {numCorrect}/{numTotal}
      </div>
    </div>
  );
};

const Results: NextPage = () => {
  const {
    deck: { quizIds },
  } = useDeck();
  const { numCorrectResultsInDeck, numCorrectResults, numResults } =
    useResults();
  const { playRandomGame } = usePlay();

  return (
    <main className="container relative flex min-h-screen flex-col items-center justify-end gap-16 bg-gradient-to-b from-green-100 to-green-50 px-4 py-6">
      <CloseButton />
      <div className="flex flex-col items-center">
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
      </div>

      <div className="flex gap-4">
        {!!quizIds.length && (
          <ResultDisplay
            header="JUST NOW"
            numCorrect={numCorrectResultsInDeck}
            numTotal={quizIds.length}
          />
        )}
        {!!numResults && (
          <ResultDisplay
            header="OVERALL"
            numCorrect={numCorrectResults}
            numTotal={numResults}
          />
        )}
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
