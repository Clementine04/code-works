import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/work/ProjectCard";
import ProjectModal from "@/components/work/ProjectModal";
import StatStrip from "@/components/StatStrip";
import { projects, categories } from "@/data/projects";
import { cn } from "@/lib/utils";

export default function SelectedWork() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.categories.includes(filter));
  }, [filter]);

  return (
    <section id="work" className="relative scroll-mt-24 py-24 sm:py-32 cv-auto">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[40rem]"
        style={{
          background:
            "radial-gradient(45% 60% at 50% 0%, rgba(91,140,255,0.12), transparent 70%)",
        }}
      />

      <div className="section">
        <SectionHeading
          eyebrow="Selected Work"
          title="Crafted to solve real business problems"
          subtitle="A collection of websites, web applications and business systems built for measurable outcomes."
        />

        {/* filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                filter === c ? "text-white" : "text-slate-500 hover:text-slate-900"
              )}
            >
              {filter === c && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full border border-white/10 [background:linear-gradient(110deg,#274bf5,#8b5cf6)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{c}</span>
            </button>
          ))}
        </div>

        {/* grid */}
        <motion.div
          layout
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                  delay: (i % 6) * 0.05,
                }}
              >
                <ProjectCard project={p} onOpen={setActive} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <StatStrip />
      </div>

      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}
