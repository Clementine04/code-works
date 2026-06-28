import { ArrowUpRight } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";
import DeviceMockup from "@/components/ui/DeviceMockup";

export default function ProjectCard({ project, onOpen, featured }) {
  return (
    <button
      onClick={() => onOpen(project)}
      className="block h-full w-full text-left"
      aria-label={`View ${project.title} case study`}
    >
      <TiltCard className="h-full">
        <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-4 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.4)] sm:p-5">
          {/* preview */}
          <div className="relative overflow-hidden rounded-2xl">
            <div className="transition-transform duration-700 ease-out group-hover:scale-[1.04]">
              <DeviceMockup
                type={project.device}
                accent={project.accent}
                image={project.image}
                alt={`${project.title} — ${project.industry}`}
                label={project.industry.toLowerCase()}
                className={project.device === "mobile" ? "py-6" : ""}
              />
            </div>
            <span className="absolute left-3 top-3 rounded-full border border-slate-200 bg-white/85 px-3 py-1 text-[11px] font-medium text-slate-700 backdrop-blur">
              {project.industry}
            </span>
            <span className="absolute right-3 top-3 rounded-full bg-emerald-500/15 px-3 py-1 text-[11px] font-semibold text-emerald-600 ring-1 ring-emerald-500/30">
              {project.outcome}
            </span>
          </div>

          {/* body */}
          <div className="mt-5 flex flex-1 flex-col">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                {project.title}
              </h3>
              <span className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all duration-300 group-hover:border-brand-400/60 group-hover:bg-brand-500/10 group-hover:text-brand-600">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              {project.short}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tags.slice(0, featured ? 5 : 4).map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-[11px] font-medium text-slate-600"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </TiltCard>
    </button>
  );
}
