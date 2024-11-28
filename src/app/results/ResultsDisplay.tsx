import { cn } from "~/lib/utils"

interface ResultDisplayProps {
  header: string
  numCorrect: number
  numTotal: number
  colorPallete: "sky" | "green"
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({
  header,
  numCorrect,
  numTotal,
  colorPallete,
}) => {
  // do not display 0/0
  if (!numTotal) return null

  return (
    <div
      className={cn(
        "flex flex-col items-stretch rounded-xl border-2 border-t-0 text-center",
        {
          "border-sky-700": colorPallete === "sky",
        },
        {
          "border-green-700": colorPallete === "green",
        },
      )}
    >
      <div
        className={cn(
          "min-w-32 rounded-t-[10px] py-1 font-bold text-white",
          {
            "bg-sky-700": colorPallete === "sky",
          },
          {
            "bg-green-700": colorPallete === "green",
          },
        )}
      >
        {header}
      </div>
      <div
        className={cn(
          "px-10 py-2 text-lg font-medium",
          {
            "text-sky-700": colorPallete === "sky",
          },
          {
            "text-green-700": colorPallete === "green",
          },
        )}
      >
        {numCorrect}/{numTotal}
      </div>
    </div>
  )
}

export default ResultDisplay
