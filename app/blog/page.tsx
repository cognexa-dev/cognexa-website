import type { Metadata } from "next";
import Link from "next/link";
import { posts, formatDate, getAllCategories } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Enterprise Technology Blog | Cognexa Technologies",
  description:
    "Expert insights on enterprise cybersecurity, AI automation, knowledge intelligence, and data governance — written for IT leaders, CISOs, and CTOs across India.",
  alternates: { canonical: "https://cognexa.in/blog" },
  openGraph: {
    title: "Cognexa Blog — Enterprise Technology Insights",
    description:
      "Practical guides on CERT-In compliance, AIOps, private LLMs, DPDP Act, and master data management for Indian enterprises.",
    url: "https://cognexa.in/blog",
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://cognexa.in/blog/#blog",
  url: "https://cognexa.in/blog",
  name: "Cognexa Enterprise Technology Blog",
  description:
    "Practical insights for enterprise IT leaders on cybersecurity, AI automation, and data governance.",
  publisher: { "@id": "https://cognexa.in/#organization" },
  inLanguage: "en-IN",
  blogPost: posts.map((p) => ({
    "@type": "BlogPosting",
    "@id": `https://cognexa.in/blog/${p.slug}/#article`,
    headline: p.title,
    description: p.excerpt,
    datePublished: p.date,
    author: {
      "@type": "Organization",
      name: "Cognexa Technologies",
      url: "https://cognexa.in",
    },
    url: `https://cognexa.in/blog/${p.slug}`,
    articleSection: p.category,
  })),
};

const categoryColors: Record<string, string> = {
  "Cybersecurity": "bg-crimson-500/8 text-crimson-600 border-crimson-100",
  "AI & Automation": "bg-teal-600/8 text-teal-700 border-teal-100",
  "Knowledge Intelligence": "bg-aqua-600/8 text-aqua-700 border-aqua-100",
  "Data Management": "bg-sapphire-500/8 text-sapphire-600 border-sapphire-100",
  "Enterprise Technology": "bg-slate-100 text-slate-600 border-slate-200",
};

export default function BlogPage() {
  const categories = getAllCategories();
  const featured = posts.filter((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      {/* Header */}
      <div className="bg-navy-900 py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-40" />
        <div className="relative container-xl">
          <p className="eyebrow-light mb-4">Enterprise insights</p>
          <h1 className="font-display font-bold text-4xl lg:text-5xl text-white mb-4 text-balance max-w-2xl">
            Practical guides for enterprise IT leaders
          </h1>
          <p className="text-white/60 text-lg max-w-xl">
            No-fluff analysis on cybersecurity compliance, AI automation, knowledge management,
            and data governance — written for the people making decisions.
          </p>
        </div>
      </div>

      <div className="bg-white">
        {/* Category filters */}
        <div className="border-b border-slate-100">
          <div className="container-xl py-4">
            <div className="flex gap-2 flex-wrap">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-navy-900 text-white text-xs font-semibold">
                All topics
              </span>
              {categories.map((cat) => (
                <span
                  key={cat}
                  className={`inline-flex items-center px-3 py-1.5 rounded-full border text-xs font-medium ${categoryColors[cat]}`}
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="container-xl py-16 lg:py-20">
          {/* Featured posts */}
          {featured.length > 0 && (
            <div className="mb-16">
              <p className="eyebrow mb-8">Featured</p>
              <div className="grid lg:grid-cols-2 gap-6">
                {featured.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col rounded-2xl border border-slate-100 bg-white p-7 hover:border-sapphire-200 hover:shadow-enterprise transition-all"
                  >
                    <div className="flex items-center justify-between mb-5">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full border text-xs font-medium ${categoryColors[post.category]}`}
                      >
                        {post.category}
                      </span>
                      <span className="text-xs text-muted">{post.readTime} min read</span>
                    </div>
                    <h2 className="font-display font-bold text-xl text-ink mb-3 text-balance group-hover:text-sapphire-600 transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-muted text-sm leading-relaxed mb-6 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                      <div>
                        <p className="text-xs font-semibold text-ink">{post.author}</p>
                        <p className="text-xs text-muted">{formatDate(post.date)}</p>
                      </div>
                      <span className="text-xs font-semibold text-sapphire-500 group-hover:translate-x-1 transition-transform inline-block">
                        Read article →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* All posts */}
          {rest.length > 0 && (
            <div>
              <p className="eyebrow mb-8">More articles</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {rest.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col rounded-2xl border border-slate-100 bg-white p-6 hover:border-sapphire-200 hover:shadow-enterprise transition-all"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full border text-xs font-medium ${categoryColors[post.category]}`}
                      >
                        {post.category}
                      </span>
                      <span className="text-xs text-muted">{post.readTime} min read</span>
                    </div>
                    <h2 className="font-display font-bold text-lg text-ink mb-3 text-balance group-hover:text-sapphire-600 transition-colors leading-snug flex-1">
                      {post.title}
                    </h2>
                    <p className="text-muted text-xs leading-relaxed mb-5 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                      <p className="text-xs text-muted">{formatDate(post.date)}</p>
                      <span className="text-xs font-semibold text-sapphire-500 group-hover:translate-x-1 transition-transform inline-block">
                        Read →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CTA band */}
        <div className="border-t border-slate-100 bg-paper py-16">
          <div className="container-xl text-center">
            <p className="eyebrow mb-4">Free assessment</p>
            <h2 className="font-display font-bold text-2xl lg:text-3xl text-ink mb-4 text-balance max-w-xl mx-auto">
              Reading about it is the first step. We help you act on it.
            </h2>
            <p className="text-muted text-base mb-8 max-w-md mx-auto">
              Book a free security and AI readiness audit. We identify the gaps and hand you a
              prioritized roadmap — no obligation.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-sapphire-500 text-white font-semibold text-base hover:bg-sapphire-600 transition-colors"
            >
              Book a Free Audit →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
