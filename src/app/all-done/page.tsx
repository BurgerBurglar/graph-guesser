"use client";

import type { NextPage } from "next";
import Image from "next/image";
import {
  CloseButton,
  NeutralButton,
  PrimaryButton,
} from "~/components/ui/button";
import { usePlay } from "~/hooks";
const AllDone: NextPage = () => {
  const { playRandomGame } = usePlay();

  return (
    <main className="container relative flex min-h-[100dvh] flex-col justify-end gap-48 bg-gradient-to-b px-4 py-6">
      <CloseButton />
      <div className="flex flex-col items-center gap-4">
        <Image src="/all-done.webp" alt="all-done" width={250} height={250} />
        <div className="text-4xl font-bold text-green-700">ALL DONE</div>
        <div className="text-center font-medium">
          <p>You finished all quizes.</p>
          <p>Want to play the old ones again?</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <NeutralButton>SHARE</NeutralButton>
        <PrimaryButton onClick={() => playRandomGame(true)}>
          CONTINUE
        </PrimaryButton>
      </div>
    </main>
  );
};

export default AllDone;
