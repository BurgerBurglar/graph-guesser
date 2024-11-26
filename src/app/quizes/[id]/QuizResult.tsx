"use client";
import { Flag, Link as LinkIcon, Share } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import { RWebShare } from "react-web-share";
import ActionButton from "~/app/quizes/[id]/ActionButton";
import { Correct, Error } from "~/components/icons";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "~/components/ui/alert-dialog";
import { Button } from "~/components/ui/button";
import type { Quiz } from "~/data";
import type { QuizStatus } from "~/types";

interface ResultAlertProps {
  status: QuizStatus;
  isUserCorrect: boolean;
  correctChoice: Quiz["correctChoice"];
  description: Quiz["description"];
  source: Quiz["source"];
  nextPageLink: string;
}

const QuizResult: React.FC<ResultAlertProps> = ({
  status,
  isUserCorrect,
  correctChoice,
  source,
  description,
  nextPageLink,
}) => {
  const { id: quizId } = useParams();
  if (!quizId || Array.isArray(quizId)) return null;
  const ResultIcon = isUserCorrect ? Correct : Error;

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
            <AlertDialogTitle className="flex justify-between">
              <div className="flex items-center gap-2 text-xl font-bold">
                <ResultIcon />
                {isUserCorrect ? "CORRECT" : "INCORRECT"}
              </div>
              <div className="flex h-8 items-stretch">
                <RWebShare
                  data={{
                    title: "Graph Guesser",
                    text: "Guess what this plot means on Graph Guesser!",
                    url:
                      (process.env.SHARE_URL ??
                        "https://graph-guesser-8964.vercel.app/") +
                      `quizes/${quizId}?difficulty=easy`,
                  }}
                >
                  <ActionButton isUserCorrect={isUserCorrect} Icon={Share}>
                    SHARE
                  </ActionButton>
                </RWebShare>
                <ActionButton isUserCorrect={isUserCorrect} Icon={Flag}>
                  REPORT
                </ActionButton>
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

export default QuizResult;
