"use client"

import { useRouter } from "next/navigation"
import { useAppStore } from "~/lib/zustand"
import { getQuizLink } from "./utils"

export const usePlay = () => {
  const router = useRouter()
  const { initializeRandomDeck, setIsDeckDone } = useAppStore()

  const playRandomGame = ({ canPlayOld = false }: { canPlayOld?: boolean }) => {
    setIsDeckDone(false)
    initializeRandomDeck(canPlayOld)
    const newDeck = useAppStore.getState().deck

    const firstQuizId = newDeck.quizIds[0]
    if (firstQuizId === undefined) {
      router.push("/all-done")
      return
    }
    void router.push(getQuizLink(firstQuizId))
  }
  return { playRandomGame }
}
