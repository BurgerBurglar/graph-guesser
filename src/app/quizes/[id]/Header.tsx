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
import { useAppStore } from "~/lib/zustand";

const Header: React.FC = () => {
  const {
    deck: { quizIds },
  } = useAppStore();
  const params = useParams();

  const total = quizIds.length || 1;
  const currentQuizId = params.id as string;
  const currentQuizIndex = quizIds.indexOf(currentQuizId);
  const currentQuizIndexForHumans =
    currentQuizIndex === -1 ? 1 : currentQuizIndex + 1;
  const percentage = (currentQuizIndexForHumans / (total + 1)) * 100;

  return (
    <div className="sticky top-0 flex items-center gap-4 bg-white py-2">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="ghost" className="p-1">
            <X />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="flex flex-col items-center gap-8 bg-sky-50">
          <AlertDialogTitle className="text-center text-xl font-bold">
            Are you sure you want to leave?
          </AlertDialogTitle>
          <div className="flex w-full flex-col gap-2 sm:max-w-lg sm:flex-row-reverse">
            <AlertDialogCancel asChild>
              <Button variant="secondary" className="w-full">
                STAY
              </Button>
            </AlertDialogCancel>
            <Button variant="outline" asChild>
              <Link href="/" className="w-full">
                LEAVE
              </Link>
            </Button>
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
