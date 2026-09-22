import type { ComponentProps } from "react";
import { cn } from "@share/utils";

type InputProps = ComponentProps<"input"> & {
  hasError?: boolean;
};

export function Input({ className, hasError, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "siu-soft-inset min-h-11 w-full rounded-lg border px-4 text-sm text-primary-dark outline-none transition placeholder:text-slate-400 disabled:cursor-not-allowed disabled:opacity-60",
        hasError ? "border-red-500 focus:ring-red-100" : "border-[var(--border)]",
        className,
      )}
      aria-invalid={hasError || undefined}
      {...props}
    />
  );
}
