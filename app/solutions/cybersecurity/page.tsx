import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cybersecurity Solutions — Surakshitam",
  description:
    "Enterprise cybersecurity solutions from Cognexa — managed firewall, vulnerability scanning, penetration testing, and 24/7 security operations via the Surakshitam platform.",
};

export default function CybersecurityPage() {
  return (
    <div className="bg-white">
      <div className="bg-navy-900 py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-50" />
        <div className="relative container-xl max-w-3xl">
          <p className="eyebrow-light mb-4">Solution</p>
          <h1 className="font-display font-bold text-4xl lg:text-5xl text-white text-balance mb-6">
            Cybersecurity
          </h1>
          <p className="text-white/60 text-xl max-w-xl mb-8">
            Enterprise-grade threat defense powered by the Surakshitam platform — managed firewall, vulnerability scanning, penetration testing, and 24/7 incident response.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/contact" variant="crimson" size="lg">
              Book a Security Audit →
            </Button>
            <Button href="/products/surakshitam" variant="ghost-light" size="lg">
              Explore Surakshitam →
            </Button>
          </div>
        </div>
      </div>
      <div className="section-pad bg-paper">
        <div className="container-xl text-center">
          <p className="text-muted text-lg mb-8">
            Full cybersecurity solution details are covered on the Surakshitam product page.
          </p>
          <Link href="/products/surakshitam" className="btn-primary">
            View Surakshitam Platform →
          </Link>
        </div>
      </div>
    </div>
  );
}
