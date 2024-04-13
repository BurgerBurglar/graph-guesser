"use client";

import Image from "next/image";
import { PrimaryButton } from "~/components/ui/button";
import { usePlay } from "~/utils";

export default function HomePage() {
  const { playRandomGame } = usePlay();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-green-100 to-green-50">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <Image src="/front-page.webp" alt="logo" width={250} height={250} />
        <h1 className="text-5xl font-extrabold tracking-tight text-green-600 sm:text-[5rem]">
          <span className="text-blue-600">Graph</span> Guesser
        </h1>
        <div className="text-center text-lg">{`We have the plots. You can guess what they mean.`}</div>
        <PrimaryButton
          className="p-6 text-2xl font-bold"
          onClick={playRandomGame}
        >
          {`Let's Play`}
        </PrimaryButton>
      </div>
    </main>
  );
}
