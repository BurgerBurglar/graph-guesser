"use client"

import { type ChangeEvent } from "react"
import ResponsiveSheet from "~/components/ResponsiveSheet"
import { Button } from "~/components/ui/button"
import { usePlay } from "~/hooks"
import { useAppStore } from "~/lib/zustand"
import type { Difficulty } from "~/types"
import { DIFFICULTIES } from "~/utils"

const LetsGuess = () => {
  const difficulty = useAppStore((store) => store.difficulty)
  const setDifficulty = useAppStore((store) => store.setDifficulty)

  const { playRandomGame } = usePlay()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDifficulty(event.target.value as Difficulty)
  }

  return (
    <ResponsiveSheet
      maxHeight="650px"
      trigger={<Button className="sm:max-w-xs w-full">PLAY</Button>}
    >
      <ul className="grid w-full gap-2 sm:grid-cols-3">
        {DIFFICULTIES.map((choice, index) => {
          const isSelected = difficulty === choice
          return (
            <li key={index}>
              <input
                type="radio"
                id={`answer-${index}`}
                name="difficulty"
                className="peer hidden"
                value={choice}
                checked={isSelected}
                onChange={handleChange}
              />
              <Button asChild variant="outline">
                <label
                  htmlFor={`answer-${index}`}
                  className="size-full text-center font-medium capitalize"
                >
                  {choice}
                </label>
              </Button>
            </li>
          )
        })}
      </ul>
      <Button
        className="sm:max-w-xs w-full"
        onClick={() =>
          playRandomGame({
            canPlayOld: false,
          })
        }
      >
        {`LET'S GUESS`}
      </Button>
    </ResponsiveSheet>
  )
}

export default LetsGuess
