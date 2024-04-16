"use client";

import { type NextPage } from "next";
import { DATA } from "~/data";
import { useResults } from "~/hooks";

const Overview: NextPage = () => {
  const allQuizIds = [...DATA.keys()];
  const { results } = useResults();
  const quizIdsNotFinished = allQuizIds.filter((id) => !results[id]);
  console.log({ quizIdsNotFinished });

  return (
    <div className="flex min-h-[100svh] flex-col gap-4 px-4 pb-6">
      <h1>Overview</h1>
      {quizIdsNotFinished.map((quizId) => (
        <div key={quizId}>
          <a href={`/quizes/${quizId}`}>{quizId}</a>
        </div>
      ))}
    </div>
  );
};

export default Overview;
