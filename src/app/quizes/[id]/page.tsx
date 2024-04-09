import type { NextPage } from "next";
import { DATA } from "../../../data";
import SelectForm from "./SelectForm";

type Params = {
  id: string;
};

export function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex]!,
      array[currentIndex]!,
    ];
  }

  return array;
}
const Visualization: NextPage<{ params: Params }> = ({ params: { id } }) => {
  const html = `<div style="min-height:368px"><script type="text/javascript" defer src="https://datawrapper.dwcdn.net/${id}/embed.js?v=1" charset="utf-8"></script><noscript><img src="https://datawrapper.dwcdn.net/${id}/full.png" alt="" /></noscript></div>`;
  const { correctChoice, wrongChoices, description } = DATA.get(id)!;
  const choices = shuffle([...wrongChoices, correctChoice]);

  return (
    <main className="container mx-auto flex flex-col gap-6 px-4 py-6">
      <div
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
      <SelectForm
        choices={choices}
        correctChoice={correctChoice}
        description={description}
      />
    </main>
  );
};

export default Visualization;
