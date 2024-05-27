"use client";

import { CheckCircle, CircleX } from "lucide-react";
import type { NextPage } from "next";
import Link from "next/link";
import { useIsClient } from "usehooks-ts";
import Graph from "~/app/quizes/[id]/Graph";
import { Button } from "~/components/ui/button";
import { useDeck } from "~/context/DeckContext";
import { useResults } from "~/hooks";
import { cn } from "~/lib/utils";

const Page: NextPage = () => {
  const isClient = useIsClient();
  const {
    deck: { quizIds },
  } = useDeck();
  const { results } = useResults();

  return (
    <main className="container relative flex min-h-screen flex-col justify-start gap-2 bg-gradient-to-b from-green-100 to-green-50 px-4 py-6">
      <h2 className="pb-4 text-center text-xl font-bold">
        Want to go back and do these again?
      </h2>
      {isClient &&
        quizIds.map((quizId) => {
          const isRight = results[quizId]?.isCorrect ?? false;
          const ResultIcon = isRight ? CheckCircle : CircleX;
          const prompt = isRight
            ? "You got it right!"
            : "That wasn't quite right";
          return (
            <div
              key={quizId}
              className="flex flex-col gap-2 rounded-xl border border-gray-300 bg-gray-50 p-4 pb-2"
            >
              <Graph quizId={quizId} />
              <div
                className={cn(
                  "flex justify-center gap-2 font-medium",
                  isRight ? "text-green-600" : "text-red-600",
                )}
              >
                <ResultIcon />
                <span>{prompt}</span>
              </div>
              <Button variant="outline" className="gap-2">
                <Link href={`/quizes/${quizId}`}>TRY AGAIN</Link>
              </Button>
            </div>
          );
        })}
    </main>
  );
};
export default Page;
