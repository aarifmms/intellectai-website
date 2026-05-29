import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Case Study: Keyblind | IntellectAI",
  description:
    "How IntellectAI built Keyblind, an encrypted secrets vault with MCP integration for AI agents. Protects API keys from leaking to LLM conversations.",
  openGraph: {
    title: "Case Study: Keyblind | IntellectAI",
    description:
      "Encrypted secrets vault with MCP for AI agents. 16 MCP tools, 40+ CLI commands, browser extension. Built and launched.",
  },
};

const STATS = [
  { value: "40+", label: "CLI Commands" },
  { value: "16", label: "MCP Tools" },
  { value: "MIT", label: "License" },
  { value: "Zero", label: "Telemetry" },
];

const TECH_STACK = [
  { category: "Runtime", tech: "Node.js, TypeScript (ESM)" },
  { category: "Encryption", tech: "AES-256-GCM, PBKDF2 (600K iterations)" },
  { category: "Storage", tech: "SQLite (better-sqlite3)" },
  { category: "MCP", tech: "@modelcontextprotocol/sdk — stdio + Streamable HTTP" },
  { category: "Dashboard", tech: "Next.js 15, React 19, Tailwind CSS, lucide-react" },
  { category: "Payments", tech: "Stripe (license keys, checkout)" },
  { category: "Email", tech: "Resend (transactional)" },
  { category: "Distribution", tech: "npm registry, Smithery, Glama, Homebrew" },
  { category: "CI/CD", tech: "GitHub Actions, pre-commit hooks" },
];

const FEATURES = [
  {
    title: "Encrypted Secrets Vault",
    description:
      "AES-256-GCM encrypted SQLite vault with PBKDF2 key derivation. Machine-identity-bound encryption keys mean secrets are tied to the device. Zero network, zero telemetry, fully local.",
  },
  {
    title: "MCP-Native AI Agent Integration",
    description:
      "16 MCP tools that work with every MCP-compatible AI editor — Claude Code, Cursor, Copilot, Windsurf, Cline, Zed. Secrets are resolved at runtime, plaintext never appears in the LLM conversation transcript.",
  },
  {
    title: "Sandbox Mode",
    description:
      "Replaces real .env values with deterministic HMAC-SHA256 fakes. AI agents reading .env files see only fakes. When you run your app, real secrets are injected as environment variables at runtime.",
  },
  {
    title: "Multi-Backend Support",
    description:
      "Works with 7 backends: local encrypted vault, 1Password CLI, Bitwarden CLI, environment variables, AWS Secrets Manager, GCP Secret Manager, and Azure Key Vault. One interface, any backend.",
  },
  {
    title: "Browser Extension",
    description:
      "Chrome MV3 extension that detects 13+ API key formats in real-time. Intercepts paste events on AI chat sites (Claude.ai, ChatGPT, Copilot) and shows warning banners before secrets leak.",
  },
  {
    title: "Dead Man's Switch & Secret Sharing",
    description:
      "End-to-end encrypted secret sharing via URL fragments — secrets are encrypted client-side and never touch a server. Dead man's switch auto-releases vault access to designated contacts after inactivity.",
  },
  {
    title: "CI/CD Integration",
    description:
      "GitHub Action injects secrets as masked environment variables in CI/CD pipelines. Pre-commit hook scans staged files for exposed secrets and blocks commits before they leave the machine.",
  },
  {
    title: "TOTP 2FA Built In",
    description:
      "Built-in TOTP code generator with 30-second rotation. Store TOTP configs alongside your secrets and generate codes directly from the CLI — no phone needed.",
  },
];

