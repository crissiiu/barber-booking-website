import type { MarketingItem } from "@/shared/components/ui";

export type ServiceProcessStep = {
  description: string;
  title: string;
};

export type ServiceDetail = MarketingItem & {
  benefits: string[];
  category: "Dịch vụ tóc" | "Thư giãn và chăm sóc da";
  content: string;
  process: ServiceProcessStep[];
};
