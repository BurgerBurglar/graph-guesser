"use client";
import { AlertDialogCancel } from "@radix-ui/react-alert-dialog";
import { X } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog";
import { Button } from "~/components/ui/button";
import { Progress } from "~/components/ui/progress";
import { useDeck } from "~/context/DeckContext";

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
    <div className="sticky top-0 flex items-center gap-4 pt-2">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="ghost" className="p-0">
            <X />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="flex flex-col gap-8 bg-blue-100">
          <AlertDialogTitle className="text-center text-xl font-bold">
            Are you sure you want to leave?
          </AlertDialogTitle>
          <div className="flex flex-col gap-2">
            <Button variant="secondary" asChild>
              <Link href="/">LEAVE</Link>
            </Button>
            <AlertDialogCancel asChild>
              <Button variant="ghost">STAY</Button>
            </AlertDialogCancel>
          </div>
        </AlertDialogContent>
      </AlertDialog>
      <Progress value={percentage} className="flex-1" />
      <div className="w-[40px] text-center font-medium text-green-700">
        {currentQuizIndexForHumans}/{total}
      </div>
    </div>
  );
};
export default Header;
