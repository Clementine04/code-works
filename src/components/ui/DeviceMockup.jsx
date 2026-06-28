import { cn } from "@/lib/utils";

// A pure-CSS gradient "screen" used as a fallback when no real screenshot is
// provided. When `image` is passed, the real screenshot is rendered instead.
function Screen({ accent = ["#3b6bff", "#8b5cf6"], label, image, alt }) {
  if (image) {
    return (
      <img
        src={image}
        alt={alt || "Project screenshot"}
        loading="lazy"
        decoding="async"
        draggable={false}
        className="h-full w-full object-cover object-top"
      />
    );
  }
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        background: `radial-gradient(120% 120% at 0% 0%, ${accent[0]}22, transparent 50%), radial-gradient(120% 120% at 100% 100%, ${accent[1]}26, transparent 55%), #ffffff`,
      }}
    >
      <div className="absolute inset-0 grid-bg opacity-50" />
      {/* faux UI blocks */}
      <div className="absolute inset-0 flex flex-col gap-2 p-3 sm:p-4">
        <div className="flex items-center gap-2">
          <span
            className="h-5 w-5 rounded-md"
            style={{ background: `linear-gradient(135deg, ${accent[0]}, ${accent[1]})` }}
          />
          <span className="h-2 w-16 rounded-full bg-slate-300" />
          <span className="ml-auto h-2 w-8 rounded-full bg-slate-200" />
        </div>
        <div
          className="mt-1 h-1/2 w-full rounded-lg"
          style={{
            background: `linear-gradient(135deg, ${accent[0]}cc, ${accent[1]}99)`,
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25)",
          }}
        />
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-8 rounded-md bg-slate-100 ring-1 ring-slate-200/70" />
          ))}
        </div>
        <div className="space-y-1.5">
          <div className="h-2 w-3/4 rounded-full bg-slate-200" />
          <div className="h-2 w-1/2 rounded-full bg-slate-100" />
        </div>
      </div>
      {label && (
        <span className="absolute bottom-2 right-3 text-[10px] font-medium uppercase tracking-widest text-slate-400">
          {label}
        </span>
      )}
    </div>
  );
}

export default function DeviceMockup({ type = "desktop", accent, label, image, alt, className }) {
  if (type === "mobile") {
    return (
      <div className={cn("relative mx-auto w-[180px]", className)}>
        <div className="relative aspect-[9/19] rounded-[2rem] border border-slate-200 bg-white p-2 shadow-card">
          <div className="absolute left-1/2 top-2.5 z-10 h-1.5 w-14 -translate-x-1/2 rounded-full bg-slate-200" />
          <div className="h-full w-full overflow-hidden rounded-[1.5rem]">
            <Screen accent={accent} label={label} image={image} alt={alt} />
          </div>
        </div>
      </div>
    );
  }

  // desktop / browser
  return (
    <div className={cn("relative w-full", className)}>
      <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card">
        <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-3 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="mx-auto hidden h-4 w-1/2 rounded-full bg-slate-100 sm:block" />
        </div>
        <div className="aspect-[16/10]">
          <Screen accent={accent} label={label} image={image} alt={alt} />
        </div>
      </div>
    </div>
  );
}
