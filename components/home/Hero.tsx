import Button from "@/components/ui/Button";

function HeroDiagram() {
  return (
    <div className="relative w-full h-full min-h-[420px] flex items-center justify-center select-none" aria-hidden="true">
      {/* Background grid */}
      <div className="absolute inset-0 grid-dots opacity-60 rounded-3xl" />

      <svg
        viewBox="0 0 480 420"
        className="w-full max-w-md mx-auto relative z-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Connection lines */}
        <line x1="240" y1="130" x2="100" y2="280" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="240" y1="130" x2="380" y2="280" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="240" y1="130" x2="240" y2="300" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="100" y1="280" x2="380" y2="280" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="4 4" />

        {/* Central Cognexa node */}
        <circle cx="240" cy="130" r="52" fill="rgba(27,79,216,0.15)" stroke="rgba(27,79,216,0.4)" strokeWidth="1.5" />
        <circle cx="240" cy="130" r="38" fill="rgba(27,79,216,0.2)" stroke="rgba(27,79,216,0.5)" strokeWidth="1" />
        <circle cx="240" cy="130" r="4" fill="#1B4FD8" />
        {/* Cognexa hex icon */}
        <path d="M240 108 L254 115.5V130.5L240 138L226 130.5V115.5L240 108Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="240" cy="123" r="3" fill="white"/>
        <text x="240" y="155" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="12" fontWeight="600" fontFamily="system-ui">Cognexa</text>

        {/* Surakshitam node - top right */}
        <circle cx="380" cy="90" r="42" fill="rgba(220,38,38,0.1)" stroke="rgba(220,38,38,0.3)" strokeWidth="1.5" />
        <line x1="240" y1="130" x2="380" y2="90" stroke="rgba(220,38,38,0.2)" strokeWidth="1" strokeDasharray="4 4" />
        {/* Shield icon */}
        <path d="M380 73 C385 73 390 75.5 390 75.5V83.5C390 88.5 385.5 92.5 380 93.5C374.5 92.5 370 88.5 370 83.5V75.5C370 75.5 375 73 380 73Z" stroke="#EF4444" strokeWidth="1.5" fill="none"/>
        <text x="380" y="107" textAnchor="middle" fill="rgba(252,165,165,0.9)" fontSize="10" fontWeight="600" fontFamily="system-ui">Surakshitam</text>
        <text x="380" y="118" textAnchor="middle" fill="rgba(252,165,165,0.5)" fontSize="8" fontFamily="system-ui">24/7 Protection</text>

        {/* Aurobit node - bottom left */}
        <circle cx="100" cy="290" r="42" fill="rgba(15,118,110,0.1)" stroke="rgba(15,118,110,0.3)" strokeWidth="1.5" />
        {/* Circuit icon */}
        <rect x="88" y="278" width="6" height="6" rx="1" stroke="#14B8A6" strokeWidth="1.5" fill="none"/>
        <rect x="106" y="278" width="6" height="6" rx="1" stroke="#14B8A6" strokeWidth="1.5" fill="none"/>
        <rect x="88" y="296" width="6" height="6" rx="1" stroke="#14B8A6" strokeWidth="1.5" fill="none"/>
        <rect x="106" y="296" width="6" height="6" rx="1" stroke="#14B8A6" strokeWidth="1.5" fill="none"/>
        <line x1="94" y1="281" x2="106" y2="281" stroke="#14B8A6" strokeWidth="1" />
        <line x1="94" y1="299" x2="106" y2="299" stroke="#14B8A6" strokeWidth="1" />
        <line x1="91" y1="284" x2="91" y2="296" stroke="#14B8A6" strokeWidth="1" />
        <line x1="109" y1="284" x2="109" y2="296" stroke="#14B8A6" strokeWidth="1" />
        <text x="100" y="310" textAnchor="middle" fill="rgba(94,234,212,0.9)" fontSize="10" fontWeight="600" fontFamily="system-ui">Aurobit</text>
        <text x="100" y="321" textAnchor="middle" fill="rgba(94,234,212,0.5)" fontSize="8" fontFamily="system-ui">AIOps Active</text>

        {/* Vidya AI node - bottom right */}
        <circle cx="380" cy="290" r="42" fill="rgba(13,148,136,0.1)" stroke="rgba(13,148,136,0.3)" strokeWidth="1.5" />
        {/* Document/brain icon */}
        <rect x="372" y="277" width="16" height="20" rx="2" stroke="#2DD4BF" strokeWidth="1.5" fill="none"/>
        <line x1="376" y1="283" x2="384" y2="283" stroke="#2DD4BF" strokeWidth="1"/>
        <line x1="376" y1="287" x2="384" y2="287" stroke="#2DD4BF" strokeWidth="1"/>
        <line x1="376" y1="291" x2="381" y2="291" stroke="#2DD4BF" strokeWidth="1"/>
        <text x="380" y="310" textAnchor="middle" fill="rgba(153,246,228,0.9)" fontSize="10" fontWeight="600" fontFamily="system-ui">Vidya AI</text>
        <text x="380" y="321" textAnchor="middle" fill="rgba(153,246,228,0.5)" fontSize="8" fontFamily="system-ui">70% Query ↓</text>

        {/* Data node center-bottom */}
        <circle cx="240" cy="320" r="32" fill="rgba(27,79,216,0.08)" stroke="rgba(27,79,216,0.2)" strokeWidth="1" />
        <rect x="232" y="312" width="16" height="12" rx="1" stroke="rgba(147,197,253,0.6)" strokeWidth="1.2" fill="none"/>
        <line x1="232" y1="316" x2="248" y2="316" stroke="rgba(147,197,253,0.4)" strokeWidth="0.8"/>
        <line x1="232" y1="320" x2="248" y2="320" stroke="rgba(147,197,253,0.4)" strokeWidth="0.8"/>
        <text x="240" y="334" textAnchor="middle" fill="rgba(147,197,253,0.7)" fontSize="8" fontWeight="600" fontFamily="system-ui">Data Platform</text>

        {/* Animated pulse rings on center */}
        <circle cx="240" cy="130" r="60" stroke="rgba(27,79,216,0.15)" strokeWidth="1" className="animate-ping" style={{ animationDuration: "3s" }} />
      </svg>

      {/* Status chips */}
      <div className="absolute top-6 right-4 space-y-2">
        <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[11px] text-white/70 font-medium">All systems operational</span>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative bg-navy-900 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 grid-lines" />
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-900 to-navy-800/80" />

      <div className="relative container-xl py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — copy */}
          <div className="max-w-xl">
            <p className="eyebrow-light mb-5 flex items-center gap-3">
              <span>Secure</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>Automate</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>Illuminate</span>
            </p>

            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.05] text-balance mb-6">
              The intelligence infrastructure your enterprise runs on.
            </h1>

            <p className="text-white/60 text-lg lg:text-xl leading-relaxed mb-8 max-w-lg">
              Three purpose-built platforms. One partner. Built for enterprise environments where the cost of failure is real — and the expectation of performance is non-negotiable.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Button href="/contact" variant="primary" size="lg">
                Book a Free Audit
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
              <Button href="/solutions" variant="ghost-light" size="lg">
                Explore Solutions
              </Button>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-xs text-white/30 uppercase tracking-widest">Trusted in</span>
              {["BFSI", "Manufacturing", "Healthcare", "Government"].map((sector) => (
                <span
                  key={sector}
                  className="text-xs font-medium text-white/50 border border-white/10 rounded-full px-3 py-1"
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>

          {/* Right — diagram */}
          <div className="hidden lg:block relative">
            <HeroDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}
