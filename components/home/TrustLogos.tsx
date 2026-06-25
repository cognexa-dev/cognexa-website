const placeholderClients = [
  "Axis Finance",
  "Bharat Forge",
  "Aarogya Hospitals",
  "State Power Corp",
  "IndusInd Finance",
  "Mahindra Logistics",
];

export default function TrustLogos() {
  return (
    <section className="bg-white py-16 border-t border-slate-100" aria-label="Client logos">
      <div className="container-xl">
        <p className="eyebrow text-center mb-10">Organizations that trust Cognexa</p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {placeholderClients.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center h-10 opacity-40 hover:opacity-70 transition-opacity duration-200"
              aria-label={name}
            >
              {/* Placeholder wordmark — replace with actual SVG logos */}
              <span className="font-display font-bold text-base text-slate-500 tracking-tight">
                {name}
              </span>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-muted mt-10">
          Serving enterprises across India in BFSI, Manufacturing, Healthcare, Government, and Retail.
        </p>
      </div>
    </section>
  );
}
