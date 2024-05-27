"use client";

import type { NextPage } from "next";
import { useIsClient } from "usehooks-ts";
import Graph from "~/app/quizes/[id]/Graph";
import { useDeck } from "~/context/DeckContext";

const Page: NextPage = () => {
  const {
    deck: { quizIds },
  } = useDeck();
  const isClient = useIsClient();

  return (
    <main className="container relative flex min-h-screen flex-col justify-start gap-2 bg-gradient-to-b from-green-100 to-green-50 px-4 py-6">
      {isClient &&
        quizIds.map((quizId) => <Graph key={quizId} quizId={quizId} />)}
    </main>
  );
};
export default Page;
