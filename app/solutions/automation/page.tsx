import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI & Automation Solutions — Aurobit",
  description:
    "Enterprise AI automation and AIOps from Cognexa — runbook automation, incident management, and predictive analytics via the Aurobit platform.",
};

export default function AutomationPage() {
  return (
    <div className="bg-white">
      <div className="bg-navy-900 py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-50" />
        <div className="relative container-xl max-w-3xl">
          <p className="eyebrow-light mb-4">Solution</p>
          <h1 className="font-display font-bold text-4xl lg:text-5xl text-white text-balance mb-6">
            AI & Automation
          </h1>
          <p className="text-white/60 text-xl max-w-xl mb-8">
            Operational intelligence powered by Aurobit — automating runbooks, incident workflows, and delivering AIOps-driven predictive analytics for enterprise environments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/contact" variant="teal" size="lg">
              Request an Assessment →
            </Button>
            <Button href="/products/aurobit" variant="ghost-light" size="lg">
              Explore Aurobit →
            </Button>
          </div>
        </div>
      </div>
      <div className="section-pad bg-paper">
        <div className="container-xl text-center">
          <p className="text-muted text-lg mb-8">
            Full automation platform details are covered on the Aurobit product page.
          </p>
          <Link href="/products/aurobit" className="btn-primary">
            View Aurobit Platform →
          </Link>
        </div>
      </div>
    </div>
  );
}
