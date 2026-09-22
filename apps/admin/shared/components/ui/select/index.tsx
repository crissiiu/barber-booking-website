import type { ComponentProps } from "react";
import { cn } from "@share/utils/cn";

export function Select({ className, children, ...props }: ComponentProps<"select">) {
  return (
    <select
      className={cn(
        "siu-soft-inset min-h-11 rounded-[var(--soft-control-radius)] border px-4 text-sm text-primary-dark outline-none transition disabled:cursor-not-allowed disabled:opacity-60",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
}
