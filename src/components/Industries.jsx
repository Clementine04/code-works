import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { industries } from "@/data/content";
import { staggerContainer, scaleIn, viewportOnce } from "@/lib/motion";

export default function Industries() {
  return (
    <section id="industries" className="relative scroll-mt-24 py-24 sm:py-32 cv-auto">
      <div className="absolute inset-0 dot-bg opacity-[0.15]" />
      <div className="section relative">
        <SectionHeading
          eyebrow="Industries"
          title="Built for the businesses we love"
          subtitle="We speak the language of your industry and build software that fits how you work."
        />

        <motion.div
          variants={staggerContainer(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3"
        >
          {industries.map((ind) => (
            <motion.div
              key={ind.name}
              variants={scaleIn}
              whileHover={{ y: -4 }}
              className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_14px_40px_-28px_rgba(15,23,42,0.45)] transition-colors hover:border-brand-400/50"
            >
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle, rgba(91,140,255,0.35), transparent 65%)",
                }}
              />
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl border border-brand-100 bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100">
                <ind.icon className="h-5 w-5" />
              </span>
              <span className="relative text-sm font-medium text-slate-700 sm:text-base">
                {ind.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
