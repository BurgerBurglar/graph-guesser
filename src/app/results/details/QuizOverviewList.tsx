"use client"

import { useEffect } from "react"
import QuizOverview from "~/components/QuizOverview"
import { useAppStore } from "~/lib/zustand"

const QuizOverviewList = () => {
  const {
    deck: { quizIds },
    results,
    setIsDeckDone,
  } = useAppStore()

  // set the deck as done when the component mounts
  // so that we don't do all the quizes again
  useEffect(() => {
    setIsDeckDone(true)
  }, [setIsDeckDone])

  return quizIds.map((quizId) => {
    const isRight = results[quizId]?.isCorrect
    return <QuizOverview key={quizId} quizId={quizId} isRight={isRight} />
  })
}

export default QuizOverviewList
