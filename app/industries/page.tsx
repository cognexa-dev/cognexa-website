import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Industries from "@/components/home/Industries";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Cognexa serves enterprises in BFSI, Manufacturing, Healthcare, Government, and Retail with tailored cybersecurity, AI automation, and knowledge intelligence solutions.",
};

export default function IndustriesPage() {
  return (
    <div className="bg-white">
      <div className="bg-navy-900 py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-40" />
        <div className="relative container-xl max-w-3xl">
          <p className="eyebrow-light mb-4">Industries</p>
          <h1 className="font-display font-bold text-4xl lg:text-5xl text-white text-balance mb-5">
            Built for the sectors that cannot afford to fail.
          </h1>
          <p className="text-white/60 text-lg max-w-xl">
            Every industry has distinct compliance requirements, operational rhythms, and risk profiles. We have built for all of them.
          </p>
        </div>
      </div>
      <Industries />
      <div className="bg-white py-16 border-t border-slate-100">
        <div className="container-xl text-center">
          <h2 className="font-display font-bold text-2xl text-ink mb-4">
            Ready to see how Cognexa fits your sector?
          </h2>
          <Button href="/contact" variant="primary" size="lg">
            Book a Free Industry Assessment →
          </Button>
        </div>
      </div>
    </div>
  );
}
