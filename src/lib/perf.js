// Device capability detection so heavy effects only run where they're smooth.
// tier: "high" = full FX | "mid" = touch/tablet, no pointer FX | "low" = minimal.

export function detectPerfTier() {
  if (typeof window === "undefined") return "high";

  const mm = (q) => window.matchMedia && window.matchMedia(q).matches;

  const reduce = mm("(prefers-reduced-motion: reduce)");
  const coarse = mm("(hover: none), (pointer: coarse)");
  const cores = navigator.hardwareConcurrency || 8;
  const mem = navigator.deviceMemory || 8;
  const saveData = navigator.connection && navigator.connection.saveData;
  const narrow = window.innerWidth < 640;

  if (reduce || saveData || cores <= 4 || mem <= 4 || (coarse && narrow)) {
    return "low";
  }
  if (coarse) return "mid";
  return "high";
}

export function perfFlags(tier) {
  return {
    tier,
    // mouse-driven effects (cursor glow, 3D tilt, hero parallax, magnetic)
    pointerFX: tier === "high",
    // ambient infinite animations (aurora drift, float)
    ambientFX: tier !== "low",
    // expensive backdrop-filter blur
    heavyBlur: tier === "high",
    // scroll entrance reveals
    reveal: tier !== "low",
  };
}
