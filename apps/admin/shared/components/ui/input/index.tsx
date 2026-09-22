import { forwardRef, type ComponentProps } from "react";
import { cn } from "@share/utils/cn";

export const Input = forwardRef<HTMLInputElement, ComponentProps<"input">>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          "siu-soft-inset min-h-11 w-full border px-4 text-sm text-primary-dark outline-none transition placeholder:text-slate-400 disabled:cursor-not-allowed disabled:opacity-60",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export default Input;
