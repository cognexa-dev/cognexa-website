import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ThreePillars from "@/components/home/ThreePillars";
import ProofBand from "@/components/home/ProofBand";
import ProductSpotlights from "@/components/home/ProductSpotlights";
import Process from "@/components/home/Process";
import Industries from "@/components/home/Industries";
import TrustLogos from "@/components/home/TrustLogos";
import CtaBand from "@/components/home/CtaBand";

const BASE = "https://cognexa.in";

export const metadata: Metadata = {
  alternates: { canonical: BASE },
};

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${BASE}/#webpage`,
      url: BASE,
      name: "Cognexa Technologies — Intelligence Infrastructure for the Modern Enterprise",
      description:
        "Cognexa delivers enterprise cybersecurity (Surakshitam), AI automation (Aurobit), and knowledge intelligence (Vidya AI) platforms to mid-to-large businesses across India.",
      isPartOf: { "@id": `${BASE}/#website` },
      about: { "@id": `${BASE}/#organization` },
      inLanguage: "en-IN",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does Cognexa Technologies do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cognexa Technologies provides enterprise technology platforms and services across three areas: cybersecurity through Surakshitam (including Kavach firewall, Durg vulnerability scanning, and Shastra penetration testing), AI automation through Aurobit (AIOps, runbook automation, incident management), and knowledge intelligence through Vidya AI (private on-premise LLM for enterprise documents). The company also provides enterprise data management services.",
          },
        },
        {
          "@type": "Question",
          name: "Which industries does Cognexa serve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cognexa serves enterprises across Banking and Financial Services (BFSI), Manufacturing and Supply Chain, Healthcare and Life Sciences, Government and Public Sector, and Retail and Logistics.",
          },
        },
        {
          "@type": "Question",
          name: "How can I get a free cybersecurity audit from Cognexa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can book a free security and AI readiness audit by visiting cognexa.in/contact, calling +91 98989 31509, or emailing sales@cognexa.in. The audit covers your current security posture, AI readiness, and data governance — with a prioritized action plan delivered at no cost.",
          },
        },
        {
          "@type": "Question",
          name: "Is Cognexa based in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Cognexa Technologies is an India-based enterprise technology company, with implementations across BFSI, manufacturing, healthcare, government, and retail sectors throughout India.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <Hero />
      <ThreePillars />
      <ProofBand />
      <ProductSpotlights />
      <Process />
      <Industries />
      <TrustLogos />
      <CtaBand />
    </>
  );
}
