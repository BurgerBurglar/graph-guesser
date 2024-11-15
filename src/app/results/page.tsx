"use client";

import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { RWebShare } from "react-web-share";
import { useIsClient } from "usehooks-ts";
import ResultDisplay from "~/app/results/ResultsDisplay";
import { Button, CloseButton } from "~/components/ui/button";
import { usePlay } from "~/hooks";
import {
  getNumCorrectResults,
  getNumCorrectResultsInDeck,
  getNumQuizesPlayed,
  useDeckStore,
} from "~/lib/zustand";

const Results: NextPage = () => {
  const {
    deck: { quizIds },
  } = useDeckStore();
  const { playRandomGame } = usePlay();
  const isClient = useIsClient();

  return (
    <main className="container relative flex h-[100dvh] min-h-[511px] flex-col items-stretch justify-between gap-6 px-4 pb-6 pt-16">
      <CloseButton />
      <div className="flex min-h-[141.6px] grow flex-col items-stretch gap-5">
        <div className="relative max-h-[350px] min-h-[100px] w-full basis-[350px]">
          <Image
            src="/you-did-great.webp"
            alt="you did great!"
            fill
            objectFit="contain"
          />
        </div>
        <div className="text-center text-4xl font-bold text-green-700">
          YOU DID GREAT
        </div>
        <div className="text-center font-medium">
          <p>You learned so much about the world today!</p>
          <p>Wanna learn more?</p>
        </div>
        <div className="flex justify-center gap-4">
          {isClient && !!quizIds.length && (
            <ResultDisplay
              header="JUST NOW"
              numCorrect={getNumCorrectResultsInDeck()}
              numTotal={quizIds.length}
            />
          )}
          {isClient && !!getNumQuizesPlayed() && (
            <ResultDisplay
              header="OVERALL"
              numCorrect={getNumCorrectResults()}
              numTotal={getNumQuizesPlayed()}
            />
          )}
        </div>
      </div>
      <div className="flex w-full flex-col items-stretch gap-2 md:flex-row">
        <RWebShare
          data={{
            title: "Graph Guesser",
            text: "Guess what the plots mean!",
            url:
              process.env.SHARE_URL ?? "https://graph-guesser-8964.vercel.app/",
          }}
        >
          <Button variant="neutral" className="grow">
            SHARE
          </Button>
        </RWebShare>
        <Button variant="neutral" asChild className="grow">
          <Link href="/results/details">SEE RESULTS</Link>
        </Button>
        <Button variant="neutral" asChild className="grow">
          <Link href="/">CHANGE DIFFICULTY</Link>
        </Button>
        <Button
          variant="primary"
          className="grow"
          onClick={() =>
            playRandomGame({
              canPlayOld: false,
            })
          }
        >
          PLAY AGAIN
        </Button>
      </div>
    </main>
  );
};
export default Results;
