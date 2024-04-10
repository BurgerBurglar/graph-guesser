import { create } from "zustand";

type State = {
  quizIds: string[];
  updateQuizIds: (newQuizIds: string[]) => void;
};

export const useQuizStore = create<State>((set) => ({
  quizIds: [],
  updateQuizIds: (newQuizIds) => {
    set({
      quizIds: newQuizIds,
    });
  },
}));
