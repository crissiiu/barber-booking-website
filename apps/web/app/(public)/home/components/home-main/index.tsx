"use client";

import { useHomeData } from "@/app/(public)/home/hooks/use-home-data";
import { HeroCarousel } from "@/shared/components/ui";
import { AboutSection } from "../home-about-section";
import { BookingReviewPanel } from "../home-booking-preview-panel";
import {
  BarberNewsSection,
  BranchesSection,
  BrandTrustSection,
  CommitmentSection,
  ExperienceSpaceSection,
  FeaturedProductsSection,
  QuickInfoSection,
} from "../home-marketing-section";
import { ServiceSection } from "../home-service-section";

export function HomePageContent() {
  const { heroSlides, hairServices, careServices } = useHomeData();

  return (
    <>
      <HeroCarousel intervalMs={4800} loop slides={heroSlides} />

      <main id="main-content">
        <AboutSection />
        <BookingReviewPanel />

        <ServiceSection
          description="Cắt, uốn và nhuộm tóc với quy trình tư vấn theo khuôn mặt, chất tóc và phong cách cá nhân."
          items={hairServices}
          title="Dịch vụ tóc"
        />

        <ServiceSection
          description="Những trải nghiệm chăm sóc nhẹ nhàng giúp làm sạch, thư giãn và lấy lại năng lượng sau ngày dài."
          items={careServices}
          title="Thư giãn và chăm sóc da"
        />

        <CommitmentSection />
        <FeaturedProductsSection />
        <BarberNewsSection />
        <BranchesSection />
        <BrandTrustSection />
        <ExperienceSpaceSection />
        <QuickInfoSection />
      </main>
    </>
  );
}

export default HomePageContent;
