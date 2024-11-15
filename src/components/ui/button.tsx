import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";
import Link from "next/link";
import { X } from "lucide-react";

const buttonVariants = cva(
  "cursor-pointer inline-flex items-center justify-center ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-green-700 hover:bg-green-800 text-white shadow-bottom-primary active:shadow-none active:translate-y-1",
        secondary:
          "bg-blue-700 hover:bg-blue-800 text-white shadow-bottom-secondary active:shadow-none active:translate-y-1",
        destructive:
          "bg-red-700 hover:bg-red-800 text-white shadow-bottom-destructive active:shadow-none active:translate-y-1",
        neutral: "bg-gray-100 text-gray-900 hover:bg-gray-200",
        outline:
          "border-2 border-gray-200 bg-white hover:bg-gray-50 shadow-bottom-muted active:shadow-none peer-checked:border-sky-300 peer-checked:bg-sky-100 peer-checked:text-sky-700 peer-checked:shadow-bottom-sky active:peer-checked:shadow-none active:translate-y-0.5",
        ghost: "hover:bg-gray-100",
        link: "underline",
      },
      size: {
        default: "text-md rounded-xl font-bold px-4 py-3",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

const CloseButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <Button
        asChild
        ref={ref}
        variant="ghost"
        className={cn(
          buttonVariants({ variant: "ghost", size, className }),
          "absolute left-4 top-4 h-10 w-10 p-0",
        )}
        {...props}
      >
        <Link href="/">
          <X />
        </Link>
      </Button>
    );
  },
);
CloseButton.displayName = "CloseButton";

export { Button, buttonVariants, CloseButton };
