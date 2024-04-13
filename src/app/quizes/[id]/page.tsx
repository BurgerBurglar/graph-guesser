import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
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
  const html = `<iframe aria-label="Map" id="datawrapper-chart-${id}" src="https://datawrapper.dwcdn.net/${id}/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="368" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();</script>`;

  const quiz = DATA.get(id);
  if (!quiz) notFound();
  const { correctChoice, wrongChoices, description, source } = quiz;
  const choices = shuffle([...wrongChoices, correctChoice]);

  return (
    <>
      <Header />
      <div
        className="container mb-4 flex min-h-0 flex-col justify-start gap-4 overflow-scroll px-4"
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
      <OptionsResults
        quizId={id}
        choices={choices}
        correctChoice={correctChoice}
        description={description}
        source={source}
      />
    </>
  );
};

export default Visualization;
