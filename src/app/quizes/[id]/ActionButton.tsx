"use client";

import { type LucideIcon } from "lucide-react";
import type { MouseEventHandler, ReactNode } from "react";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

const ActionButton = ({
  children,
  Icon,
  isUserCorrect,
  onClick,
}: {
  children: ReactNode;
  Icon: LucideIcon;
  isUserCorrect: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <Button
      asChild
      variant="none"
      size="none"
      className={cn(
        "flex gap-1.5 px-2 text-sm",
        isUserCorrect ? "hover:text-green-600" : "hover:text-red-600",
      )}
      onClick={onClick}
    >
      <div>
        <Icon size={20} />
        <span className="sr-only sm:not-sr-only">{children}</span>
      </div>
    </Button>
  );
};

export default ActionButton;
