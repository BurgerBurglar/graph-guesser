"use client";

import type { NextPage } from "next";
import Link from "next/link";
import { useEffect } from "react";
import { useIsClient } from "usehooks-ts";
import QuizOverview from "~/components/QuizOverview";
import { Button } from "~/components/ui/button";
import { useAppStore } from "~/lib/zustand";

const ResultsDetails: NextPage = () => {
  const isClient = useIsClient();
  const {
    deck: { quizIds },
    results,
    setIsDeckDone,
  } = useAppStore();

  // set the deck as done when the component mounts
  // so that we don't do all the quizes again
  useEffect(() => {
    setIsDeckDone(true);
  }, [setIsDeckDone]);

  return (
    <main className="container relative flex min-h-screen flex-col justify-start gap-4 px-4 py-6">
      {isClient &&
        quizIds.map((quizId) => {
          const isRight = results[quizId]?.isCorrect;
          return (
            <QuizOverview key={quizId} quizId={quizId} isRight={isRight} />
          );
        })}
      <div className="mx-auto flex w-full max-w-lg flex-col justify-center gap-2 sm:flex-row">
        <Button variant="outline" asChild className="grow">
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
