import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { posts, getPostBySlug, formatDate } from "@/lib/blog";

const BASE = "https://cognexa.in";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${BASE}/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${BASE}/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["Cognexa Technologies"],
      tags: [post.category],
    },
  };
}

const categoryColors: Record<string, string> = {
  Cybersecurity: "bg-crimson-500/8 text-crimson-600 border-crimson-100",
  "AI & Automation": "bg-teal-600/8 text-teal-700 border-teal-100",
  "Knowledge Intelligence": "bg-aqua-600/8 text-aqua-700 border-aqua-100",
  "Data Management": "bg-sapphire-500/8 text-sapphire-600 border-sapphire-100",
  "Enterprise Technology": "bg-slate-100 text-slate-600 border-slate-200",
};

function renderSection(
  section: import("@/lib/blog").SectionType,
  i: number
): React.ReactNode {
  switch (section.type) {
    case "paragraph":
      return (
        <p key={i} className="text-muted text-base leading-relaxed mb-5">
          {section.content}
        </p>
      );
    case "heading":
      return section.level === 2 ? (
        <h2
          key={i}
          className="font-display font-bold text-2xl text-ink mt-12 mb-4"
        >
          {section.content}
        </h2>
      ) : (
        <h3
          key={i}
          className="font-display font-semibold text-lg text-ink mt-8 mb-3"
        >
          {section.content}
        </h3>
      );
    case "list":
      return (
        <ul key={i} className="mb-5 space-y-2 pl-0">
          {section.items.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-muted text-sm leading-relaxed">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sapphire-400 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "callout":
      const styles = {
        insight: "bg-sapphire-500/6 border-sapphire-200 text-sapphire-800",
        warning: "bg-amber-50 border-amber-200 text-amber-900",
        tip: "bg-teal-50 border-teal-200 text-teal-900",
      };
      const icons = {
        insight:
          "M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
        warning:
          "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z",
        tip: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      };
      return (
        <div
          key={i}
          className={`rounded-xl border p-5 mb-6 flex gap-4 ${styles[section.variant]}`}
        >
          <svg
            className="w-5 h-5 flex-shrink-0 mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={icons[section.variant]}
            />
          </svg>
          <p className="text-sm leading-relaxed">{section.content}</p>
        </div>
      );
    case "table":
      return (
        <div key={i} className="overflow-x-auto mb-8 rounded-xl border border-slate-100">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-paper">
                {section.headers.map((h, j) => (
                  <th
                    key={j}
                    className="px-4 py-3 text-left font-semibold text-ink text-xs border-b border-slate-100"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 1 ? "bg-slate-50/50" : ""}>
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className="px-4 py-3 text-muted border-b border-slate-50 last:border-b-0"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = posts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${BASE}/blog/${slug}/#article`,
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Cognexa Technologies",
      url: BASE,
    },
    publisher: {
      "@id": `${BASE}/#organization`,
    },
    mainEntityOfPage: { "@id": `${BASE}/blog/${slug}/#webpage` },
    url: `${BASE}/blog/${slug}`,
    articleSection: post.category,
    inLanguage: "en-IN",
    wordCount: post.body
      .filter((s) => s.type === "paragraph")
      .reduce((acc, s) => acc + (s as { type: "paragraph"; content: string }).content.split(" ").length, 0),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${BASE}/blog/${slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="bg-white min-h-screen">
        {/* Breadcrumb */}
        <div className="border-b border-slate-100 bg-paper">
          <div className="container-xl py-3">
            <nav className="flex items-center gap-2 text-xs text-muted">
              <Link href="/" className="hover:text-sapphire-600 transition-colors">
                Home
              </Link>
              <span>›</span>
              <Link href="/blog" className="hover:text-sapphire-600 transition-colors">
                Blog
              </Link>
              <span>›</span>
              <span className="text-ink line-clamp-1">{post.title}</span>
            </nav>
          </div>
        </div>

        {/* Article header */}
        <div className="bg-navy-900 py-14 lg:py-20 relative overflow-hidden">
          <div className="absolute inset-0 grid-lines opacity-30" />
          <div className="relative container-xl max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span
                className={`inline-flex items-center px-2.5 py-1 rounded-full border text-xs font-medium ${categoryColors[post.category]}`}
              >
                {post.category}
              </span>
              <span className="text-white/40 text-xs">{post.readTime} min read</span>
            </div>
            <h1 className="font-display font-bold text-3xl lg:text-5xl text-white mb-6 leading-tight text-balance">
              {post.title}
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-8">{post.excerpt}</p>
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-full bg-sapphire-500/20 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-4 h-4 text-sapphire-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-white text-sm font-semibold">{post.author}</p>
                <p className="text-white/40 text-xs">
                  {post.authorRole} · {formatDate(post.date)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Article body + sidebar */}
        <div className="container-xl py-14 lg:py-20">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Body */}
            <article className="lg:col-span-2">
              {post.body.map((section, i) => renderSection(section, i))}
            </article>

            {/* Sticky sidebar */}
            <aside className="space-y-6">
              {/* CTA */}
              <div className="rounded-2xl bg-navy-900 p-6 sticky top-24">
                <p className="text-white font-display font-bold text-lg mb-2">
                  Free security & AI audit
                </p>
                <p className="text-white/50 text-sm mb-5 leading-relaxed">
                  Get a no-obligation assessment of your security posture and AI readiness.
                  Delivered as a written report.
                </p>
                <a
                  href="/contact"
                  className="block w-full text-center px-5 py-3 rounded-xl bg-sapphire-500 text-white font-semibold text-sm hover:bg-sapphire-600 transition-colors"
                >
                  Book Free Audit →
                </a>
                <a
                  href="tel:+919898931509"
                  className="block w-full text-center mt-3 px-5 py-2.5 rounded-xl border border-white/10 text-white/70 font-medium text-sm hover:border-white/20 hover:text-white transition-colors"
                >
                  +91 98989 31509
                </a>
              </div>

              {/* Related articles */}
              {related.length > 0 && (
                <div className="rounded-2xl border border-slate-100 bg-paper p-5">
                  <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-4">
                    Related articles
                  </p>
                  <div className="space-y-4">
                    {related.map((r) => (
                      <Link
                        key={r.slug}
                        href={`/blog/${r.slug}`}
                        className="block group"
                      >
                        <p className="text-sm font-semibold text-ink group-hover:text-sapphire-600 transition-colors leading-snug text-balance">
                          {r.title}
                        </p>
                        <p className="text-xs text-muted mt-1">{formatDate(r.date)}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* All posts link */}
              <Link
                href="/blog"
                className="flex items-center gap-2 text-sm font-semibold text-sapphire-500 hover:text-sapphire-700 transition-colors"
              >
                ← All articles
              </Link>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
