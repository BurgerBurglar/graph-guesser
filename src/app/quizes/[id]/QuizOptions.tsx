import type { ChangeEvent } from "react";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

interface OptionsProps {
  choices: string[];
  selectedChoice?: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const QuizOptions: React.FC<OptionsProps> = ({
  choices,
  selectedChoice,
  handleChange,
}) => {
  const gridCols =
    choices.length === 4 || choices.length === 2
      ? "md:grid-cols-2"
      : "md:grid-cols-3";
  return (
    <ul className={cn("grid w-full gap-2", gridCols)}>
      {choices.map((choice, index) => {
        const isSelected = selectedChoice === choice;
        return (
          <li key={index}>
            <input
              type="radio"
              id={`answer-${index}`}
              name="answer"
              className="peer hidden"
              value={choice}
              checked={isSelected}
              onChange={handleChange}
            />
            <Button asChild variant="outline">
              <label
                htmlFor={`answer-${index}`}
                className="size-full text-center font-medium"
              >
                {choice}
              </label>
            </Button>
          </li>
        );
      })}
    </ul>
  );
};

export default QuizOptions;
