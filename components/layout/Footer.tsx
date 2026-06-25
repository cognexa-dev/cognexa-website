import Link from "next/link";
import Image from "next/image";

const nav = {
  Solutions: [
    { label: "Cybersecurity", href: "/solutions/cybersecurity" },
    { label: "AI & Automation", href: "/solutions/automation" },
    { label: "Knowledge Intelligence", href: "/solutions/knowledge" },
    { label: "Data Management", href: "/solutions/data-management" },
  ],
  Products: [
    { label: "Surakshitam", href: "/products/surakshitam" },
    { label: "Aurobit", href: "/products/aurobit" },
    { label: "Vidya AI", href: "/products/vidya-ai" },
  ],
  Industries: [
    { label: "Banking & Financial Services", href: "/industries#bfsi" },
    { label: "Manufacturing", href: "/industries#manufacturing" },
    { label: "Healthcare", href: "/industries#healthcare" },
    { label: "Government", href: "/industries#government" },
    { label: "Retail & Logistics", href: "/industries#retail" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/about#careers" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      <div className="container-xl pt-16 pb-8">
        {/* Top row */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 mb-16">
          {/* Brand col */}
          <div className="col-span-2">
            <Link href="/" className="inline-flex mb-4" aria-label="Cognexa home">
              <Image
                src="/cognexa-logo.webp"
                alt="Cognexa Technologies"
                width={100}
                height={40}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
              Intelligence infrastructure for the modern enterprise.
            </p>
            <div className="space-y-2">
              <a
                href="tel:+919898931509"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 98989 31509
              </a>
              <a
                href="mailto:sales@cognexa.in"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                sales@cognexa.in
              </a>
            </div>
          </div>

          {/* Nav cols */}
          {Object.entries(nav).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
                {group}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Product name strip */}
        <div className="flex flex-wrap gap-4 mb-12">
          {[
            { name: "Surakshitam", color: "bg-crimson-500/10 text-crimson-400 border-crimson-500/20" },
            { name: "Kavach", color: "bg-crimson-500/10 text-crimson-400 border-crimson-500/20" },
            { name: "Durg", color: "bg-crimson-500/10 text-crimson-400 border-crimson-500/20" },
            { name: "Shastra", color: "bg-crimson-500/10 text-crimson-400 border-crimson-500/20" },
            { name: "Aurobit", color: "bg-teal-600/10 text-teal-400 border-teal-600/20" },
            { name: "Vidya AI", color: "bg-aqua-600/10 text-aqua-500 border-aqua-600/20" },
          ].map((product) => (
            <span
              key={product.name}
              className={`text-xs font-semibold px-3 py-1 rounded-full border ${product.color}`}
            >
              {product.name}
            </span>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-white/10">
          <p className="text-sm text-white/35">
            © {new Date().getFullYear()} Cognexa Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-white/35 hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-white/35 hover:text-white/60 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
