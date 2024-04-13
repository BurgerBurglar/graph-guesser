"use client";
import { CheckCircle, CircleX } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, type ChangeEvent } from "react";
import { useDeck } from "~/context/DeckContext";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "~/components/ui/alert-dialog";
import { PrimaryButton } from "~/components/ui/button";
import type { Quiz } from "~/data";
import { cn } from "~/lib/utils";
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
        <AlertDialogHeader>
          <AlertDialogTitle>
            <div className="flex items-center gap-2 text-xl font-bold">
              <ResultIcon size={32} />
              {isUserCorrect ? "CORRECT" : "INCORRECT"}
            </div>
          </AlertDialogTitle>
          <AlertDialogDescription
            className={cn(
              "flex flex-col items-start gap-2 text-start",
              isUserCorrect ? "text-green-700" : "text-red-700",
            )}
          >
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
                className={cn(
                  "text-[1rem] underline underline-offset-2",
                  isUserCorrect ? "hover:text-green-600" : "hover:text-red-600",
                )}
              >
                {description}
              </Link>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction
            className={cn(
              "h-max rounded-2xl border-b-4 p-3 pb-4 font-bold active:mt-1 active:border-b-0",
              isUserCorrect
                ? "border-green-800 bg-green-700 hover:bg-green-500"
                : "border-red-800 bg-red-700 hover:bg-red-500",
            )}
            onClick={handleNext}
          >
            {isUserCorrect ? "CONTINUE" : "GOT IT"}
          </AlertDialogAction>
        </AlertDialogFooter>
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
    <>
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
              <label
                htmlFor={`answer-${index}`}
                className={cn(
                  "inline-flex w-full cursor-pointer items-center justify-center rounded-xl border-2 border-b-4 border-gray-200 bg-white p-3 pb-4 text-center font-medium text-gray-500 active:mt-[2.4px] active:border-b-2 peer-checked:border-sky-300 peer-checked:bg-sky-100 peer-checked:text-sky-600",
                  {
                    "hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-300":
                      status === "pending",
                  },
                )}
              >
                {choice}
              </label>
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
      <PrimaryButton disabled={!selectedChoice} onClick={handleCheck}>
        {selectedChoice ? "CHECK" : "SELECT"}
      </PrimaryButton>
    </>
  );
};

export default OptionsResults;
