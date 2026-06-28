import { useEffect, useState } from "react";

// Returns { direction, atTop } for hide-on-scroll navigation.
export function useScrollDirection() {
  const [state, setState] = useState({ direction: "up", atTop: true });

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const atTop = y < 24;
      const direction = y > lastY && y > 120 ? "down" : "up";
      if (direction !== state.direction || atTop !== state.atTop) {
        setState({ direction, atTop });
      }
      lastY = y;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [state]);

  return state;
}
