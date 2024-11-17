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
  getNumResultsInDeck,
} from "~/lib/zustand";

const Results: NextPage = () => {
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
        <div className="text-center text-lg font-medium">
          <p>You learned so much about the world today!</p>
          <p>Wanna learn more?</p>
        </div>
        <div className="flex justify-center gap-4">
          {isClient && !!getNumResultsInDeck() && (
            <ResultDisplay
              header="JUST NOW"
              colorPallete="sky"
              numCorrect={getNumCorrectResultsInDeck()}
              numTotal={getNumResultsInDeck()}
            />
          )}
          {isClient && !!getNumQuizesPlayed() && (
            <ResultDisplay
              header="OVERALL"
              colorPallete="green"
              numCorrect={getNumCorrectResults()}
              numTotal={getNumQuizesPlayed()}
            />
          )}
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-md flex-col items-stretch gap-2">
        <RWebShare
          data={{
            title: "Graph Guesser",
            text: "Guess what the plots mean!",
            url:
              process.env.SHARE_URL ?? "https://graph-guesser-8964.vercel.app/",
          }}
        >
          <Button variant="outline">SHARE</Button>
        </RWebShare>
        <Button variant="outline" asChild>
          <Link href="/results/details">SEE RESULTS</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/">CHANGE DIFFICULTY</Link>
        </Button>
        <Button
          variant="primary"
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
