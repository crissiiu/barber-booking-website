import { cn } from "@/shared/utils";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "darkOutline"
  | "ghost"
  | "light";
type ButtonSize = "sm" | "md" | "lg" | "icon";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "siu-button-primary siu-soft-button-primary bg-primary text-white focus-visible:outline-primary",
  secondary:
    "siu-soft-button-secondary bg-brand-accent text-primary-dark focus-visible:outline-brand-accent",
  outline:
    "bg-[var(--soft-surface)] text-primary focus-visible:outline-primary",
  darkOutline:
    "siu-soft-button-dark bg-primary-dark text-white focus-visible:outline-white",
  ghost:
    "bg-[var(--soft-surface)] text-primary-dark focus-visible:outline-primary",
  light:
    "siu-soft-button-light bg-white text-primary focus-visible:outline-white",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-9 px-3 text-sm",
  md: "min-h-11 px-4 text-sm",
  lg: "min-h-12 px-6 text-base",
  icon: "h-11 w-11 p-0",
};

type ButtonBaseProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  isLoading?: boolean;
  size?: ButtonSize;
  tabIndex?: number;
  variant?: ButtonVariant;
};

type ButtonProps = ButtonBaseProps &
  Omit<ComponentProps<"button">, "className" | "children">;

export function Button({
  children,
  className,
  disabled,
  href,
  isLoading = false,
  size = "md",
  tabIndex,
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  const classes = cn(
    "siu-soft-button inline-flex items-center justify-center gap-2 rounded-lg font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if (href) {
    return (
      <Link className={classes} href={href} tabIndex={tabIndex}>
        {children}
      </Link>
    );
  }

  return (
    <button
      aria-busy={isLoading}
      className={classes}
      disabled={disabled || isLoading}
      tabIndex={tabIndex}
      type={type}
      {...props}
    >
      {isLoading ? "Đang xử lý..." : children}
    </button>
  );
}
