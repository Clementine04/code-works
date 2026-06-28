import { useEffect, useRef } from "react";
import { usePerf } from "@/context/PerfContext";
import { cn } from "@/lib/utils";

// 3D tilt + cursor spotlight. On the high tier it writes transforms straight to
// the DOM inside a single rAF (no React state → no re-renders). On mid/low tiers
// it renders a static card with a cheap CSS hover lift only.
export default function TiltCard({ children, className, max = 8, glow = true, ...props }) {
  const { pointerFX } = usePerf();
  const ref = useRef(null);
  const frame = useRef(0);
  const target = useRef({ rx: 0, ry: 0, mx: 50, my: 50 });

  useEffect(() => {
    if (!pointerFX) return;
    const el = ref.current;
    if (!el) return;

    const apply = () => {
      frame.current = 0;
      const { rx, ry, mx, my } = target.current;
      el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      el.style.setProperty("--mx", `${mx}%`);
      el.style.setProperty("--my", `${my}%`);
    };

    const onMove = (e) => {
      el.style.willChange = "transform";
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      target.current = {
        rx: (py - 0.5) * -2 * max,
        ry: (px - 0.5) * 2 * max,
        mx: px * 100,
        my: py * 100,
      };
      if (!frame.current) frame.current = requestAnimationFrame(apply);
    };

    const onLeave = () => {
      target.current = { rx: 0, ry: 0, mx: 50, my: 50 };
      if (!frame.current) frame.current = requestAnimationFrame(apply);
      el.style.willChange = "auto";
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(frame.current);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [pointerFX, max]);

  return (
    <div
      ref={ref}
      className={cn(
        "group relative rounded-3xl transition-transform duration-300 ease-out",
        !pointerFX && "hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {glow && pointerFX && (
        <div className="tilt-glow pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      )}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          boxShadow:
            "inset 0 0 0 1px rgba(89,141,255,0.45), 0 22px 50px -26px rgba(59,107,255,0.45)",
        }}
      />
      {children}
    </div>
  );
}
