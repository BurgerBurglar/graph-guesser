"use client"

import { X } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import React from "react"
import { Button } from "~/components/ui/button"
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerTitle,
  DrawerClose,
  DrawerDescription,
} from "~/components/ui/drawer"
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
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="ghost" className="p-1">
            <X />
          </Button>
        </DrawerTrigger>
        <DrawerContent
          hasHandle={false}
          className="flex flex-col items-center gap-8 rounded-none bg-sky-50 p-6"
        >
          <DrawerTitle className="text-center text-xl font-bold">
            Are you sure you want to leave?
          </DrawerTitle>
          <DrawerDescription className="sr-only">Leave game</DrawerDescription>
          <div className="flex w-full flex-col gap-2 sm:max-w-lg sm:flex-row-reverse">
            <DrawerClose asChild>
              <Button variant="secondary" className="w-full">
                STAY
              </Button>
            </DrawerClose>
            <Button variant="outline" asChild>
              <Link href="/" className="w-full">
                LEAVE
              </Link>
            </Button>
          </div>
        </DrawerContent>
      </Drawer>
      <Progress value={percentage} className="flex-1" />
      <div className="w-[40px] text-center font-medium text-green-700">
        {currentQuizIndexForHumans}/{total}
      </div>
    </header>
  )
}
export default Header
