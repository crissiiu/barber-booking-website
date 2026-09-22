import type { ReactNode } from "react";
import { AdminShell } from "@share/components/layout";

type AdminLayoutProps = {
  children: ReactNode;
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  return <AdminShell>{children}</AdminShell>;
}
