import SectionHeader from "@/components/ui/SectionHeader";

const steps = [
  {
    number: "01",
    title: "Assess",
    description:
      "Understand your security posture, data quality issues, automation opportunities, and business priorities. No assumptions — we start with a structured discovery.",
  },
  {
    number: "02",
    title: "Prioritize",
    description:
      "Build a practical roadmap with risk, impact, timeline, and cost-benefit clarity. Every recommendation is ranked by what delivers the fastest, most durable value.",
  },
  {
    number: "03",
    title: "Implement",
    description:
      "Deploy the right combination of platforms, workflows, integrations, and controls. Rollout is phased to minimize disruption and maximize adoption.",
  },
  {
    number: "04",
    title: "Support",
    description:
      "Monitor, optimize, and support the environment after launch. We stay engaged long-term — because the real gains compound over time, not on day one.",
  },
];

export default function Process() {
  return (
    <section className="bg-white section-pad border-t border-slate-100">
      <div className="container-xl">
        <SectionHeader
          eyebrow="Engagement model"
          title="A clear path from assessment to execution."
          description="No ambiguity. No filler. A structured process that produces decisions, not slide decks."
          className="mb-16"
        />

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" aria-hidden="true" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Number bubble */}
                <div className="relative mb-6 flex items-center gap-4 lg:block">
                  <div className="relative z-10 w-20 h-20 rounded-2xl bg-navy-900 flex items-center justify-center flex-shrink-0 shadow-enterprise">
                    <span className="font-display font-bold text-2xl text-white/80">{step.number}</span>
                  </div>
                  {/* Mobile connector */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex-1 h-px bg-slate-200" aria-hidden="true" />
                  )}
                </div>

                <h3 className="font-display font-bold text-xl text-ink mb-3">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
