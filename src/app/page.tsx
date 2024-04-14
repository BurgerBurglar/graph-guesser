"use client";

import Image from "next/image";
import { PrimaryButton } from "~/components/ui/button";
import { usePlay } from "~/hooks";

export default function HomePage() {
  const { playRandomGame } = usePlay();

  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center bg-gradient-to-b from-green-100 to-green-50">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <Image src="/front-page.webp" alt="logo" width={250} height={250} />
        <h1 className="tracking-tightsm:text-[5rem] text-5xl font-extrabold">
          <div className="-translate-x-6 text-blue-600">GRAPH</div>
          <div className="translate-x-6 text-green-600">GUESSER</div>
        </h1>
        <div className="text-center text-lg font-medium text-green-800">
          <p>{`We have the plots.`}</p>
          <p>{`You can guess what they mean.`}</p>
        </div>
        <PrimaryButton
          className="p-6 text-2xl font-bold"
          onClick={() => playRandomGame(false)}
        >
          {`LET'S GUESS`}
        </PrimaryButton>
      </div>
    </main>
  );
}
