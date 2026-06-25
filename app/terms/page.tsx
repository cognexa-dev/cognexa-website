import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Cognexa Technologies",
  description:
    "Terms governing use of Cognexa Technologies website and services. Read before using cognexa.in.",
  alternates: { canonical: "https://cognexa.in/terms" },
};

const sections = [
  {
    heading: "Acceptance of Terms",
    content: [
      "By accessing and using cognexa.in (the 'Site'), you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use this Site.",
      "These terms apply to all visitors, leads, and anyone who submits an enquiry through the Site. They govern use of the Site itself, not the separate agreements that govern Cognexa's service engagements, which are covered by individual service agreements.",
    ],
  },
  {
    heading: "Use of the Site",
    content: [
      "You may use this Site for lawful purposes and in accordance with these Terms. You agree not to: use the Site in any way that violates applicable law, transmit any unsolicited or unauthorised advertising, attempt to gain unauthorised access to any part of the Site or its systems, or engage in any conduct that restricts or inhibits anyone's use of the Site.",
      "Cognexa Technologies reserves the right to modify, suspend, or discontinue any part of the Site at any time without notice.",
    ],
  },
  {
    heading: "Intellectual Property",
    content: [
      "All content on this Site — including text, graphics, product names (Surakshitam, Kavach, Durg, Shastra, Aurobit, Vidya AI), logos, and trade marks — is the property of Cognexa Technologies and is protected by applicable intellectual property laws.",
      "You may not reproduce, distribute, modify, or create derivative works from any content on this Site without prior written permission from Cognexa Technologies.",
    ],
  },
  {
    heading: "Product and Service Information",
    content: [
      "Information about Cognexa's products and services on this Site is provided for general informational purposes. Product specifications, pricing, and availability may change. Actual service terms are governed by the applicable engagement agreements.",
      "Case study outcomes and statistics referenced on this Site represent results achieved in specific client contexts and are not a guarantee of similar results for any prospective client.",
    ],
  },
  {
    heading: "Disclaimer of Warranties",
    content: [
      "This Site and its content are provided 'as is' without warranties of any kind, whether express or implied. Cognexa Technologies does not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.",
      "To the fullest extent permitted by law, Cognexa disclaims all warranties including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.",
    ],
  },
  {
    heading: "Limitation of Liability",
    content: [
      "To the fullest extent permitted by applicable law, Cognexa Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this Site or reliance on any information on this Site.",
      "Our aggregate liability for any claim arising from use of this Site shall not exceed INR 10,000.",
    ],
  },
  {
    heading: "Third-Party Links",
    content: [
      "This Site may contain links to third-party websites. These links are provided for convenience only. Cognexa Technologies does not endorse, control, or take responsibility for the content of any linked site.",
    ],
  },
  {
    heading: "Governing Law",
    content: [
      "These Terms are governed by the laws of India. Any dispute arising from these Terms or your use of this Site shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.",
    ],
  },
  {
    heading: "Changes to These Terms",
    content: [
      "We may update these Terms from time to time. Material changes will be indicated by an updated date at the top of this page. Continued use of the Site after changes constitutes acceptance of the updated Terms.",
    ],
  },
  {
    heading: "Contact",
    content: [
      "Questions about these Terms? Contact us at sales@cognexa.in or call +91 98989 31509.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="bg-white">
      <div className="bg-navy-900 py-14 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-30" />
        <div className="relative container-xl max-w-3xl">
          <p className="eyebrow-light mb-4">Legal</p>
          <h1 className="font-display font-bold text-3xl lg:text-4xl text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-white/50 text-sm">
            Last updated: June 2026 · Cognexa Technologies
          </p>
        </div>
      </div>

      <div className="container-xl py-14 lg:py-20 max-w-3xl">
        <p className="text-muted text-base leading-relaxed mb-10">
          These Terms of Service govern your use of the Cognexa Technologies website. Please
          read them carefully. Service engagements are governed by separate agreements; these
          Terms apply to the Site itself.
        </p>

        <div className="space-y-10">
          {sections.map((section, i) => (
            <section key={i}>
              <h2 className="font-display font-bold text-xl text-ink mb-4">
                {section.heading}
              </h2>
              <div className="space-y-3">
                {section.content.map((para, j) => (
                  <p key={j} className="text-muted text-sm leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
