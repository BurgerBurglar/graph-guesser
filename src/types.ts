import type { DIFFICULTIES } from "~/utils"

export type Quiz = {
  correctChoice: string
  wrongChoices: string[]
  description: string
  source: string
}

export type QuizResultRecord = Record<
  string,
  {
    isCorrect?: boolean
  }
>

export type Difficulty = (typeof DIFFICULTIES)[number]

export type QuizPageSearchParams = {
  difficulty: Difficulty
}

export type QuizStatus = "pending" | "submitted"

export type Charity = {
  link: string
  imgSrc: string
  imgAlt: string
  description: string
}
