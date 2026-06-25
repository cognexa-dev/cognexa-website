import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";

const pillars = [
  {
    id: "secure",
    label: "Secure",
    product: "Surakshitam",
    productHref: "/products/surakshitam",
    solutionHref: "/solutions/cybersecurity",
    accent: "crimson",
    tagColor: "bg-crimson-500/8 text-crimson-600 border border-crimson-500/15",
    iconBg: "bg-crimson-500/8",
    iconStroke: "#DC2626",
    borderHover: "hover:border-crimson-200",
    ctaColor: "text-crimson-600 hover:text-crimson-700",
    description:
      "Defense-grade cybersecurity for enterprises that cannot afford a breach. Continuous monitoring, threat detection, and a 15-minute critical response guarantee.",
    capabilities: [
      "Kavach — Managed firewall and perimeter defense",
      "Durg — Automated vulnerability detection and reporting",
      "Shastra — Ethical penetration testing and risk assessment",
      "24/7 security operations and incident response",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#DC2626" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    id: "automate",
    label: "Automate",
    product: "Aurobit",
    productHref: "/products/aurobit",
    solutionHref: "/solutions/automation",
    accent: "teal",
    tagColor: "bg-teal-600/8 text-teal-700 border border-teal-600/15",
    iconBg: "bg-teal-600/8",
    iconStroke: "#0F766E",
    borderHover: "hover:border-teal-200",
    ctaColor: "text-teal-700 hover:text-teal-800",
    description:
      "Your operations generate more signals than your team can act on. Aurobit turns that noise into decisions — automating incident response, runbooks, and surface-level predictions.",
    capabilities: [
      "Runbook automation for repeatable operational tasks",
      "Automated incident detection, routing, and resolution",
      "AIOps dashboards with predictive analytics",
      "Workflow optimization across enterprise systems",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#0F766E" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    id: "illuminate",
    label: "Illuminate",
    product: "Vidya AI",
    productHref: "/products/vidya-ai",
    solutionHref: "/solutions/knowledge",
    accent: "aqua",
    tagColor: "bg-aqua-600/8 text-aqua-700 border border-aqua-600/15",
    iconBg: "bg-aqua-600/8",
    iconStroke: "#0D9488",
    borderHover: "hover:border-aqua-200",
    ctaColor: "text-aqua-700 hover:text-aqua-800",
    description:
      "Your organization already has the answers — buried in policies, SOPs, and documents. Vidya AI makes them instantly accessible, running entirely inside your infrastructure.",
    capabilities: [
      "Indexes PDFs, Word docs, SharePoint, and internal wikis",
      "Local LLM — your data never leaves your infrastructure",
      "English, Hindi, and regional language support",
      "Role-based access, audit logs, and analytics dashboard",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#0D9488" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
];

const dataService = {
  label: "Enterprise Data Management",
  href: "/solutions/data-management",
  description:
    "Data that is not trusted is not used. We clean, deduplicate, enrich, and govern your master data — so every downstream system works from a single source of truth.",
  stats: ["10,000+ records cleaned", "MDM strategy and implementation", "Compliance-ready governance"],
};

export default function ThreePillars() {
  return (
    <section className="bg-white section-pad">
      <div className="container-xl">
        <SectionHeader
          eyebrow="What Cognexa delivers"
          title="Protect. Automate. Illuminate."
          description="Three distinct disciplines. One partner who can handle all of them — with the platforms and expertise to back it up."
          className="mb-16"
        />

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {pillars.map((pillar) => (
            <article
              key={pillar.id}
              className={`group relative rounded-2xl border border-slate-100 bg-white p-8 shadow-enterprise transition-all duration-200 ${pillar.borderHover} hover:shadow-enterprise-lg`}
            >
              {/* Label + icon */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-1">
                    {pillar.label}
                  </p>
                  <div className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${pillar.tagColor}`}>
                    {pillar.product}
                  </div>
                </div>
                <div className={`w-12 h-12 rounded-xl ${pillar.iconBg} flex items-center justify-center flex-shrink-0`}>
                  {pillar.icon}
                </div>
              </div>

              <p className="text-sm text-muted leading-relaxed mb-6">{pillar.description}</p>

              <ul className="space-y-2.5 mb-8">
                {pillar.capabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-2.5 text-sm text-ink">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={pillar.productHref}
                className={`inline-flex items-center gap-1 text-sm font-semibold ${pillar.ctaColor} transition-colors`}
              >
                Explore {pillar.product}
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </article>
          ))}
        </div>

        {/* Data Management service card — wider, different treatment */}
        <div className="rounded-2xl border border-slate-100 bg-paper p-8 flex flex-col md:flex-row gap-8 items-start md:items-center">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-sapphire-500/8 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#1B4FD8" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted">Service</p>
                <h3 className="font-display font-bold text-lg text-ink">{dataService.label}</h3>
              </div>
            </div>
            <p className="text-muted text-sm leading-relaxed max-w-xl">{dataService.description}</p>
          </div>
          <div className="flex flex-col gap-2 md:min-w-[220px]">
            {dataService.stats.map((stat) => (
              <div key={stat} className="flex items-center gap-2 text-sm text-ink">
                <svg className="w-4 h-4 flex-shrink-0 text-sapphire-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                {stat}
              </div>
            ))}
            <Link
              href={dataService.href}
              className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-sapphire-500 hover:text-sapphire-600 transition-colors"
            >
              Learn more
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
