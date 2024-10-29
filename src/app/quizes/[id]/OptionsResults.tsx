"use client";
import { CheckCircle, CircleX, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, type ChangeEvent } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "~/components/ui/alert-dialog";
import { Button } from "~/components/ui/button";
import { useDeck } from "~/context/DeckContext";
import type { Quiz } from "~/data";
import { useResults } from "~/hooks";

type QuizStatus = "pending" | "submitted";

interface ResultAlertProps {
  status: QuizStatus;
  isUserCorrect: boolean;
  correctChoice: Quiz["correctChoice"];
  description: Quiz["description"];
  source: Quiz["source"];
  handleNext: () => void;
}

const ResultAlert: React.FC<ResultAlertProps> = ({
  status,
  isUserCorrect,
  correctChoice,
  source,
  description,
  handleNext,
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
                  className="text-[1rem] underline underline-offset-2"
                >
                  <LinkIcon className="me-1 inline size-5" />
                  {description}
                </Link>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <Button
            variant={isUserCorrect ? "primary" : "destructive"}
            className="w-full rounded-2xl sm:max-w-40 sm:grow-0"
            onClick={handleNext}
          >
            {isUserCorrect ? "CONTINUE" : "GOT IT"}
          </Button>
        </div>
      </AlertDialogContent>
    </AlertDialog>
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
  const router = useRouter();
  const {
    deck: { quizIds },
  } = useDeck();
  const [selectedChoice, setSelectedChoice] = useState<string>();
  const [status, setStatus] = useState<QuizStatus>("pending");
  const { setResult } = useResults();

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
  const handleNext = () => {
    if (nextQuizId) {
      router.push(`/quizes/${nextQuizId}`);
    } else {
      router.push("/results");
    }
  };

  return (
    <div className="mt-4 flex flex-col justify-end gap-4">
      <ul className="grid w-full gap-2 md:grid-cols-2">
        {choices.map((choice, index) => {
          const isSelected = selectedChoice === choice;
          return (
            <li key={index}>
              <input
                type="radio"
                id={`answer-${index}`}
                name="hosting"
                className="peer hidden"
                disabled={status === "submitted"}
                value={choice}
                checked={isSelected}
                onChange={handleChange}
              />
              <Button asChild variant="outline">
                <label
                  htmlFor={`answer-${index}`}
                  className="size-full text-center font-medium peer-checked:border-sky-300 peer-checked:bg-sky-100 peer-checked:text-sky-700"
                >
                  {choice}
                </label>
              </Button>
            </li>
          );
        })}
      </ul>
      <ResultAlert
        status={status}
        isUserCorrect={isUserCorrect}
        correctChoice={correctChoice}
        source={source}
        description={description}
        handleNext={handleNext}
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
