import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";

const BASE = "https://cognexa.in";

export const metadata: Metadata = {
  title: "Aurobit — AI Automation & AIOps Platform",
  description:
    "Aurobit by Cognexa automates runbooks, incident management, and AIOps workflows for enterprise operations. Reduce MTTR by 60% and automate 94% of incidents.",
  alternates: { canonical: `${BASE}/products/aurobit` },
  openGraph: {
    title: "Aurobit — AI Automation & AIOps Platform | Cognexa",
    description: "Runbook automation, predictive AIOps, and intelligent incident management for enterprise ops.",
    url: `${BASE}/products/aurobit`,
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": `${BASE}/products/aurobit#product`,
      name: "Aurobit",
      alternateName: ["Aurobit Platform", "Aurobit AIOps"],
      applicationCategory: "BusinessApplication",
      operatingSystem: "Any",
      description:
        "Aurobit is Cognexa's AI-powered operations and automation platform that automates runbooks, manages incidents, and applies AIOps-driven predictive analytics to enterprise infrastructure.",
      featureList: [
        "Runbook automation for enterprise operations",
        "Automated incident detection, routing, and resolution",
        "AIOps and predictive analytics",
        "Cross-system workflow orchestration",
        "ITSM and monitoring tool integration",
        "Real-time operations intelligence dashboard",
      ],
      provider: { "@id": `${BASE}/#organization` },
      url: `${BASE}/products/aurobit`,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Aurobit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Aurobit is Cognexa's AI automation and AIOps platform that automates operational runbooks, manages IT incidents from detection to resolution, and surfaces predictive intelligence — enabling enterprises to shift from reactive to proactive operations.",
          },
        },
        {
          "@type": "Question",
          name: "What is AIOps?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AIOps (Artificial Intelligence for IT Operations) uses machine learning and analytics to automate and enhance IT operations. Aurobit applies AIOps to detect patterns, predict incidents before they occur, and automate response — reducing manual workload and mean time to resolution (MTTR).",
          },
        },
        {
          "@type": "Question",
          name: "What is runbook automation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Runbook automation encodes operational best-practice procedures — such as restart sequences, scaling actions, or failover steps — so they execute automatically when triggered, eliminating manual intervention for routine incidents.",
          },
        },
        {
          "@type": "Question",
          name: "How does Aurobit reduce operational overhead?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Aurobit automatically classifies, routes, and resolves up to 94% of operational incidents without human intervention. This reduces mean time to resolution (MTTR) by up to 60% and frees IT teams to focus on strategic work rather than routine triage.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE },
        { "@type": "ListItem", position: 2, name: "Products", item: `${BASE}/products` },
        { "@type": "ListItem", position: 3, name: "Aurobit", item: `${BASE}/products/aurobit` },
      ],
    },
  ],
};

const capabilities = [
  {
    title: "Runbook Automation",
    description:
      "Encode your best-practice operational responses once. Aurobit executes them automatically — consistently, at scale, without human error.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "Incident Management",
    description:
      "Automated detection, intelligent routing, escalation, and resolution — so your team handles the exceptions, not the routine.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    ),
  },
  {
    title: "AIOps and Predictive Analytics",
    description:
      "Move from reactive monitoring to proactive prevention. Aurobit surfaces patterns in your operational data before they become incidents.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Workflow Optimization",
    description:
      "Connect your ITSM, monitoring, and communication tools into a unified operations layer. No more context switching between disconnected systems.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
];

const outcomes = [
  { metric: "60%", label: "Reduction in mean time to resolution (MTTR)" },
  { metric: "40%", label: "Drop in manual operational overhead" },
  { metric: "3×", label: "Faster incident detection vs. manual monitoring" },
  { metric: "24/7", label: "Continuous automated operations coverage" },
];

export default function AurobitPage() {
  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      {/* Hero */}
      <div className="bg-navy-900 py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-50" />
        <div className="relative container-xl">
          <div className="max-w-3xl">
            <span className="tag bg-teal-600/15 text-teal-400 border border-teal-600/20 mb-5 inline-flex">
              AI & Automation Platform
            </span>
            <h1 className="font-display font-bold text-4xl lg:text-6xl text-white leading-tight text-balance mb-6">
              Aurobit
            </h1>
            <p className="text-white/60 text-xl leading-relaxed mb-8 max-w-xl">
              AIOps and automation platform that handles the operational work your team should not be doing manually — runbooks, incident response, workflow orchestration, and predictive analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="teal" size="lg">
                Request an Automation Assessment
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
              <Button href="/solutions/automation" variant="ghost-light" size="lg">
                Learn about our approach
              </Button>
            </div>
          </div>
          {/* Outcomes */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pt-16 border-t border-white/10">
            {outcomes.map((o) => (
              <div key={o.metric}>
                <p className="font-display font-bold text-3xl text-teal-400 mb-1">{o.metric}</p>
                <p className="text-white/50 text-sm">{o.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Capabilities */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <SectionHeader
            eyebrow="Platform capabilities"
            title="Everything operational, automated."
            description="Aurobit is the layer between your monitoring tools and your team — handling the routine so your people can focus on what matters."
            className="mb-16"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((cap) => (
              <div key={cap.title} className="rounded-2xl border border-slate-100 bg-white p-8 hover:border-teal-200 hover:shadow-enterprise transition-all">
                <div className="w-12 h-12 rounded-xl bg-teal-600/8 flex items-center justify-center text-teal-600 mb-5">
                  {cap.icon}
                </div>
                <h3 className="font-display font-bold text-xl text-ink mb-3">{cap.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-700 py-16 lg:py-20">
        <div className="container-xl text-center">
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-4 text-balance">
            See how much Aurobit can automate.
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            We will map your current operational workflows and show you exactly where Aurobit creates the most leverage.
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            Book an Automation Assessment →
          </Button>
        </div>
      </section>
    </div>
  );
}
