"use client";

import { type ChangeEvent, useState } from "react";
import { Button } from "~/components/ui/button";
import { usePlay } from "~/hooks";
import type { Difficulty } from "~/types";
import { DIFFICULTIES } from "~/utils";

const LetsGuess = () => {
  const { playRandomGame } = usePlay();

  const [selectedDifficulty, setSelectedDifficulty] =
    useState<Difficulty>("easy");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedDifficulty(event.target.value as Difficulty);
  };

  return (
    <>
      <ul className="grid w-full gap-2 sm:grid-cols-3">
        {DIFFICULTIES.map((choice, index) => {
          const isSelected = selectedDifficulty === choice;
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
            selectedDifficulty,
          })
        }
      >
        {`LET'S GUESS`}
      </Button>
    </>
  );
};

export default LetsGuess;
