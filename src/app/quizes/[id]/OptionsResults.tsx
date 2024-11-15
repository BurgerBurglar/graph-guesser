"use client";
import { CheckCircle, CircleX, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import React, { useState, type ChangeEvent } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "~/components/ui/alert-dialog";
import { Button } from "~/components/ui/button";
import type { Quiz } from "~/data";
import { cn } from "~/lib/utils";
import { useAppStore } from "~/lib/zustand";
import { getQuizLink } from "~/utils";

type QuizStatus = "pending" | "submitted";

interface ResultAlertProps {
  status: QuizStatus;
  isUserCorrect: boolean;
  correctChoice: Quiz["correctChoice"];
  description: Quiz["description"];
  source: Quiz["source"];
  nextPageLink: string;
}

const ResultAlert: React.FC<ResultAlertProps> = ({
  status,
  isUserCorrect,
  correctChoice,
  source,
  description,
  nextPageLink,
}) => {
  const ResultIcon = isUserCorrect ? CheckCircle : CircleX;
  return (
    <AlertDialog open={status === "submitted"}>
      <AlertDialogContent
        className={
          isUserCorrect
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }
      >
        <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center justify-between gap-4 sm:flex-row">
          <AlertDialogHeader>
            <AlertDialogTitle>
              <div className="flex items-center gap-2 text-xl font-bold">
                <ResultIcon size={32} />
                {isUserCorrect ? "CORRECT" : "INCORRECT"}
              </div>
            </AlertDialogTitle>
            <AlertDialogDescription className="flex flex-col items-start gap-2 text-start text-inherit">
              {!isUserCorrect && (
                <div>
                  <div className="text-lg font-medium">Correct answer:</div>
                  <div className="text-[1rem]">{correctChoice}</div>
                </div>
              )}
              <div>
                <div className="text-lg font-medium">Did you know?</div>
                <Link
                  href={source}
                  target="_blank"
                  className="text-[1rem] underline"
                >
                  <LinkIcon className="me-1 inline size-5" />
                  {description}
                </Link>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <Button
            asChild
            variant={isUserCorrect ? "primary" : "destructive"}
            className="w-full rounded-2xl sm:max-w-40 sm:grow-0"
          >
            <Link href={nextPageLink}>
              {isUserCorrect ? "CONTINUE" : "GOT IT"}
            </Link>
          </Button>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

interface OptionsProps {
  choices: string[];
  selectedChoice?: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Options: React.FC<OptionsProps> = ({
  choices,
  selectedChoice,
  handleChange,
}) => {
  const gridCols =
    choices.length === 4 || choices.length === 2
      ? "md:grid-cols-2"
      : "md:grid-cols-3";
  return (
    <ul className={cn("grid w-full gap-2", gridCols)}>
      {choices.map((choice, index) => {
        const isSelected = selectedChoice === choice;
        return (
          <li key={index}>
            <input
              type="radio"
              id={`answer-${index}`}
              name="hosting"
              className="peer hidden"
              value={choice}
              checked={isSelected}
              onChange={handleChange}
            />
            <Button asChild variant="outline">
              <label
                htmlFor={`answer-${index}`}
                className="size-full text-center font-medium"
              >
                {choice}
              </label>
            </Button>
          </li>
        );
      })}
    </ul>
  );
};

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
    setResult,
  } = useAppStore();
  const [selectedChoice, setSelectedChoice] = useState<string>();
  const [status, setStatus] = useState<QuizStatus>("pending");

  const isUserCorrect = selectedChoice === correctChoice;

  const currentQuizIndex = quizIds.indexOf(quizId);
  const NOT_FOUND_INDEX = -1;
  const LAST_INDEX = quizIds.length - 1;
  const nextQuizIndex = [NOT_FOUND_INDEX, LAST_INDEX].includes(currentQuizIndex)
    ? undefined
    : currentQuizIndex + 1;
  const nextQuizId =
    nextQuizIndex === undefined ? undefined : quizIds[nextQuizIndex];

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
    <div className="mt-4 flex flex-col justify-end gap-4">
      <Options
        choices={choices}
        selectedChoice={selectedChoice}
        handleChange={handleChange}
      />
      <ResultAlert
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
  );
};

export default OptionsResults;
