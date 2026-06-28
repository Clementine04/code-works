import { useEffect, useRef } from "react";
import { usePerf } from "@/context/PerfContext";

// Soft glow trailing the cursor. Writes `transform` directly to the DOM via a
// single rAF lerp loop — no React state, no re-renders, GPU-composited.
export default function CursorGlow() {
  const { pointerFX } = usePerf();
  const ref = useRef(null);

  useEffect(() => {
    if (!pointerFX) return;
    const el = ref.current;
    if (!el) return;

    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let x = tx;
    let y = ty;
    let raf = 0;
    let running = true;

    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const loop = () => {
      if (!running) return;
      x += (tx - x) * 0.14;
      y += (ty - y) * 0.14;
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, [pointerFX]);

  if (!pointerFX) return null;

  return (
    <div
      ref={ref}
      className="gpu pointer-events-none fixed left-0 top-0 z-[60] h-72 w-72 rounded-full opacity-70 blur-2xl"
      style={{
        background:
          "radial-gradient(circle, rgba(59,107,255,0.16), rgba(139,92,246,0.09) 45%, transparent 70%)",
      }}
    />
  );
}
