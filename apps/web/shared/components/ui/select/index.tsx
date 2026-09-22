import type { ComponentProps } from "react";
import { cn } from "@share/utils";

export function Select({ className, children, ...props }: ComponentProps<"select">) {
  return (
    <select
      className={cn(
        "siu-soft-inset min-h-11 w-full rounded-lg border border-transparent px-4 text-sm text-primary-dark outline-none transition disabled:cursor-not-allowed disabled:opacity-60",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
}
