import { AntdRegistry } from "@ant-design/nextjs-registry";
import type { Metadata } from "next";
import { Providers } from "./providers";
import "@/styles/antd.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "XSy Barber",
  description: "Haircut booking website for XSy Barber",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <AntdRegistry>
          <Providers>{children}</Providers>
        </AntdRegistry>
      </body>
    </html>
  );
}
