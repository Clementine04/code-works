import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { scrollToId } from "@/hooks/useLenis";
import { CodeMark } from "@/components/Loader";
import MagneticButton from "@/components/ui/MagneticButton";
import { cn } from "@/lib/utils";

const links = [
  { label: "Work", id: "#work" },
  { label: "Services", id: "#services" },
  { label: "Industries", id: "#industries" },
  { label: "Why Us", id: "#why" },
  { label: "Contact", id: "#contact" },
];

export default function Navbar() {
  const { direction, atTop } = useScrollDirection();
  const [open, setOpen] = useState(false);
  const hidden = direction === "down" && !open;

  const go = (id) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: hidden ? -120 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
      >
        <nav
          className={cn(
            "flex w-full max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-5",
            atTop
              ? "border border-transparent bg-transparent"
              : "border border-slate-200/70 bg-white/85 shadow-[0_10px_30px_-12px_rgba(15,23,42,0.18)]"
          )}
        >
          <button
            onClick={() => go("#top")}
            className="flex items-center gap-2.5 pl-1"
            aria-label="Code Works home"
          >
            <CodeMark className="h-8 w-8" />
            <span className="text-base font-bold tracking-tight text-slate-900">
              Code<span className="text-gradient-brand">Works</span>
            </span>
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-900/[0.05] hover:text-slate-900"
              >
                {l.label}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <MagneticButton
              onClick={() => go("#contact")}
              className="px-5 py-2.5 text-sm"
              withArrow
            >
              Start a Project
            </MagneticButton>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-slate-900 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-slate-900/30 backdrop-blur-md"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-4 top-24 rounded-3xl glass-strong p-4"
            >
              <div className="flex flex-col">
                {links.map((l, i) => (
                  <motion.button
                    key={l.id}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                    onClick={() => go(l.id)}
                    className="rounded-2xl px-4 py-3.5 text-left text-lg font-medium text-slate-700 transition-colors hover:bg-slate-900/[0.05] hover:text-slate-900"
                  >
                    {l.label}
                  </motion.button>
                ))}
                <MagneticButton
                  onClick={() => go("#contact")}
                  className="mt-2 w-full"
                  withArrow
                >
                  Start a Project
                </MagneticButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
