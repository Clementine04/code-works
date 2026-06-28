import { motion } from "framer-motion";
import { staggerContainer, blurReveal, fadeUp, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}) {
  return (
    <motion.div
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={cn(
        "flex max-w-2xl flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        align === "left" && "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <motion.span
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-brand-700 shadow-sm backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-500 shadow-[0_0_12px_2px_rgba(59,107,255,0.5)]" />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={blurReveal}
        className="text-balance text-3xl font-bold leading-[1.05] tracking-tightest text-slate-900 sm:text-4xl md:text-5xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className="text-balance text-base leading-relaxed text-slate-500 sm:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
