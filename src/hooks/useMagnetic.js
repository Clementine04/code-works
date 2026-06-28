import { useRef } from "react";
import { usePerf } from "@/context/PerfContext";

// Magnetic cursor effect: element gently follows the pointer.
// Writes transform directly to the DOM, throttled by rAF, and only on the
// high perf tier (disabled for touch / low-end / reduced-motion).
export function useMagnetic(strength = 0.35) {
  const { pointerFX } = usePerf();
  const ref = useRef(null);
  const frame = useRef(0);
  const pos = useRef({ x: 0, y: 0 });

  const write = () => {
    frame.current = 0;
    const el = ref.current;
    if (el) el.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
  };

  const onMouseMove = (e) => {
    if (!pointerFX || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    pos.current = {
      x: (e.clientX - (rect.left + rect.width / 2)) * strength,
      y: (e.clientY - (rect.top + rect.height / 2)) * strength,
    };
    if (!frame.current) frame.current = requestAnimationFrame(write);
  };

  const onMouseLeave = () => {
    if (!ref.current) return;
    pos.current = { x: 0, y: 0 };
    if (!frame.current) frame.current = requestAnimationFrame(write);
  };

  return { ref, onMouseMove, onMouseLeave };
}
