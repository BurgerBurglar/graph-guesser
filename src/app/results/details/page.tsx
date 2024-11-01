"use client";

import type { NextPage } from "next";
import Link from "next/link";
import { useIsClient } from "usehooks-ts";
import QuizOverview from "~/components/QuizOverview";
import { Button } from "~/components/ui/button";
import { useDeck } from "~/context/DeckContext";
import { useResults } from "~/hooks";

const ResultsDetails: NextPage = () => {
  const isClient = useIsClient();
  const {
    deck: { quizIds },
  } = useDeck();
  const { results } = useResults();

  return (
    <main className="container relative flex min-h-screen flex-col justify-start gap-4 px-4 py-6">
      {isClient &&
        quizIds.map((quizId) => {
          const isRight = results[quizId]?.isCorrect ?? false;
          return (
            <QuizOverview key={quizId} quizId={quizId} isRight={isRight} />
          );
        })}
      <div className="mx-auto flex w-full max-w-lg flex-col justify-center gap-2 sm:flex-row">
        <Button variant="neutral" asChild className="grow">
          <Link href="/results">BACK</Link>
        </Button>
        <Button asChild className="grow">
          <Link href="/">CONTINUE</Link>
        </Button>
      </div>
    </main>
  );
};
export default ResultsDetails;
