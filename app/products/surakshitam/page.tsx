import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";

const BASE = "https://cognexa.in";

export const metadata: Metadata = {
  title: "Surakshitam — Enterprise Cybersecurity Suite",
  description:
    "Surakshitam by Cognexa combines Kavach (managed firewall), Durg (vulnerability scanning), and Shastra (pen testing) into one enterprise cybersecurity suite with a 15-minute incident response SLA.",
  alternates: { canonical: `${BASE}/products/surakshitam` },
  openGraph: {
    title: "Surakshitam — Enterprise Cybersecurity Suite | Cognexa",
    description: "Kavach firewall, Durg vulnerability scanning, Shastra pen testing — 24/7 managed security for enterprise.",
    url: `${BASE}/products/surakshitam`,
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": `${BASE}/products/surakshitam#product`,
      name: "Surakshitam",
      alternateName: ["Surakshitam Cybersecurity Suite", "Surakshitam Platform"],
      applicationCategory: "SecurityApplication",
      operatingSystem: "Any",
      description:
        "Surakshitam is a comprehensive enterprise cybersecurity suite by Cognexa Technologies, combining managed firewall (Kavach), automated vulnerability scanning (Durg), and professional penetration testing (Shastra), backed by a 15-minute critical incident response SLA.",
      featureList: [
        "Kavach — managed firewall and perimeter defense",
        "Durg — automated vulnerability scanning and CVSS prioritization",
        "Shastra — professional penetration testing",
        "24/7 security operations and incident response",
        "15-minute critical incident response SLA",
        "Compliance-ready reporting",
      ],
      provider: { "@id": `${BASE}/#organization` },
      url: `${BASE}/products/surakshitam`,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Surakshitam?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Surakshitam is Cognexa's enterprise cybersecurity platform comprising three modules: Kavach (managed firewall), Durg (vulnerability scanning), and Shastra (penetration testing), supported by 24/7 security operations with a 15-minute critical response SLA.",
          },
        },
        {
          "@type": "Question",
          name: "What does Kavach do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kavach is Cognexa's managed firewall service. It handles enterprise perimeter defense, rule optimization, intrusion detection and prevention, VPN security, and real-time traffic analysis.",
          },
        },
        {
          "@type": "Question",
          name: "What is Durg vulnerability scanning?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Durg is an automated vulnerability scanning tool that continuously identifies security weaknesses across your infrastructure, prioritizes them by CVSS risk score, and generates actionable remediation reports.",
          },
        },
        {
          "@type": "Question",
          name: "What is Shastra penetration testing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Shastra is Cognexa's professional penetration testing service that simulates real-world attack scenarios — including web application, network, and social engineering attacks — to identify exploitable vulnerabilities before adversaries do.",
          },
        },
        {
          "@type": "Question",
          name: "What is the incident response SLA for Surakshitam?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cognexa targets a 15-minute critical incident response time for Surakshitam customers, backed by 24/7 security operations coverage.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE },
        { "@type": "ListItem", position: 2, name: "Products", item: `${BASE}/products` },
        { "@type": "ListItem", position: 3, name: "Surakshitam", item: `${BASE}/products/surakshitam` },
      ],
    },
  ],
};

