"use client";
import { CheckCircle, CircleX } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, type ChangeEvent } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "~/components/ui/alert-dialog";
import { Button } from "~/components/ui/button";
import type { Quiz } from "~/data";
import { cn } from "~/lib/utils";
import { useQuizStore } from "../../../lib/zustand";

interface SelectFormProps {
  quizId: string;
  choices: string[];
  correctChoice: Quiz["correctChoice"];
  description: Quiz["description"];
  source: Quiz["source"];
}

type QuizStatus = "pending" | "submitted";

const SelectForm: React.FC<SelectFormProps> = ({
  quizId,
  choices,
  correctChoice,
  description,
  source,
}) => {
  const router = useRouter();
  const quizIds = useQuizStore((state) => state.quizIds);
  const currentQuizIndex = quizIds.indexOf(quizId);
  const nextQuizIndex = [-1, quizIds.length - 1].includes(currentQuizIndex)
    ? undefined
    : currentQuizIndex + 1;
  const nextQuizId = nextQuizIndex ? quizIds[nextQuizIndex] : undefined;

  const [selectedChoice, setSelectedChoice] = useState<string>();
  const [status, setStatus] = useState<QuizStatus>("pending");
  const isUserCorrect = selectedChoice === correctChoice;
  const ResultIcon = isUserCorrect ? CheckCircle : CircleX;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedChoice(event.target.value);
  };
  const handleCheck = () => {
    setStatus("submitted");
  };
  const handleNext = () => {
    if (nextQuizId) {
      router.push(`/quizes/${nextQuizId}`);
    } else {
      router.push("/");
    }
  };

  return (
    <>
      <ul className="grid w-full gap-6 md:grid-cols-2">
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
                  "inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-5 text-gray-500   peer-checked:border-blue-600 peer-checked:text-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400  dark:peer-checked:text-blue-500",
                  {
                    "hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-300":
                      status === "pending",
                  },
                )}
              >
                <div>{choice}</div>
              </label>
            </li>
          );
        })}
      </ul>
      <AlertDialog open={status === "submitted"}>
        <AlertDialogContent
          className={
            isUserCorrect
              ? "bg-green-200 text-green-700"
              : "bg-red-200 text-red-700"
          }
        >
          <AlertDialogHeader>
            <AlertDialogTitle>
              <div className="flex items-center gap-2">
                <ResultIcon />
                {isUserCorrect ? "Correct" : "Incorrect"}
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
                  <div className="font-bold">Correct answer:</div>
                  <div>{correctChoice}</div>
                </div>
              )}
              <div>
                <div className="font-bold">Did you know?</div>
                <div>
                  <Link
                    href={source}
                    target="_blank"
                    className={cn(
                      "underline underline-offset-2",
                      isUserCorrect
                        ? "hover:text-green-600"
                        : "hover:text-red-600",
                    )}
                  >
                    {description}
                  </Link>
                </div>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              className={cn(
                "font-bold",
                isUserCorrect
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-red-600 hover:bg-red-700",
              )}
              onClick={handleNext}
            >
              {isUserCorrect ? "CONTINUE" : "GOT IT"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Button
        className="font-bold"
        disabled={!selectedChoice}
        onClick={handleCheck}
      >
        CHECK
      </Button>
    </>
  );
};
export default SelectForm;
