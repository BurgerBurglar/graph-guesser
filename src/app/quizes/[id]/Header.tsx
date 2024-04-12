"use client";
import { X } from "lucide-react";
import { useParams } from "next/navigation";
import React from "react";
import { useDeck } from "~/Context";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog";
import { Progress } from "~/components/ui/progress";
import {
  Button,
  GhostButton,
  PrimaryButton,
} from "../../../components/ui/button";
import Link from "next/link";
import { AlertDialogCancel } from "@radix-ui/react-alert-dialog";

const Header: React.FC = () => {
  const {
    deck: { quizIds },
  } = useDeck();
  const params = useParams();

  const total = quizIds.length || 1;
  const currentQuizId = params.id as string;
  const currentQuizIndex = quizIds.indexOf(currentQuizId);
  const currentQuizIndexForHumans =
    currentQuizIndex === -1 ? 1 : currentQuizIndex + 1;
  const percentage = (currentQuizIndexForHumans / (total + 1)) * 100;

  return (
    <>
      <div className="container flex items-center gap-4 px-4 py-6">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              variant="ghost"
              className="p-2"
              onClick={() => {
                console.log("lol");
              }}
            >
              <X />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="flex flex-col gap-8 bg-green-100 text-green-700">
            <AlertDialogTitle className="text-center text-xl font-bold">
              Are you sure you want to leave?
            </AlertDialogTitle>
            <div className="flex flex-col gap-2">
              <PrimaryButton>
                <Link href="/">LEAVE</Link>
              </PrimaryButton>
              <AlertDialogCancel asChild>
                <GhostButton>STAY</GhostButton>
              </AlertDialogCancel>
            </div>
          </AlertDialogContent>
        </AlertDialog>
        <Progress value={percentage} className="flex-1" />
        <div className="w-[40px] text-center font-medium text-green-700">
          {currentQuizIndexForHumans}/{total}
        </div>
      </div>
    </>
  );
};
export default Header;
