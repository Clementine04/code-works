import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { whyPoints } from "@/data/content";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

export default function WhyCodeWorks() {
  return (
    <section id="why" className="relative scroll-mt-24 py-24 sm:py-32 cv-auto">
      <div
        className="pointer-events-none absolute right-0 top-1/3 h-80 w-[28rem]"
        style={{
          background:
            "radial-gradient(50% 50% at 80% 50%, rgba(139,92,246,0.12), transparent 70%)",
        }}
      />
      <div className="section">
        <SectionHeading
          eyebrow="Why Code Works"
          title="A partner obsessed with your outcomes"
          subtitle="We don't just write code. We build software that moves your business forward."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-200/70 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.5)] sm:grid-cols-2 lg:grid-cols-3"
        >
          {whyPoints.map((w) => (
            <motion.div
              key={w.title}
              variants={fadeUp}
              className="group relative bg-white p-7 transition-colors hover:bg-slate-50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-100 bg-gradient-to-br from-brand-500/15 to-accent-violet/15 text-brand-600 transition-transform duration-300 group-hover:scale-110">
                <w.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-900">
                {w.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{w.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
