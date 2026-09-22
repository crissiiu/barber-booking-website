import { activityFeed, dashboardMetrics, recentBookings } from "@admin/dashboard/data/dashboard-data";
import type { DashboardData } from "@admin/dashboard/models/dashboard-models";

export const dashboardService = {
  async fetchDashboardData(): Promise<DashboardData> {
    // Simulated service call returning dashboard data
    return new Promise((resolve) => {
      resolve({
        metrics: [...dashboardMetrics],
        recentBookings: [...recentBookings],
        activityFeed: [...activityFeed],
      });
    });
  },
};
