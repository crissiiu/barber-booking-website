import type { ComponentProps } from "react";
import { cn } from "@share/utils/cn";

export function Table({ className, ...props }: ComponentProps<"table">) {
  return <table className={cn("siu-soft-table w-full border-separate border-spacing-0 text-left text-sm", className)} {...props} />;
}

export function TableHead({ className, ...props }: ComponentProps<"thead">) {
  return <thead className={cn("bg-primary-dark text-xs uppercase tracking-wide text-white", className)} {...props} />;
}

export function TableHeaderCell({ className, ...props }: ComponentProps<"th">) {
  return <th className={cn("px-4 py-3 font-semibold", className)} {...props} />;
}

export function TableBody({ className, ...props }: ComponentProps<"tbody">) {
  return <tbody className={cn("siu-soft-table-body bg-[var(--soft-surface)]", className)} {...props} />;
}

export function TableRow({ className, ...props }: ComponentProps<"tr">) {
  return <tr className={cn("transition-colors", className)} {...props} />;
}

export function TableCell({ className, ...props }: ComponentProps<"td">) {
  return <td className={cn("px-4 py-4 align-middle", className)} {...props} />;
}
