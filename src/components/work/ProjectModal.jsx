import { useEffect } from "react";
import { motion } from "framer-motion";
import { X, Check, Target } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import DeviceMockup from "@/components/ui/DeviceMockup";
import { easePremium } from "@/lib/motion";

export default function ProjectModal({ project, onClose }) {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "center" });

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    window.__lenis?.stop?.();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      window.__lenis?.start?.();
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
        onClick={onClose}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 20 }}
        transition={{ duration: 0.45, ease: easePremium }}
        className="relative z-10 max-h-[92svh] w-full max-w-4xl overflow-y-auto overflow-x-hidden rounded-t-4xl border border-slate-200 bg-white no-scrollbar shadow-2xl sm:rounded-4xl"
        data-lenis-prevent
      >
        {/* hero */}
        <div className="relative h-44 overflow-hidden sm:h-60">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} — ${project.industry}`}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          ) : (
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(100% 140% at 0% 0%, ${project.accent[0]}66, transparent 55%), radial-gradient(120% 140% at 100% 100%, ${project.accent[1]}66, transparent 60%), #f8fafc`,
              }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
          <button
            onClick={onClose}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-950/40 text-white backdrop-blur transition-colors hover:bg-slate-950/70"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="absolute bottom-5 left-5 right-5 sm:left-8">
            <span className="rounded-full border border-white/20 bg-slate-950/40 px-3 py-1 text-xs text-white backdrop-blur">
              {project.industry}
            </span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white drop-shadow sm:text-3xl">
              {project.title}
            </h2>
          </div>
        </div>

        <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-600">
              Overview
            </h3>
            <p className="mt-3 leading-relaxed text-slate-600">{project.overview}</p>

            <h3 className="mt-7 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-brand-600">
              <Target className="h-4 w-4" /> Client goals
            </h3>
            <ul className="mt-3 space-y-2">
              {project.goals.map((g) => (
                <li key={g} className="flex gap-2.5 text-sm text-slate-600">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-500" />
                  {g}
                </li>
              ))}
            </ul>

            <h3 className="mt-7 text-sm font-semibold uppercase tracking-widest text-brand-600">
              Features implemented
            </h3>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {project.features.map((f) => (
                <div
                  key={f}
                  className="flex items-start gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-600"
                >
                  <Check className="mt-0.5 h-4 w-4 flex-none text-emerald-500" />
                  {f}
                </div>
              ))}
            </div>
          </div>

          <div>
            {/* gallery carousel */}
            <div className="overflow-hidden rounded-2xl border border-slate-200" ref={emblaRef}>
              <div className="flex">
                {(project.images || []).map((src, i) => (
                  <div key={i} className="min-w-0 flex-[0_0_100%] p-2">
                    <DeviceMockup
                      type={project.device}
                      accent={project.accent}
                      image={src}
                      alt={`${project.title} screenshot ${i + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="text-xs uppercase tracking-widest text-slate-400">
                Business outcome
              </div>
              <div className="mt-1 text-2xl font-bold text-emerald-600">
                {project.outcome}
              </div>
            </div>

            <h3 className="mt-5 text-sm font-semibold uppercase tracking-widest text-brand-600">
              Technologies
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-600"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
