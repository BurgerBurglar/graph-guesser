"use client";

import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useIsClient } from "usehooks-ts";
import ResultDisplay from "~/app/results/ResultsDisplay";
import { Button, CloseButton } from "~/components/ui/button";
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
    <div className="bg-gradient-to-b from-green-100 to-green-50">
      <main className="container relative flex h-[100dvh] min-h-[511px] flex-col items-center justify-between gap-6 bg-gradient-to-b px-4 pb-6 pt-16">
        <CloseButton />
        <div className="flex min-h-[141.6px] grow flex-col items-center gap-2">
          <div className="relative max-h-[350px] min-h-[100px] w-full max-w-[350px] basis-[350px]">
            <Image
              src="/you-did-great.webp"
              alt="you did great!"
              fill
              objectFit="contain"
            />
          </div>
          <div className="text-center font-medium">
            <p>You learned so much about the world today!</p>
            <p>Wanna learn more?</p>
          </div>
          <div className="flex gap-4">
            {isClient && !!quizIds.length && (
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
        <div className="flex w-full flex-col items-stretch gap-2 md:flex-row">
          <Button variant="neutral" className="grow">
            SHARE
          </Button>
          <Button variant="neutral" asChild className="grow">
            <Link href="/results/details">SEE RESULTS</Link>
          </Button>
          <Button
            variant="primary"
            className="grow"
            onClick={() => playRandomGame(false)}
          >
            PLAY AGAIN
          </Button>
        </div>
      </main>
    </div>
  );
};
export default Results;
