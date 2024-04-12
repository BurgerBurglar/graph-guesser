import type { NextPage } from "next";
import { DATA } from "~/data";
import { shuffle } from "~/utils";
import OptionsResults from "./OptionsResults";

type Params = {
  id: string;
};

const Visualization: NextPage<{ params: Params }> = ({ params: { id } }) => {
  const html = `<iframe aria-label="Map" id="datawrapper-chart-${id}" src="https://datawrapper.dwcdn.net/${id}/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="368" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
  </script>`;

  const { correctChoice, wrongChoices, description, source } = DATA.get(id)!;
  const choices = shuffle([...wrongChoices, correctChoice]);

  return (
    <main className="container mx-auto flex min-h-screen flex-col justify-between gap-6 px-4 py-6">
      <div
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
    </main>
  );
};

export default Visualization;
