import { careServices, hairServices } from "@/modules/services/data/services.data";
import { HeroCarousel } from "@/shared/components/ui";
import { heroSlides } from "../data/homepage.data";
import { AboutSection } from "./about-section";
import { BookingReviewPanel } from "./booking-review-panel";
import {
  BarberNewsSection,
  BranchesSection,
  BrandTrustSection,
  CommitmentSection,
  ExperienceSpaceSection,
  FeaturedProductsSection,
  QuickInfoSection,
} from "./marketing-sections";
import { ServiceSection } from "./service-section";

// Header và footer nằm ở public layout để được sử dụng thống nhất trên mọi trang public.
export function HomePageContent() {
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
