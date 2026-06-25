import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Book a Free Security & AI Audit",
  description:
    "Request a free enterprise security and AI readiness audit from Cognexa. Our specialists assess your posture and deliver a prioritized action plan. No obligation.",
  alternates: { canonical: "https://cognexa.in/contact" },
  openGraph: {
    title: "Book a Free Audit | Cognexa Technologies",
    description: "Free enterprise cybersecurity and AI readiness audit. No obligation — just a clear action plan.",
    url: "https://cognexa.in/contact",
  },
};

const contactDetails = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: "Phone",
    value: "+91 98989 31509",
    href: "tel:+919898931509",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "Email",
    value: "sales@cognexa.in",
    href: "mailto:sales@cognexa.in",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Page header */}
      <div className="bg-navy-900 py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-40" />
        <div className="relative container-xl">
          <p className="eyebrow-light mb-4">Free assessment · No obligation</p>
          <h1 className="font-display font-bold text-4xl lg:text-5xl text-white mb-4 text-balance max-w-2xl">
            Book a Free Security & AI Audit
          </h1>
          <p className="text-white/60 text-lg max-w-xl">
            Tell us where your priorities are. We will identify risks, gaps, and the fastest path to measurable improvement.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container-xl py-16 lg:py-20">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact cards */}
            <div className="rounded-2xl border border-slate-100 bg-paper p-6 space-y-4">
              <h2 className="font-display font-bold text-lg text-ink">Get in touch directly</h2>
              {contactDetails.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-100 hover:border-sapphire-200 hover:shadow-sm transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-sapphire-500/8 flex items-center justify-center text-sapphire-500 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-muted">{item.label}</p>
                    <p className="text-sm font-semibold text-ink group-hover:text-sapphire-600 transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* What to expect */}
            <div className="rounded-2xl border border-slate-100 bg-white p-6">
              <h2 className="font-display font-bold text-base text-ink mb-4">What happens next</h2>
              <ol className="space-y-4">
                {[
                  { step: "01", text: "We review your submission and assign the right specialist." },
                  { step: "02", text: "You receive a call within 4 business hours to confirm scope." },
                  { step: "03", text: "We conduct a structured discovery session — typically 60 minutes." },
                  { step: "04", text: "You receive a written assessment and prioritized roadmap." },
                ].map((item) => (
                  <li key={item.step} className="flex gap-3">
                    <span className="font-mono text-xs font-bold text-sapphire-500 mt-0.5 flex-shrink-0">{item.step}</span>
                    <p className="text-sm text-muted">{item.text}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Trust note */}
            <div className="rounded-2xl bg-navy-900 p-6">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <div>
                  <p className="text-white font-semibold text-sm">No commitment required</p>
                  <p className="text-white/50 text-xs mt-1">The audit is genuinely free. There is no obligation to purchase, and we do not follow up with unsolicited sales calls.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
