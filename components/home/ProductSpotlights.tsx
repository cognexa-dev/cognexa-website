import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";

interface SpotlightProps {
  tag: string;
  tagColor: string;
  product: string;
  productHref: string;
  headline: string;
  description: string;
  capabilities: { title: string; desc: string }[];
  subProducts?: { name: string; desc: string }[];
  accent: string;
  accentLight: string;
  ctaColor: string;
  visual: React.ReactNode;
  reverse?: boolean;
}

function Spotlight({
  tag,
  tagColor,
  product,
  productHref,
  headline,
  description,
  capabilities,
  subProducts,
  ctaColor,
  visual,
  reverse = false,
}: SpotlightProps) {
  return (
    <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
      {/* Copy */}
      <div>
        <span className={`tag ${tagColor} mb-4 inline-flex`}>{tag}</span>
        <h3 className="font-display font-bold text-2xl lg:text-3xl text-ink mb-4 text-balance">
          {headline}
        </h3>
        <p className="text-muted text-base lg:text-lg leading-relaxed mb-6">{description}</p>

        {/* Sub-product names (for Surakshitam) */}
        {subProducts && (
          <div className="flex flex-wrap gap-2 mb-6">
            {subProducts.map((sp) => (
              <div
                key={sp.name}
                title={sp.desc}
                className="px-3 py-1.5 rounded-lg border border-slate-100 bg-paper text-xs font-semibold text-ink"
              >
                {sp.name}
              </div>
            ))}
          </div>
        )}

        <ul className="space-y-4 mb-8">
          {capabilities.map((cap) => (
            <li key={cap.title} className="flex gap-3">
              <div className="w-5 h-5 rounded-full border border-slate-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-ink">{cap.title}</p>
                <p className="text-sm text-muted mt-0.5">{cap.desc}</p>
              </div>
            </li>
          ))}
        </ul>

        <Link
          href={productHref}
          className={`inline-flex items-center gap-2 text-sm font-semibold ${ctaColor} transition-colors group`}
        >
          Explore {product}
          <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Visual */}
      <div className="relative">{visual}</div>
    </div>
  );
}

/* --- Visuals --- */

