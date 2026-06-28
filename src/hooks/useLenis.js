import { useEffect } from "react";
import Lenis from "lenis";
import { usePerf } from "@/context/PerfContext";

// Initialises Lenis smooth scrolling and exposes it on window for anchor links.
// Skipped on the low tier (reduced-motion / low-end) where native scroll is
// smoother and cheaper.
export function useLenis() {
  const { tier } = usePerf();

  useEffect(() => {
    if (tier === "low") return;

    const lenis = new Lenis({
      lerp: 0.085,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      syncTouch: false,
    });

    window.__lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = null;
    };
  }, [tier]);
}

export function scrollToId(id) {
  const el = document.querySelector(id);
  if (!el) return;
  if (window.__lenis) {
    window.__lenis.scrollTo(el, { offset: -80, duration: 1.2 });
  } else {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
