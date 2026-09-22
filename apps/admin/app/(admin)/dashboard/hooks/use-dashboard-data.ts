"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { dashboardService } from "@admin/dashboard/services/dashboard-service";
import { useDashboardStore } from "@admin/dashboard/stores/dashboard-store";
import { ERROR_MESSAGES } from "@share/constants";
import { queryKeys } from "@share/lib/query-keys";

export interface UseDashboardDataOptions {
  staleTime?: number;
  enabled?: boolean;
}

export function useDashboardData(options?: UseDashboardDataOptions) {
  const setDashboardData = useDashboardStore((state) => state.setDashboardData);

  const query = useQuery({
    queryKey: queryKeys.dashboard.overview(),
    queryFn: () => dashboardService.fetchDashboardData(),
    staleTime: options?.staleTime, // Inherits global default (60s) unless explicitly overridden
    enabled: options?.enabled,
  });

  useEffect(() => {
    if (query.data) {
      setDashboardData(query.data);
    }
  }, [query.data, setDashboardData]);

  return {
    metrics: query.data?.metrics ?? [],
    recentBookings: query.data?.recentBookings ?? [],
    activityFeed: query.data?.activityFeed ?? [],
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    error: query.isError ? (query.error ? (query.error as Error).message : ERROR_MESSAGES.FETCH_FAILED) : null,
    refetch: query.refetch,
  };
}

export default useDashboardData;
