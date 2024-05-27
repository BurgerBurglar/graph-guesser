import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";
import Link from "next/link";
import { X } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-b-4 active:border-b-0 active:mt-1",
  {
    variants: {
      variant: {
        primary: "border-green-800 bg-green-700 hover:bg-green-700 text-white",
        secondary: "border-blue-800 bg-blue-700 hover:bg-blue-700 text-white",
        destructive: "border-red-800 bg-red-700 hover:bg-red-700 text-white",
        neutral: "border-gray-300 bg-gray-200 text-gray-900 hover:bg-gray-200",
        outline:
          "border-2 border-b-4 border-gray-200 bg-white active:mt-[2.4px] active:border-b-2 active:border-b-2",
        ghost: "border-none",
        link: "border-none hover:underline",
      },
      size: {
        default: "text-md rounded-xl font-bold px-6 py-3",
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
