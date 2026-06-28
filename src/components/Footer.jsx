import { CodeMark } from "@/components/Loader";
import { scrollToId } from "@/hooks/useLenis";

const cols = [
  {
    title: "Studio",
    links: [
      { label: "Work", id: "#work" },
      { label: "Services", id: "#services" },
      { label: "Why Code Works", id: "#why" },
    ],
  },
  {
    title: "Build",
    links: [
      { label: "Websites", id: "#services" },
      { label: "Business Systems", id: "#services" },
      { label: "Mobile Apps", id: "#services" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact", id: "#contact" },
      { label: "Start a Project", id: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200 bg-white py-14">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="section relative">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <button
              onClick={() => scrollToId("#top")}
              className="flex items-center gap-2.5"
            >
              <CodeMark className="h-8 w-8" />
              <span className="text-base font-bold tracking-tight text-slate-900">
                Code<span className="text-gradient-brand">Works</span>
              </span>
            </button>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              A premium software studio building websites, business systems and
              mobile apps that convert.
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-slate-900">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <button
                      onClick={() => scrollToId(l.id)}
                      className="text-sm text-slate-500 transition-colors hover:text-brand-600"
                    >
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-xs text-slate-400 sm:flex-row">
          <span>© {new Date().getFullYear()} Code Works. All rights reserved.</span>
          <span>Crafted with precision · Built to scale</span>
        </div>
      </div>
    </footer>
  );
}
