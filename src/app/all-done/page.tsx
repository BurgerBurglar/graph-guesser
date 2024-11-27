"use client";

import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, CloseButton } from "~/components/ui/button";
import { usePlay } from "~/hooks";
import { useAppStore } from "~/lib/zustand";

const AllDone: NextPage = () => {
  const router = useRouter();
  const { playRandomGame } = usePlay();
  const { resestResults } = useAppStore();
  return (
    <main className="container relative flex h-[100dvh] min-h-[511px] flex-col items-stretch justify-between gap-6 px-4 pb-6 pt-16">
      <CloseButton />
      <div className="flex min-h-[141.6px] grow flex-col items-center gap-5">
        <div className="relative max-h-[250px] min-h-[100px] w-full basis-[350px]">
          <Image
            src="/all-done.webp"
            alt="all-done"
            fill
            className="w-auto object-contain"
            priority
          />
        </div>
        <div className="text-4xl font-bold text-green-700">ALL DONE</div>
        <div className="text-center text-lg font-medium">
          <p>You finished all quizes.</p>
          <p>Want to play the old ones again?</p>
        </div>
      </div>
      <div className="flex w-full flex-col items-stretch gap-2 text-center md:flex-row">
        <Button variant="outline" className="flex-1" asChild>
          <Link href="/">CHANGE DIFFICULTY</Link>
        </Button>
        <Button
          variant="outline"
          className="flex-1"
          onClick={() => {
            resestResults();
            void router.push("/");
          }}
        >
          CLEAR RECORD
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
