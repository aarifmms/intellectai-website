import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PRICING_TIERS, FAQS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pricing | IntellectAI · AI Operating System for SMBs",
  description:
    "Transparent pricing for your AI Operating System. Free AI Operations Audit. Workflow automation from $2,500. Custom AI Workforce from $7,500. Built for small and medium businesses.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="relative" style={{ background: "#0E0F11" }}>
        <section className="grid-bg relative overflow-hidden pb-12 pt-32 md:pb-16 md:pt-40">
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2"
            style={{
              background:
                "radial-gradient(circle, rgba(201, 169, 97, 0.06) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          <div className="relative z-10 mx-auto max-w-5xl px-6 text-center md:px-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-brass-300">
              Pricing
            </span>
            <h1 className="mt-5 text-[40px] font-bold leading-[1.1] tracking-tight text-white md:text-[56px]">
              Deploy Your AI Workforce.{" "}
              <span className="text-gradient">Transparent Pricing.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-[1.6] text-[#B6B8BC] md:text-xl">
              Four tiers. One playbook. Every AI Operating System gets scoped
              after the free audit, these are honest starting prices for
              SMBs, not enterprise fantasy quotes.
            </p>

            <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-[#23262B]">
              <Image
                src="/images/image4.jpeg"
                alt="A secured, integrated business stack with AI workflows running across systems"
                width={1920}
                height={1080}
                className="h-[180px] w-full object-cover md:h-[240px]"
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
              {PRICING_TIERS.map((tier) => {
                const isHighlight = tier.highlight;
                return (
                  <div
                    key={tier.name}
                    className="relative flex flex-col rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 md:p-7"
                    style={{
                      background: "#17181B",
                      border: isHighlight
                        ? "1px solid rgba(201, 169, 97, 0.4)"
                        : "1px solid rgba(255, 255, 255, 0.06)",
                      boxShadow: isHighlight
                        ? "0 0 40px rgba(201, 169, 97, 0.12), 0 8px 32px rgba(0, 0, 0, 0.3)"
                        : "0 8px 32px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    {"badge" in tier && tier.badge && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="rounded-full bg-brass-500 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                          {tier.badge}
                        </span>
                      </div>
                    )}

                    <h3 className="text-lg font-bold text-white md:text-xl">
                      {tier.name}
                    </h3>
                    <p className="mt-2 min-h-[48px] text-sm leading-[1.5] text-[#B6B8BC]">
                      {tier.description}
                    </p>

                    <div className="mt-5 flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-white md:text-4xl">
                        {tier.price}
                      </span>
                      {"originalPrice" in tier && tier.originalPrice && (
                        <span className="text-sm text-[#8A8D93] line-through">
                          {tier.originalPrice}
                        </span>
                      )}
                      {"priceSuffix" in tier && tier.priceSuffix && (
                        <span className="text-sm text-[#8A8D93]">
                          {tier.priceSuffix}
                        </span>
                      )}
                    </div>

                    <ul className="mt-6 mb-6 grow space-y-2">
                      {tier.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-[#D3CCBA]"
                        >
                          <svg
                            className="mt-0.5 h-4 w-4 shrink-0 text-brass-300"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={tier.ctaHref}
                      className={`mt-auto block w-full rounded-lg py-3 text-center text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
                        isHighlight
                          ? "text-white"
                          : "border border-brass-500/30 text-brass-300 hover:bg-brass-500/10"
                      }`}
                      style={
                        isHighlight
                          ? {
                              background:
                                "linear-gradient(180deg, #DAB97A 0%, #C9A961 60%, #A8893F 100%)",
                              boxShadow: "0 0 20px rgba(201, 169, 97, 0.3)",
                            }
                          : undefined
                      }
                    >
                      {tier.cta}
                    </a>
                  </div>
                );
              })}
            </div>

            <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-[#23262B] bg-[#17181B] p-6 text-center md:p-8">
              <h3 className="text-xl font-bold text-white md:text-2xl">
                Not sure which tier fits?
              </h3>
              <p className="mt-3 text-base text-[#B6B8BC]">
                Every engagement starts with a free AI Readiness Audit. We map
                your highest-ROI opportunity, then quote the right scope. No
                pressure, no upsell.
              </p>
              <a
                href="/contact"
                className="mt-6 inline-block rounded-lg px-7 py-3 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(180deg, #DAB97A 0%, #C9A961 60%, #A8893F 100%)",
                }}
              >
                Book Your Free Audit →
              </a>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-6 md:px-8">
            <h2 className="mb-8 text-center text-[28px] font-bold leading-[1.15] tracking-tight text-white md:text-[40px]">
              Pricing Questions
            </h2>
            <div className="space-y-3">
              {FAQS.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-xl border border-[#23262B] bg-[#17181B] p-5 md:p-6"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-white md:text-lg">
                    {faq.question}
                    <svg
                      className="h-5 w-5 shrink-0 text-brass-300 transition-transform group-open:rotate-45"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </summary>
                  <p className="mt-4 text-sm leading-[1.6] text-[#B6B8BC] md:text-base">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
