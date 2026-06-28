import { motion } from "framer-motion";
import { easePremium } from "@/lib/motion";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#f4f6fb]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: easePremium } }}
    >
      <div className="absolute inset-0 grid-bg opacity-60" />
      <motion.div
        className="relative flex items-center gap-3"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easePremium }}
      >
        <CodeMark className="h-9 w-9" />
        <span className="text-xl font-bold tracking-tight text-slate-900">
          Code<span className="text-gradient-brand">Works</span>
        </span>
      </motion.div>

      <div className="relative mt-8 h-[3px] w-48 overflow-hidden rounded-full bg-slate-200">
        <motion.div
          className="loader-bar absolute inset-y-0 left-0 rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: easePremium }}
        />
      </div>
      <motion.p
        className="mt-4 text-xs uppercase tracking-[0.3em] text-slate-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Crafting premium software
      </motion.p>
    </motion.div>
  );
}

export function CodeMark({ className }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <defs>
        <linearGradient id="cm" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#598dff" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="#ffffff" />
      <rect width="63" height="63" x="0.5" y="0.5" rx="15.5" stroke="#0f172a" strokeOpacity="0.08" />
      <path
        d="M22 20 L12 32 L22 44"
        stroke="url(#cm)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42 20 L52 32 L42 44"
        stroke="url(#cm)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="36" y1="16" x2="28" y2="48" stroke="url(#cm)" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}
