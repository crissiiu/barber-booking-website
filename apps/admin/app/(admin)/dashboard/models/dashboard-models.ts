import type { ComponentProps } from "react";
import type { StatusBadge } from "@share/components/ui";

export type BookingStatusTone = ComponentProps<typeof StatusBadge>["tone"];

export interface DashboardMetric {
  label: string;
  value: string;
  trend: string;
  tone: BookingStatusTone;
}

export interface RecentBooking {
  id: string;
  customer: string;
  phone: string;
  service: string;
  barber: string;
  time: string;
  status: string;
}

export interface DashboardData {
  metrics: DashboardMetric[];
  recentBookings: RecentBooking[];
  activityFeed: string[];
}
