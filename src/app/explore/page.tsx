"use client";

import type { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { useIsClient } from "usehooks-ts";
import QuizOverview from "~/components/QuizOverview";
import { Button } from "~/components/ui/button";
import { usePlay, useResults } from "~/hooks";

const ButtonGroups: React.FC = () => {
  const { playRandomGame } = usePlay();
  return (
    <div className="flex flex-col gap-2">
      <Button asChild variant="neutral">
        <Link href="/">HOME</Link>
      </Button>
      <Button variant="primary" onClick={() => playRandomGame(false)}>
        {`LET'S GUESS`}
      </Button>
    </div>
  );
};

const Explore: NextPage = () => {
  const isClient = useIsClient();
  const { results } = useResults();
  const quizIds = Object.entries(results)
    .sort((a, _) => {
      if (a[1].isCorrect === undefined) return 1;
      else return -1;
    })
    .map(([quizId]) => quizId);

  return (
    <main className="container relative flex min-h-screen flex-col justify-start gap-4 px-4 py-6">
      <h2 className="text-center text-xl font-bold">Explore all graphs</h2>
      <ButtonGroups />
      {isClient &&
        quizIds.map((quizId) => {
          const isRight = results[quizId]?.isCorrect;
          return (
            <QuizOverview key={quizId} quizId={quizId} isRight={isRight} />
          );
        })}
      <ButtonGroups />
    </main>
  );
};
export default Explore;
