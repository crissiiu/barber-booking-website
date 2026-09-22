"use client";

import { HomePageContent } from "@/app/(public)/home/components/home-main";

export function HomePage() {
  return <HomePageContent />;
}

export default HomePage;

export { HomePageContent };
export * from "@/app/(public)/home/models/home-models";
export * from "@/app/(public)/home/services/home-service";
