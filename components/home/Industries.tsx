"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";

const industries = [
  {
    id: "bfsi",
    label: "Banking & Financial Services",
    short: "BFSI",
    useCases: [
      {
        platform: "Surakshitam",
        color: "text-crimson-400",
        badge: "bg-crimson-500/10 text-crimson-400 border-crimson-500/20",
        use: "Real-time threat monitoring across branch networks, ATMs, and core banking infrastructure.",
      },
      {
        platform: "Aurobit",
        color: "text-teal-400",
        badge: "bg-teal-600/10 text-teal-400 border-teal-600/20",
        use: "Automated incident response for transactional anomalies and API failures.",
      },
      {
        platform: "Vidya AI",
        color: "text-aqua-500",
        badge: "bg-aqua-600/10 text-aqua-400 border-aqua-600/20",
        use: "Instant RBI compliance policy answers for branch staff and ops teams.",
      },
    ],
    regulatory: "RBI · SEBI · PCI-DSS",
  },
  {
    id: "manufacturing",
    label: "Manufacturing",
    short: "Manufacturing",
    useCases: [
      {
        platform: "Surakshitam",
        color: "text-crimson-400",
        badge: "bg-crimson-500/10 text-crimson-400 border-crimson-500/20",
        use: "OT/IT network segmentation and vulnerability scanning across factory floors.",
      },
      {
        platform: "Aurobit",
        color: "text-teal-400",
        badge: "bg-teal-600/10 text-teal-400 border-teal-600/20",
        use: "Predictive maintenance alerts and automated runbooks for equipment downtime.",
      },
      {
        platform: "Vidya AI",
        color: "text-aqua-500",
        badge: "bg-aqua-600/10 text-aqua-400 border-aqua-600/20",
        use: "SOP and safety manual access for shop floor workers in regional languages.",
      },
    ],
    regulatory: "ISO 27001 · IEC 62443",
  },
  {
    id: "healthcare",
    label: "Healthcare",
    short: "Healthcare",
    useCases: [
      {
        platform: "Surakshitam",
        color: "text-crimson-400",
        badge: "bg-crimson-500/10 text-crimson-400 border-crimson-500/20",
        use: "HIPAA-aligned security controls for patient data, EMR systems, and DICOM endpoints.",
      },
      {
        platform: "Aurobit",
        color: "text-teal-400",
        badge: "bg-teal-600/10 text-teal-400 border-teal-600/20",
        use: "Automated HL7 integration monitoring and alert routing across clinical systems.",
      },
      {
        platform: "Vidya AI",
        color: "text-aqua-500",
        badge: "bg-aqua-600/10 text-aqua-400 border-aqua-600/20",
        use: "Clinical protocol and formulary lookup for nursing and administrative staff.",
      },
    ],
    regulatory: "NABH · HIPAA · DPDP Act",
  },
  {
    id: "government",
    label: "Government & Public Sector",
    short: "Government",
    useCases: [
      {
        platform: "Surakshitam",
        color: "text-crimson-400",
        badge: "bg-crimson-500/10 text-crimson-400 border-crimson-500/20",
        use: "Sovereign-grade perimeter defense and pen testing for critical national infrastructure.",
      },
      {
        platform: "Aurobit",
        color: "text-teal-400",
        badge: "bg-teal-600/10 text-teal-400 border-teal-600/20",
        use: "Automated e-governance workflow orchestration and SLA-based incident routing.",
      },
      {
        platform: "Vidya AI",
        color: "text-aqua-500",
        badge: "bg-aqua-600/10 text-aqua-400 border-aqua-600/20",
        use: "RTI, circular, and policy document lookup for officers and field staff.",
      },
    ],
    regulatory: "MEITY · CERT-In · NIC standards",
  },
  {
    id: "retail",
    label: "Retail & Logistics",
    short: "Retail",
    useCases: [
      {
        platform: "Surakshitam",
        color: "text-crimson-400",
        badge: "bg-crimson-500/10 text-crimson-400 border-crimson-500/20",
        use: "POS endpoint protection, PCI-DSS compliance scanning, and cardholder data monitoring.",
      },
      {
        platform: "Aurobit",
        color: "text-teal-400",
        badge: "bg-teal-600/10 text-teal-400 border-teal-600/20",
        use: "Supply chain alert automation and last-mile delivery SLA breach prediction.",
      },
      {
        platform: "Vidya AI",
        color: "text-aqua-500",
        badge: "bg-aqua-600/10 text-aqua-400 border-aqua-600/20",
        use: "Returns policy and SOP assistant for floor staff across multi-location retail.",
      },
    ],
    regulatory: "PCI-DSS · GST compliance",
  },
];

export default function Industries() {
  const [active, setActive] = useState("bfsi");
  const current = industries.find((i) => i.id === active)!;

  return (
    <section className="bg-navy-900 section-pad relative overflow-hidden" id="industries">
      <div className="absolute inset-0 grid-lines opacity-60" />

      <div className="relative container-xl">
        <SectionHeader
          eyebrow="Industries we serve"
          title="Built for sectors where failure is not an option."
          description="Every industry has distinct compliance requirements, operational rhythms, and risk profiles. We have built for all of them."
          light
          className="mb-12"
        />

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Industry selector">
          {industries.map((ind) => (
            <button
              key={ind.id}
              role="tab"
              aria-selected={active === ind.id}
              aria-controls={`panel-${ind.id}`}
              onClick={() => setActive(ind.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-150 border
                ${active === ind.id
                  ? "bg-white text-ink border-white shadow-sm"
                  : "bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white/80"
                }`}
            >
              {ind.short}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <div
          id={`panel-${current.id}`}
          role="tabpanel"
          className="rounded-2xl border border-white/10 bg-white/4 backdrop-blur-sm p-8"
          key={current.id}
        >
          <div className="flex items-start justify-between flex-wrap gap-4 mb-8">
            <h3 className="font-display font-bold text-xl text-white">{current.label}</h3>
            <div className="flex items-center gap-2">
              <span className="text-xs text-white/40">Regulatory:</span>
              <span className="text-xs font-semibold text-white/60 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                {current.regulatory}
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {current.useCases.map((uc) => (
              <div key={uc.platform} className="bg-white/5 border border-white/8 rounded-xl p-5">
                <div className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold border mb-4 ${uc.badge}`}>
                  {uc.platform}
                </div>
                <p className="text-white/70 text-sm leading-relaxed">{uc.use}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
