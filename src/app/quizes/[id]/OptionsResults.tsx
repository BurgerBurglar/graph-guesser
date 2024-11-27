"use client";

import { useSearchParams } from "next/navigation";
import React, { useState, type ChangeEvent } from "react";
import QuizOptions from "~/app/quizes/[id]/QuizOptions";
import QuizResult from "~/app/quizes/[id]/QuizResult";
import ResponsiveDrawer from "~/components/ResponsiveDrawer";
import { Button } from "~/components/ui/button";
import type { Quiz } from "~/data";
import { useAppStore } from "~/lib/zustand";
import type { Difficulty, QuizStatus } from "~/types";
import { getQuizLink } from "~/utils";

interface OptionsResultsProps {
  quizId: string;
  choices: string[];
  correctChoice: Quiz["correctChoice"];
  description: Quiz["description"];
  source: Quiz["source"];
}

const OptionsResults: React.FC<OptionsResultsProps> = ({
  quizId,
  choices,
  correctChoice,
  description,
  source,
}) => {
  const {
    deck: { quizIds },
    isDeckDone,
    setResult,
  } = useAppStore();
  const [selectedChoice, setSelectedChoice] = useState<string>();
  const [status, setStatus] = useState<QuizStatus>("pending");
  const searchParams = useSearchParams();
  const difficulty = searchParams.get("difficulty") as Difficulty;

  const isUserCorrect = selectedChoice === correctChoice;

  const currentQuizIndex = quizIds.indexOf(quizId);
  const NOT_FOUND_INDEX = -1;
  const LAST_INDEX = quizIds.length - 1;

  // undefined means it's the last one
  const nextQuizIndex = [NOT_FOUND_INDEX, LAST_INDEX].includes(currentQuizIndex)
    ? undefined
    : currentQuizIndex + 1;

  // undefined means it's the last one
  const nextQuizId =
    // if the deck is done, only one quiz will be played
    isDeckDone || nextQuizIndex === undefined
      ? undefined
      : quizIds[nextQuizIndex];

  // max height to have a drawer
  const drawerBreakpointHeight =
    difficulty === "easy"
      ? "550px"
      : difficulty === "medium"
        ? "630px"
        : "690px";

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedChoice(event.target.value);
  };

  const handleCheck = () => {
    setStatus("submitted");
    setResult({ quizId, isCorrect: isUserCorrect });
  };

  const getNextPageLink = () => {
    if (nextQuizId) {
      return getQuizLink(nextQuizId);
    } else {
      return "/results";
    }
  };

  return (
    <ResponsiveDrawer
      maxHeight={drawerBreakpointHeight}
      trigger={<Button>OPTIONS</Button>}
    >
      <div className="mt-2 flex flex-col justify-end gap-4">
        <QuizOptions
          choices={choices}
          selectedChoice={selectedChoice}
          handleChange={handleChange}
        />
        <QuizResult
          status={status}
          isUserCorrect={isUserCorrect}
          correctChoice={correctChoice}
          source={source}
          description={description}
          nextPageLink={getNextPageLink()}
        />
        <Button
          variant="primary"
          disabled={!selectedChoice}
          className="mx-auto w-full sm:mt-2 sm:max-w-60"
          onClick={handleCheck}
        >
          {selectedChoice ? "CHECK" : "SELECT"}
        </Button>
      </div>
    </ResponsiveDrawer>
  );
};

export default OptionsResults;
