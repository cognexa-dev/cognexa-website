"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Button from "@/components/ui/Button";

const solutions = [
  {
    label: "Cybersecurity",
    href: "/solutions/cybersecurity",
    desc: "Enterprise threat defense",
    accent: "text-crimson-500",
    dot: "bg-crimson-500",
  },
  {
    label: "AI & Automation",
    href: "/solutions/automation",
    desc: "AIOps and runbook automation",
    accent: "text-teal-600",
    dot: "bg-teal-600",
  },
  {
    label: "Knowledge Intelligence",
    href: "/solutions/knowledge",
    desc: "Conversational AI for enterprise",
    accent: "text-aqua-600",
    dot: "bg-aqua-600",
  },
  {
    label: "Data Management",
    href: "/solutions/data-management",
    desc: "MDM, cleansing, and governance",
    accent: "text-sapphire-500",
    dot: "bg-sapphire-500",
  },
];

const products = [
  {
    label: "Surakshitam",
    href: "/products/surakshitam",
    desc: "Cybersecurity suite — Kavach · Durg · Shastra",
    tag: "Security",
    tagColor: "bg-crimson-500/10 text-crimson-600",
  },
  {
    label: "Aurobit",
    href: "/products/aurobit",
    desc: "AI automation and AIOps platform",
    tag: "Automation",
    tagColor: "bg-teal-600/10 text-teal-700",
  },
  {
    label: "Vidya AI",
    href: "/products/vidya-ai",
    desc: "Private knowledge assistant with local LLM",
    tag: "Intelligence",
    tagColor: "bg-aqua-600/10 text-aqua-700",
  },
];

function DropdownMenu({
  items,
  type,
}: {
  items: typeof solutions | typeof products;
  type: "solutions" | "products";
}) {
  if (type === "solutions") {
    const s = items as typeof solutions;
    return (
      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 rounded-2xl bg-white shadow-enterprise-lg border border-slate-100 p-2 z-50">
        {s.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-slate-50 transition-colors group"
          >
            <span className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${item.dot}`} />
            <div>
              <p className={`text-sm font-semibold ${item.accent} group-hover:opacity-90`}>
                {item.label}
              </p>
              <p className="text-xs text-muted mt-0.5">{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    );
  }

  const p = items as typeof products;
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 rounded-2xl bg-white shadow-enterprise-lg border border-slate-100 p-2 z-50">
      {p.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-slate-50 transition-colors group"
        >
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <p className="text-sm font-semibold text-ink group-hover:text-sapphire-500 transition-colors">
                {item.label}
              </p>
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${item.tagColor}`}>
                {item.tag}
              </span>
            </div>
            <p className="text-xs text-muted mt-0.5">{item.desc}</p>
          </div>
          <svg className="w-4 h-4 text-slate-300 mt-1 group-hover:text-sapphire-500 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      ))}
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const openDropdown = (name: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setActiveDropdown(name);
  };

  const closeDropdown = () => {
    closeTimeout.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200
        ${scrolled ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-100" : "bg-white/90 backdrop-blur-lg"}`}
    >
      <div className="container-xl">
        <nav className="flex items-center justify-between h-16 lg:h-[72px]" aria-label="Main navigation">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0" aria-label="Cognexa home">
            <Image
              src="/cognexa-logo.webp"
              alt="Cognexa Technologies"
              width={108}
              height={44}
              priority
              className="h-11 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Solutions dropdown */}
            <div
              className="relative"
              onMouseEnter={() => openDropdown("solutions")}
              onMouseLeave={closeDropdown}
            >
              <button
                className="nav-link flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-slate-50"
                aria-haspopup="true"
                aria-expanded={activeDropdown === "solutions"}
              >
                Solutions
                <svg className={`w-3.5 h-3.5 transition-transform duration-150 ${activeDropdown === "solutions" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === "solutions" && (
                <DropdownMenu items={solutions} type="solutions" />
              )}
            </div>

            {/* Products dropdown */}
            <div
              className="relative"
              onMouseEnter={() => openDropdown("products")}
              onMouseLeave={closeDropdown}
            >
              <button
                className="nav-link flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-slate-50"
                aria-haspopup="true"
                aria-expanded={activeDropdown === "products"}
              >
                Products
                <svg className={`w-3.5 h-3.5 transition-transform duration-150 ${activeDropdown === "products" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === "products" && (
                <DropdownMenu items={products} type="products" />
              )}
            </div>

            <Link href="/industries" className="nav-link px-3 py-2 rounded-lg hover:bg-slate-50">
              Industries
            </Link>
            <Link href="/case-studies" className="nav-link px-3 py-2 rounded-lg hover:bg-slate-50">
              Case Studies
            </Link>
            <Link href="/blog" className="nav-link px-3 py-2 rounded-lg hover:bg-slate-50">
              Blog
            </Link>
            <Link href="/about" className="nav-link px-3 py-2 rounded-lg hover:bg-slate-50">
              About
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="tel:+919898931509" className="text-sm text-muted hover:text-ink transition-colors font-medium">
              +91 98989 31509
            </Link>
            <Button href="/contact" variant="primary" size="md">
              Book Free Audit
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`block h-0.5 bg-ink rounded-full transition-all duration-200 ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`block h-0.5 bg-ink rounded-full transition-all duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-ink rounded-full transition-all duration-200 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 z-50 bg-white overflow-y-auto">
          <div className="container-xl py-6 space-y-1">
            <p className="eyebrow px-3 mb-4">Solutions</p>
            {solutions.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-slate-50"
              >
                <span className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${item.dot}`} />
                <div>
                  <p className={`font-semibold ${item.accent}`}>{item.label}</p>
                  <p className="text-xs text-muted mt-0.5">{item.desc}</p>
                </div>
              </Link>
            ))}

            <div className="h-px bg-slate-100 my-4" />
            <p className="eyebrow px-3 mb-4">Products</p>
            {products.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between px-3 py-3 rounded-xl hover:bg-slate-50"
              >
                <div>
                  <p className="font-semibold text-ink">{item.label}</p>
                  <p className="text-xs text-muted mt-0.5">{item.desc}</p>
                </div>
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${item.tagColor}`}>{item.tag}</span>
              </Link>
            ))}

            <div className="h-px bg-slate-100 my-4" />
            {[
              { href: "/industries", label: "Industries" },
              { href: "/case-studies", label: "Case Studies" },
              { href: "/blog", label: "Blog" },
              { href: "/about", label: "About" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-3 font-semibold text-ink hover:bg-slate-50 rounded-xl"
              >
                {item.label}
              </Link>
            ))}

            <div className="h-px bg-slate-100 my-4" />
            <div className="px-3 space-y-3">
              <Button href="/contact" variant="primary" size="lg" className="w-full justify-center">
                Book Free Audit
              </Button>
              <a
                href="tel:+919898931509"
                className="flex items-center justify-center gap-2 py-3 text-muted font-medium"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 98989 31509
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
