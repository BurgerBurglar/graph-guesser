"use client"; // necessary to get numbers

import dynamic from "next/dynamic";
import ResultsDisplayLoading from "~/app/results/ResultsDisplayLoading";
import {
  getNumCorrectResults,
  getNumCorrectResultsInDeck,
  getNumQuizesPlayed,
  getNumResultsInDeck,
} from "~/lib/zustand";
const ResultsDisplay = dynamic(() => import("./ResultsDisplay"), {
  ssr: false,
  loading: ResultsDisplayLoading,
});

const ResultDisplayList = () => {
  return (
    <div className="flex justify-center gap-4">
      <ResultsDisplay
        header="JUST NOW"
        colorPallete="sky"
        numCorrect={getNumCorrectResultsInDeck()}
        numTotal={getNumResultsInDeck()}
      />
      <ResultsDisplay
        header="OVERALL"
        colorPallete="green"
        numCorrect={getNumCorrectResults()}
        numTotal={getNumQuizesPlayed()}
      />
    </div>
  );
};

export default ResultDisplayList;
