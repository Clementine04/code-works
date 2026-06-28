import { motion } from "framer-motion";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { staggerContainer, fadeUp, blurReveal, viewportOnce } from "@/lib/motion";

const contactItems = [
  {
    icon: Phone,
    label: "Call us",
    value: "09270731419",
    href: "tel:09270731419",
    action: "Tap to call",
  },
  {
    icon: Mail,
    label: "Email us",
    value: "franzcedrick.tagal_cyn@isu.edu.ph",
    href: "mailto:franzcedrick.tagal_cyn@isu.edu.ph",
    action: "Tap to message",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-32 cv-auto">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[36rem]"
        style={{
          background:
            "radial-gradient(40% 55% at 50% 0%, rgba(91,140,255,0.14), transparent 70%)",
        }}
      />
      <div className="section relative">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-brand-700 shadow-sm backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            Contact
          </motion.span>
          <motion.h2
            variants={blurReveal}
            className="mt-5 text-balance text-3xl font-bold tracking-tightest text-slate-900 sm:text-4xl md:text-5xl"
          >
            Let's build something{" "}
            <span className="text-gradient-brand">premium</span> together
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-slate-500 sm:text-lg">
            Have a project in mind? Call or message us — we'll reply within one
            business day.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto mt-12 grid max-w-3xl gap-5 sm:grid-cols-2"
        >
          {contactItems.map((c) => (
            <motion.a
              key={c.label}
              href={c.href}
              variants={fadeUp}
              className="group relative flex flex-col items-start gap-4 overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-7 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.4)] transition-colors hover:border-brand-400/60"
            >
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl border border-brand-100 bg-gradient-to-br from-brand-500/15 to-accent-violet/15 text-brand-600 transition-transform duration-300 group-hover:scale-110">
                <c.icon className="h-6 w-6" />
              </span>
              <div>
                <span className="block text-xs font-medium uppercase tracking-wider text-slate-400">
                  {c.label}
                </span>
                <span className="mt-1 block break-all text-lg font-semibold text-slate-900">
                  {c.value}
                </span>
              </div>
              <span className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-brand-600">
                {c.action}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
