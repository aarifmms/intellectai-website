"use client";

import { motion } from "framer-motion";
import { HERO_CAPABILITIES } from "@/lib/constants";

const ease = [0.16, 1, 0.3, 1] as const;

const metrics = [
  { label: "Calls Handled", value: "1,247", color: "bg-brass-400" },
  { label: "Leads Qualified", value: "382", color: "bg-bone-200" },
  { label: "Avg Response", value: "1.2s", color: "bg-[#98B79C]" },
  { label: "Active Agents", value: "7", color: "bg-brass-500" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="grid-bg relative overflow-hidden pb-20 pt-32 md:pb-32 md:pt-44"
      style={{ background: "#0E0F11" }}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(circle, rgba(201, 169, 97, 0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-brass-500/30 bg-brass-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brass-300">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brass-400" />
                AI Operating System for SMBs
              </span>
              <h1 className="mt-6 text-[40px] font-bold leading-[1.05] tracking-tight text-white md:text-[56px] lg:text-[64px]">
                Build an AI-Powered{" "}
                <span className="text-gradient">Business That Runs Itself</span>
              </h1>
            </motion.div>

            <motion.p
              className="mx-auto mt-6 max-w-2xl text-lg leading-[1.6] text-[#B6B8BC] md:mx-0 md:text-xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease }}
            >
              We design and deploy{" "}
              <span className="font-semibold text-[#E6E7E9]">
                Agentic AI infrastructure
              </span>{" "}
              for SMBs across every industry, autonomous agents that handle
              calls, leads, scheduling, customer ops, and workflows 24/7. Not
              automation. Operations.
            </motion.p>

            <motion.ul
              className="mx-auto mt-6 grid max-w-xl grid-cols-1 gap-2 text-sm text-[#D3CCBA] sm:grid-cols-2 md:mx-0"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease }}
            >
              {HERO_CAPABILITIES.map((cap) => (
                <li key={cap} className="flex items-start gap-2">
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
                  {cap}
                </li>
              ))}
            </motion.ul>

            <motion.div
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row md:justify-start"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease }}
            >
              <a
                href="/contact"
                className="btn-glow rounded-lg px-8 py-4 text-lg font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
                style={{
                  background: "linear-gradient(180deg, #DAB97A 0%, #C9A961 60%, #A8893F 100%)",
                }}
              >
                Deploy Your AI Workforce
              </a>
              <a
                href="#demo"
                className="rounded-lg border border-[rgba(255,255,255,0.12)] px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:border-[rgba(255,255,255,0.24)] hover:bg-white/5"
              >
                See It Run &darr;
              </a>
            </motion.div>

            <motion.p
              className="mt-8 text-sm tracking-wide text-[#8A8D93]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Trusted by SMBs across 14 industries · Toronto, Canada
            </motion.p>
          </div>

          {/* Right column -- floating dashboard visual (desktop only) */}
          <div className="relative mx-auto hidden w-full max-w-lg md:mx-0 md:block">
            <div
              className="pointer-events-none absolute inset-0 -m-8 rounded-3xl"
              style={{
                background:
                  "radial-gradient(ellipse at 60% 40%, rgba(201, 169, 97, 0.12) 0%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />

            <motion.div
              className="hero-float-alt absolute -bottom-6 -left-6 z-0 w-[260px] rounded-xl border border-[rgba(255,255,255,0.06)] p-4 sm:-left-10"
              style={{ background: "#17181B" }}
              initial={{ opacity: 0, x: 40, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease }}
            >
              <div className="mb-2 text-[10px] font-medium uppercase tracking-wider text-[#8A8D93]">
                workforce.config.ts
              </div>
              <pre className="font-mono text-xs leading-relaxed">
                <span className="text-brass-300">const</span>{" "}
                <span className="text-white">ops</span>{" "}
                <span className="text-[#8A8D93]">=</span>{" "}
                <span className="text-bone-200">new</span>{" "}
                <span className="text-brass-300">AIWorkforce</span>
                <span className="text-[#8A8D93]">{"({"}</span>
                {"\n"}
                {"  "}
                <span className="text-bone-200">agents</span>
                <span className="text-[#8A8D93]">:</span>{" "}
                <span className="text-[#8A8D93]">[</span>
                <span className="text-sage-400">&quot;voice&quot;</span>
                <span className="text-[#8A8D93]">,</span>{" "}
                <span className="text-sage-400">&quot;sales&quot;</span>
                <span className="text-[#8A8D93]">,</span>{" "}
                <span className="text-sage-400">&quot;ops&quot;</span>
                <span className="text-[#8A8D93]">],</span>
                {"\n"}
                {"  "}
                <span className="text-bone-200">mode</span>
                <span className="text-[#8A8D93]">:</span>{" "}
                <span className="text-sage-400">
                  &quot;autonomous&quot;
                </span>
                <span className="text-[#8A8D93]">,</span>
                {"\n"}
                <span className="text-[#8A8D93]">{"});"}</span>
              </pre>
            </motion.div>

            <motion.div
              className="hero-float glow-blue relative z-10 rounded-xl border border-[rgba(255,255,255,0.06)] p-5 sm:p-6"
              style={{ background: "#17181B" }}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease }}
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#3A2F12]" />
                  <span className="h-3 w-3 rounded-full bg-[#5F4D1F]" />
                  <span className="h-3 w-3 rounded-full bg-[#5C8261]/60" />
                </div>
                <span className="font-mono text-xs font-medium tracking-wider text-[#B6B8BC]">
                  AI Workforce · LIVE
                </span>
              </div>

              <div className="space-y-4">
                {metrics.map((m, i) => (
                  <motion.div
                    key={m.label}
                    className="flex items-center justify-between"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.55 + i * 0.1,
                      ease,
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`h-2 w-2 rounded-full ${m.color}`} />
                      <span className="text-sm text-[#D3CCBA]">{m.label}</span>
                    </div>
                    <span className="font-mono text-sm font-semibold text-white">
                      {m.value}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 overflow-hidden rounded-full border-t border-white/5 pt-4">
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                  <div
                    className="animate-shimmer h-full w-1/3 rounded-full"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, #C9A961, #E8E2D4, transparent)",
                    }}
                  />
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brass-400" />
                  <span className="font-mono text-[10px] text-[#8A8D93]">
                    Orchestrating workflows...
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
