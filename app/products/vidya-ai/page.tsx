import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";

const BASE = "https://cognexa.in";

export const metadata: Metadata = {
  title: "Vidya AI — Private Enterprise Knowledge Assistant",
  description:
    "Vidya AI turns policies, SOPs, and internal documents into an instantly searchable AI assistant. On-premise local LLM, English + Hindi + regional languages, zero data leaves your infrastructure.",
  alternates: { canonical: `${BASE}/products/vidya-ai` },
  openGraph: {
    title: "Vidya AI — Private Enterprise Knowledge Assistant | Cognexa",
    description: "Private LLM knowledge base for HR policies, SOPs, and compliance. 70% fewer admin queries. On-premise deployment.",
    url: `${BASE}/products/vidya-ai`,
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": `${BASE}/products/vidya-ai#product`,
      name: "Vidya AI",
      alternateName: ["Vidya AI Platform", "Vidya Knowledge Assistant"],
      applicationCategory: "BusinessApplication",
      operatingSystem: "Any",
      description:
        "Vidya AI is a private, on-premise knowledge intelligence platform by Cognexa Technologies that enables enterprise employees to query policies, SOPs, and internal documents using natural language — powered by a local LLM that keeps all data inside the organization's infrastructure.",
      featureList: [
        "On-premise local LLM deployment",
        "Multi-document indexing (PDF, Word, SharePoint, wikis)",
        "Multi-language support — English, Hindi, regional languages",
        "Role-based access control and audit logging",
        "Query analytics and knowledge gap detection",
        "Slack, Teams, web, and mobile access",
        "70% reduction in repetitive HR queries",
      ],
      offers: {
        "@type": "Offer",
        price: "60000",
        priceCurrency: "INR",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "60000",
          priceCurrency: "INR",
          unitText: "per month",
        },
        description: "Includes local LLM deployment, 10,000 documents, unlimited users and queries, multi-language support.",
      },
      provider: { "@id": `${BASE}/#organization` },
      url: `${BASE}/products/vidya-ai`,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Vidya AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Vidya AI is a private enterprise knowledge assistant by Cognexa Technologies. It allows employees to ask questions in natural language and receive instant, source-cited answers from internal policy documents, SOPs, and knowledge bases — without sending any data to external cloud AI services.",
          },
        },
        {
          "@type": "Question",
          name: "Does Vidya AI send data to external AI services like ChatGPT?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Vidya AI runs a local LLM (Large Language Model) on your own servers. No documents, queries, or responses ever leave your internal network. This makes it safe for sensitive HR, compliance, and operational data.",
          },
        },
        {
          "@type": "Question",
          name: "What languages does Vidya AI support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Vidya AI supports English, Hindi, and regional Indian languages. Employees can ask questions and receive answers in the same language, making it suitable for multilingual and geographically distributed workforces.",
          },
        },
        {
          "@type": "Question",
          name: "How much does Vidya AI cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Vidya AI is priced at ₹60,000 per month, which includes local LLM deployment, up to 10,000 indexed documents, unlimited users and queries, web, mobile, Slack, and Teams access, and multi-language support. A one-time implementation fee of ₹2,00,000 covers infrastructure setup, data migration, training, and go-live support.",
          },
        },
        {
          "@type": "Question",
          name: "What types of documents can Vidya AI index?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Vidya AI can index PDF files, Microsoft Word documents, SharePoint libraries, internal wikis, and other common enterprise document formats. It understands relationships between documents and always provides source citations with page references.",
          },
        },
        {
          "@type": "Question",
          name: "What is the ROI of Vidya AI for a 500-employee company?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For a 500-employee company, Vidya AI typically delivers a 70% reduction in repetitive HR queries, saving significant time for HR teams, and a 60% reduction in IT support tickets through self-service knowledge access. Annual productivity gains can exceed ₹70 lakhs.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE },
        { "@type": "ListItem", position: 2, name: "Products", item: `${BASE}/products` },
        { "@type": "ListItem", position: 3, name: "Vidya AI", item: `${BASE}/products/vidya-ai` },
      ],
    },
  ],
};

