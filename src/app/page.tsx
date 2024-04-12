"use client";

import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";
import { useDeck } from "~/Context";

export default function HomePage() {
  const router = useRouter();
  const { initializeRandomDeck } = useDeck();

  const play = () => {
    const newQuizIds = initializeRandomDeck();
    void router.push(`quizes/${newQuizIds[0]}`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          <span className="text-blue-600">Graph</span> Guesser
        </h1>
        <div className="text-center text-lg">{`We have the plots. You can guess what they mean.`}</div>
        <Button
          className="rounded-xl bg-white/10 p-6 text-2xl font-bold text-white hover:bg-white/20"
          onClick={play}
        >
          {`Let's Play`}
        </Button>
      </div>
    </main>
  );
}
