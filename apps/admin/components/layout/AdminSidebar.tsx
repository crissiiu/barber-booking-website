"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { adminNavigation, adminQuickActions } from "@/configs/navigation.config";
import { cn } from "@/shared/utils/cn";

type AdminSidebarProps = {
  onNavigate?: () => void;
};

export function AdminSidebar({ onNavigate }: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="siu-soft-card-dark flex h-full w-72 flex-col overflow-hidden text-white">
      <div className="border-b border-white/10 px-5 py-5">
        <Link className="block" href="/" onClick={onNavigate}>
          <Image alt="SiuBarber" className="h-10 w-auto" height={40} priority src="/brand/siubarber-logo-white.svg" width={148} />
          <span className="mt-3 block text-xs uppercase tracking-[0.24em] text-brand-accent">Admin</span>
        </Link>
      </div>

      <nav aria-label="Điều hướng admin" className="flex-1 space-y-6 overflow-y-auto px-3 py-4">
        <div className="space-y-1">
          {adminNavigation.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                className={cn(
                  "flex min-h-11 items-center gap-3 rounded-[var(--admin-radius)] px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white",
                  isActive && "bg-brand-accent text-primary-dark hover:bg-brand-accent hover:text-primary-dark",
                )}
                href={item.href}
                key={item.href}
                onClick={onNavigate}
              >
                <Icon aria-hidden="true" className="h-4 w-4 shrink-0" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="rounded-[var(--admin-radius)] border border-white/10 bg-white/5 p-3">
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-brand-accent">Tác vụ nhanh</p>
          {adminQuickActions.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                className="flex min-h-10 items-center gap-3 rounded-[var(--admin-radius)] px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
                href={item.href}
                key={item.href}
                onClick={onNavigate}
              >
                <Icon aria-hidden="true" className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}
