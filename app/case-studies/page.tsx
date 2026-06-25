import type { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "See how Cognexa has helped enterprises across BFSI, Manufacturing, Healthcare, and Government with cybersecurity, AI automation, and knowledge intelligence.",
};

const caseStudies = [
  {
    industry: "BFSI",
    tag: "Surakshitam",
    tagColor: "bg-crimson-500/10 text-crimson-600 border-crimson-500/20",
    title: "Regional co-operative bank reduces incident response time by 65%",
    description:
      "A regional bank with 200+ branches deployed Surakshitam across its core banking and ATM network. Within 90 days, the security team achieved a 65% reduction in mean time to respond to critical incidents.",
    outcomes: ["65% faster incident response", "200+ endpoints protected", "Zero critical breaches in 18 months"],
  },
  {
    industry: "Manufacturing",
    tag: "Aurobit",
    tagColor: "bg-teal-600/10 text-teal-700 border-teal-600/20",
    title: "Auto-components manufacturer automates 80% of IT incident triage",
    description:
      "A mid-size manufacturing company was spending 40% of IT capacity on incident triage. After deploying Aurobit, 80% of incidents were automatically classified, routed, and resolved without human intervention.",
    outcomes: ["80% of incidents auto-resolved", "40% reduction in IT overhead", "3× faster production uptime recovery"],
  },
  {
    industry: "Healthcare",
    tag: "Vidya AI",
    tagColor: "bg-aqua-600/10 text-aqua-700 border-aqua-600/20",
    title: "500-bed hospital cuts policy query volume by 70% with Vidya AI",
    description:
      "A multi-speciality hospital deployed Vidya AI over its clinical protocols, HR policies, and administrative SOPs. Staff can now query 12,000+ documents in English, Hindi, and Marathi — with answers in under one second.",
    outcomes: ["70% fewer HR queries", "12,000+ documents indexed", "Marathi + Hindi + English support"],
  },
  {
    industry: "Government",
    tag: "Surakshitam",
    tagColor: "bg-crimson-500/10 text-crimson-600 border-crimson-500/20",
    title: "State government department passes security audit after Surakshitam deployment",
    description:
      "A state government IT department facing a mandatory CERT-In compliance audit engaged Cognexa. Within 60 days, Surakshitam was deployed, vulnerabilities were remediated, and the department passed the audit.",
    outcomes: ["CERT-In audit passed", "All critical vulnerabilities closed", "60-day deployment timeline"],
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="bg-white">
      <div className="bg-navy-900 py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-40" />
        <div className="relative container-xl max-w-3xl">
          <p className="eyebrow-light mb-4">Case Studies</p>
          <h1 className="font-display font-bold text-4xl lg:text-5xl text-white text-balance mb-5">
            See it in practice.
          </h1>
          <p className="text-white/60 text-lg max-w-xl">
            How Cognexa platforms deliver measurable outcomes for enterprises across India.
          </p>
        </div>
      </div>

      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((cs) => (
              <article
                key={cs.title}
                className="rounded-2xl border border-slate-100 bg-white p-8 hover:shadow-enterprise-lg hover:border-slate-200 transition-all"
              >
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-xs font-semibold text-muted border border-slate-200 rounded-full px-3 py-1">
                    {cs.industry}
                  </span>
                  <span className={`tag ${cs.tagColor} text-[11px]`}>{cs.tag}</span>
                </div>
                <h2 className="font-display font-bold text-xl text-ink mb-4 text-balance leading-snug">
                  {cs.title}
                </h2>
                <p className="text-muted text-sm leading-relaxed mb-6">{cs.description}</p>
                <div className="space-y-2 mb-6">
                  {cs.outcomes.map((o) => (
                    <div key={o} className="flex items-center gap-2 text-sm font-semibold text-ink">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {o}
                    </div>
                  ))}
                </div>
                <button className="text-sm font-semibold text-sapphire-500 hover:text-sapphire-600 inline-flex items-center gap-1 transition-colors">
                  Read full case study
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-navy-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-30" />
        <div className="relative container-xl text-center">
          <h2 className="font-display font-bold text-2xl lg:text-3xl text-white mb-4 text-balance">
            Want to see results like these in your organization?
          </h2>
          <Button href="/contact" variant="primary" size="lg">
            Book a Free Audit →
          </Button>
        </div>
      </div>
    </div>
  );
}
