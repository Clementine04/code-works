import {
  LayoutGrid,
  BarChart3,
  Users,
  CreditCard,
  Settings,
  Search,
  Bell,
  TrendingUp,
  ArrowUpRight,
  Home,
  PieChart,
  Wallet,
  Plus,
  Send,
  ArrowDownLeft,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ----------------------------- Dark dashboard ---------------------------- */

const navItems = [
  { icon: LayoutGrid, label: "Overview", active: true },
  { icon: BarChart3, label: "Analytics" },
  { icon: Users, label: "Customers" },
  { icon: CreditCard, label: "Billing" },
  { icon: Settings, label: "Settings" },
];

const kpis = [
  { label: "Revenue", value: "$48.2k", delta: "+12.4%" },
  { label: "Active users", value: "3,914", delta: "+8.1%" },
  { label: "Conversion", value: "6.7%", delta: "+2.3%" },
];

export function DashboardMockup({ className }) {
  return (
    <div className={cn("relative w-full", className)}>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0e1a] shadow-card ring-1 ring-slate-900/5">
        {/* window chrome */}
        <div className="flex items-center gap-1.5 border-b border-white/[0.06] bg-[#0c1120] px-3.5 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <div className="mx-auto flex w-1/2 items-center justify-center gap-1.5 rounded-md bg-white/[0.05] px-2 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
            <span className="text-[8px] font-medium tracking-wide text-white/40">
              app.codeworks.studio
            </span>
          </div>
        </div>

        {/* app body */}
        <div
          className="flex aspect-[16/10] text-left"
          style={{
            background:
              "radial-gradient(120% 120% at 0% 0%, rgba(59,107,255,0.10), transparent 45%), radial-gradient(120% 120% at 100% 100%, rgba(139,92,246,0.10), transparent 50%), #0a0e1a",
          }}
        >
          {/* sidebar */}
          <aside className="hidden w-[24%] flex-col border-r border-white/[0.06] bg-white/[0.015] p-3 sm:flex">
            <div className="flex items-center gap-2 px-1">
              <span className="flex h-5 w-5 items-center justify-center rounded-md bg-gradient-to-br from-brand-500 to-accent-violet text-[9px] font-black text-white">
                C
              </span>
              <span className="text-[10px] font-semibold text-white/90">Code Works</span>
            </div>
            <div className="mt-4 flex flex-col gap-1">
              {navItems.map((n) => (
                <div
                  key={n.label}
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-2 py-1.5",
                    n.active
                      ? "bg-brand-500/15 text-white ring-1 ring-brand-400/30"
                      : "text-white/45"
                  )}
                >
                  <n.icon className="h-3 w-3" strokeWidth={2.2} />
                  <span className="text-[9px] font-medium">{n.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-auto rounded-xl border border-white/[0.06] bg-white/[0.02] p-2.5">
              <div className="h-1.5 w-3/4 rounded-full bg-white/15" />
              <div className="mt-1.5 h-1.5 w-1/2 rounded-full bg-white/10" />
              <div className="mt-2 rounded-md bg-gradient-to-r from-brand-500 to-accent-violet py-1 text-center text-[8px] font-semibold text-white">
                Upgrade
              </div>
            </div>
          </aside>

          {/* main */}
          <main className="flex flex-1 flex-col gap-2.5 p-3 sm:p-4">
            {/* topbar */}
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[11px] font-bold text-white sm:text-xs">Overview</div>
                <div className="text-[8px] text-white/40">Welcome back, Patrick</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="hidden items-center gap-1.5 rounded-full bg-white/[0.05] px-2 py-1 sm:flex">
                  <Search className="h-2.5 w-2.5 text-white/40" />
                  <span className="h-1.5 w-10 rounded-full bg-white/10" />
                </div>
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/[0.05]">
                  <Bell className="h-2.5 w-2.5 text-white/50" />
                </span>
                <span className="h-5 w-5 rounded-full bg-gradient-to-br from-accent-cyan to-brand-500" />
              </div>
            </div>

            {/* KPIs */}
            <div className="grid grid-cols-3 gap-2">
              {kpis.map((k) => (
                <div
                  key={k.label}
                  className="rounded-lg border border-white/[0.06] bg-white/[0.025] p-2"
                >
                  <div className="text-[7.5px] uppercase tracking-wide text-white/40">
                    {k.label}
                  </div>
                  <div className="mt-0.5 text-[11px] font-bold text-white sm:text-sm">
                    {k.value}
                  </div>
                  <div className="mt-0.5 inline-flex items-center gap-0.5 text-[7.5px] font-semibold text-emerald-400">
                    <TrendingUp className="h-2 w-2" /> {k.delta}
                  </div>
                </div>
              ))}
            </div>

            {/* chart card */}
            <div className="flex-1 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="text-[9px] font-semibold text-white/90">Revenue</span>
                  <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-400/15 px-1.5 py-0.5 text-[7px] font-semibold text-emerald-400">
                    <ArrowUpRight className="h-2 w-2" /> 12.4%
                  </span>
                </div>
                <div className="flex gap-1">
                  {["1D", "1W", "1M"].map((t, i) => (
                    <span
                      key={t}
                      className={cn(
                        "rounded px-1.5 py-0.5 text-[7px] font-medium",
                        i === 2 ? "bg-white/10 text-white/80" : "text-white/35"
                      )}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <AreaChart />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

function AreaChart() {
  const line =
    "M0,78 C30,60 48,64 72,46 C96,30 120,52 150,40 C180,28 205,12 235,24 C262,34 290,16 320,22";
  return (
    <svg viewBox="0 0 320 96" className="mt-2 h-[58%] w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5b8cff" stopOpacity="0.45" />
          <stop offset="1" stopColor="#5b8cff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="lineStroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#5b8cff" />
          <stop offset="1" stopColor="#a78bfa" />
        </linearGradient>
      </defs>
      {[20, 44, 68].map((y) => (
        <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="#ffffff" strokeOpacity="0.05" strokeWidth="1" />
      ))}
      <path d={`${line} L320,96 L0,96 Z`} fill="url(#areaFill)" />
      <path d={line} fill="none" stroke="url(#lineStroke)" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="235" cy="24" r="3.5" fill="#0a0e1a" stroke="#a78bfa" strokeWidth="2" />
    </svg>
  );
}

/* ------------------------------- Dark phone ------------------------------- */

const txns = [
  { icon: ArrowDownLeft, label: "Stripe payout", amt: "+ $2,400", up: true },
  { icon: Send, label: "Figma", amt: "− $45", up: false },
  { icon: ArrowDownLeft, label: "New client", amt: "+ $1,200", up: true },
];

export function PhoneAppMockup({ className }) {
  return (
    <div className={cn("relative mx-auto w-[180px]", className)}>
      <div className="relative aspect-[9/19] rounded-[2.1rem] border border-white/10 bg-[#05070d] p-[5px] shadow-card ring-1 ring-slate-900/10">
        <div className="absolute left-1/2 top-2 z-10 h-1.5 w-12 -translate-x-1/2 rounded-full bg-white/15" />
        <div
          className="flex h-full w-full flex-col overflow-hidden rounded-[1.7rem] p-3 text-left"
          style={{
            background:
              "radial-gradient(120% 80% at 100% 0%, rgba(139,92,246,0.18), transparent 50%), #0a0e1a",
          }}
        >
          {/* header */}
          <div className="mt-3 flex items-center justify-between">
            <div>
              <div className="text-[7px] text-white/45">Good morning</div>
              <div className="text-[10px] font-semibold text-white">Patrick</div>
            </div>
            <span className="h-6 w-6 rounded-full bg-gradient-to-br from-accent-cyan to-brand-500" />
          </div>

          {/* balance card */}
          <div className="mt-3 overflow-hidden rounded-2xl bg-gradient-to-br from-brand-500 to-accent-violet p-3">
            <div className="flex items-center gap-1 text-[7px] text-white/80">
              <Wallet className="h-2.5 w-2.5" /> Total balance
            </div>
            <div className="mt-1 text-base font-bold text-white">$12,480</div>
            <div className="mt-0.5 inline-flex items-center gap-0.5 text-[7px] font-medium text-white/85">
              <TrendingUp className="h-2 w-2" /> +3.2% this week
            </div>
          </div>

          {/* quick actions */}
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[
              { icon: Plus, l: "Add" },
              { icon: Send, l: "Send" },
              { icon: PieChart, l: "Stats" },
            ].map((a) => (
              <div
                key={a.l}
                className="flex flex-col items-center gap-1 rounded-xl border border-white/[0.06] bg-white/[0.03] py-2"
              >
                <a.icon className="h-3 w-3 text-brand-300" />
                <span className="text-[6.5px] text-white/55">{a.l}</span>
              </div>
            ))}
          </div>

          {/* transactions */}
          <div className="mt-3 flex items-center justify-between">
            <span className="text-[8px] font-semibold text-white/85">Activity</span>
            <span className="text-[7px] text-brand-300">See all</span>
          </div>
          <div className="mt-1.5 flex flex-col gap-1.5">
            {txns.map((t) => (
              <div key={t.label} className="flex items-center gap-2">
                <span
                  className={cn(
                    "flex h-5 w-5 items-center justify-center rounded-full",
                    t.up ? "bg-emerald-400/15 text-emerald-400" : "bg-white/[0.06] text-white/50"
                  )}
                >
                  <t.icon className="h-2.5 w-2.5" />
                </span>
                <div className="flex-1">
                  <div className="text-[7.5px] font-medium text-white/80">{t.label}</div>
                  <div className="h-1 w-8 rounded-full bg-white/10" />
                </div>
                <span
                  className={cn(
                    "text-[7.5px] font-semibold",
                    t.up ? "text-emerald-400" : "text-white/55"
                  )}
                >
                  {t.amt}
                </span>
              </div>
            ))}
          </div>

          {/* bottom nav */}
          <div className="mt-auto flex items-center justify-around rounded-2xl border border-white/[0.06] bg-white/[0.03] py-2">
            {[Home, BarChart3, Wallet, Settings].map((Icon, i) => (
              <Icon
                key={i}
                className={cn("h-3.5 w-3.5", i === 0 ? "text-brand-300" : "text-white/35")}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
