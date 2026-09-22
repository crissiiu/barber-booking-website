import { create } from "zustand";
import type { DashboardData, DashboardMetric, RecentBooking } from "@admin/dashboard/models/dashboard-models";

interface DashboardState {
  metrics: DashboardMetric[];
  recentBookings: RecentBooking[];
  activityFeed: string[];
  isLoading: boolean;
  error: string | null;
  setDashboardData: (data: DashboardData) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  metrics: [],
  recentBookings: [],
  activityFeed: [],
  isLoading: false,
  error: null,
  setDashboardData: (data) =>
    set({
      metrics: data.metrics,
      recentBookings: data.recentBookings,
      activityFeed: data.activityFeed,
      error: null,
    }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
}));
