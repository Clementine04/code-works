import { motion } from "framer-motion";
import CountUp from "react-countup";
import { stats } from "@/data/projects";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

export default function StatStrip() {
  return (
    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="mt-16 grid grid-cols-2 gap-4 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.4)] sm:p-8 md:grid-cols-4"
    >
      {stats.map((s) => (
        <motion.div key={s.label} variants={fadeUp} className="text-center">
          <div className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            <CountUp
              end={s.value}
              suffix={s.suffix}
              duration={2}
              enableScrollSpy
              scrollSpyOnce
            />
          </div>
          <div className="mt-1.5 text-xs font-medium uppercase tracking-wider text-slate-500 sm:text-sm">
            {s.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
