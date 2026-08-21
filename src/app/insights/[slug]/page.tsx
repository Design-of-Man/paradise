import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Section, SectionHeading, CtaBand, Reveal, ArrowLink } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { insights, getInsight, sortedInsights } from "@/data/insights";
import { formatDate } from "@/lib/util";
import { pageMeta, jsonLdGraph, breadcrumbSchema, articleSchema } from "@/lib/seo";

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) return {};

  return pageMeta({
    title: post.title,
    description: post.excerpt,
    path: `/insights/${post.slug}`,
    type: "article",
    publishedTime: post.date,
    keywords: [post.category, "retail real estate", "shopping center development"],
  });
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) notFound();

  const related = sortedInsights.filter((i) => i.slug !== post.slug).slice(0, 3);

  const trail = [
    { name: "Home", path: "/" },
    { name: "Insights", path: "/insights" },
    { name: post.title, path: `/insights/${post.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={jsonLdGraph(
          breadcrumbSchema(trail),
          articleSchema({
            headline: post.title,
            description: post.excerpt,
            path: `/insights/${post.slug}`,
            datePublished: post.date,
            dateModified: post.updated,
            author: post.author,
          }),
        )}
      />

      <article>
        <header className="grain relative overflow-hidden bg-ink pb-20 pt-32 text-paper md:pb-24 md:pt-40">
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.055]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.9) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />
          <div className="shell relative z-10">
            <div className="mb-8 text-xs text-white/40">
              <ol className="flex flex-wrap items-center gap-2">
                {trail.slice(0, 2).map((item, i) => (
                  <li key={item.path} className="flex items-center gap-2">
                    {i > 0 && <span aria-hidden className="opacity-40">/</span>}
                    <Link href={item.path} className="link-underline hover:text-white">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ol>
            </div>

            <p className="eyebrow">{post.category}</p>
            <h1 className="mt-5 max-w-4xl text-(length:--text-display) text-white">
              {post.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
              {post.excerpt}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-line-dark pt-6 label text-white/45">
              <span>{post.author}</span>
              <span aria-hidden>·</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              {post.updated && (
                <>
                  <span aria-hidden>·</span>
                  <time dateTime={post.updated}>
                    Updated {formatDate(post.updated)}
                  </time>
                </>
              )}
              <span aria-hidden>·</span>
              <span className="nums">{post.readingTime} min read</span>
            </div>
          </div>
        </header>

        <Section>
          <div className="shell-narrow">
            <div className="prose-pv">
              {post.body.map((block, i) =>
                block.startsWith("## ") ? (
                  <h2 key={i}>{block.replace("## ", "")}</h2>
                ) : (
                  <p key={i} className={i === 0 ? "!text-[1.1875rem] !text-ink" : undefined}>
                    {block}
                  </p>
                ),
              )}
            </div>

            <div className="mt-14 border-t border-line pt-8">
              <ArrowLink href="/insights">All insights</ArrowLink>
            </div>
          </div>
        </Section>
      </article>

      <Section tone="sand">
        <div className="shell">
          <Reveal>
            <SectionHeading eyebrow="Keep Reading" title="Related insights." />
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/insights/${p.slug}`}
                className="rounded-xl group flex h-full flex-col bg-sand p-8 transition-colors hover:bg-paper"
              >
                <div className="flex items-center gap-2.5 label-sm text-accent">
                  <span>{p.category}</span>
                  <span aria-hidden className="text-mute">·</span>
                  <span className="text-mute nums">{p.readingTime} min</span>
                </div>
                <h3 className="mt-4 text-lg transition-colors group-hover:text-accent">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand
        title="Have a project this applies to?"
        secondary={{ label: "See our process", href: "/process" }}
      />
    </>
  );
}
