import type { ReactNode } from "react";
import { cn } from "@/shared/utils/cn";

type StatusTone = "success" | "warning" | "danger" | "neutral" | "info";

type StatusBadgeProps = {
  children: ReactNode;
  tone?: StatusTone;
};

const tones: Record<StatusTone, string> = {
  success: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  warning: "bg-amber-50 text-amber-700 ring-amber-200",
  danger: "bg-red-50 text-red-700 ring-red-200",
  neutral: "bg-white text-primary-dark ring-primary/15",
  info: "bg-primary-soft text-primary ring-primary/20",
};

export function StatusBadge({ children, tone = "neutral" }: StatusBadgeProps) {
  return (
    <span className={cn("inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1", tones[tone])}>
      {children}
    </span>
  );
}
