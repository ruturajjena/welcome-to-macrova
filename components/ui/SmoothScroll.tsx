"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { useSafeReducedMotion } from "@/lib/hooks";

/**
 * Lenis smooth-scroll. Framer-motion's scroll hooks read window scroll, which
 * Lenis drives, so the pinned phone stays perfectly in sync. Disabled entirely
 * for reduced-motion users (native scroll only).
 */
export function SmoothScroll() {
  const reduced = useSafeReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Expose for debugging / deterministic programmatic scrolling in tooling.
    (window as unknown as { lenis?: Lenis }).lenis = lenis;

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // Let in-page anchor links use Lenis for a smooth glide
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement)?.closest?.(
        'a[href^="#"]'
      ) as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -80 });
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, [reduced]);

  return null;
}
