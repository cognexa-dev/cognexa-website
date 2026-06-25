import type { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Cognexa Technologies",
  description:
    "Cognexa Technologies is an Indian enterprise technology company delivering cybersecurity (Surakshitam), AI automation (Aurobit), and knowledge intelligence (Vidya AI) platforms to mid-to-large businesses.",
  alternates: { canonical: "https://cognexa.in/about" },
};

const values = [
  {
    title: "Outcomes over activity",
    description:
      "Every engagement is measured by what actually changes — not the hours logged or slides delivered. If it does not produce a measurable result, we do not recommend it.",
  },
  {
    title: "Enterprise discipline",
    description:
      "We design for compliance, security, and governance from the start — not as afterthoughts. Enterprise environments have real constraints. We build for them.",
  },
  {
    title: "Practical AI adoption",
    description:
      "AI that does not fit your workflows does not get adopted. We map automation to real operational patterns, privacy requirements, and measurable outcomes.",
  },
  {
    title: "Long-term partnership",
    description:
      "We do not disappear after go-live. We stay engaged, monitor results, and help you compound the gains over time. Implementation is the beginning, not the end.",
  },
];

const platforms = [
  {
    name: "Surakshitam",
    role: "Enterprise Cybersecurity",
    color: "bg-crimson-500/8 border-crimson-200 text-crimson-600",
  },
  {
    name: "Aurobit",
    role: "AI & Automation",
    color: "bg-teal-600/8 border-teal-200 text-teal-700",
  },
  {
    name: "Vidya AI",
    role: "Knowledge Intelligence",
    color: "bg-aqua-600/8 border-aqua-200 text-aqua-700",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-navy-900 py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-50" />
        <div className="relative container-xl max-w-3xl">
          <p className="eyebrow-light mb-5">About Cognexa</p>
          <h1 className="font-display font-bold text-4xl lg:text-6xl text-white leading-tight text-balance mb-6">
            Built for leaders who need action, not another report.
          </h1>
          <p className="text-white/60 text-xl leading-relaxed">
            Cognexa is an enterprise technology company that helps organizations protect their systems, automate their operations, and unlock the intelligence inside their data — through purpose-built platforms and the expertise to deploy them.
          </p>
        </div>
      </div>

      {/* Mission */}
      <section className="section-pad bg-white">
        <div className="container-xl grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="eyebrow mb-4">Our mission</p>
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-ink mb-6 text-balance">
              Intelligence infrastructure for the modern enterprise.
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-6">
              Enterprise environments face an impossible challenge: the complexity of their systems grows faster than the capacity of their teams to manage them. Security threats escalate. Data quality deteriorates. Operational overhead compounds.
            </p>
            <p className="text-muted text-lg leading-relaxed mb-6">
              We exist to close that gap. Not with generic software that requires months of customization, but with integrated platforms designed from the ground up for the constraints of real enterprise environments — on-premise requirements, multilingual workforces, regulatory frameworks, and the realities of Indian infrastructure.
            </p>
            <p className="text-muted text-lg leading-relaxed">
              Cognexa is India-first, built for the businesses that keep this economy running — in banking, manufacturing, healthcare, government, and logistics.
            </p>
          </div>

          {/* Platform cards */}
          <div className="space-y-4">
            <p className="eyebrow mb-6">Our platforms</p>
            {platforms.map((p) => (
              <div
                key={p.name}
                className={`flex items-center gap-4 rounded-xl border p-5 ${p.color}`}
              >
                <div className="flex-1">
                  <p className="font-display font-bold text-lg text-ink">{p.name}</p>
                  <p className="text-sm text-muted">{p.role}</p>
                </div>
                <svg className="w-5 h-5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            ))}
            <div className="rounded-xl border border-slate-100 bg-paper p-5">
              <p className="font-semibold text-sm text-ink">Enterprise Data Management</p>
              <p className="text-sm text-muted mt-0.5">MDM, cleansing, enrichment, governance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-paper border-t border-slate-100">
        <div className="container-xl">
          <p className="eyebrow text-center mb-4">How we work</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-ink text-center mb-16 text-balance max-w-2xl mx-auto">
            The principles behind every engagement.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-slate-100 bg-white p-8">
                <h3 className="font-display font-bold text-xl text-ink mb-3">{v.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-30" />
        <div className="relative container-xl text-center">
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-4 text-balance">
            Ready to work with us?
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
            Start with a free security and AI readiness audit. We will identify where we can help most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Book a Free Audit →
            </Button>
            <a
              href="mailto:sales@cognexa.in"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-white/20 text-white font-semibold text-base hover:border-white/40 hover:bg-white/10 transition-all"
            >
              sales@cognexa.in
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
