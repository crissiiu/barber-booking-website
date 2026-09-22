"use client";

import { DashboardHeader } from "@admin/dashboard/components/dashboard-header";
import { DashboardMain } from "@admin/dashboard/components/dashboard-main";
import { useDashboardData } from "@admin/dashboard/hooks/use-dashboard-data";

export function DashboardPage() {
  const { metrics, recentBookings, activityFeed, isLoading } = useDashboardData();

  return (
    <div className="space-y-6 p-4 lg:p-6">
      <DashboardHeader />
      <DashboardMain
        activityFeed={activityFeed}
        isLoading={isLoading}
        metrics={metrics}
        recentBookings={recentBookings}
      />
    </div>
  );
}

export default DashboardPage;