"use client";

import { type NextPage } from "next";
import Link from "next/link";
import { DATA } from "~/data";
import { useDeckStore } from "~/lib/zustand";
import { getQuizLink } from "~/utils";

const Overview: NextPage = () => {
  const allQuizIds = [...DATA.keys()];
  const { results } = useDeckStore();
  const quizIdsNotFinished = allQuizIds.filter((id) => !results[id]);

  return (
    <div className="flex min-h-[100svh] flex-col gap-4 px-4 pb-6">
      <h1>Overview</h1>
      {quizIdsNotFinished.map((quizId) => (
        <div key={quizId}>
          <Link href={getQuizLink(quizId)}>{quizId}</Link>
        </div>
      ))}
    </div>
  );
};

export default Overview;
