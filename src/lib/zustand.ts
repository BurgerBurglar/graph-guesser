import { create, type StateCreator } from "zustand"
import { DATA } from "../data"
import { NUM_QUIZES_PER_PLAY, shuffle } from "../utils"
import type { Difficulty, QuizResultRecord } from "../types"
import { persist } from "zustand/middleware"

type DeckState = {
  quizIds: string[]
}

type AppStore = {
  deck: DeckState
  clearDeck: () => void
  initializeRandomDeck: (canPlayOld?: boolean) => void
  isDeckDone: boolean
  setIsDeckDone: (isDeckDone: boolean) => void
  results: QuizResultRecord
  quizeIdsPlayed: () => string[]
  resestResults: () => void
  setResult: ({
    quizId,
    isCorrect,
  }: {
    quizId: string
    isCorrect: boolean
  }) => void
  difficulty?: Difficulty
  setDifficulty: (difficulty: Difficulty) => void
}

const initialResults: QuizResultRecord = {}

export const useAppStore = create<AppStore>(
  persist(
    (set, get) => ({
      deck: { quizIds: [] },

      clearDeck: () => {
        set({
          deck: {
            quizIds: [],
          },
        })
      },

      initializeRandomDeck: (canPlayOld = false) =>
        set((state) => {
          const allQuizIds = [...DATA.keys()]
          const quizIdsToShuffle = canPlayOld
            ? [...allQuizIds]
            : allQuizIds.filter(
                (quizId) => !state.quizeIdsPlayed().includes(quizId),
              )
          const quizIds = shuffle(quizIdsToShuffle).slice(
            0,
            NUM_QUIZES_PER_PLAY,
          )

          return {
            ...state,
            deck: {
              quizIds,
            },
          }
        }),

      // if deck is done, we don't want do all the quizes again when we try again.
      isDeckDone: false,

      setIsDeckDone(isDeckDone) {
        set({ isDeckDone })
      },

      results: initialResults,

      resestResults: () => {
        set({
          results: initialResults,
        })
      },

      quizeIdsPlayed: () => {
        const { results } = get()
        return Object.entries(results)
          .filter(([_, { isCorrect }]) => isCorrect !== undefined)
          .map(([quizId]) => quizId)
      },

      setResult: ({ quizId, isCorrect }) => {
        set((state) => ({
          ...state,
          results: {
            ...state.results,
            [quizId]: { isCorrect },
          },
        }))
      },

      difficulty: undefined,

      setDifficulty: (difficulty) => {
        set((state) => ({
          ...state,
          difficulty,
        }))
      },
    }),
    {
      name: "graph-guesser",
    },
  ) as StateCreator<AppStore>,
)

export const getNumResultsInDeck = () => {
  return useAppStore.getState().deck.quizIds.length
}

export const getNumCorrectResultsInDeck = () => {
  const { results, deck } = useAppStore.getState()
  return Object.entries(results).filter(
    ([quizId, { isCorrect }]) => deck.quizIds.includes(quizId) && isCorrect,
  ).length
}

export const getNumCorrectResults = () => {
  const { results } = useAppStore.getState()
  return Object.entries(results).filter(([_, { isCorrect }]) => isCorrect)
    .length
}

export const getNumQuizesPlayed = () => {
  const { results } = useAppStore.getState()
  return Object.entries(results).filter(
    ([_, { isCorrect }]) => isCorrect !== undefined,
  ).length
}