function SurakshitamVisual() {
  return (
    <div className="rounded-2xl overflow-hidden bg-[#0C111D] border border-white/8 shadow-2xl select-none">
      {/* App titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-white/4 border-b border-white/8">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-crimson-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/50" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
          </div>
          <span className="text-white/30 text-[11px] font-mono ml-2">surakshitam — security operations</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-green-400 text-[10px] font-semibold">LIVE</span>
        </div>
      </div>

      {/* Top metric bar */}
      <div className="grid grid-cols-4 divide-x divide-white/5 border-b border-white/5">
        {[
          { val: "0", label: "Critical", color: "text-green-400" },
          { val: "3", label: "Warnings", color: "text-amber-400" },
          { val: "247", label: "Events / 24h", color: "text-white/70" },
          { val: "98.4%", label: "Coverage", color: "text-teal-400" },
        ].map((m) => (
          <div key={m.label} className="px-3 py-2.5 text-center">
            <p className={`font-mono font-bold text-base ${m.color}`}>{m.val}</p>
            <p className="text-white/30 text-[10px] mt-0.5">{m.label}</p>
          </div>
        ))}
      </div>

      <div className="p-4 space-y-3">
        {/* Module status cards */}
        <p className="text-white/25 text-[10px] font-semibold uppercase tracking-widest mb-2">Platform modules</p>
        {[
          {
            name: "Kavach",
            role: "Managed Firewall",
            status: "Protected",
            statusColor: "text-green-400 bg-green-400/10",
            dot: "bg-green-400",
            rules: "2,847 rules active",
            blocked: "14 blocked today",
            pct: 100,
          },
          {
            name: "Durg",
            role: "Vulnerability Scanner",
            status: "3 Medium CVEs",
            statusColor: "text-amber-400 bg-amber-400/10",
            dot: "bg-amber-400",
            rules: "Last scan: 2h ago",
            blocked: "0 critical",
            pct: 76,
          },
          {
            name: "Shastra",
            role: "Penetration Testing",
            status: "Report Ready",
            statusColor: "text-sapphire-400 bg-sapphire-400/10",
            dot: "bg-sapphire-400",
            rules: "Q2 exercise complete",
            blocked: "7 findings → 4 closed",
            pct: 57,
          },
        ].map((mod) => (
          <div key={mod.name} className="rounded-xl bg-white/4 border border-white/6 p-3.5 group hover:border-white/12 transition-colors">
            <div className="flex items-start justify-between mb-2.5">
              <div className="flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-0.5 ${mod.dot}`} />
                <div>
                  <span className="text-white font-semibold text-[13px]">{mod.name}</span>
                  <span className="text-white/30 text-[11px] ml-1.5">{mod.role}</span>
                </div>
              </div>
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${mod.statusColor}`}>
                {mod.status}
              </span>
            </div>
            {/* Progress bar */}
            <div className="h-1 bg-white/8 rounded-full overflow-hidden mb-2">
              <div
                className="h-full rounded-full bg-gradient-to-r from-crimson-600/80 to-crimson-400/60 transition-all duration-700"
                style={{ width: `${mod.pct}%` }}
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white/30 text-[10px]">{mod.rules}</span>
              <span className="text-white/40 text-[10px]">{mod.blocked}</span>
            </div>
          </div>
        ))}

        {/* Event log */}
        <div className="rounded-xl bg-white/3 border border-white/6 overflow-hidden">
          <div className="flex items-center justify-between px-3.5 py-2 border-b border-white/5">
            <span className="text-white/30 text-[10px] font-semibold uppercase tracking-wider">Recent events</span>
            <span className="text-white/20 text-[10px]">Response SLA: 15 min</span>
          </div>
          <div className="divide-y divide-white/4">
            {[
              { time: "11:42", sev: "INFO", sevColor: "text-white/40 bg-white/5", msg: "Kavach policy updated — 3 rules added" },
              { time: "11:38", sev: "WARN", sevColor: "text-amber-400 bg-amber-400/10", msg: "Durg: CVE-2025-4421 detected on web-02" },
              { time: "10:55", sev: "BLOCK", sevColor: "text-crimson-400 bg-crimson-400/10", msg: "SSH brute-force attempt blocked — 203.0.113.42" },
              { time: "09:30", sev: "INFO", sevColor: "text-green-400 bg-green-400/10", msg: "Shastra Q2 report signed off" },
            ].map((ev, i) => (
              <div key={i} className="flex items-center gap-3 px-3.5 py-2">
                <span className="text-white/20 text-[10px] font-mono w-10 flex-shrink-0">{ev.time}</span>
                <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded font-mono flex-shrink-0 ${ev.sevColor}`}>{ev.sev}</span>
                <span className="text-white/50 text-[11px] truncate">{ev.msg}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom status row */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            <span className="text-green-400 text-[11px] font-semibold">No critical threats</span>
          </div>
          <span className="text-white/20 text-[10px]">24/7 SOC monitoring active</span>
        </div>
      </div>
    </div>
  );
}

function AurobitVisual() {
  return (
    <div className="rounded-2xl overflow-hidden bg-[#0C111D] border border-white/8 shadow-2xl select-none">
      {/* Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-white/4 border-b border-white/8">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-crimson-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/50" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
          </div>
          <span className="text-white/30 text-[11px] font-mono ml-2">aurobit — ops intelligence</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-white/30 text-[10px]">Last 24h</span>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-teal-400 text-[10px] font-semibold">AIOps active</span>
          </div>
        </div>
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-4 divide-x divide-white/5 border-b border-white/5">
        {[
          { val: "143", label: "Auto-resolved", color: "text-teal-400" },
          { val: "8 min", label: "Avg MTTR", color: "text-green-400" },
          { val: "94%", label: "Automation rate", color: "text-teal-400" },
          { val: "2", label: "Open now", color: "text-amber-400" },
        ].map((m) => (
          <div key={m.label} className="px-3 py-2.5 text-center">
            <p className={`font-mono font-bold text-base ${m.color}`}>{m.val}</p>
            <p className="text-white/30 text-[10px] mt-0.5">{m.label}</p>
          </div>
        ))}
      </div>

      <div className="p-4 space-y-3">
        {/* Mini bar chart */}
        <div className="rounded-xl bg-white/3 border border-white/6 p-3.5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-white/40 text-[10px] font-semibold uppercase tracking-wider">Incident resolution — last 7 days</span>
            <div className="flex items-center gap-3 text-[10px]">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-teal-500/60" />Auto</span>
              <span className="flex items-center gap-1 text-white/30"><span className="w-2 h-2 rounded-sm bg-white/20" />Manual</span>
            </div>
          </div>
          <div className="flex items-end gap-1.5 h-16">
            {[
              { auto: 85, manual: 15 },
              { auto: 78, manual: 22 },
              { auto: 90, manual: 10 },
              { auto: 92, manual: 8 },
              { auto: 88, manual: 12 },
              { auto: 95, manual: 5 },
              { auto: 94, manual: 6 },
            ].map((d, i) => (
              <div key={i} className="flex-1 flex flex-col justify-end gap-0.5 h-full">
                <div className="rounded-sm bg-white/15" style={{ height: `${d.manual}%` }} />
                <div className="rounded-sm bg-teal-500/60" style={{ height: `${d.auto}%` }} />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-1.5">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
              <span key={d} className="flex-1 text-center text-white/20 text-[9px]">{d}</span>
            ))}
          </div>
        </div>

        {/* Pipeline stages */}
        <div className="rounded-xl bg-white/3 border border-white/6 p-3.5">
          <p className="text-white/30 text-[10px] font-semibold uppercase tracking-wider mb-3">Automation pipeline</p>
          <div className="flex items-center gap-1">
            {[
              { label: "Detected", count: "143", color: "bg-white/10 text-white/50", arrow: true },
              { label: "Classified", count: "143", color: "bg-teal-600/20 text-teal-400", arrow: true },
              { label: "Routed", count: "143", color: "bg-teal-600/25 text-teal-300", arrow: true },
              { label: "Resolved", count: "141", color: "bg-teal-500/30 text-teal-300", arrow: false },
            ].map((stage) => (
              <div key={stage.label} className="flex items-center gap-1 flex-1">
                <div className={`flex-1 rounded-lg px-2 py-2 text-center ${stage.color}`}>
                  <p className="font-mono font-bold text-sm">{stage.count}</p>
                  <p className="text-[9px] mt-0.5 opacity-75">{stage.label}</p>
                </div>
                {stage.arrow && (
                  <svg className="w-3 h-3 text-white/20 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Incident feed */}
        <div className="rounded-xl bg-white/3 border border-white/6 overflow-hidden">
          <div className="flex items-center justify-between px-3.5 py-2 border-b border-white/5">
            <span className="text-white/30 text-[10px] font-semibold uppercase tracking-wider">Live incident feed</span>
            <span className="text-amber-400 text-[10px] font-semibold">2 open</span>
          </div>
          <div className="divide-y divide-white/4">
            {[
              { sev: "P2", sevColor: "bg-amber-400/15 text-amber-400", time: "11:51", event: "API latency spike — /payments endpoint", action: "Runbook: api-throttle-v3", actionColor: "text-amber-400", auto: false },
              { sev: "P3", sevColor: "bg-white/10 text-white/40", time: "11:44", event: "Disk usage at 88% on db-primary", action: "Auto: log-rotation queued", actionColor: "text-teal-400", auto: true },
              { sev: "P3", sevColor: "bg-white/10 text-white/40", time: "10:33", event: "Memory threshold — app-srv-02", action: "Auto: scaled to 3 instances", actionColor: "text-teal-400", auto: true },
              { sev: "P1", sevColor: "bg-crimson-500/15 text-crimson-400", time: "09:14", event: "Auth service timeout — all regions", action: "Auto: failover triggered + resolved", actionColor: "text-green-400", auto: true },
            ].map((ev, i) => (
              <div key={i} className="flex items-start gap-2.5 px-3.5 py-2.5">
                <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded font-mono flex-shrink-0 mt-0.5 ${ev.sevColor}`}>{ev.sev}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-white/65 text-[11px] leading-snug">{ev.event}</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    {ev.auto && <span className="text-[9px] bg-teal-400/10 text-teal-400 px-1 py-0.5 rounded font-semibold">AUTO</span>}
                    <span className={`text-[10px] ${ev.actionColor}`}>{ev.action}</span>
                  </div>
                </div>
                <span className="text-white/20 text-[10px] font-mono flex-shrink-0">{ev.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function VidyaVisual() {
  return (
    <div className="rounded-2xl overflow-hidden bg-[#0C111D] border border-white/8 shadow-2xl select-none flex flex-col" style={{ minHeight: 480 }}>
      {/* Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-white/4 border-b border-white/8 flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-crimson-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/50" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
          </div>
          <span className="text-white/30 text-[11px] font-mono ml-2">vidya — knowledge intelligence</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
          <span className="text-green-400 text-[10px] font-semibold">On-premise · Private</span>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left sidebar — document list */}
        <div className="w-36 flex-shrink-0 border-r border-white/6 bg-white/2 flex flex-col">
          <div className="px-3 py-2.5 border-b border-white/5">
            <p className="text-white/25 text-[9px] font-semibold uppercase tracking-wider">Knowledge base</p>
          </div>
          <div className="flex-1 overflow-hidden py-1">
            {[
              { name: "Leave Policy", updated: "Jan 2025", active: true },
              { name: "HR Handbook", updated: "Dec 2024", active: false },
              { name: "IT Security", updated: "Mar 2025", active: false },
              { name: "Travel Policy", updated: "Feb 2025", active: false },
              { name: "Code of Conduct", updated: "Jan 2025", active: false },
              { name: "Vendor SOPs", updated: "Apr 2025", active: false },
            ].map((doc) => (
              <div
                key={doc.name}
                className={`px-3 py-2 cursor-pointer transition-colors ${
                  doc.active ? "bg-aqua-600/15 border-l-2 border-aqua-500" : "hover:bg-white/4 border-l-2 border-transparent"
                }`}
              >
                <div className="flex items-center gap-1.5 mb-0.5">
                  <svg className="w-3 h-3 text-white/25 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className={`text-[10px] font-medium truncate ${doc.active ? "text-aqua-300" : "text-white/40"}`}>{doc.name}</span>
                </div>
                <p className="text-white/20 text-[9px] ml-4.5">{doc.updated}</p>
              </div>
            ))}
          </div>
          {/* Stats footer */}
          <div className="px-3 py-2.5 border-t border-white/5 space-y-1">
            <div className="flex justify-between">
              <span className="text-white/20 text-[9px]">Docs indexed</span>
              <span className="text-white/40 text-[9px] font-mono">8,240</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/20 text-[9px]">Queries today</span>
              <span className="text-teal-400 text-[9px] font-mono">342</span>
            </div>
          </div>
        </div>

        {/* Main chat area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Chat header */}
          <div className="flex items-center gap-2.5 px-4 py-2.5 border-b border-white/6 bg-white/2 flex-shrink-0">
            <div className="w-6 h-6 rounded-full bg-aqua-600/20 border border-aqua-600/30 flex items-center justify-center flex-shrink-0">
              <svg className="w-3.5 h-3.5 text-aqua-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-white/70 text-[12px] font-semibold leading-none">Vidya AI</p>
              <p className="text-white/25 text-[9px] mt-0.5">Leave Policy · Leave_Policy_2025.pdf active</p>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <div className="flex items-center gap-1 bg-white/5 rounded-full px-2 py-1">
                <span className="w-1 h-1 rounded-full bg-green-400" />
                <span className="text-white/30 text-[9px]">EN · HI</span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 px-4 py-4 space-y-3 overflow-hidden">
            {/* User message */}
            <div className="flex justify-end">
              <div className="max-w-[80%] bg-sapphire-500/20 border border-sapphire-500/20 rounded-2xl rounded-tr-sm px-3.5 py-2.5">
                <p className="text-white/85 text-[12px] leading-relaxed">How many casual leaves am I entitled to per year?</p>
              </div>
            </div>

            {/* Assistant message */}
            <div className="flex justify-start gap-2">
              <div className="w-5 h-5 rounded-full bg-aqua-600/20 border border-aqua-600/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-aqua-400 text-[8px] font-bold">V</span>
              </div>
              <div className="max-w-[85%]">
                <div className="bg-white/6 border border-white/8 rounded-2xl rounded-tl-sm px-3.5 py-2.5">
                  <p className="text-white/80 text-[12px] leading-relaxed">
                    You are entitled to <span className="text-white font-semibold">12 casual leaves</span> per calendar year. These cannot be carried forward and lapse on 31st December.
                  </p>
                  {/* Source citation */}
                  <div className="mt-2 flex items-center gap-1.5 border-t border-white/6 pt-1.5">
                    <svg className="w-3 h-3 text-white/25 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-white/30 text-[9px] font-mono">Leave_Policy_2025.pdf · Section 2.3 · Page 4</span>
                    <span className="ml-auto text-[9px] text-aqua-400/70 font-semibold">98% conf.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* User follow-up */}
            <div className="flex justify-end">
              <div className="max-w-[80%] bg-sapphire-500/20 border border-sapphire-500/20 rounded-2xl rounded-tr-sm px-3.5 py-2.5">
                <p className="text-white/85 text-[12px] leading-relaxed">क्या इन्हें आधे दिन में ले सकते हैं?</p>
              </div>
            </div>

            {/* Assistant — Hindi reply */}
            <div className="flex justify-start gap-2">
              <div className="w-5 h-5 rounded-full bg-aqua-600/20 border border-aqua-600/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-aqua-400 text-[8px] font-bold">V</span>
              </div>
              <div className="max-w-[85%]">
                <div className="bg-white/6 border border-white/8 rounded-2xl rounded-tl-sm px-3.5 py-2.5">
                  <p className="text-white/80 text-[12px] leading-relaxed">
                    हाँ। Section 2.3(c) के अनुसार casual leaves को <span className="text-white font-semibold">half-day units</span> में लिया जा सकता है — प्रत्येक half-day आपके balance से 0.5 leave काटता है।
                  </p>
                  <div className="mt-2 flex items-center gap-1.5 border-t border-white/6 pt-1.5">
                    <svg className="w-3 h-3 text-white/25 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-white/30 text-[9px] font-mono">Leave_Policy_2025.pdf · Section 2.3(c) · Page 4</span>
                    <span className="ml-auto text-[9px] text-aqua-400/70 font-semibold">99% conf.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Input bar */}
          <div className="px-4 pb-4 pt-2 flex-shrink-0">
            <div className="flex items-center gap-2 bg-white/5 border border-white/8 rounded-xl px-3.5 py-2.5">
              <svg className="w-3.5 h-3.5 text-white/20 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="text-white/20 text-[11px] flex-1">Ask anything about company policies...</span>
              <div className="flex items-center gap-1.5">
                <span className="text-[9px] text-white/20 bg-white/5 px-1.5 py-0.5 rounded font-mono">EN</span>
                <span className="text-[9px] text-aqua-400/60 bg-aqua-600/10 px-1.5 py-0.5 rounded font-mono">⏎</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- Main export --- */

export default function ProductSpotlights() {
  return (
    <section className="bg-paper section-pad">
      <div className="container-xl">
        <SectionHeader
          eyebrow="Built for enterprise. Ready to deploy."
          title="Three platforms, purpose-built."
          description="Each platform solves a specific enterprise problem — and they work better together."
          className="mb-20"
        />

        <div className="space-y-24 lg:space-y-32">
          <Spotlight
            tag="Cybersecurity"
            tagColor="bg-crimson-500/10 text-crimson-600 border-crimson-500/20"
            product="Surakshitam"
            productHref="/products/surakshitam"
            headline="Close the gaps in your security posture before they are exploited."
            description="Surakshitam is a comprehensive cybersecurity suite combining managed firewall, continuous vulnerability scanning, and professional penetration testing — backed by a 15-minute critical response guarantee."
            subProducts={[
              { name: "Kavach", desc: "Managed firewall and perimeter defense" },
              { name: "Durg", desc: "Automated vulnerability detection" },
              { name: "Shastra", desc: "Ethical penetration testing" },
            ]}
            capabilities={[
              { title: "Kavach — Managed firewall", desc: "Perimeter defense tuned to your network topology, not generic rulesets." },
              { title: "Durg — Vulnerability scanning", desc: "Continuous, automated detection and prioritized remediation reporting." },
              { title: "Shastra — Penetration testing", desc: "Red-team exercises that test your defenses under real-world conditions." },
              { title: "24/7 incident response", desc: "15-minute response SLA for critical threats. Always staffed." },
            ]}
            accent="crimson"
            accentLight="crimson-50"
            ctaColor="text-crimson-600 hover:text-crimson-700"
            visual={<SurakshitamVisual />}
          />

          <Spotlight
            tag="AI & Automation"
            tagColor="bg-teal-600/10 text-teal-700 border-teal-600/20"
            product="Aurobit"
            productHref="/products/aurobit"
            headline="Stop managing operations manually. Let Aurobit handle the noise."
            description="Aurobit automates the workflows, runbooks, and incident responses that consume your team's capacity — and surfaces the predictive signals that let you act before problems occur."
            capabilities={[
              { title: "Runbook automation", desc: "Encode your best-practice responses once; execute them automatically at scale." },
              { title: "Automated incident management", desc: "Detection, routing, escalation, and resolution — without manual triage." },
              { title: "AIOps and predictive analytics", desc: "Move from reactive monitoring to proactive prevention with ML-driven insights." },
              { title: "Cross-system workflow optimization", desc: "Connect your ITSM, monitoring, and communication tools into unified ops." },
            ]}
            accent="teal"
            accentLight="teal-50"
            ctaColor="text-teal-700 hover:text-teal-800"
            visual={<AurobitVisual />}
            reverse
          />

          <Spotlight
            tag="Knowledge Intelligence"
            tagColor="bg-aqua-600/10 text-aqua-700 border-aqua-600/20"
            product="Vidya AI"
            productHref="/products/vidya-ai"
            headline="Every policy question answered instantly. Inside your infrastructure."
            description="Vidya AI makes your internal knowledge accessible through natural language — without sending sensitive data to external AI services. It runs on your servers, in your language."
            capabilities={[
              { title: "Local LLM deployment", desc: "Zero data leaves your network. Full control over model and infrastructure." },
              { title: "Multi-document indexing", desc: "PDFs, Word docs, SharePoint, wikis — all searchable from a single interface." },
              { title: "Multi-language support", desc: "English, Hindi, and regional languages. Employees ask in any language." },
              { title: "Audit trails and analytics", desc: "Track every query. Identify knowledge gaps. Comply with ease." },
            ]}
            accent="aqua"
            accentLight="aqua-50"
            ctaColor="text-aqua-700 hover:text-aqua-800"
            visual={<VidyaVisual />}
          />
        </div>
      </div>
    </section>
  );
}
