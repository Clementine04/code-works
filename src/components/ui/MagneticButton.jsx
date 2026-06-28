import { forwardRef } from "react";
import { ArrowRight } from "lucide-react";
import { useMagnetic } from "@/hooks/useMagnetic";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "text-white shadow-glow [background:linear-gradient(110deg,#274bf5,#3b6bff_45%,#8b5cf6)]",
  ghost: "text-slate-800 glass hover:bg-white/90",
  soft: "text-slate-800 bg-slate-900/[0.04] border border-slate-200 hover:bg-slate-900/[0.07]",
};

const MagneticButton = forwardRef(function MagneticButton(
  {
    as = "button",
    variant = "primary",
    className,
    children,
    withArrow = false,
    strength = 0.3,
    ...props
  },
  _ref
) {
  const { ref, onMouseMove, onMouseLeave } = useMagnetic(strength);
  const Comp = as;

  return (
    <Comp
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={cn(
        "group relative inline-flex select-none items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3.5 text-sm font-semibold tracking-tight transition-[transform,background] duration-300 will-change-transform active:scale-[0.97]",
        variants[variant],
        className
      )}
      {...props}
    >
      {/* shimmer sweep */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
        {withArrow && (
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </span>
    </Comp>
  );
});

export default MagneticButton;
