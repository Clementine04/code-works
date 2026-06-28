import { usePerf } from "@/context/PerfContext";
import { cn } from "@/lib/utils";

// Ambient gradient mesh built from native radial-gradients — NO filter blur,
// so it stays smooth even on low-end GPUs. The drifting layer only animates
// `transform` (GPU-composited) and is disabled on the low tier via CSS.
export default function AuroraBackground({ className, withGrid = true }) {
  const { ambientFX } = usePerf();

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="absolute inset-0 bg-[#f4f6fb]" />

      {/* color mesh (static, cheap) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(42% 48% at 22% 12%, rgba(91,140,255,0.28), transparent 70%)," +
            "radial-gradient(40% 46% at 82% 8%, rgba(139,92,246,0.22), transparent 70%)," +
            "radial-gradient(46% 50% at 8% 92%, rgba(34,211,238,0.18), transparent 72%)",
        }}
      />

      {/* slow drifting wash (transform only) */}
      <div
        className={cn(
          "absolute -inset-[20%]",
          ambientFX && "animate-aurora gpu"
        )}
        style={{
          background:
            "radial-gradient(35% 40% at 60% 30%, rgba(124,58,237,0.16), transparent 70%)",
        }}
      />

      {withGrid && (
        <>
          <div className="absolute inset-0 grid-bg opacity-70 mask-fade-b" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f4f6fb]/20 to-[#f4f6fb]" />
        </>
      )}

      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/70 to-transparent" />
    </div>
  );
}
