"use client";

import { cn } from "@share/utils";
import Image from "next/image";
import {
  type PointerEvent as ReactPointerEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { BrushStrokeDivider } from "@share/components/ui/brush-stroke-divider";
import { Button } from "@share/components/ui/button";

export type HeroSlide = {
  alt: string;
  ctaLabel: string;
  description: string;
  eyebrow: string;
  href: string;
  image: string;
  mobileImage?: string;
  title: string;
};

type HeroCarouselProps = {
  intervalMs?: number;
  loop?: boolean;
  slides: HeroSlide[];
};

const dragThreshold = 56;
const heroFrameClass = "min-h-[590px] md:min-h-[650px] xl:min-h-[720px]";

export function HeroCarousel({
  intervalMs = 4800,
  loop = true,
  slides,
}: HeroCarouselProps) {
  const [trackIndex, setTrackIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [canAnimate, setCanAnimate] = useState(true);
  const dragStartXRef = useRef(0);

  const slideCount = slides.length;
  const renderedSlides = useMemo(
    () => (loop && slideCount > 1 ? [...slides, slides[0]] : slides),
    [loop, slideCount, slides],
  );
  const activeIndex = trackIndex === slideCount ? 0 : trackIndex;

  const goToSlide = useCallback(
    (index: number) => {
      if (!slideCount) return;

      if (index < 0) {
        setTrackIndex(loop ? slideCount - 1 : 0);
        return;
      }

      if (index >= slideCount) {
        setTrackIndex(loop ? slideCount : slideCount - 1);
        return;
      }

      setTrackIndex(index);
    },
    [loop, slideCount],
  );

  // Tự động chuyển banner theo cấu hình, vẫn cho phép tắt vòng lặp khi cần.
  useEffect(() => {
    if (isDragging || slideCount <= 1 || intervalMs <= 0) return;

    const id = window.setInterval(() => {
      setTrackIndex((current) => {
        const next = current + 1;
        if (next < slideCount) return next;
        return loop ? slideCount : current;
      });
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [intervalMs, isDragging, loop, slideCount]);

  const handleTransitionEnd = useCallback(() => {
    if (!loop || trackIndex !== slideCount) return;

    setCanAnimate(false);
    setTrackIndex(0);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setCanAnimate(true));
    });
  }, [loop, slideCount, trackIndex]);

  const handlePointerDown = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      if (slideCount <= 1) return;

      event.currentTarget.setPointerCapture(event.pointerId);
      dragStartXRef.current = event.clientX;
      setDragOffset(0);
      setIsDragging(true);
    },
    [slideCount],
  );

  const handlePointerMove = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      if (!isDragging) return;
      setDragOffset(event.clientX - dragStartXRef.current);
    },
    [isDragging],
  );

  const finishDrag = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      if (!isDragging) return;

      const distance = event.clientX - dragStartXRef.current;
      if (distance <= -dragThreshold) goToSlide(activeIndex + 1);
      if (distance >= dragThreshold) goToSlide(activeIndex - 1);

      setDragOffset(0);
      setIsDragging(false);
    },
    [activeIndex, goToSlide, isDragging],
  );

  if (!slideCount) return null;

  return (
    <section className="relative overflow-hidden bg-primary-dark text-white">
      <div
        className={cn(
          "relative touch-pan-y select-none overflow-hidden",
          heroFrameClass,
          isDragging ? "cursor-grabbing" : "cursor-grab",
        )}
        onPointerCancel={finishDrag}
        onPointerDown={handlePointerDown}
        onPointerLeave={finishDrag}
        onPointerMove={handlePointerMove}
        onPointerUp={finishDrag}
      >
        <div
          className={cn(
            "flex",
            heroFrameClass,
            !isDragging &&
              canAnimate &&
              "transition-transform duration-700 ease-out",
          )}
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(calc(${-trackIndex * 100}% + ${dragOffset}px))`,
          }}
        >
          {renderedSlides.map((slide, index) => {
            const slideIndex = index % slideCount;
            const isActive = slideIndex === activeIndex;

            return (
              <article
                aria-hidden={!isActive}
                className={cn(
                  "relative w-full shrink-0 overflow-hidden",
                  heroFrameClass,
                )}
                key={`${slide.image}-${index}`}
              >
                <Image
                  alt={slide.alt}
                  className="pointer-events-none object-cover object-center"
                  draggable={false}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  src={slide.mobileImage ?? slide.image}
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,25,31,0.96)_0%,rgba(3,25,31,0.82)_34%,rgba(3,25,31,0.28)_68%,rgba(3,25,31,0.12)_100%)]" />
                <div className="absolute inset-x-0 top-0 z-10 flex h-full items-center">
                  <div className="mx-auto w-full max-w-7xl px-5 pb-24 pt-14 md:px-8 md:pb-32">
                    <div className="max-w-2xl">
                      <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-brand-accent md:text-sm">
                        {slide.eyebrow}
                      </p>
                      <h1 className="mt-5 text-4xl font-black uppercase leading-[1.04] text-white md:text-6xl xl:text-7xl">
                        {slide.title}
                      </h1>
                      <p className="mt-5 max-w-xl text-base leading-7 text-blue-50 md:text-xl">
                        {slide.description}
                      </p>
                      <div className="mt-8">
                        <Button href={slide.href} size="lg" variant="secondary">
                          {slide.ctaLabel}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="absolute bottom-24 left-1/2 z-20 flex -translate-x-1/2 gap-2 md:bottom-36">
          {slides.map((slide, index) => (
            <button
              aria-label={`Chuyển đến banner ${index + 1}`}
              className={cn(
                "h-1.5 rounded-full transition-all",
                index === activeIndex
                  ? "w-6 bg-brand-accent"
                  : "w-1.5 bg-white/60",
              )}
              key={slide.image}
              onClick={() => goToSlide(index)}
              type="button"
            />
          ))}
        </div>

        <BrushStrokeDivider />
      </div>

      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-20 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-primary"
        href="#main-content"
      >
        Bỏ qua banner
      </a>
    </section>
  );
}
