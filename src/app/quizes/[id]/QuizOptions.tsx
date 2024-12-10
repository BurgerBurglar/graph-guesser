import type { ChangeEvent } from "react"
import { Button } from "~/components/ui/button"
import { cn } from "~/lib/utils"
import type { QuizStatus } from "~/types"

interface OptionsProps {
  status: QuizStatus
  correctChoice: string
  choices: string[]
  selectedChoice?: string
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const QuizOptions: React.FC<OptionsProps> = ({
  status,
  correctChoice,
  choices,
  selectedChoice,
  handleChange,
}) => {
  const disabled = status === "submitted"

  const gridCols =
    choices.length === 4 || choices.length === 2
      ? "md:grid-cols-2"
      : "md:grid-cols-3"

  return (
    <ul className={cn("grid w-full gap-2", gridCols)}>
      {choices.map((choice, index) => {
        const isSelected = choice === selectedChoice
        const isCorrectChoice = choice === correctChoice
        return (
          <li key={index}>
            <input
              type="radio"
              id={`answer-${index}`}
              name="answer"
              className="peer hidden"
              value={choice}
              checked={isSelected}
              disabled={disabled}
              onChange={handleChange}
            />
            <Button
              asChild
              variant="outline"
              className={cn(
                "size-full text-center font-medium",
                {
                  "shadow-none hover:bg-white active:transform-none active:shadow-none peer-checked:shadow-none":
                    disabled,
                },
                {
                  "border-green-300 bg-green-100 hover:bg-green-100 peer-checked:border-green-300 peer-checked:bg-green-100 peer-checked:text-green-700":
                    disabled && isCorrectChoice,
                },
                {
                  "peer-checked:border-red-300 peer-checked:bg-red-100 peer-checked:text-red-700":
                    disabled && !isCorrectChoice,
                },
              )}
            >
              <label htmlFor={`answer-${index}`}>{choice}</label>
            </Button>
          </li>
        )
      })}
    </ul>
  )
}

export default QuizOptions
