"use client"

import { useSearchParams } from "next/navigation"
import React, { useState, type ChangeEvent } from "react"
import QuizAnswer from "~/app/quizes/[id]/QuizAnswer"
import QuizOptions from "~/app/quizes/[id]/QuizOptions"
import ResponsiveSheet from "~/components/ResponsiveSheet"
import { Button } from "~/components/ui/button"
import { useAppStore } from "~/lib/zustand"
import type { Difficulty, Quiz, QuizStatus } from "~/types"
import { getQuizLink } from "~/utils"

interface OptionsResultsProps {
  quizId: string
  choices: string[]
  correctChoice: Quiz["correctChoice"]
  description: Quiz["description"]
  source: Quiz["source"]
}

const OptionsResults: React.FC<OptionsResultsProps> = ({
  quizId,
  choices,
  correctChoice,
  description,
  source,
}) => {
  const isDeckDone = useAppStore((store) => store.isDeckDone)
  const setResult = useAppStore((store) => store.setResult)
  const quizIds = useAppStore((store) => store.deck.quizIds)

  const [selectedChoice, setSelectedChoice] = useState<string>()
  const [status, setStatus] = useState<QuizStatus>("pending")
  const searchParams = useSearchParams()
  const difficulty = searchParams.get("difficulty") as Difficulty

  const isUserCorrect = selectedChoice === correctChoice

  const currentQuizIndex = quizIds.indexOf(quizId)
  const NOT_FOUND_INDEX = -1
  const LAST_INDEX = quizIds.length - 1

  // undefined means it's the last one
  const nextQuizIndex = [NOT_FOUND_INDEX, LAST_INDEX].includes(currentQuizIndex)
    ? undefined
    : currentQuizIndex + 1

  // undefined means it's the last one
  const nextQuizId =
    // if the deck is done, only one quiz will be played
    isDeckDone || nextQuizIndex === undefined
      ? undefined
      : quizIds[nextQuizIndex]

  // max height to have a drawer
  const drawerBreakpointHeight =
    difficulty === "easy"
      ? "550px"
      : difficulty === "medium"
        ? "630px"
        : "690px"

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedChoice(event.target.value)
  }

  const handleCheck = () => {
    if (status === "submitted") return
    setStatus("submitted")
    setResult({ quizId, isCorrect: isUserCorrect })
  }

  const getButtonText = () => {
    if (status === "submitted") return "VIEW ANSWER"
    if (!selectedChoice) return "SELECT"
    return "CHECK"
  }

  const getNextPageLink = () => {
    if (nextQuizId) {
      return getQuizLink(nextQuizId)
    } else {
      return "/results"
    }
  }

  return (
    <ResponsiveSheet
      maxHeight={drawerBreakpointHeight}
      overlayClassName="bg-black/20"
      trigger={<Button>OPTIONS</Button>}
    >
      <div className="mt-2 flex flex-col justify-end gap-4">
        <QuizOptions
          status={status}
          correctChoice={correctChoice}
          choices={choices}
          selectedChoice={selectedChoice}
          handleChange={handleChange}
        />
        <QuizAnswer
          trigger={
            <Button
              variant="primary"
              disabled={!selectedChoice}
              className="mx-auto w-full sm:mt-2 sm:max-w-60"
              onClick={handleCheck}
            >
              {getButtonText()}
            </Button>
          }
          isUserCorrect={isUserCorrect}
          correctChoice={correctChoice}
          source={source}
          description={description}
          nextPageLink={getNextPageLink()}
        />
      </div>
    </ResponsiveSheet>
  )
}

export default OptionsResults
