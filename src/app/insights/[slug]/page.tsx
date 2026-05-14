import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { INSIGHTS, getInsight } from "@/lib/insights";

export function generateStaticParams() {
  return INSIGHTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) return { title: "Insight Not Found | IntellectAI" };
  return {
    title: `${post.title} | IntellectAI Insights`,
    description: post.description,
    alternates: { canonical: `/insights/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      tags: post.tags,
    },
  };
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function renderBody(body: string) {
  const blocks = body.split(/\n\n+/);
  return blocks.map((block, i) => {
    const trimmed = block.trim();
    if (trimmed.startsWith("## ")) {
      return (
        <h2
          key={i}
          className="mt-10 mb-4 text-2xl font-bold tracking-tight text-white md:text-3xl"
        >
          {trimmed.replace(/^##\s+/, "")}
        </h2>
      );
    }
    if (/^\d+\.\s/.test(trimmed)) {
      const items = trimmed.split(/\n/).map((line) =>
        line.replace(/^\d+\.\s+/, ""),
      );
      return (
        <ol
          key={i}
          className="my-5 list-decimal space-y-2 pl-6 text-base leading-[1.7] text-[#D3CCBA] md:text-lg"
        >
          {items.map((item, j) => (
            <li key={j}>{renderInline(item)}</li>
          ))}
        </ol>
      );
    }
    if (trimmed.startsWith("- ")) {
      const items = trimmed.split(/\n/).map((line) =>
        line.replace(/^-\s+/, ""),
      );
      return (
        <ul
          key={i}
          className="my-5 list-disc space-y-2 pl-6 text-base leading-[1.7] text-[#D3CCBA] md:text-lg"
        >
          {items.map((item, j) => (
            <li key={j}>{renderInline(item)}</li>
          ))}
        </ul>
      );
    }
    return (
      <p
        key={i}
        className="my-5 text-base leading-[1.8] text-[#D3CCBA] md:text-lg"
      >
        {renderInline(trimmed)}
      </p>
    );
  });
}

function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export default async function InsightPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) notFound();

  return (
    <>
      <Header />
      <main className="relative" style={{ background: "#0E0F11" }}>
        <article className="pb-16 pt-32 md:pb-24 md:pt-40">
          <div className="mx-auto max-w-3xl px-6 md:px-8">
            <Link
              href="/insights"
              className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-[#8A8D93] transition-colors hover:text-brass-300"
            >
              ← All insights
            </Link>

            <div className="mb-5 flex flex-wrap items-center gap-2 text-xs text-[#8A8D93]">
              <time>{formatDate(post.publishedAt)}</time>
              <span>·</span>
              <span>{post.readingMinutes} min read</span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="ml-1 rounded-full bg-brass-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brass-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-[34px] font-bold leading-[1.15] tracking-tight text-white md:text-[48px]">
              {post.title}
            </h1>
            <p className="mt-5 text-lg leading-[1.6] text-[#B6B8BC] md:text-xl">
              {post.description}
            </p>

            <div className="my-10 border-t border-[#23262B]" />

            <div>{renderBody(post.body)}</div>

            <div
              className="mt-14 rounded-xl border p-6 text-center md:p-8"
              style={{
                background:
                  "linear-gradient(135deg, rgba(201, 169, 97,0.08), rgba(232, 226, 212,0.04)), #17181B",
                borderColor: "rgba(201, 169, 97, 0.3)",
              }}
            >
              <h3 className="text-xl font-bold text-white md:text-2xl">
                Want this applied to your business?
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-base text-[#B6B8BC]">
                Book a free AI Readiness Audit and we&apos;ll show you exactly
                where to start.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-block rounded-lg px-7 py-3 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(180deg, #DAB97A 0%, #C9A961 60%, #A8893F 100%)",
                }}
              >
                Book Your Free Audit →
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
