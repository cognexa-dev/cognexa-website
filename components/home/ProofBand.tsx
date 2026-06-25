const stats = [
  {
    value: "15 min",
    label: "Critical incident response target",
    note: "Surakshitam SLA",
    color: "text-crimson-400",
  },
  {
    value: "70%",
    label: "Reduction in repetitive HR queries",
    note: "Vidya AI benchmark",
    color: "text-aqua-500",
  },
  {
    value: "10,000+",
    label: "Data records cleaned and enriched",
    note: "Across enterprise projects",
    color: "text-sapphire-400",
  },
  {
    value: "24/7",
    label: "Security monitoring availability",
    note: "Zero downtime guarantee",
    color: "text-teal-400",
  },
];

export default function ProofBand() {
  return (
    <section className="bg-navy-900 py-16 lg:py-20 relative overflow-hidden" aria-label="Performance metrics">
      <div className="absolute inset-0 grid-dots opacity-40" />

      <div className="relative container-xl">
        <p className="eyebrow-light text-center mb-12">The numbers behind the work</p>

        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="bg-navy-900 px-8 py-10 flex flex-col gap-2"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className={`font-display font-bold text-4xl lg:text-5xl ${stat.color} font-mono`}>
                {stat.value}
              </dd>
              <p className="text-white/70 text-sm leading-snug">{stat.label}</p>
              <p className="text-white/30 text-xs">{stat.note}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
