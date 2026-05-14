"use client";

import Image from "next/image";
import { CHATBOT_VS_AGENT } from "@/lib/constants";

export default function AgentVsChatbot() {
  return (
    <section
      id="agentic-vs-chatbot"
      className="relative overflow-hidden py-16 md:py-24"
      style={{ background: "#0E0F11" }}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(circle, rgba(201, 169, 97, 0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        <div className="mb-10 text-center md:mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-brass-300">
            What Is Agentic AI?
          </span>
          <h2 className="mt-4 text-[32px] font-bold leading-[1.15] tracking-tight text-white md:text-[48px]">
            Chatbots Talk.{" "}
            <span className="text-gradient">Agentic AI Operates.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-[1.6] text-[#B6B8BC] md:text-lg">
            Traditional AI responds to prompts. Agentic AI makes decisions,
            uses your tools, and runs entire workflows autonomously, like a
            digital employee that never sleeps.
          </p>
        </div>

        <div className="mb-10 overflow-hidden rounded-2xl border border-[#23262B]">
          <Image
            src="/images/image8.jpeg"
            alt="A human professional on one side and an AI agent on the other, working in parallel"
            width={1920}
            height={1080}
            className="h-[220px] w-full object-cover md:h-[320px]"
          />
        </div>

        <div
          className="overflow-hidden rounded-2xl border"
          style={{
            background: "#17181B",
            borderColor: "rgba(255, 255, 255, 0.06)",
          }}
        >
          <div className="grid grid-cols-3 border-b border-[#23262B]">
            <div className="px-4 py-5 md:px-6 md:py-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#8A8D93]">
                Capability
              </div>
            </div>
            <div className="border-l border-[#23262B] px-4 py-5 md:px-6 md:py-6">
              <div className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 text-[#C95A3F] md:h-5 md:w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
                <div className="text-sm font-bold text-[#C95A3F] md:text-lg">
                  Chatbot
                </div>
              </div>
            </div>
            <div
              className="border-l border-[#23262B] px-4 py-5 md:px-6 md:py-6"
              style={{
                background:
                  "linear-gradient(135deg, rgba(201, 169, 97,0.08), rgba(232, 226, 212,0.04))",
              }}
            >
              <div className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 text-brass-300 md:h-5 md:w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <div className="text-sm font-bold text-brass-300 md:text-lg">
                  Agentic AI
                </div>
              </div>
            </div>
          </div>

          {CHATBOT_VS_AGENT.map((row, i) => (
            <div
              key={row.capability}
              className={`grid grid-cols-3 ${
                i < CHATBOT_VS_AGENT.length - 1
                  ? "border-b border-[#1C1E22]"
                  : ""
              }`}
            >
              <div className="px-4 py-4 md:px-6 md:py-5">
                <div className="text-sm font-semibold text-white md:text-base">
                  {row.capability}
                </div>
              </div>
              <div className="border-l border-[#23262B] px-4 py-4 md:px-6 md:py-5">
                <div className="text-sm leading-[1.5] text-[#B6B8BC] md:text-base">
                  {row.chatbot}
                </div>
              </div>
              <div
                className="border-l border-[#23262B] px-4 py-4 md:px-6 md:py-5"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(201, 169, 97,0.04), rgba(232, 226, 212,0.02))",
                }}
              >
                <div className="text-sm leading-[1.5] text-[#E6E7E9] md:text-base">
                  {row.agent}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:mt-10">
          <p className="text-base text-[#8A8D93]">
            <span className="font-semibold text-[#D3CCBA]">Plain English:</span>{" "}
            a chatbot tells you the order is shipped. An agent ships it.
          </p>
        </div>
      </div>
    </section>
  );
}
