export const queryKeys = {
  dashboard: {
    all: ["dashboard"] as const,
    overview: () => [...queryKeys.dashboard.all, "overview"] as const,
  },
  auth: {
    all: ["auth"] as const,
    me: () => [...queryKeys.auth.all, "me"] as const,
  },
  bookings: {
    all: ["bookings"] as const,
    list: (filters?: Record<string, unknown>) => [...queryKeys.bookings.all, "list", filters] as const,
    detail: (id: string) => [...queryKeys.bookings.all, "detail", id] as const,
  },
  barbers: {
    all: ["barbers"] as const,
    list: (filters?: Record<string, unknown>) => [...queryKeys.barbers.all, "list", filters] as const,
  },
  services: {
    all: ["services"] as const,
    list: () => [...queryKeys.services.all, "list"] as const,
  },
  customers: {
    all: ["customers"] as const,
    list: (filters?: Record<string, unknown>) => [...queryKeys.customers.all, "list", filters] as const,
  },
} as const;