const features = [
  {
    title: "Local LLM deployment",
    description:
      "The AI model runs on your own servers. No document, query, or response ever leaves your network. Full control over model choice, hardware, and access.",
    badge: "Privacy-first",
    badgeColor: "bg-aqua-600/10 text-aqua-700 border-aqua-600/20",
  },
  {
    title: "Multi-document indexing",
    description:
      "Connect PDFs, Word documents, SharePoint libraries, internal wikis, and more. Vidya AI understands the relationships between documents and surfaces the right answer with its source citation.",
    badge: "Any format",
    badgeColor: "bg-aqua-600/10 text-aqua-700 border-aqua-600/20",
  },
  {
    title: "Multi-language support",
    description:
      "Employees ask in English, Hindi, or regional languages and receive accurate, source-cited answers in the same language. Works for organizations with diverse, distributed workforces.",
    badge: "English · Hindi · Regional",
    badgeColor: "bg-aqua-600/10 text-aqua-700 border-aqua-600/20",
  },
  {
    title: "Role-based access and audit logging",
    description:
      "Define which employees can access which documents. Every query is logged with timestamp, user, and source — compliance-ready from day one.",
    badge: "RBAC · Audit trail",
    badgeColor: "bg-aqua-600/10 text-aqua-700 border-aqua-600/20",
  },
  {
    title: "Analytics and knowledge gap detection",
    description:
      "See which questions are being asked most, which go unanswered, and where your documentation has gaps. Update policies and watch the improvement reflect instantly.",
    badge: "Analytics dashboard",
    badgeColor: "bg-aqua-600/10 text-aqua-700 border-aqua-600/20",
  },
  {
    title: "Multi-platform access",
    description:
      "Web interface, mobile app, Slack, and Microsoft Teams integrations. Employees access knowledge wherever they work — without switching contexts.",
    badge: "Web · Mobile · Slack · Teams",
    badgeColor: "bg-aqua-600/10 text-aqua-700 border-aqua-600/20",
  },
];

const useCases = [
  {
    department: "HR & People Ops",
    color: "border-aqua-200 bg-aqua-600/4",
    examples: [
      "Leave policy and entitlement queries",
      "WFH eligibility and application process",
      "Referral bonus and performance review details",
      "Onboarding checklists and joining formalities",
    ],
    outcome: "70% reduction in repetitive HR queries",
  },
  {
    department: "IT & Security",
    color: "border-aqua-200 bg-aqua-600/4",
    examples: [
      "System access request procedures",
      "VPN configuration for remote users",
      "Software installation approval workflow",
      "Data classification and handling guidelines",
    ],
    outcome: "60% fewer IT support tickets",
  },
  {
    department: "Operations & Safety",
    color: "border-aqua-200 bg-aqua-600/4",
    examples: [
      "Fire evacuation procedures by facility",
      "PPE requirements by work area",
      "Machine maintenance checklists",
      "Incident reporting process",
    ],
    outcome: "Zero SOP compliance gaps",
  },
  {
    department: "Compliance & Legal",
    color: "border-aqua-200 bg-aqua-600/4",
    examples: [
      "Data retention policy lookup",
      "Regulatory requirement interpretation",
      "Contract approval workflow",
      "Audit preparation document access",
    ],
    outcome: "100% audit-ready knowledge access",
  },
];

const roiStats = [
  { value: "70%", label: "Reduction in HR admin queries" },
  { value: "60%", label: "Fewer IT support tickets" },
  { value: "< 1 sec", label: "Average query response time" },
  { value: "0", label: "Data leaves your network" },
];

