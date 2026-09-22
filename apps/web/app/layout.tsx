import { AntdRegistry } from "@ant-design/nextjs-registry";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Providers } from "@app/providers";
import "@styles/antd.css";
import "@app/globals.css";

export const metadata: Metadata = {
  title: "SiuBarber",
  description:
    "Đặt lịch cắt tóc và chăm sóc tóc hiện đại tại SiuBarber",
};

export default function RootLayout({ children }: { children: ReactNode }) {
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
