import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Case Study: ArdenMD | IntellectAI",
  description:
    "How IntellectAI is building ArdenMD, a clinical decision support SaaS for Canadian doctors powered by AI and Medical Logic Modules.",
  openGraph: {
    title: "Case Study: ArdenMD | IntellectAI",
    description:
      "AI-powered clinical decision support for Canadian physicians. In active development.",
  },
};

const STATS = [
  { value: "658+", label: "Medical Logic Modules" },
  { value: "47", label: "Medical Specialties" },
  { value: "AI-Powered", label: "Clinical Reasoning" },
  { value: "PIPEDA", label: "Compliant" },
];

const TECH_STACK = [
  { category: "Frontend", tech: "Next.js 14, React, Tailwind CSS, shadcn/ui" },
  { category: "Backend", tech: "tRPC, Next.js API Routes" },
  { category: "Database", tech: "Supabase PostgreSQL (ca-central-1, PIPEDA)" },
  { category: "Auth", tech: "Supabase Auth + medical license verification" },
  { category: "AI Engine", tech: "Anthropic Claude + OpenAI GPT-4" },
  { category: "Payments", tech: "Stripe (CAD billing)" },
  { category: "Voice", tech: "Deepgram SDK (encounter transcription)" },
  { category: "Monitoring", tech: "Sentry (error tracking)" },
  { category: "Hosting", tech: "Vercel (ardenmd.vercel.app)" },
];

const FEATURES = [
  {
    title: "Medical Logic Module Library",
    description:
      "658+ peer-reviewed clinical decision modules across 47 specialties, built on HL7 Arden Syntax v2.10. Each module encodes evidence-based clinical guidelines into executable logic.",
  },
  {
    title: "AI-Powered Diagnostics",
    description:
      "Differential diagnosis generation, lab result interpretation, and critical value alerts powered by Claude and GPT-4. Context-aware reasoning that understands Canadian clinical standards.",
  },
  {
    title: "Drug Interaction Checking",
    description:
      "Canadian DIN database integration with renal and hepatic dosing adjustments. Formulary-aware prescriptions with Ontario Drug Benefit (ODB) integration.",
  },
  {
    title: "Voice Encounter Capture",
    description:
      "Record patient encounters with Deepgram speech-to-text, then extract structured clinical data using NLP. Saves doctors hours of documentation time per day.",
  },
  {
    title: "Canadian Standards Compliance",
    description:
      "Built for Canadian healthcare: ICD-10-CA, CCI codes, LOINC, SNOMED CT. Full PIPEDA and PHIPA compliance with AES-256 encryption and Canadian data residency.",
  },
  {
    title: "Subscription & Access Tiers",
    description:
      "Flexible pricing: Student/Resident ($19/mo), Solo Practitioner ($79/mo), Clinic 5+ ($299/mo), and Enterprise custom pricing. 14-day free trial for all tiers.",
  },
];

const TIMELINE = [
  {
    phase: "Phase 1",
    title: "Foundation & Architecture",
    status: "Complete",
    items: [
      "Database schema design with Drizzle ORM",
      "Authentication with medical license verification",
      "Stripe billing integration (CAD)",
      "Arden Syntax v2.10 parser engine",
    ],
  },
  {
    phase: "Phase 2",
    title: "Core Clinical Features",
    status: "In Progress",
    items: [
      "MLM library with 658+ modules across 47 specialties",
      "Drug interaction checking with Canadian DIN database",
      "ICD-10-CA diagnostic code search",
      "Lab result interpretation engine",
    ],
  },
  {
    phase: "Phase 3",
    title: "AI & Voice Integration",
    status: "Upcoming",
    items: [
      "Differential diagnosis powered by Claude & GPT-4",
      "Deepgram voice encounter capture",
      "Clinical NLP extraction pipeline",
      "Critical value alerting system",
    ],
  },
  {
    phase: "Phase 4",
    title: "Launch & Scale",
    status: "Planned",
    items: [
      "Beta program with Ontario physicians",
      "PHIPA compliance audit",
      "Performance optimization for clinical workflows",
      "Public launch and marketing",
    ],
  },
];

function StatusBadge({ status }: { status: string }) {
  const colors =
    status === "Complete"
      ? "border-green-800 bg-green-900/30 text-green-400"
      : status === "In Progress"
        ? "border-brass-500/30 bg-brass-500/10 text-brass-300"
        : "border-gray-700 text-[#B6B8BC]";

  return (
    <span
      className={`ml-2 rounded-full border px-2 py-0.5 text-xs font-medium ${colors}`}
    >
      {status}
    </span>
  );
}

