"use client";

import { X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { AdminSidebar } from "./AdminSidebar";
import { AdminTopbar } from "./AdminTopbar";

type AdminShellProps = {
  children: ReactNode;
};

export function AdminShell({ children }: AdminShellProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-background text-primary-dark">
      <div className="hidden shrink-0 p-4 pr-0 lg:block">
        <AdminSidebar />
      </div>

      {isOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
          <button
            aria-label="Dong menu"
            className="absolute inset-0 bg-slate-950/50"
            onClick={() => setIsOpen(false)}
            type="button"
          />
          <div className="relative h-full w-72 max-w-[86vw] p-3">
            <AdminSidebar onNavigate={() => setIsOpen(false)} />
            <button
              aria-label="Dong menu"
              className="siu-soft-button siu-soft-button-light absolute right-6 top-6 inline-flex h-9 w-9 items-center justify-center rounded-[var(--admin-radius)] bg-white text-primary-dark"
              onClick={() => setIsOpen(false)}
              type="button"
            >
              <X aria-hidden="true" className="h-4 w-4" />
            </button>
          </div>
        </div>
      ) : null}

      <div className="flex min-w-0 flex-1 flex-col">
        <AdminTopbar onMenuClick={() => setIsOpen(true)} />
        <main className="min-h-0 flex-1 overflow-y-auto" id="main-content">
          {children}
        </main>
      </div>
    </div>
  );
}
