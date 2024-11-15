"use client";

import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { RWebShare } from "react-web-share";
import { Button, CloseButton } from "~/components/ui/button";
import { usePlay } from "~/hooks";

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
      <div className="flex w-full flex-col items-stretch gap-2 sm:flex-row">
        <RWebShare
          data={{
            title: "Graph Guesser",
            text: "Guess what the plots mean!",
            url:
              process.env.SHARE_URL ?? "https://graph-guesser-8964.vercel.app/",
          }}
        >
          <Button variant="outline" className="flex-1">
            SHARE
          </Button>
        </RWebShare>
        <Button variant="outline" className="flex-1" asChild>
          <Link href="/">CHANGE DIFFICULTY</Link>
        </Button>
        <Button
          variant="primary"
          className="flex-1"
          onClick={() =>
            playRandomGame({
              canPlayOld: true,
            })
          }
        >
          CONTINUE
        </Button>
      </div>
    </main>
  );
};

export default AllDone;
