"use client";

import { useQuery } from "@tanstack/react-query";
import { homeService } from "@/app/(public)/home/services/home-service";

export const HOME_QUERY_KEY = ["public", "home"] as const;

export function useHomeData() {
  const query = useQuery({
    queryKey: HOME_QUERY_KEY,
    queryFn: () => homeService.fetchHomeData(),
    staleTime: 60_000,
  });

  return {
    heroSlides: query.data?.heroSlides ?? [],
    hairServices: query.data?.hairServices ?? [],
    careServices: query.data?.careServices ?? [],
    commitments: query.data?.commitments ?? [],
    products: query.data?.products ?? [],
    news: query.data?.news ?? [],
    branches: query.data?.branches ?? [],
    brandTrust: query.data?.brandTrust ?? [],
    spaceImages: query.data?.spaceImages ?? [],
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    error: query.error ? (query.error as Error).message : null,
    refetch: query.refetch,
  };
}

export default useHomeData;
