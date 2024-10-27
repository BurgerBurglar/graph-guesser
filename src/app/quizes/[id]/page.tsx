import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import Graph from "~/app/quizes/[id]/Graph";
import OptionsResults from "~/app/quizes/[id]/OptionsResults";
import { DATA } from "~/data";
import { shuffle } from "~/utils";
const Header = dynamic(() => import("~/app/quizes/[id]/Header"), {
  ssr: false,
});

type Params = {
  id: string;
};

const Visualization: NextPage<{ params: Params }> = ({ params: { id } }) => {
  const quiz = DATA.get(id);
  if (!quiz) notFound();
  const { correctChoice, wrongChoices, description, source } = quiz;
  const choices = shuffle([...wrongChoices, correctChoice]);

  return (
    <div className="mx-auto flex h-[100svh] w-full max-w-screen-lg flex-col gap-4 px-4 pb-6">
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