const modules = [
  {
    name: "Kavach",
    subtitle: "Managed Firewall",
    color: "border-crimson-200 bg-crimson-500/4",
    iconColor: "text-crimson-500",
    tagColor: "bg-crimson-500/10 text-crimson-600 border-crimson-500/20",
    description:
      "Enterprise-grade firewall management tuned to your network topology. Kavach handles rule optimization, traffic analysis, and continuous policy enforcement — so your perimeter stays tight without burdening your IT team.",
    capabilities: [
      "Next-gen firewall deployment and management",
      "Intrusion detection and prevention (IDS/IPS)",
      "VPN and remote access security",
      "Real-time traffic analysis and alerting",
      "Compliance-ready policy documentation",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    name: "Durg",
    subtitle: "Vulnerability Scanning",
    color: "border-crimson-200 bg-crimson-500/4",
    iconColor: "text-crimson-500",
    tagColor: "bg-crimson-500/10 text-crimson-600 border-crimson-500/20",
    description:
      "Continuous automated scanning across your entire attack surface. Durg identifies vulnerabilities before attackers do, prioritizes them by risk severity, and generates remediation reports your team can act on immediately.",
    capabilities: [
      "Scheduled and on-demand vulnerability scanning",
      "CVSS-based risk prioritization",
      "Asset discovery and inventory management",
      "Integration with ticketing and ITSM tools",
      "Executive and technical reporting dashboards",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    name: "Shastra",
    subtitle: "Penetration Testing",
    color: "border-crimson-200 bg-crimson-500/4",
    iconColor: "text-crimson-500",
    tagColor: "bg-crimson-500/10 text-crimson-600 border-crimson-500/20",
    description:
      "Red-team testing that simulates the tactics of real attackers. Shastra exercises test your defenses under actual adversarial conditions — and the findings come with clear, actionable remediation plans.",
    capabilities: [
      "Web application and API penetration testing",
      "Network and infrastructure red-team exercises",
      "Social engineering and phishing simulation",
      "Cloud configuration security review",
      "Comprehensive findings report with remediation roadmap",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "15 min", label: "Critical incident response SLA" },
  { value: "24/7", label: "Security operations availability" },
  { value: "100%", label: "Compliance-ready reporting" },
  { value: "Zero", label: "Vendor lock-in" },
];

export default function SurakshitamPage() {
  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      {/* Hero */}
      <div className="bg-navy-900 py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-50" />
        <div className="relative container-xl">
          <div className="max-w-3xl">
            <span className="tag bg-crimson-500/15 text-crimson-400 border border-crimson-500/20 mb-5 inline-flex">
              Cybersecurity Platform
            </span>
            <h1 className="font-display font-bold text-4xl lg:text-6xl text-white leading-tight text-balance mb-6">
              Surakshitam
            </h1>
            <p className="text-white/60 text-xl leading-relaxed mb-8 max-w-xl">
              A complete enterprise cybersecurity suite — managed firewall, vulnerability scanning, and penetration testing — backed by a 15-minute critical response guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="crimson" size="lg">
                Book a Security Audit
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
              <Button href="/solutions/cybersecurity" variant="ghost-light" size="lg">
                Learn about our approach
              </Button>
            </div>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pt-16 border-t border-white/10">
            {stats.map((s) => (
              <div key={s.value}>
                <p className="font-display font-bold text-3xl text-crimson-400 mb-1">{s.value}</p>
                <p className="text-white/50 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modules */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <SectionHeader
            eyebrow="Platform modules"
            title="Three layers of defense."
            description="Surakshitam is not a single product — it is a coordinated suite of capabilities designed to cover your attack surface at every layer."
            className="mb-16"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {modules.map((mod) => (
              <div key={mod.name} className={`rounded-2xl border p-8 ${mod.color}`}>
                <div className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-5 shadow-sm ${mod.iconColor}`}>
                  {mod.icon}
                </div>
                <span className={`tag ${mod.tagColor} mb-3 inline-flex text-[11px]`}>{mod.subtitle}</span>
                <h3 className="font-display font-bold text-2xl text-ink mb-3">{mod.name}</h3>
                <p className="text-muted text-sm leading-relaxed mb-6">{mod.description}</p>
                <ul className="space-y-2.5">
                  {mod.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-2 text-sm text-ink">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-crimson-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-crimson-500 py-16 lg:py-20">
        <div className="container-xl text-center">
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-4 text-balance">
            Ready to close your security gaps?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Start with a free Surakshitam assessment. We identify your highest-risk vulnerabilities and deliver a prioritized remediation plan at no cost.
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            Book Free Security Audit →
          </Button>
        </div>
      </section>
    </div>
  );
}
