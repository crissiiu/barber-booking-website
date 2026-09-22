import {
  branches,
  brandTrust,
  careServices,
  commitments,
  hairServices,
  heroSlides,
  news,
  products,
  spaceImages,
} from "@/app/(public)/home/data/home-data";
import type { HomeData } from "@/app/(public)/home/models/home-models";

export const homeService = {
  async fetchHomeData(): Promise<HomeData> {
    return new Promise((resolve) => {
      resolve({
        heroSlides: [...heroSlides],
        hairServices: [...hairServices],
        careServices: [...careServices],
        commitments: [...commitments],
        products: [...products],
        news: [...news],
        branches: [...branches],
        brandTrust: [...brandTrust],
        spaceImages: [...spaceImages],
      });
    });
  },
};