const TIMELINE = [
  {
    week: "Phase 1",
    title: "Core Vault Engine",
    items: [
      "AES-256-GCM encryption with PBKDF2 key derivation (600K iterations)",
      "Machine-identity-bound encryption keys via XOR-wrapped machine fingerprint",
      "SQLite storage layer with parameterized queries and prepared statements",
      "Zero network, zero telemetry architecture — fully local by design",
    ],
  },
  {
    week: "Phase 2",
    title: "MCP Server + CLI",
    items: [
      "Built 16 MCP tools for secret resolution, storage, listing, and deletion",
      "40+ CLI commands covering vault ops, sandbox, TOTP, sharing, and team management",
      "Sandbox mode: HMAC-SHA256 deterministic fakes with runtime secret injection",
      "Multi-backend provider system with unified interface across 7 backends",
    ],
  },
  {
    week: "Phase 3",
    title: "Dashboard + Browser Extension",
    items: [
      "Next.js dashboard for secret management, audit logs, and license management",
      "Chrome MV3 browser extension with 13+ API key format detection",
      "Paste interception on AI chat sites with warning banners",
      "CLI-to-dashboard pairing via license key or one-time token",
    ],
  },
  {
    week: "Phase 4",
    title: "Launch & Distribution",
    items: [
      "Published to npm registry with automated CI/CD via GitHub Actions",
      "Listed on MCP marketplaces: Smithery and Glama",
      "Homebrew formula for macOS one-command install",
      "Stripe integration for Pro and Team license sales",
    ],
  },
];

export default function KeyblindCaseStudyPage() {
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
                Keyblind
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-[1.6] text-[#B6B8BC] md:text-xl">
                How IntellectAI built an encrypted secrets vault with MCP
                integration for AI agents — protecting API keys from leaking
                to LLM conversations across every major AI editor.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-[#B6B8BC]">
                <span className="rounded-full border border-gray-700 px-3 py-1">
                  DevTools
                </span>
                <span className="rounded-full border border-gray-700 px-3 py-1">
                  Security
                </span>
                <span className="rounded-full border border-gray-700 px-3 py-1">
                  MCP-Native
                </span>
                <span className="rounded-full border border-[#5C8261]/40 bg-[#7A9E7E]/10 px-3 py-1 text-[#98B79C]">
                  Live at keyblind.dev
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
              AI coding tools are everywhere — and they&apos;re leaking secrets
              at an alarming rate:
            </p>
            <ul className="space-y-3 text-base leading-[1.7] text-[#B6B8BC] md:text-lg">
              {[
                "100,000+ LLM conversations with exposed API keys were found indexed by search engines in 2025",
                "AI agents read .env files and copy-paste plaintext secrets into conversations — invisible to the developer",
                "Existing secret managers weren't built for the AI era — no MCP integration, no sandboxing, no agent awareness",
                "VS Code / Cursor-only solutions left developers using other AI editors completely unprotected",
                "Teams lacked a way to share secrets without copy-pasting them through Slack, email, or shared .env files",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="mt-1.5 h-4 w-4 shrink-0 text-[#C95A3F]"
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
              The Solution: Keyblind
            </h2>
            <p className="mb-10 text-base leading-[1.7] text-[#B6B8BC] md:text-lg">
              A developer-first, <strong className="text-white">MCP-native</strong> encrypted
              secrets vault. Secrets are resolved at runtime and never appear in
              LLM conversation transcripts. Works with every major AI editor,
              every major backend, and any CI/CD pipeline.
            </p>
            <div className="space-y-6">
              {FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl border border-[rgba(255,255,255,0.06)] p-6"
                  style={{ backgroundColor: "#17181B" }}
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
              Keyblind proves that developer tools with MCP-first integration
              can capture a growing market of AI-assisted developers who need
              security built into their workflow, not bolted on after. The same
              MCP-native approach applies to any developer tool facing the
              explosion of AI coding assistants.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "#131416" }}>
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="mx-auto max-w-2xl rounded-2xl border border-brass-500/30 p-8 text-center shadow-lg md:p-12" style={{ backgroundColor: "#17181B" }}>
              <h2 className="mb-4 text-[28px] font-bold leading-[1.15] tracking-tight text-white md:text-[40px]">
                Need a Developer Tool or AI Product?
              </h2>
              <p className="mb-8 text-base leading-[1.6] text-[#B6B8BC] md:text-lg">
                We build MCP-native developer tools, AI-powered platforms, and
                full-stack products. Start with a free consultation.
              </p>
              <a
                href="/contact"
                className="btn-glow inline-block rounded-lg bg-gradient-to-r from-brass-500 to-bone-200 px-8 py-4 text-lg font-semibold text-white shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
              >
                Book Your Free AI Audit
              </a>
              <p className="mt-4 text-sm text-[#8A8D93]">
                Or visit{" "}
                <a
                  href="https://keyblind.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-brass-300 hover:underline"
                >
                  keyblind.dev
                </a>{" "}
                to try Keyblind.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
