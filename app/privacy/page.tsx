import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Cognexa Technologies",
  description:
    "Cognexa Technologies privacy policy — how we collect, use, and protect personal data in accordance with India's DPDP Act, 2023.",
  alternates: { canonical: "https://cognexa.in/privacy" },
};

const sections = [
  {
    heading: "Information We Collect",
    content: [
      "When you submit an enquiry or audit request through our website, we collect: your name, company name, work email address, phone number, job title, and the details of your enquiry.",
      "When you visit cognexa.in, our analytics service (Google Analytics) automatically collects: pages visited, time on site, browser type, device type, and approximate geographic location. This data is aggregated and does not identify you personally.",
      "We do not collect sensitive personal data (financial information, health data, biometric data) through our website.",
    ],
  },
  {
    heading: "How We Use Your Information",
    content: [
      "Contact and enquiry data is used exclusively to: respond to your audit or product enquiry, schedule discovery calls, and deliver the requested assessment.",
      "We do not use your contact information to send unsolicited marketing communications. If you receive a follow-up from us, it is in direct response to your request.",
      "Analytics data is used in aggregate to understand how visitors use our site and to improve content and navigation.",
    ],
  },
  {
    heading: "Data Storage and Security",
    content: [
      "Enquiry data submitted via our contact form is transmitted securely over HTTPS and stored within our email and CRM systems. These systems are access-controlled and encrypted at rest.",
      "Cognexa Technologies implements reasonable technical and organisational security measures to protect personal data from unauthorised access, disclosure, or destruction.",
      "We retain contact enquiry data for a period of 24 months from the date of last interaction, after which it is deleted.",
    ],
  },
  {
    heading: "Data Sharing",
    content: [
      "We do not sell, rent, or trade your personal information to third parties.",
      "We share personal data only with service providers directly involved in operating our business (email delivery, analytics, CRM). All such providers are contractually required to process data only as instructed and to maintain appropriate security standards.",
      "We may disclose personal data if required by applicable law, court order, or regulatory authority.",
    ],
  },
  {
    heading: "Your Rights (DPDP Act, 2023)",
    content: [
      "Under India's Digital Personal Data Protection Act, 2023, you have the right to: access the personal data we hold about you, correct inaccurate personal data, request erasure of personal data where we have no lawful basis to retain it, and raise a grievance regarding how your data is handled.",
      "To exercise any of these rights, contact our Data Principal Officer at: sales@cognexa.in or by post at our registered office address.",
      "We will respond to verified requests within 30 days.",
    ],
  },
  {
    heading: "Cookies",
    content: [
      "cognexa.in uses Google Analytics cookies to measure site traffic. These cookies do not identify you personally and are governed by Google's privacy policy.",
      "You can opt out of Google Analytics tracking by installing the Google Analytics opt-out browser add-on, or by adjusting your browser's cookie settings.",
      "We do not use advertising cookies or cross-site tracking technologies.",
    ],
  },
  {
    heading: "Changes to This Policy",
    content: [
      "We may update this privacy policy from time to time. Material changes will be indicated by an updated 'Last Updated' date at the top of this page.",
      "Continued use of cognexa.in following a policy update constitutes acceptance of the revised policy.",
    ],
  },
  {
    heading: "Contact",
    content: [
      "For privacy-related questions or requests, contact us at sales@cognexa.in or call +91 98989 31509.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <div className="bg-navy-900 py-14 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-30" />
        <div className="relative container-xl max-w-3xl">
          <p className="eyebrow-light mb-4">Legal</p>
          <h1 className="font-display font-bold text-3xl lg:text-4xl text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/50 text-sm">
            Last updated: June 2026 · Cognexa Technologies
          </p>
        </div>
      </div>

      <div className="container-xl py-14 lg:py-20 max-w-3xl">
        <p className="text-muted text-base leading-relaxed mb-10">
          This privacy policy explains how Cognexa Technologies collects, uses, stores, and
          protects personal data through our website cognexa.in and in connection with our
          services. We are committed to compliance with India's Digital Personal Data Protection
          (DPDP) Act, 2023.
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
