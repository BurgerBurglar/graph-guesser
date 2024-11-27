import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import Graph from "~/app/quizes/[id]/Graph";
import { DATA } from "~/data";
import type { QuizPageSearchParams } from "~/types";
import { shuffle, validateSearchParams } from "~/utils";
const Header = dynamic(() => import("~/app/quizes/[id]/Header"), {
  ssr: false,
});
const OptionsResults = dynamic(
  () => import("~/app/quizes/[id]/OptionsResults"),
  {
    ssr: false,
  },
);

type Params = {
  id: string;
};

const Visualization: NextPage<{
  params: Params;
  searchParams: QuizPageSearchParams;
}> = ({ params: { id }, searchParams }) => {
  const isValidSearchParams = validateSearchParams(searchParams);
  if (!isValidSearchParams) notFound();

  const quiz = DATA.get(id);
  if (!quiz) notFound();
  const { correctChoice, wrongChoices, description, source } = quiz;

  const { difficulty } = searchParams;
  const getNumWrongChoices = () => {
    if (difficulty === "easy") return 1;
    if (difficulty === "medium") return 2;
    return 3;
  };

  // for some reason the wrong choices are shuffled in random order
  const wrongChoicesForDifficulty = wrongChoices
    .sort()
    .slice(0, getNumWrongChoices());
  const choices = shuffle([...wrongChoicesForDifficulty, correctChoice]);

  return (
    <div className="mx-auto flex h-[100svh] w-full max-w-screen-lg flex-col px-4 pb-6">
      <Header />
      <Graph quizId={id} />
      <OptionsResults
        quizId={id}
        choices={choices}
        correctChoice={correctChoice}
        description={description}
        source={source}
      />
    </div>
  );
};

export default Visualization;
