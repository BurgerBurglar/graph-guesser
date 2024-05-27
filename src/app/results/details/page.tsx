"use client";

import type { NextPage } from "next";
import { useIsClient } from "usehooks-ts";
import Graph from "~/app/quizes/[id]/Graph";
import { GhostButton } from "~/components/ui/button";
import { useDeck } from "~/context/DeckContext";
import { useResults } from "~/hooks";
import { CheckCircle, CircleX } from "lucide-react";
import Link from "next/link";

const Page: NextPage = () => {
  const isClient = useIsClient();
  const {
    deck: { quizIds },
  } = useDeck();
  const { results } = useResults();

  return (
    <main className="container relative flex min-h-screen flex-col justify-start gap-2 bg-gradient-to-b from-green-100 to-green-50 px-4 py-6">
      {isClient &&
        quizIds.map((quizId) => {
          const isRight = results[quizId]?.isCorrect ?? false;
          const ResultIcon = isRight ? CheckCircle : CircleX;
          return (
            <div
              key={quizId}
              className="flex flex-col rounded-xl border border-slate-300 bg-gray-50 p-4 pb-2"
            >
              <Graph quizId={quizId} />
              <GhostButton className="gap-2">
                <ResultIcon />
                <Link href={`/quizes/${quizId}`}>Try Again</Link>
              </GhostButton>
            </div>
          );
        })}
    </main>
  );
};
export default Page;
