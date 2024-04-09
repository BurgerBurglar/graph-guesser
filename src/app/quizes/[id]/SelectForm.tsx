"use client";
import React, { useState, type ChangeEvent } from "react";
import { Button } from "~/components/ui/button";
import { useToast } from "~/components/ui/use-toast";
import { cn } from "~/lib/utils";

interface SelectFormProps {
  choices: string[];
  correctChoice: string;
  prompt: string;
}

type QuizStatus = "pending" | "submitted";

type GetColorsProps = {
  status: QuizStatus;
  isSelected: boolean;
  isChoiceCorrect: boolean;
};
const getColors = ({ status, isSelected, isChoiceCorrect }: GetColorsProps) => {
  if (status === "pending")
    return isSelected
      ? "border-blue-600 text-blue-600"
      : "border-slate-600 text-slate-600";
  if (isChoiceCorrect) return "border-green-600 text-green-600";
  return isSelected
    ? "border-red-600 text-red-600"
    : "border-slate-600 text-slate-600";
};

const SelectForm: React.FC<SelectFormProps> = ({
  choices,
  correctChoice,
  prompt,
}) => {
  const [selectedChoice, setSelectedChoice] = useState<string>();
  const isUserCorrect = selectedChoice === correctChoice;
  const [status, setStatus] = useState<QuizStatus>("pending");
  const { toast } = useToast();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedChoice(event.target.value);
  };
  const handleSubmit = () => {
    toast({
      title: isUserCorrect ? "Correct" : "Wrong",
      description: prompt,
    });
    setStatus("submitted");
  };

  return (
    <>
      <ul className="grid w-full gap-6 md:grid-cols-2">
        {choices.map((choice, index) => {
          const isSelected = selectedChoice === choice;
          const isChoiceCorrect = choice === correctChoice;
          const borderColor = getColors({
            status,
            isSelected,
            isChoiceCorrect,
          });

          return (
            <li key={index}>
              <input
                type="radio"
                id={`answer-${index}`}
                name="hosting"
                className="peer hidden"
                disabled={status === "submitted"}
                value={choice}
                checked={isSelected}
                onChange={handleChange}
              />
              <label
                htmlFor={`answer-${index}`}
                className={cn(
                  "inline-flex w-full cursor-pointer items-center justify-between rounded-lg border bg-white p-5",
                  borderColor,
                  {
                    "hover:bg-slate-100": status === "pending",
                  },
                )}
              >
                <div className="block">
                  <div className="w-full">{choice}</div>
                </div>
              </label>
            </li>
          );
        })}
      </ul>
      <Button onClick={handleSubmit}>Submit</Button>
    </>
  );
};
export default SelectForm;
