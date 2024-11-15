"use client";

import { type ChangeEvent } from "react";
import { Button } from "~/components/ui/button";
import { usePlay } from "~/hooks";
import { useDeckStore } from "~/lib/zustand";
import type { Difficulty } from "~/types";
import { DIFFICULTIES } from "~/utils";

const LetsGuess = () => {
  const { difficulty, setDifficulty } = useDeckStore();
  const { playRandomGame } = usePlay();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDifficulty(event.target.value as Difficulty);
  };

  return (
    <>
      <ul className="grid w-full gap-2 sm:grid-cols-3">
        {DIFFICULTIES.map((choice, index) => {
          const isSelected = difficulty === choice;
          return (
            <li key={index}>
              <input
                type="radio"
                id={`answer-${index}`}
                name="hosting"
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
          );
        })}
      </ul>
      <Button
        variant="primary"
        className=""
        onClick={() =>
          playRandomGame({
            canPlayOld: false,
          })
        }
      >
        {`LET'S GUESS`}
      </Button>
    </>
  );
};

export default LetsGuess;
