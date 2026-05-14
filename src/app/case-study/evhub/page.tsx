import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Case Study: TheEVHub | IntellectAI",
  description:
    "How IntellectAI built TheEVHub, a full e-commerce platform for certified EV charging equipment. From concept to live storefront with Stripe payments.",
  openGraph: {
    title: "Case Study: TheEVHub | IntellectAI",
    description:
      "Full-stack e-commerce for EV charging equipment. Built and launched on Vercel.",
  },
};

const STATS = [
  { value: "Full-Stack", label: "E-Commerce Platform" },
  { value: "50+", label: "Product SKUs" },
  { value: "$529+", label: "Average Order Value" },
  { value: "CA & US", label: "Shipping Coverage" },
];

const TECH_STACK = [
  { category: "Frontend", tech: "Next.js 16, React 19, Tailwind CSS 4, shadcn/ui" },
  { category: "Backend", tech: "Next.js API Routes, Server Components" },
  { category: "Database", tech: "Supabase (PostgreSQL)" },
  { category: "Payments", tech: "Stripe (checkout, subscriptions)" },
  { category: "Email", tech: "Resend + Nodemailer (transactional)" },
  { category: "Hosting", tech: "Vercel with custom domain (theevhub.com)" },
];

const FEATURES = [
  {
    title: "Product Catalog & Shop",
    description:
      "Full e-commerce storefront with Level 2 chargers, NACS adapters, extension cables, and curated bundles. Filterable by vehicle make, charging level, and use case.",
  },
  {
    title: "Smart Product Matcher Quiz",
    description:
      "Interactive quiz that recommends the right charger based on the customer's vehicle, driving habits, and home setup. Reduces decision paralysis and increases conversion.",
  },
  {
    title: "Trade-In & Referral Programs",
    description:
      "Built-in trade-in program for old chargers and a referral system that rewards customers for bringing in new buyers. Drives repeat purchases and word-of-mouth growth.",
  },
  {
    title: "Installation Guides & Support",
    description:
      "Comprehensive installation guides, BYD-specific content, and a knowledge base that reduces support tickets and builds buyer confidence before purchase.",
  },
  {
    title: "Order Tracking & Admin Dashboard",
    description:
      "Real-time order tracking for customers and a full admin dashboard for inventory management, order processing, and analytics.",
  },
];

const TIMELINE = [
  {
    week: "Phase 1",
    title: "Research & Architecture",
    items: [
      "Market research on EV charging equipment landscape in Canada",
      "Competitive analysis of existing distributors",
      "Database schema design for products, orders, and customers",
      "Stripe payment integration architecture",
    ],
  },
  {
    week: "Phase 2",
    title: "Core Platform Build",
    items: [
      "Product catalog with dynamic filtering and search",
      "Shopping cart and Stripe checkout flow",
      "Customer accounts and order history",
      "Responsive design for mobile shoppers",
    ],
  },
  {
    week: "Phase 3",
    title: "Growth Features",
    items: [
      "Product matcher quiz for guided shopping",
      "Trade-in program workflow",
      "Referral system with tracking",
      "SEO optimization for EV charging keywords",
    ],
  },
  {
    week: "Phase 4",
    title: "Launch & Operations",
    items: [
      "Admin dashboard for order and inventory management",
      "Transactional emails via Resend",
      "Custom domain setup (theevhub.com)",
      "Marketing playbooks for social, influencer, and B2B channels",
    ],
  },
];

