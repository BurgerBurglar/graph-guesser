"use client";

import type { NextPage } from "next";
import Image from "next/image";
import { Button, CloseButton } from "~/components/ui/button";
import { usePlay } from "~/hooks";
import { RWebShare } from "react-web-share";

const AllDone: NextPage = () => {
  const { playRandomGame } = usePlay();
  return (
    <main className="container relative flex h-[100dvh] min-h-[511px] flex-col items-stretch justify-between gap-6 px-4 pb-6 pt-16">
      <CloseButton />
      <div className="flex min-h-[141.6px] grow flex-col items-center gap-5">
        <div className="relative max-h-[350px] min-h-[100px] w-full basis-[350px]">
          <Image src="/all-done.webp" alt="all-done" fill objectFit="contain" />
        </div>
        <div className="text-4xl font-bold text-green-700">ALL DONE</div>
        <div className="text-center font-medium">
          <p>You finished all quizes.</p>
          <p>Want to play the old ones again?</p>
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
        <Button
          variant="primary"
          className="grow"
          onClick={() => playRandomGame(true)}
        >
          CONTINUE
        </Button>
      </div>
    </main>
  );
};

export default AllDone;
