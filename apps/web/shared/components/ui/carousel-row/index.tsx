"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { useRef } from "react";
import { Button } from "@share/components/ui/button";

type CarouselRowProps = {
  ariaLabel: string;
  children: ReactNode;
};

export function CarouselRow({ ariaLabel, children }: CarouselRowProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  // Cuộn đúng một chiều rộng khung nhìn để giữ nhịp card ổn định.
  const scroll = (direction: "left" | "right") => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    scroller.scrollBy({
      behavior: "smooth",
      left: direction === "left" ? -scroller.clientWidth : scroller.clientWidth,
    });
  };

  return (
    <div className="relative">
      <Button
        aria-label={`Cuộn ${ariaLabel} sang trái`}
        className="absolute left-1 top-1/2 z-10 -translate-y-1/2 md:-left-5"
        onClick={() => scroll("left")}
        size="icon"
        variant="outline"
      >
        <ChevronLeft aria-hidden size={20} />
      </Button>
      <div
        aria-label={ariaLabel}
        className="scrollbar-none -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 py-5 scroll-smooth"
        ref={scrollerRef}
      >
        {children}
      </div>
      <Button
        aria-label={`Cuộn ${ariaLabel} sang phải`}
        className="absolute right-1 top-1/2 z-10 -translate-y-1/2 md:-right-5"
        onClick={() => scroll("right")}
        size="icon"
        variant="outline"
      >
        <ChevronRight aria-hidden size={20} />
      </Button>
    </div>
  );
}