export default function EVHubCaseStudyPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pb-16 pt-32 md:pb-24 md:pt-44" style={{ backgroundColor: "#131416" }}>
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.05em] text-brass-300">
                Case Study
              </p>
              <h1 className="text-[36px] font-extrabold leading-[1.1] tracking-tight text-white md:text-[56px]">
                TheEVHub
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-[1.6] text-gray-400 md:text-xl">
                How IntellectAI built a full e-commerce platform for certified EV
                charging equipment, from product catalog to Stripe checkout to
                admin dashboard.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-400">
                <span className="rounded-full border border-gray-700 px-3 py-1">
                  E-Commerce
                </span>
                <span className="rounded-full border border-gray-700 px-3 py-1">
                  EV / Clean Energy
                </span>
                <span className="rounded-full border border-gray-700 px-3 py-1">
                  Full-Stack Platform
                </span>
                <span className="rounded-full border border-green-800 bg-green-900/30 px-3 py-1 text-green-400">
                  Live at theevhub.com
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="border-b border-[rgba(255,255,255,0.06)] py-12" style={{ backgroundColor: "#0E0F11" }}>
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 md:grid-cols-4 md:px-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-brass-300 md:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-zinc-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* The Problem */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "#0E0F11" }}>
          <div className="mx-auto max-w-3xl px-6 md:px-8">
            <h2 className="mb-6 text-[28px] font-bold leading-[1.2] tracking-tight text-white md:text-[40px]">
              The Problem
            </h2>
            <p className="mb-6 text-base leading-[1.7] text-zinc-400 md:text-lg">
              The Canadian EV charging market is dominated by a few big brands
              with inflated prices and no direct-to-consumer experience:
            </p>
            <ul className="space-y-3 text-base leading-[1.7] text-zinc-400 md:text-lg">
              {[
                "EV owners overpay through dealer markups and middleman distributors",
                "Most online options lack Canadian safety certification (cETLus/UL)",
                "No guided shopping experience, buyers don't know which charger fits their vehicle and home setup",
                "Generic retailers don't offer EV-specific support, installation guidance, or trade-in options",
                "Cross-border shipping and warranty complexity discourages online purchases",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="mt-1.5 h-4 w-4 shrink-0 text-red-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* The Solution */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "#131416" }}>
          <div className="mx-auto max-w-3xl px-6 md:px-8">
            <h2 className="mb-6 text-[28px] font-bold leading-[1.2] tracking-tight text-white md:text-[40px]">
              The Solution: TheEVHub
            </h2>
            <p className="mb-10 text-base leading-[1.7] text-zinc-400 md:text-lg">
              A purpose-built e-commerce platform that sells{" "}
              <strong className="text-white">certified</strong> EV charging
              equipment directly to consumers with guided shopping, competitive
              pricing, and Canadian-first support.
            </p>
            <div className="space-y-6">
              {FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl border border-[rgba(255,255,255,0.06)] p-6"
                  style={{ backgroundColor: "#16181B" }}
                >
                  <h3 className="mb-2 text-lg font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-base leading-[1.6] text-zinc-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "#0E0F11" }}>
          <div className="mx-auto max-w-3xl px-6 md:px-8">
            <h2 className="mb-8 text-[28px] font-bold leading-[1.2] tracking-tight text-white md:text-[40px]">
              Tech Stack
            </h2>
            <div className="overflow-hidden rounded-xl border border-[rgba(255,255,255,0.06)]">
              {TECH_STACK.map((item, i) => (
                <div
                  key={item.category}
                  className={`flex flex-col gap-1 p-4 sm:flex-row sm:items-center sm:gap-4 ${
                    i !== TECH_STACK.length - 1 ? "border-b border-[rgba(255,255,255,0.06)]" : ""
                  }`}
                >
                  <span className="w-32 shrink-0 text-sm font-semibold text-white">
                    {item.category}
                  </span>
                  <span className="text-sm text-zinc-400">{item.tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Build Timeline */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "#131416" }}>
          <div className="mx-auto max-w-3xl px-6 md:px-8">
            <h2 className="mb-10 text-[28px] font-bold leading-[1.2] tracking-tight text-white md:text-[40px]">
              Build Process
            </h2>
            <div className="space-y-8">
              {TIMELINE.map((phase, idx) => (
                <div key={phase.week} className="flex gap-4 md:gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brass-500 text-sm font-bold text-white">
                      {idx + 1}
                    </div>
                    <div className="mt-2 w-0.5 grow bg-[rgba(255,255,255,0.06)]" />
                  </div>
                  <div className="pb-8">
                    <h3 className="mb-1 text-lg font-bold text-white">
                      {phase.title}
                    </h3>
                    <p className="mb-3 text-xs font-medium uppercase tracking-wider text-brass-300">
                      {phase.week}
                    </p>
                    <ul className="space-y-2">
                      {phase.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-base leading-[1.6] text-zinc-400"
                        >
                          <svg
                            className="mt-1 h-4 w-4 shrink-0 text-brass-300"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Takeaway */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "#0E0F11" }}>
          <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
            <h2 className="mb-6 text-[28px] font-bold leading-[1.2] tracking-tight text-white md:text-[40px]">
              Key Takeaway
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-[1.7] text-gray-300 md:text-xl">
              TheEVHub proves that a purpose-built e-commerce platform can
              compete with established distributors by offering a better buying
              experience, certified products, and direct-to-consumer pricing.
              The same approach applies to any niche vertical commerce
              opportunity.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "#131416" }}>
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="mx-auto max-w-2xl rounded-2xl border border-blue-500/20 p-8 text-center shadow-lg md:p-12" style={{ backgroundColor: "#16181B" }}>
              <h2 className="mb-4 text-[28px] font-bold leading-[1.15] tracking-tight text-white md:text-[40px]">
                Need a Custom E-Commerce Platform?
              </h2>
              <p className="mb-8 text-base leading-[1.6] text-zinc-400 md:text-lg">
                We build full-stack e-commerce platforms with payments, admin
                dashboards, and growth features. Start with a free consultation.
              </p>
              <a
                href="/contact"
                className="btn-glow inline-block rounded-lg bg-gradient-to-r from-brass-500 to-bone-200 px-8 py-4 text-lg font-semibold text-white shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
              >
                Book Your Free AI Audit
              </a>
              <p className="mt-4 text-sm text-zinc-500">
                Or visit{" "}
                <a
                  href="https://theevhub.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-brass-300 hover:underline"
                >
                  theevhub.com
                </a>{" "}
                to see the platform live.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
