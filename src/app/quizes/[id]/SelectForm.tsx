"use client";
import React, { useState, type ChangeEvent } from "react";

interface SelectFormProps {
  choices: string[];
  correctChoice: string;
}

const SelectForm: React.FC<SelectFormProps> = ({ choices, correctChoice }) => {
  const [selectedChoice, setSelectedChoice] = useState<string>();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedChoice(event.target.value);
  };
  const handleSubmit = () => {
    console.log({ selectedChoice, correctChoice });
    console.log(selectedChoice === correctChoice);
  };

  return (
    <>
      <ul className="grid w-full gap-6 md:grid-cols-2">
        {choices.map((choice, index) => (
          <li key={index}>
            <input
              type="radio"
              id={`answer-${index}`}
              name="hosting"
              className="peer hidden"
              value={choice}
              checked={selectedChoice === choice}
              onChange={handleChange}
            />
            <label
              htmlFor={`answer-${index}`}
              className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-blue-500"
            >
              <div className="block">
                <div className="w-full">{choice}</div>
              </div>
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};
export default SelectForm;
