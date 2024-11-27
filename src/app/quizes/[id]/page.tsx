import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { DATA } from "~/data";
import type { QuizPageSearchParams } from "~/types";
import { shuffle, validateSearchParams } from "~/utils";
const Graph = dynamic(() => import("~/app/quizes/[id]/Graph"), {
  ssr: false,
});
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
  params: Promise<Params>;
  searchParams: Promise<QuizPageSearchParams>;
}> = async (props) => {
  const searchParams = await props.searchParams;
  const params = await props.params;

  const { id } = params;

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
