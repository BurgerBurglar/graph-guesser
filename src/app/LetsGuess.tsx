"use client";

import { ChangeEvent, useState } from "react";
import { Button } from "~/components/ui/button";
import { usePlay } from "~/hooks";
import { Difficulty } from "~/types";

const LetsGuess = () => {
  const { playRandomGame } = usePlay();

  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedDifficulty(event.target.value as Difficulty);
  };

  return (
    <>
      <ul className="grid w-full gap-2 md:grid-cols-3">
        {["easy", "medium", "hard"].map((choice, index) => {
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
                  className="size-full text-center font-medium peer-checked:border-sky-300 peer-checked:bg-sky-100 peer-checked:text-sky-700"
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
        onClick={() =>
          playRandomGame({
            canPlayOld: false,
            difficulty: selectedDifficulty,
          })
        }
      >
        {`LET'S GUESS`}
      </Button>
    </>
  );
};

export default LetsGuess;
