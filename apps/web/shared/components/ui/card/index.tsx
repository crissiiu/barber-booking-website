import type { ComponentProps } from "react";
import { cn } from "@share/utils";

export function Card({ className, ...props }: ComponentProps<"article">) {
  return (
    <article
      className={cn(
        "siu-soft-card rounded-lg",
        className,
      )}
      {...props}
    />
  );
}
