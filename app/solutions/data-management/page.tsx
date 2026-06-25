import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Enterprise Data Management",
  description:
    "Master Data Management, data cleansing, deduplication, and enrichment services from Cognexa. Over 10,000 data records cleaned across enterprise projects.",
};

const services = [
  {
    title: "Master Data Management (MDM)",
    description:
      "Design and implement the data governance framework that ensures every business system works from a single, authoritative record — for customers, products, vendors, and assets.",
  },
  {
    title: "Data Cleansing and Deduplication",
    description:
      "Systematic identification and removal of duplicate, incomplete, and inaccurate records. We have cleaned over 10,000 enterprise data records across ERP, CRM, and SCM systems.",
  },
  {
    title: "Data Enrichment",
    description:
      "Augment existing records with additional attributes — classifications, geocodes, industry codes, or proprietary tags — to improve downstream analytics and reporting accuracy.",
  },
  {
    title: "Item Code Consolidation",
    description:
      "Resolve the proliferation of duplicate and inconsistent item codes that plagues manufacturing and retail ERPs. One SKU, one code, one source of truth.",
  },
  {
    title: "Compliance-Ready Governance",
    description:
      "Build the data classification, access control, and audit frameworks required by DPDP Act, RBI, and sector-specific regulatory mandates.",
  },
];

export default function DataManagementPage() {
  return (
    <div className="bg-white">
      <div className="bg-navy-900 py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-50" />
        <div className="relative container-xl max-w-3xl">
          <p className="eyebrow-light mb-4">Professional Service</p>
          <h1 className="font-display font-bold text-4xl lg:text-5xl text-white text-balance mb-6">
            Enterprise Data Management
          </h1>
          <p className="text-white/60 text-xl max-w-xl mb-8">
            Data that is not trusted is not used. We clean, deduplicate, enrich, and govern your master data — so every system downstream works from a single source of truth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Discuss Your Data Project →
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/10">
            <div>
              <p className="font-display font-bold text-3xl text-sapphire-400 mb-1">10,000+</p>
              <p className="text-white/50 text-sm">Data records cleaned</p>
            </div>
            <div>
              <p className="font-display font-bold text-3xl text-sapphire-400 mb-1">MDM</p>
              <p className="text-white/50 text-sm">Strategy + implementation</p>
            </div>
            <div>
              <p className="font-display font-bold text-3xl text-sapphire-400 mb-1">DPDP</p>
              <p className="text-white/50 text-sm">Compliance-ready governance</p>
            </div>
          </div>
        </div>
      </div>

      <section className="section-pad bg-white">
        <div className="container-xl">
          <SectionHeader
            eyebrow="What we do"
            title="Data quality, at enterprise scale."
            className="mb-14"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl border border-slate-100 p-7 hover:border-sapphire-200 hover:shadow-enterprise transition-all">
                <div className="w-10 h-10 rounded-xl bg-sapphire-500/8 flex items-center justify-center mb-5">
                  <svg className="w-5 h-5 text-sapphire-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-lg text-ink mb-3">{s.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-sapphire-500 py-16">
        <div className="container-xl text-center">
          <h2 className="font-display font-bold text-2xl lg:text-3xl text-white mb-4">
            Start with a data quality assessment.
          </h2>
          <Button href="/contact" variant="secondary" size="lg">
            Talk to a Data Specialist →
          </Button>
        </div>
      </div>
    </div>
  );
}
