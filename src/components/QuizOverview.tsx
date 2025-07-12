import Link from "next/link"
import dynamic from "next/dynamic"
import React from "react"
import { Correct, Error } from "~/components/icons"
import { Button } from "~/components/ui/button"
import { cn } from "~/lib/utils"
import { getQuizLink } from "~/utils"

const Graph = dynamic(() => import("~/app/quizes/[id]/Graph"), {
  ssr: false,
})

interface QuizOverviewProps {
  quizId: string
  isRight?: boolean
}

const QuizOverview: React.FC<QuizOverviewProps> = ({ quizId, isRight }) => {
  const ResultIcon = isRight ? Correct : Error
  const hasResult = isRight !== undefined
  const prompt = isRight ? "You got it right!" : "That wasn't quite right"
  return (
    <div
      key={quizId}
      className={cn(
        "flex flex-col gap-2 rounded-xl border border-gray-300 bg-gray-50 p-4 pb-2",
      )}
    >
      <Graph quizId={quizId} />
      {hasResult && (
        <div
          className={cn(
            "flex items-center justify-center gap-2 font-medium",
            isRight ? "text-green-700" : "text-red-700",
          )}
        >
          <ResultIcon size={24} />
          <span>{prompt}</span>
        </div>
      )}
      <Button variant="outline" className="border-b-2 active:mt-0" asChild>
        <Link href={getQuizLink(quizId)}>TRY AGAIN</Link>
      </Button>
    </div>
  )
}

export default QuizOverview
