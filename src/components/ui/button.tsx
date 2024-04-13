import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";
import Link from "next/link";
import { X } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
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

const PrimaryButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : Button;
    return (
      <Comp
        ref={ref}
        className={cn(
          buttonVariants({ variant, size, className }),
          "h-max rounded-xl border-b-4 border-green-800 bg-green-700 p-3 px-6 pb-4 font-bold hover:bg-green-700 active:mt-1 active:border-b-0",
        )}
        {...props}
      />
    );
  },
);
PrimaryButton.displayName = "PrimaryButton";

const SecondaryButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : Button;
    return (
      <Comp
        ref={ref}
        className={cn(
          buttonVariants({ variant, size, className }),
          "h-max rounded-xl border-b-4 border-blue-800 bg-blue-700 p-3 px-6 pb-4 font-bold hover:bg-blue-700 active:mt-1 active:border-b-0",
        )}
        {...props}
      />
    );
  },
);
SecondaryButton.displayName = "SecondaryButton";

const NeutralButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : Button;
    return (
      <Comp
        ref={ref}
        className={cn(
          buttonVariants({ variant, size, className }),
          "h-max rounded-xl border-b-4 border-gray-300 bg-gray-200 p-3 px-6 pb-4 font-bold text-gray-900 hover:bg-gray-200 active:mt-1 active:border-b-0",
        )}
        {...props}
      />
    );
  },
);
NeutralButton.displayName = "NeutralButton";

const GhostButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : Button;
    return (
      <Comp
        ref={ref}
        variant="ghost"
        className={cn(
          buttonVariants({ variant: "ghost", size, className }),
          "h-max rounded-xl p-3 px-6 pb-4 font-bold",
        )}
        {...props}
      />
    );
  },
);
GhostButton.displayName = "GhostButton";

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

export {
  Button,
  buttonVariants,
  PrimaryButton,
  SecondaryButton,
  NeutralButton,
  GhostButton,
  CloseButton,
};
