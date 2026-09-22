import type { ComponentProps } from "react";
import { cn } from "@share/utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger" | "dark";
type ButtonSize = "sm" | "md";

type ButtonProps = ComponentProps<"button"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const variants: Record<ButtonVariant, string> = {
  primary: "siu-button-primary siu-soft-button-primary bg-primary text-white",
  secondary: "siu-soft-button-secondary bg-brand-accent text-primary-dark",
  ghost: "siu-soft-button-light bg-white text-primary-dark",
  danger: "siu-soft-button-primary bg-red-600 text-white",
  dark: "siu-soft-button-dark bg-primary-dark text-white",
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-9 gap-2 px-3 text-sm",
  md: "min-h-11 gap-2 px-4 text-sm",
};

export function Button({ className, variant = "primary", size = "md", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-[var(--admin-radius)] font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-60",
        "siu-soft-button focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}
