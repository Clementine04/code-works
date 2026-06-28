import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Star, Zap } from "lucide-react";
import AuroraBackground from "@/components/ui/AuroraBackground";
import { DashboardMockup, PhoneAppMockup } from "@/components/ui/HeroMockups";
import MagneticButton from "@/components/ui/MagneticButton";
import { scrollToId } from "@/hooks/useLenis";
import { usePerf } from "@/context/PerfContext";
import { staggerContainer, blurReveal, fadeUp } from "@/lib/motion";

export default function Hero() {
  const { pointerFX } = usePerf();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });

  const rotateY = useTransform(sx, [-0.5, 0.5], [10, -10]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [-8, 8]);
  const moveX = useTransform(sx, [-0.5, 0.5], [-18, 18]);
  const moveY = useTransform(sy, [-0.5, 0.5], [-12, 12]);

  const handleMove = (e) => {
    if (!pointerFX) return;
    const { innerWidth, innerHeight } = window;
    mx.set(e.clientX / innerWidth - 0.5);
    my.set(e.clientY / innerHeight - 0.5);
  };

  return (
    <section
      id="top"
      onMouseMove={pointerFX ? handleMove : undefined}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
    >
      <AuroraBackground />
      <DrawnLines />

      <div className="section grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          animate="show"
          className="relative z-10 flex flex-col items-start"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3.5 py-1.5 text-xs font-medium text-slate-600 shadow-sm backdrop-blur"
          >
            <Zap className="h-3.5 w-3.5 text-brand-500" />
            Premium software studio
            <span className="mx-1 h-3 w-px bg-slate-300" />
            <span className="flex items-center gap-0.5 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-current" />
              ))}
            </span>
          </motion.div>

          <motion.h1
            variants={blurReveal}
            className="mt-6 text-balance text-4xl font-extrabold leading-[1.02] tracking-tightest text-slate-900 sm:text-5xl md:text-6xl lg:text-[4.25rem]"
          >
            We build{" "}
            <span className="text-gradient-brand">premium software</span> that
            grows your business.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-balance text-base leading-relaxed text-slate-500 sm:text-lg"
          >
            Websites, web applications, business systems and mobile apps —
            designed and engineered to convert visitors into customers.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3">
            <MagneticButton onClick={() => scrollToId("#contact")} withArrow>
              Start Your Project
            </MagneticButton>
            <MagneticButton
              variant="ghost"
              onClick={() => scrollToId("#work")}
            >
              View Our Work
            </MagneticButton>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex items-center gap-6 text-xs text-slate-400"
          >
            <span>Trusted across 5 industries</span>
            <span className="hidden h-4 w-px bg-slate-300 sm:block" />
            <span className="hidden sm:block">Mobile-first · Built to scale</span>
          </motion.div>
        </motion.div>

        {/* Floating mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          className="relative z-10"
          style={{ perspective: 1200 }}
        >
          <motion.div
            style={{ rotateX, rotateY, x: moveX, y: moveY, transformStyle: "preserve-3d" }}
            className="relative"
          >
            <div className="animate-float">
              <DashboardMockup />
            </div>

            {/* floating phone */}
            <motion.div
              style={{ x: useTransform(sx, [-0.5, 0.5], [22, -22]) }}
              className="absolute -bottom-12 -right-3 hidden sm:block"
            >
              <div className="animate-float" style={{ animationDelay: "-2s" }}>
                <PhoneAppMockup className="w-[128px]" />
              </div>
            </motion.div>

            {/* floating glass badge */}
            <motion.div
              style={{ x: useTransform(sx, [-0.5, 0.5], [-16, 16]) }}
              className="absolute -left-4 top-8 hidden rounded-2xl glass px-4 py-3 shadow-glow md:block"
            >
              <div className="text-2xl font-bold text-slate-900">+38%</div>
              <div className="text-[11px] text-slate-500">conversion lift</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f4f6fb] to-transparent" />
    </section>
  );
}

function DrawnLines() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M -50 200 Q 400 100 900 260 T 1600 200"
        fill="none"
        stroke="url(#hl)"
        strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.4, ease: "easeInOut", delay: 0.4 }}
      />
      <defs>
        <linearGradient id="hl" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#3b6bff" stopOpacity="0" />
          <stop offset="0.5" stopColor="#8b5cf6" stopOpacity="0.8" />
          <stop offset="1" stopColor="#22d3ee" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
