"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { usePlay } from "~/hooks";
import { DISPLAY_EXPORE_BUTTON } from "~/utils";

export default function HomePage() {
  const { playRandomGame } = usePlay();

  return (
    <main className="container flex min-h-[100dvh] flex-col items-center justify-end px-4 py-8">
      <div className="flex grow flex-col items-center justify-center gap-6">
        <Image src="/front-page.webp" alt="logo" width={250} height={250} />
        <h1 className="tracking-tightsm:text-[5rem] text-5xl font-extrabold">
          <div className="-translate-x-6 text-blue-700">GRAPH</div>
          <div className="translate-x-6 text-green-700">GUESSER</div>
        </h1>
        <div className="text-center text-xl font-medium text-black">
          <p>{`We have the plots.`}</p>
          <p>{`You can guess what they mean.`}</p>
        </div>
      </div>
      <div className="flex w-full max-w-md flex-col gap-2">
        <Button variant="primary" onClick={() => playRandomGame(false)}>
          {`LET'S GUESS`}
        </Button>
        {DISPLAY_EXPORE_BUTTON && (
          <Button asChild variant="neutral">
            <Link href="/explore">EXPLORE</Link>
          </Button>
        )}
      </div>
    </main>
  );
}
