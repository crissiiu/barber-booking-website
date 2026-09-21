import { AntdRegistry } from "@ant-design/nextjs-registry";
import type { Metadata } from "next";
import { Providers } from "./providers";
import "@/styles/antd.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "SiuBarber",
  description:
    "Đặt lịch cắt tóc và chăm sóc tóc hiện đại tại SiuBarber",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html className="h-full antialiased" lang="vi">
      <body className="flex min-h-full flex-col">
        <AntdRegistry>
          <Providers>{children}</Providers>
        </AntdRegistry>
      </body>
    </html>
  );
}
