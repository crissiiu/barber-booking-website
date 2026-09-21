import type { ComponentProps } from "react";
import { cn } from "@/shared/utils";

export function Table({ className, ...props }: ComponentProps<"table">) {
  return (
    <div className="siu-soft-card overflow-x-auto rounded-lg">
      <table className={cn("w-full border-collapse text-sm", className)} {...props} />
    </div>
  );
}

export function TableHead({ className, ...props }: ComponentProps<"th">) {
  return (
    <th
      className={cn("bg-surface px-4 py-3 text-left font-bold text-primary", className)}
      {...props}
    />
  );
}

export function TableCell({ className, ...props }: ComponentProps<"td">) {
  return (
    <td
      className={cn("border-t border-[var(--border)] px-4 py-3 text-slate-700", className)}
      {...props}
    />
  );
}
