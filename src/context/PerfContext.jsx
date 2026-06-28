import { createContext, useContext, useLayoutEffect, useMemo, useState } from "react";
import { detectPerfTier, perfFlags } from "@/lib/perf";

const PerfContext = createContext(perfFlags("high"));

export function PerfProvider({ children }) {
  const [tier] = useState(() => detectPerfTier());
  const flags = useMemo(() => perfFlags(tier), [tier]);

  useLayoutEffect(() => {
    const root = document.documentElement;
    root.classList.remove("perf-low", "perf-mid", "perf-high");
    root.classList.add(`perf-${tier}`);
  }, [tier]);

  return <PerfContext.Provider value={flags}>{children}</PerfContext.Provider>;
}

export function usePerf() {
  return useContext(PerfContext);
}