export default function ArdenMDCaseStudyPage() {
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
              <h1 className="text-[36px] font-bold leading-[1.1] tracking-tight text-white md:text-[56px]">
                ArdenMD
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-[1.6] text-[#B6B8BC] md:text-xl">
                Building an AI-powered clinical decision support platform for
                Canadian doctors. Evidence-based medicine meets modern AI.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-[#B6B8BC]">
                <span className="rounded-full border border-gray-700 px-3 py-1">
                  Healthcare / MedTech
                </span>
                <span className="rounded-full border border-gray-700 px-3 py-1">
                  SaaS Platform
                </span>
                <span className="rounded-full border border-gray-700 px-3 py-1">
                  AI + Clinical Data
                </span>
                <span className="rounded-full border border-brass-500/30 bg-brass-500/10 px-3 py-1 text-brass-300">
                  In Active Development
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
                <div className="mt-1 text-sm text-[#B6B8BC]">{stat.label}</div>
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
            <p className="mb-6 text-base leading-[1.7] text-[#B6B8BC] md:text-lg">
              Canadian physicians face critical challenges with clinical
              decision-making tools:
            </p>
            <ul className="space-y-3 text-base leading-[1.7] text-[#B6B8BC] md:text-lg">
              {[
                "Existing clinical decision support tools are US-focused and don't account for Canadian drug formularies, billing codes, or privacy laws",
                "Doctors spend 2+ hours daily on documentation instead of patient care",
                "Drug interaction databases are often outdated or lack Canadian DIN coverage",
                "No affordable CDS tool exists for solo practitioners and small clinics",
                "AI tools in healthcare lack proper PIPEDA/PHIPA compliance and Canadian data residency",
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
              The Solution: ArdenMD
            </h2>
            <p className="mb-10 text-base leading-[1.7] text-[#B6B8BC] md:text-lg">
              A{" "}
              <strong className="text-white">
                Canadian-first clinical decision support platform
              </strong>{" "}
              that combines 658+ evidence-based Medical Logic Modules with AI
              reasoning, voice capture, and drug interaction checking. Built for
              how Canadian doctors actually work.
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
                  <p className="text-base leading-[1.6] text-[#B6B8BC]">
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
                  <span className="text-sm text-[#B6B8BC]">{item.tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Build Timeline */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "#131416" }}>
          <div className="mx-auto max-w-3xl px-6 md:px-8">
            <h2 className="mb-10 text-[28px] font-bold leading-[1.2] tracking-tight text-white md:text-[40px]">
              Development Roadmap
            </h2>
            <div className="space-y-8">
              {TIMELINE.map((phase, idx) => (
                <div key={phase.phase} className="flex gap-4 md:gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brass-500 text-sm font-bold text-white">
                      {idx + 1}
                    </div>
                    <div className="mt-2 w-0.5 grow bg-[rgba(255,255,255,0.06)]" />
                  </div>
                  <div className="pb-8">
                    <h3 className="mb-1 text-lg font-bold text-white">
                      {phase.title}
                      <StatusBadge status={phase.status} />
                    </h3>
                    <p className="mb-3 text-xs font-medium uppercase tracking-wider text-brass-300">
                      {phase.phase}
                    </p>
                    <ul className="space-y-2">
                      {phase.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-base leading-[1.6] text-[#B6B8BC]"
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
            <p className="mx-auto max-w-2xl text-lg leading-[1.7] text-[#D3CCBA] md:text-xl">
              ArdenMD demonstrates that AI can be applied to high-stakes,
              regulated industries when built with the right compliance
              framework. Canadian healthcare deserves Canadian-built tools that
              respect privacy laws and clinical standards. This is what
              responsible AI development looks like.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "#131416" }}>
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="mx-auto max-w-2xl rounded-2xl border border-blue-500/20 p-8 text-center shadow-lg md:p-12" style={{ backgroundColor: "#16181B" }}>
              <h2 className="mb-4 text-[28px] font-bold leading-[1.15] tracking-tight text-white md:text-[40px]">
                Building Something in Healthcare or Regulated Industries?
              </h2>
              <p className="mb-8 text-base leading-[1.6] text-[#B6B8BC] md:text-lg">
                We build compliant AI platforms for industries where accuracy and
                privacy matter. Let&apos;s talk about your project.
              </p>
              <a
                href="/contact"
                className="btn-glow inline-block rounded-lg bg-gradient-to-r from-brass-500 to-bone-200 px-8 py-4 text-lg font-semibold text-white shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
              >
                Book Your Free Consultation
              </a>
              <p className="mt-4 text-sm text-[#8A8D93]">
                Or visit{" "}
                <a
                  href="https://ardenmd.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-brass-300 hover:underline"
                >
                  ardenmd.vercel.app
                </a>{" "}
                to see the platform.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
