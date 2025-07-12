"use client"

import { Flag, Link as LinkIcon, Share } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import React, { type ReactNode } from "react"
import { RWebShare } from "react-web-share"
import ActionButton from "~/app/quizes/[id]/ActionButton"
import { Correct, Error } from "~/components/icons"
import { Button } from "~/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet"
import { cn } from "~/lib/utils"
import { useAppStore } from "~/lib/zustand"
import type { Quiz } from "~/types"

const Actions = ({
  quizId,
  isUserCorrect,
  className,
}: {
  quizId: string
  isUserCorrect: boolean
  className?: string
}) => {
  const difficulty = useAppStore((store) => store.difficulty) ?? "easy"

  return (
    <div className={cn("flex h-8 items-stretch", className)}>
      <RWebShare
        data={{
          title: "Graph Guesser",
          text: "Guess what this plot means on Graph Guesser!",
          url:
            (process.env.SHARE_URL ?? "https://graph-guesser.shuo-tian.me/") +
            `quizes/${quizId}?difficulty=${difficulty}`,
        }}
      >
        <ActionButton isUserCorrect={isUserCorrect} Icon={Share}>
          SHARE
        </ActionButton>
      </RWebShare>
      <Dialog>
        <DialogTrigger asChild>
          <ActionButton isUserCorrect={isUserCorrect} Icon={Flag}>
            REPORT
          </ActionButton>
        </DialogTrigger>
        <DialogContent className="bg-sky-50">
          <DialogHeader>
            <DialogTitle>Report an issue?</DialogTitle>
            <DialogDescription className="text-left">
              If you find a bug, an inaccurate plot, a bad quiz, or an incorrect
              answer, please raise an issue on GitHub.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" className="sm:flex-1">
                CLOSE
              </Button>
            </DialogClose>
            <Button asChild variant="secondary" className="sm:flex-1">
              <Link
                href="https://github.com/BurgerBurglar/graph-guesser/issues"
                target="_blank"
              >
                REPORT
              </Link>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

interface ResultAlertProps {
  trigger: ReactNode
  isUserCorrect: boolean
  correctChoice: Quiz["correctChoice"]
  description: Quiz["description"]
  source: Quiz["source"]
  nextPageLink: string
}

const QuizAnswer: React.FC<ResultAlertProps> = ({
  trigger,
  isUserCorrect,
  correctChoice,
  source,
  description,
  nextPageLink,
}) => {
  const { id: quizId } = useParams()
  if (!quizId || Array.isArray(quizId)) return null
  const ResultIcon = isUserCorrect ? Correct : Error

  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent
        className={cn(
          isUserCorrect
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700",
        )}
        overlayClassName="bg-black/20"
      >
        <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center justify-between gap-4 rounded-none sm:flex-row">
          <div className="flex flex-col gap-2">
            <SheetTitle className="flex justify-between text-inherit">
              <div className="flex items-center gap-2 text-xl font-bold">
                <ResultIcon />
                {isUserCorrect ? "CORRECT" : "INCORRECT"}
              </div>
              <Actions
                quizId={quizId}
                isUserCorrect={isUserCorrect}
                className="sm:hidden"
              />
            </SheetTitle>
            <SheetDescription className="sr-only">
              {isUserCorrect ? "CORRECT" : "INCORRECT"}
            </SheetDescription>
            <div className="flex flex-col items-start gap-2 text-start text-inherit text-sm">
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
              <Actions
                quizId={quizId}
                isUserCorrect={isUserCorrect}
                className="hidden sm:flex sm:-translate-x-2"
              />
            </div>
          </div>
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
      </SheetContent>
    </Sheet>
  )
}

export default QuizAnswer
