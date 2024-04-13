import { useLocalStorage } from "@uidotdev/usehooks";
import type { Results } from "./types";
import { useDeck } from "./Context";
import { useRouter } from "next/navigation";

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

export const NUM_QUIZES_PER_PLAY = 3;

export const usePlay = () => {
  const router = useRouter();
  const { initializeRandomDeck } = useDeck();

  const playRandomGame = (canPlayOld = false) => {
    const newQuizIds = initializeRandomDeck(canPlayOld);
    if (newQuizIds.length === 0) {
      router.push("/all-done");
      return;
    }
    void router.push(`quizes/${newQuizIds[0]}`);
  };
  return { playRandomGame };
};

export const useResults = () => {
  const [results, saveResults] = useLocalStorage<Results>("results", {});
  const { deck } = useDeck();

  const numCorrectResultsInDeck = Object.entries(results).filter(
    ([quizId, { isCorrect }]) => deck.quizIds.includes(quizId) && isCorrect,
  ).length;
  const numCorrectResults = Object.entries(results).filter(
    ([_, { isCorrect }]) => isCorrect,
  ).length;
  const numResults = Object.entries(results).length;

  const setResult = ({
    quizId,
    isCorrect,
  }: {
    quizId: string;
    isCorrect: boolean;
  }) => {
    saveResults((prev) => ({
      ...prev,
      [quizId]: { ...prev[quizId], isCorrect },
    }));
  };
  return {
    results,
    setResult,
    numCorrectResultsInDeck,
    numCorrectResults,
    numResults,
  };
};
