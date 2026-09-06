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
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://www.linkedin.com/company/cognexatech/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cognexa on LinkedIn"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/cognexatechllp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cognexa on Instagram"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
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
