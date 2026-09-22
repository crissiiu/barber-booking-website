import type { HeroSlide, MarketingItem } from "@/shared/components/ui";

export type { HeroSlide, MarketingItem };

export interface HomeData {
  heroSlides: HeroSlide[];
  hairServices: MarketingItem[];
  careServices: MarketingItem[];
  commitments: MarketingItem[];
  products: MarketingItem[];
  news: MarketingItem[];
  branches: MarketingItem[];
  brandTrust: MarketingItem[];
  spaceImages: MarketingItem[];
}
