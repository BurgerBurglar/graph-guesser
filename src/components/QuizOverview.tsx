import { CircleCheck, CircleX } from "lucide-react";
import Link from "next/link";
import React from "react";
import Graph from "~/app/quizes/[id]/Graph";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { getQuizLink } from "~/utils";

interface QuizOverviewProps {
  quizId: string;
  isRight?: boolean;
}

const QuizOverview: React.FC<QuizOverviewProps> = ({ quizId, isRight }) => {
  const ResultIcon = isRight ? CircleCheck : CircleX;
  const hasResult = isRight !== undefined;
  const prompt = isRight ? "You got it right!" : "That wasn't quite right";
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
            "flex justify-center gap-2 font-medium",
            isRight ? "text-green-700" : "text-red-700",
          )}
        >
          <ResultIcon />
          <span>{prompt}</span>
        </div>
      )}
      <Button variant="outline" className="border-b-2 active:mt-0" asChild>
        <Link href={getQuizLink(quizId)}>TRY AGAIN</Link>
      </Button>
    </div>
  );
};
export default QuizOverview;
