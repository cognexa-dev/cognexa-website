import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Knowledge Intelligence Solutions — Vidya AI",
  description:
    "Enterprise knowledge intelligence from Cognexa — private conversational AI over your policies and documents via the Vidya AI platform.",
};

export default function KnowledgePage() {
  return (
    <div className="bg-white">
      <div className="bg-navy-900 py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-50" />
        <div className="relative container-xl max-w-3xl">
          <p className="eyebrow-light mb-4">Solution</p>
          <h1 className="font-display font-bold text-4xl lg:text-5xl text-white text-balance mb-6">
            Knowledge Intelligence
          </h1>
          <p className="text-white/60 text-xl max-w-xl mb-8">
            Make your organization's knowledge instantly accessible through Vidya AI — a private, on-premise conversational AI platform for policies, SOPs, and internal documents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/contact" variant="aqua" size="lg">
              Request a Demo →
            </Button>
            <Button href="/products/vidya-ai" variant="ghost-light" size="lg">
              Explore Vidya AI →
            </Button>
          </div>
        </div>
      </div>
      <div className="section-pad bg-paper">
        <div className="container-xl text-center">
          <p className="text-muted text-lg mb-8">
            Full platform details are covered on the Vidya AI product page.
          </p>
          <Link href="/products/vidya-ai" className="btn-primary">
            View Vidya AI Platform →
          </Link>
        </div>
      </div>
    </div>
  );
}