export default function VidyaAIPage() {
  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      {/* Hero */}
      <div className="bg-navy-900 py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-50" />
        <div className="relative container-xl grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="tag bg-aqua-600/15 text-aqua-400 border border-aqua-600/20 mb-5 inline-flex">
              Knowledge Intelligence Platform
            </span>
            <h1 className="font-display font-bold text-4xl lg:text-6xl text-white leading-tight text-balance mb-6">
              Vidya AI
            </h1>
            <p className="text-white/60 text-xl leading-relaxed mb-8 max-w-lg">
              Turn your policies, SOPs, and internal documents into an AI assistant employees can actually use — in natural language, in their language, inside your infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="aqua" size="lg">
                Request a Demo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
              <Button href="/solutions/knowledge" variant="ghost-light" size="lg">
                Learn about our approach
              </Button>
            </div>
          </div>

          {/* Demo chat preview */}
          <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10">
            <div className="flex items-center gap-3 px-5 py-4 border-b border-white/8">
              <div className="w-7 h-7 rounded-full bg-aqua-600/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-aqua-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <div>
                <p className="text-white text-sm font-semibold">Vidya AI</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="text-white/40 text-xs">On-premise · Private · Secure</span>
                </div>
              </div>
            </div>
            <div className="p-5 space-y-4">
              {[
                { role: "user", text: "How many casual leaves am I entitled to this year?" },
                { role: "bot", text: "You are entitled to 12 casual leaves per calendar year as per the Leave Policy (Section 2.3). These cannot be carried forward and lapse on 31st December.", source: "Leave_Policy_2025.pdf · p.4" },
                { role: "user", text: "Can I split them into half-days?" },
                { role: "bot", text: "Yes. Section 2.3(c) permits casual leaves to be availed in half-day units. A half-day is counted as 0.5 leaves against your balance.", source: "Leave_Policy_2025.pdf · p.4" },
              ].map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs leading-relaxed ${
                      msg.role === "user"
                        ? "bg-sapphire-500/25 text-white/90 rounded-tr-sm"
                        : "bg-white/6 border border-white/8 text-white/80 rounded-tl-sm"
                    }`}
                  >
                    {msg.text}
                    {"source" in msg && (
                      <p className="mt-1.5 text-white/30 text-[10px] font-mono">{msg.source}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ROI stats */}
        <div className="relative container-xl grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pt-16 border-t border-white/10">
          {roiStats.map((s) => (
            <div key={s.value}>
              <p className="font-display font-bold text-3xl text-aqua-500 mb-1">{s.value}</p>
              <p className="text-white/50 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <SectionHeader
            eyebrow="Platform capabilities"
            title="Built for enterprise knowledge, at scale."
            description="Vidya AI is not a generic chatbot. It is a purpose-built knowledge intelligence platform designed for the privacy, compliance, and scale requirements of large organizations."
            className="mb-16"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-slate-100 p-7 hover:border-aqua-200 hover:shadow-enterprise transition-all">
                <span className={`tag ${f.badgeColor} mb-4 inline-flex text-[11px]`}>{f.badge}</span>
                <h3 className="font-display font-bold text-lg text-ink mb-3">{f.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="section-pad bg-paper border-t border-slate-100">
        <div className="container-xl">
          <SectionHeader
            eyebrow="Use cases"
            title="Where Vidya AI delivers the most value."
            className="mb-14"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((uc) => (
              <div key={uc.department} className={`rounded-2xl border p-7 ${uc.color}`}>
                <h3 className="font-display font-bold text-lg text-ink mb-4">{uc.department}</h3>
                <ul className="space-y-2.5 mb-5">
                  {uc.examples.map((ex) => (
                    <li key={ex} className="flex items-start gap-2.5 text-sm text-muted">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-aqua-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                      {ex}
                    </li>
                  ))}
                </ul>
                <p className="text-xs font-semibold text-aqua-700 bg-aqua-600/8 border border-aqua-600/15 rounded-full px-3 py-1.5 inline-block">
                  {uc.outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing note */}
      <section className="bg-white section-pad border-t border-slate-100">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto rounded-2xl border border-slate-100 bg-paper p-10">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <p className="eyebrow mb-3">Pricing</p>
                <h2 className="font-display font-bold text-2xl text-ink mb-3">Simple, transparent pricing</h2>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  Vidya AI is priced as a managed subscription. The platform fee covers the software, updates, and support. Implementation is a one-time engagement.
                </p>
                <div className="space-y-3">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display font-bold text-3xl text-ink">₹60,000</span>
                    <span className="text-muted text-sm">/month</span>
                  </div>
                  <p className="text-sm text-muted">+ ₹2,00,000 one-time implementation</p>
                </div>
              </div>
              <div className="flex-1 space-y-3">
                {[
                  "Local LLM deployment on your infrastructure",
                  "Up to 10,000 documents indexed",
                  "Unlimited users and queries",
                  "Web, mobile, Slack, and Teams access",
                  "Multi-language support (English + Hindi + 1 regional)",
                  "Analytics dashboard and query insights",
                  "Role-based access control",
                  "Implementation, training, and go-live support",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-sm text-ink">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-aqua-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-200">
              <Button href="/contact" variant="aqua" size="lg">
                Request a Demo →
              </Button>
              <p className="mt-3 text-xs text-muted">
                Need more documents or custom features? Enterprise pricing available. Contact us.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
