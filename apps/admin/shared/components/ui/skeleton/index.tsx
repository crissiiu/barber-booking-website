import type { ComponentProps } from "react";
import { Card, CardContent, CardHeader } from "@share/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from "@share/components/ui/table";
import { cn } from "@share/utils/cn";
import { Loader2 } from "lucide-react";

export function Skeleton({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-slate-200/80 dark:bg-slate-700/50", className)}
      {...props}
    />
  );
}

export interface TableSkeletonProps {
  rows?: number;
  columns?: number;
  className?: string;
}

export function TableSkeleton({ rows = 5, columns = 5, className }: TableSkeletonProps) {
  return (
    <div className={cn("overflow-x-auto", className)}>
      <Table>
        <TableHead>
          <tr>
            {Array.from({ length: columns }).map((_, colIndex) => (
              <TableHeaderCell key={colIndex}>
                <Skeleton className="h-4 w-24" />
              </TableHeaderCell>
            ))}
          </tr>
        </TableHead>
        <TableBody>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <TableRow key={rowIndex}>
              {Array.from({ length: columns }).map((_, colIndex) => (
                <TableCell key={colIndex}>
                  <Skeleton className="h-4 w-full max-w-[120px]" />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export interface MetricsSkeletonProps {
  count?: number;
}

export function MetricsSkeleton({ count = 4 }: MetricsSkeletonProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {Array.from({ length: count }).map((_, index) => (
        <Card key={index}>
          <CardContent className="p-4">
            <Skeleton className="h-4 w-28" />
            <div className="mt-3 flex items-end justify-between gap-3">
              <Skeleton className="h-8 w-20" />
              <Skeleton className="h-6 w-14 rounded-full" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export function PageSkeleton() {
  return (
    <div className="space-y-6 p-4 lg:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-4 w-96 max-w-full" />
        </div>
        <div className="flex items-center gap-3">
          <Skeleton className="h-10 w-28 rounded-md" />
          <Skeleton className="h-10 w-28 rounded-md" />
        </div>
      </div>

      <MetricsSkeleton />

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <Skeleton className="h-6 w-36" />
            <Skeleton className="h-8 w-20 rounded-md" />
          </CardHeader>
          <TableSkeleton columns={6} rows={4} />
        </Card>

        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-36" />
          </CardHeader>
          <CardContent className="space-y-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div className="flex flex-col gap-2" key={i}>
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-3 w-1/2" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Spinner({ size = "md", className }: SpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-10 w-10",
  };

  return <Loader2 className={cn("animate-spin text-primary", sizeClasses[size], className)} />;
}

export function LoadingOverlay({ message = "Đang tải dữ liệu..." }: { message?: string }) {
  return (
    <div className="flex h-64 w-full flex-col items-center justify-center gap-3 rounded-lg border border-dashed bg-background/50 p-6">
      <Spinner size="lg" />
      <p className="text-sm font-medium text-slate-500">{message}</p>
    </div>
  );
}
