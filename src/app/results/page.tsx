"use client";

import type { NextPage } from "next";
import Image from "next/image";
import {
  Button,
  PrimaryButton,
  SecondaryButton,
} from "../../components/ui/button";
import { usePlay, useResults } from "../../utils";
import { useDeck } from "../../Context";
import Link from "next/link";
import { X } from "lucide-react";

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
      <div className="rounded-t-xl bg-green-700 py-1 font-bold text-white">
        {header}
      </div>
      <div className="px-10 py-2 text-lg text-green-700">
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
      <Button
        asChild
        variant="ghost"
        className="absolute left-4 top-4 h-10 w-10 p-0"
      >
        <Link href="/">
          <X />
        </Link>
      </Button>

      <div className="flex flex-col items-center">
        <Image
          src="/you-did-great.webp"
          alt="you did great!"
          width={250}
          height={250}
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
        <SecondaryButton>SHARE</SecondaryButton>
        <SecondaryButton>SEE RESULTS</SecondaryButton>
        <PrimaryButton onClick={playRandomGame}>PLAY AGAIN</PrimaryButton>
      </div>
    </main>
  );
};
export default Results;
