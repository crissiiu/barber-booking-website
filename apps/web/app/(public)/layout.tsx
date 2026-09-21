import type { ReactNode } from "react";
import { HomeFooter, SiteHeader } from "@/shared/components/layout";

type PublicLayoutProps = {
  children: ReactNode;
};

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="min-h-screen bg-[#f5efe7] text-primary-dark">
      <SiteHeader />
      {children}
      <HomeFooter />
    </div>
  );
}
