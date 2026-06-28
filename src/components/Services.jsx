import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import TiltCard from "@/components/ui/TiltCard";
import { services } from "@/data/content";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 py-24 sm:py-32 cv-auto">
      <div className="section">
        <SectionHeading
          eyebrow="Services"
          title="Everything you need to ship and scale"
          subtitle="From first pixel to long-term support — one studio, end to end."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => (
            <motion.div key={s.title} variants={fadeUp}>
              <TiltCard max={6} className="h-full">
                <div className="flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white p-7 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.4)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-100 bg-gradient-to-br from-brand-500/15 to-accent-violet/15 text-brand-600">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-900">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-500">
                    {s.desc}
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-slate-600">
                        <Check className="h-4 w-4 flex-none text-brand-500" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
