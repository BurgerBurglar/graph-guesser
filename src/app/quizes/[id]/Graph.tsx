import React from "react";

interface GraphProps {
  quizId: string;
}

const Graph: React.FC<GraphProps> = ({ quizId }) => {
  const html = `<iframe class="plot" aria-label="Map" id="datawrapper-chart-${quizId}" src="https://datawrapper.dwcdn.net/${quizId}/1/" style="width: 0; min-width: 100% !important; overflow: scroll; flex-grow: 1" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();</script>`;

  return (
    <figure
      className="flex min-h-[300px] grow flex-col"
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  );
};
export default Graph;
