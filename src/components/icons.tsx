import { Check, X, type LucideProps } from "lucide-react"
import { cn } from "~/lib/utils"

export const Correct = ({ className, ...props }: LucideProps) => (
  <Check
    size={32}
    strokeWidth={3}
    className={cn("rounded-full bg-green-700 p-1.5 text-green-100", className)}
    {...props}
  />
)
export const Error = ({ className, ...props }: LucideProps) => (
  <X
    size={32}
    strokeWidth={3}
    className={cn("rounded-full bg-red-700 p-1.5 text-red-100", className)}
    {...props}
  />
)
