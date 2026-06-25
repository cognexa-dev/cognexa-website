import Button from "@/components/ui/Button";

export default function CtaBand() {
  return (
    <section className="bg-sapphire-500 py-20 lg:py-24 relative overflow-hidden" aria-labelledby="cta-heading">
      {/* Background texture */}
      <div className="absolute inset-0 grid-dots opacity-20" />

      {/* Geometric accent */}
      <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl" aria-hidden="true" />
      <div className="absolute -left-16 -bottom-16 w-[300px] h-[300px] rounded-full bg-white/5 blur-2xl" aria-hidden="true" />

      <div className="relative container-xl">
        <div className="max-w-3xl">
          <p className="eyebrow-light mb-4">Free assessment · No obligation</p>
          <h2 id="cta-heading" className="font-display font-bold text-3xl lg:text-5xl text-white leading-tight text-balance mb-5">
            Not sure where your enterprise gaps are?
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl">
            Start with a free security and AI readiness audit. Our specialists assess your current posture, identify the highest-risk gaps, and deliver a prioritized action plan — at no cost, with no obligation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/contact" variant="secondary" size="lg">
              Book Your Free Audit
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
            <a
              href="tel:+919898931509"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-white/20 text-white font-semibold text-base hover:border-white/40 hover:bg-white/10 transition-all duration-150"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 98989 31509
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
