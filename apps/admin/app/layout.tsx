import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Providers } from "@app/providers";
import "@app/globals.css";

export const metadata: Metadata = {
  title: "SiuBarber Admin",
  description: "Trang quản trị riêng cho hệ thống SiuBarber",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className="h-full antialiased" lang="vi">
      <body className="min-h-full">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
