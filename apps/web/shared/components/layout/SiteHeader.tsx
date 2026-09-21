"use client";

import { appConfig } from "@/configs/app.config";
import { Button } from "@/shared/components/ui";
import { cn } from "@/shared/utils";
import { CalendarDays, Menu, PhoneCall, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Trang chủ" },
  { href: "/about", label: "Về SiuBarber" },
  { href: "/shop", label: "SiuBarber Shop" },
  { href: "/locations", label: "Tìm SiuBarber gần nhất" },
  { href: "/barbers", label: "Thợ của SiuBarber" },
  { href: "/news", label: "Góc Barber" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-primary-dark text-white shadow-xl shadow-primary-dark/20">
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-primary"
        href="#main-content"
      >
        Bỏ qua phần điều hướng
      </a>

      <div className="mx-auto hidden max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-6 px-8 py-4 lg:grid">
        <div className="flex items-center gap-3 text-sm font-semibold text-blue-50">
          <span className="flex h-10 w-10 items-center justify-center text-brand-accent">
            <PhoneCall aria-hidden size={27} />
          </span>
          <span className="grid">
            <span className="text-[11px] uppercase tracking-[0.22em] text-white/55">
              Hotline
            </span>
            <span>{appConfig.contact.phone}</span>
          </span>
        </div>

        <Link aria-label="SiuBarber trang chủ" href="/">
          <Image
            alt="SiuBarber"
            className="h-auto w-44"
            height={64}
            priority
            src="/brand/siubarber-logo-white.svg"
            width={220}
          />
        </Link>

        <div className="flex justify-end">
          <Button href="/booking" variant="secondary">
            <CalendarDays aria-hidden size={18} />
            Đặt lịch ngay
          </Button>
        </div>
      </div>

      <div className="border-y border-white/10 bg-[#062f35]/80">
        <div className="mx-auto hidden max-w-7xl items-center justify-center gap-8 px-8 py-3 lg:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative whitespace-nowrap text-[13px] font-bold uppercase tracking-[0.04em] text-white/78 transition hover:text-brand-accent",
                  isActive && "text-brand-accent",
                )}
                href={link.href}
                key={link.href}
              >
                {link.label}
                {isActive ? (
                  <span className="absolute -bottom-3 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-brand-accent" />
                ) : null}
              </Link>
            );
          })}
          <Button
            className="ml-2 min-h-9 px-4"
            href="/login"
            variant="darkOutline"
          >
            Đăng nhập
          </Button>
        </div>

        <div className="mx-auto flex min-h-[68px] max-w-7xl items-center justify-between gap-4 px-4 lg:hidden">
          <Link aria-label="SiuBarber trang chủ" href="/">
            <Image
              alt="SiuBarber"
              className="h-auto w-36"
              height={64}
              priority
              src="/brand/siubarber-logo-white.svg"
              width={220}
            />
          </Link>

          <Button
            aria-expanded={isOpen}
            aria-label="Mở menu"
            onClick={() => setIsOpen(true)}
            size="icon"
            variant="darkOutline"
          >
            <Menu aria-hidden size={20} />
          </Button>
        </div>
      </div>

      {isOpen ? (
        <div className="fixed inset-0 z-50 bg-primary-dark/75 lg:hidden">
          <div className="ml-auto flex h-full w-[min(88vw,390px)] flex-col bg-primary-dark p-5 shadow-2xl">
            <div className="flex items-center justify-between">
              <Image
                alt="SiuBarber"
                className="h-auto w-36"
                height={64}
                src="/brand/siubarber-logo-white.svg"
                width={220}
              />
              <Button
                aria-label="Đóng menu"
                className="text-white"
                onClick={() => setIsOpen(false)}
                size="icon"
                variant="darkOutline"
              >
                <X aria-hidden size={20} />
              </Button>
            </div>

            <div className="siu-soft-card-dark mt-6 rounded-lg p-4 text-sm text-blue-50">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-accent">
                Hotline
              </p>
              <p className="mt-1 font-bold">{appConfig.contact.phone}</p>
              <p className="mt-2 text-blue-100">{appConfig.contact.hours}</p>
            </div>

            <nav
              aria-label="Điều hướng trên mobile"
              className="mt-6 grid gap-2 text-base font-bold text-white"
            >
              {navLinks.map((link) => (
                <Link
                  className="rounded-lg px-3 py-3"
                  href={link.href}
                  key={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-6 grid gap-3">
              <Button href="/booking" variant="secondary">
                Đặt lịch ngay
              </Button>
              <Button href="/login" variant="darkOutline">
                Đăng nhập
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
