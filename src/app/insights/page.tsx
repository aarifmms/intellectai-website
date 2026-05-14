import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getAllInsights } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights | IntellectAI — Agentic AI for SMBs",
  description:
    "Practical writing on agentic AI, automation, and how small and medium businesses can deploy AI agents that actually move the numbers.",
  alternates: { canonical: "/insights" },
};

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function InsightsPage() {
  const insights = getAllInsights();
  return (
    <>
      <Header />
      <main className="relative" style={{ background: "#09090B" }}>
        <section className="grid-bg relative overflow-hidden pb-12 pt-32 md:pb-16 md:pt-40">
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2"
            style={{
              background:
                "radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center md:px-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
              Insights
            </span>
            <h1 className="mt-5 text-[40px] font-extrabold leading-[1.1] tracking-tight text-white md:text-[56px]">
              Agentic AI for{" "}
              <span className="text-gradient">Real Businesses</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-[1.6] text-zinc-400 md:text-xl">
              Practical writing for SMB owners and operators. No hype, no
              fluff — just what works.
            </p>
          </div>
        </section>

        <section className="py-10 md:py-14">
          <div className="mx-auto max-w-4xl px-6 md:px-8">
            <div className="space-y-5">
              {insights.map((post) => (
                <Link
                  key={post.slug}
                  href={`/insights/${post.slug}`}
                  className="group block rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 md:p-7"
                  style={{
                    background: "#131620",
                    borderColor: "rgba(255, 255, 255, 0.06)",
                  }}
                >
                  <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-zinc-500">
                    <time>{formatDate(post.publishedAt)}</time>
                    <span>·</span>
                    <span>{post.readingMinutes} min read</span>
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="ml-1 rounded-full bg-blue-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-blue-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl font-bold leading-snug text-white transition-colors group-hover:text-blue-400 md:text-2xl">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-base leading-[1.6] text-zinc-400">
                    {post.description}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400">
                    Read article →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-6 md:px-8">
            <div
              className="rounded-xl border p-6 text-center md:p-8"
              style={{
                background:
                  "linear-gradient(135deg, rgba(59,130,246,0.08), rgba(6,182,212,0.04)), #131620",
                borderColor: "rgba(59, 130, 246, 0.3)",
              }}
            >
              <h3 className="text-xl font-bold text-white md:text-2xl">
                Ready to stop reading and start shipping?
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-base text-zinc-400">
                Book a free AI Readiness Audit. We&apos;ll map your highest-ROI
                automation opportunity and price the scope.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-block rounded-lg px-7 py-3 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #3B82F6, #06B6D4)",
                }}
              >
                Book Your Free Audit →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
