"use client";

import { X } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { Button } from "@share/components/ui/button";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title: string;
};

export function Modal({ children, isOpen, onClose, title }: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    previousFocusRef.current = document.activeElement as HTMLElement;
    dialogRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      previousFocusRef.current?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      aria-labelledby="dialog-title"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-primary-dark/65 p-4"
      role="dialog"
    >
      <button
        aria-label="Đóng modal"
        className="absolute inset-0 cursor-default"
        onClick={onClose}
        type="button"
      />
      <div
        className="siu-soft-card siu-soft-surface-white relative max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-lg outline-none"
        ref={dialogRef}
        tabIndex={-1}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[var(--border)] bg-white px-5 py-4">
          <h2 className="text-xl font-extrabold text-primary-dark" id="dialog-title">
            {title}
          </h2>
          <Button aria-label="Đóng" onClick={onClose} size="icon" variant="ghost">
            <X aria-hidden size={20} />
          </Button>
        </div>
        {children}
      </div>
    </div>
  );
}
