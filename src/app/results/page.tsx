"use client";

import type { NextPage } from "next";
import Image from "next/image";
import { PrimaryButton, SecondaryButton } from "../../components/ui/button";
import { useResults } from "../../utils";
import { useDeck } from "../../Context";

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

  return (
    <main className="container flex min-h-screen flex-col items-center justify-end gap-12 px-4 py-6">
      <Image
        src="/you-did-great.webp"
        alt="you did great!"
        width={250}
        height={250}
      />
      <div className="text-lg">You learned so much about the world today!</div>

      <div className="flex gap-4">
        {!!quizIds.length && (
          <ResultDisplay
            header="OVERALL"
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
      <div className="flex w-full flex-col items-stretch gap-2 pt-12">
        <SecondaryButton>SHARE</SecondaryButton>
        <SecondaryButton>SEE RESULTS</SecondaryButton>
        <PrimaryButton>PLAY AGAIN</PrimaryButton>
      </div>
    </main>
  );
};
export default Results;
