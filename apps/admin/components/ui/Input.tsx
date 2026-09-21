import type { ComponentProps } from "react";
import { cn } from "@/shared/utils/cn";

export function Input({ className, ...props }: ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "siu-soft-inset min-h-11 w-full border px-4 text-sm text-primary-dark outline-none transition placeholder:text-slate-400 disabled:cursor-not-allowed disabled:opacity-60",
        className,
      )}
      {...props}
    />
  );
}
