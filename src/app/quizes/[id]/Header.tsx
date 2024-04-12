"use client";
import React from "react";
import { useDeck } from "~/Context";
import { useParams } from "next/navigation";
import { Progress } from "~/components/ui/progress";

const Header: React.FC = () => {
  const {
    deck: { quizIds },
  } = useDeck();
  const params = useParams();
  const total = quizIds.length;
  const currentQuizId = params.id as string;
  const currentQuizIndex = quizIds.indexOf(currentQuizId);
  const currentQuizIndexForHumans = currentQuizIndex + 1;
  const percentage = (currentQuizIndexForHumans / (total + 1)) * 100;

  return (
    <div className="container flex items-center gap-4 px-4 py-6">
      <Progress value={percentage} className="" />
      <div>
        {currentQuizIndexForHumans}/{total}
      </div>
    </div>
  );
};
export default Header;
