"use client"

import { X } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import React from "react"
import { Button } from "~/components/ui/button"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetClose,
  SheetDescription,
} from "~/components/ui/sheet"
import { Progress } from "~/components/ui/progress"
import { useAppStore } from "~/lib/zustand"

const Header: React.FC = () => {
  const {
    deck: { quizIds },
    isDeckDone,
  } = useAppStore()
  const params = useParams()

  let total = quizIds.length || 1
  const currentQuizId = params.id as string
  const currentQuizIndex = quizIds.indexOf(currentQuizId)
  let currentQuizIndexForHumans =
    currentQuizIndex === -1 ? 1 : currentQuizIndex + 1

  // if the deck is done, only one quiz will be played
  if (isDeckDone) {
    total = 1
    currentQuizIndexForHumans = 1
  }

  const percentage = (currentQuizIndexForHumans / (total + 1)) * 100

  return (
    <header className="sticky top-0 flex items-center gap-4 bg-white py-2">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="p-1">
            <X />
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col items-center gap-8 bg-sky-50 p-6">
          <SheetTitle className="text-center text-xl font-bold">
            Are you sure you want to leave?
          </SheetTitle>
          <SheetDescription className="sr-only">Leave game</SheetDescription>
          <div className="flex w-full flex-col gap-2 sm:max-w-lg sm:flex-row-reverse">
            <SheetClose asChild>
              <Button variant="secondary" className="w-full">
                STAY
              </Button>
            </SheetClose>
            <Button variant="outline" asChild>
              <Link href="/" className="w-full">
                LEAVE
              </Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
      <Progress value={percentage} className="flex-1" />
      <div className="w-[40px] text-center font-medium text-green-700">
        {currentQuizIndexForHumans}/{total}
      </div>
    </header>
  )
}
export default Header
