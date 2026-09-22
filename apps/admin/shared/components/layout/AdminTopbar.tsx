"use client";

import { Bell, LogOut, Menu, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@share/components/ui";
import type { AdminProfile } from "@share/models/admin-auth.model";
import { getAdminProfile } from "@share/services/admin-auth.service";

type AdminTopbarProps = {
  onMenuClick: () => void;
};

export function AdminTopbar({ onMenuClick }: AdminTopbarProps) {
  const router = useRouter();
  const [profile, setProfile] = useState<AdminProfile | null>(null);

  useEffect(() => {
    const cachedProfile = window.localStorage.getItem("admin_profile");
    if (cachedProfile) {
      setProfile(JSON.parse(cachedProfile) as AdminProfile);
    }

    getAdminProfile()
      .then((adminProfile) => {
        setProfile(adminProfile);
        window.localStorage.setItem("admin_profile", JSON.stringify(adminProfile));
      })
      .catch(() => {
        window.localStorage.removeItem("admin_access_token");
        window.localStorage.removeItem("admin_profile");
      });
  }, []);

  function handleLogout() {
    document.cookie = "admin_session=; path=/; max-age=0; SameSite=Lax";
    document.cookie = "admin_phone=; path=/; max-age=0; SameSite=Lax";
    document.cookie = "admin_roles=; path=/; max-age=0; SameSite=Lax";
    window.localStorage.removeItem("admin_access_token");
    window.localStorage.removeItem("admin_profile");
    router.replace("/login");
    router.refresh();
  }

  return (
    <header className="flex min-h-16 items-center gap-3 px-4 py-3 lg:px-6">
      <button
        aria-label="Mở menu"
        className="siu-soft-button siu-soft-button-light inline-flex h-10 w-10 items-center justify-center rounded-[var(--admin-radius)] bg-white text-primary-dark lg:hidden"
        onClick={onMenuClick}
        type="button"
      >
        <Menu aria-hidden="true" className="h-5 w-5" />
      </button>

      <div className="siu-soft-inset hidden min-w-0 flex-1 items-center gap-3 px-4 text-primary md:flex">
        <Search aria-hidden="true" className="h-4 w-4 shrink-0 text-primary" />
        <input
          aria-label="Tìm trong admin"
          className="min-h-11 min-w-0 flex-1 bg-transparent text-sm text-primary-dark outline-none placeholder:text-slate-400"
          placeholder="Tìm lịch hẹn, khách hàng, barber..."
          type="search"
        />
      </div>

      <div className="ml-auto flex items-center gap-2">
        <button
          aria-label="Thông báo"
          className="siu-soft-button siu-soft-button-light inline-flex h-10 w-10 items-center justify-center rounded-[var(--admin-radius)] bg-white text-primary"
          type="button"
        >
          <Bell aria-hidden="true" className="h-4 w-4" />
        </button>
        <div className="hidden text-right sm:block">
          <p className="text-sm font-semibold text-primary-dark">{profile?.fullName ?? "SiuBarber Owner"}</p>
          <p className="text-xs text-primary/70">{profile?.title ?? "Owner - toàn quyền"}</p>
        </div>
        <Button onClick={handleLogout} size="sm" type="button" variant="secondary">
          <LogOut aria-hidden="true" className="h-4 w-4" />
          <span className="hidden sm:inline">Đăng xuất</span>
        </Button>
      </div>
    </header>
  );
}
