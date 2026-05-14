"use client";

import Image from "next/image";
import { INDUSTRIES } from "@/lib/constants";

const ICONS: Record<string, React.ReactElement> = {
  car: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 17h-2v-6l2-4h14l2 4v6h-2" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
      <path d="M5 11h14" />
    </svg>
  ),
  shopping: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  home: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  briefcase: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  wrench: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  utensils: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </svg>
  ),
  academic: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
      <line x1="3" y1="20" x2="21" y2="20" />
    </svg>
  ),
  truck: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
  scale: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18" />
      <path d="M5 21h14" />
      <path d="m18 11-3-7-3 7" />
      <path d="M9 11 6 4 3 11" />
      <path d="M3 11a3 3 0 0 0 6 0" />
      <path d="M15 11a3 3 0 0 0 6 0" />
    </svg>
  ),
  hardhat: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 17h20v3H2z" />
      <path d="M5 17v-3a7 7 0 0 1 14 0v3" />
      <path d="M10 7V4h4v3" />
    </svg>
  ),
  sparkles: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.9 5.8L4 10.7l5.8 1.9L11.7 18l1.9-5.4 5.4-1.9L13.6 8.8z" />
      <path d="M19 3v4" />
      <path d="M17 5h4" />
      <path d="M5 18v3" />
      <path d="M3.5 19.5h3" />
    </svg>
  ),
  building: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <path d="M9 7h.01M14 7h.01M9 12h.01M14 12h.01M9 17h.01M14 17h.01" />
    </svg>
  ),
};

export default function Industries() {
  return (
    <section
      id="industries"
      className="grid-bg relative overflow-hidden py-16 md:py-24"
      style={{ background: "#0E0F11" }}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-10 text-center md:mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-brass-300">
            Built For Every Industry
          </span>
          <h2 className="mt-4 text-[32px] font-bold leading-[1.15] tracking-tight text-white md:text-[48px]">
            AI Operating Systems for{" "}
            <span className="text-gradient">Every SMB Category</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-[1.6] text-[#B6B8BC] md:text-lg">
            Every business gets a custom AI workforce architecture tailored to
            its industry. If your team does it manually today, we can deploy
            an agent that does it tomorrow.
          </p>
        </div>

        <div className="relative mb-10 overflow-hidden rounded-2xl border border-[#23262B] md:mb-14">
          <Image
            src="/images/image7.jpeg"
            alt="AI networks connecting every industry, from retail to manufacturing"
            width={1920}
            height={1080}
            className="h-[200px] w-full object-cover opacity-70 md:h-[280px]"
            priority={false}
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(9,9,11,0.4) 0%, rgba(9,9,11,0.85) 100%)",
            }}
          />
          <div className="absolute inset-0 flex items-end p-6 md:p-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-brass-300">
                14 industries
              </p>
              <p className="mt-1 text-lg font-semibold text-white md:text-xl">
                One AI Operating System, custom-fit per vertical.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry) => (
            <div
              key={industry.name}
              className="group relative rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "#16181B",
                borderColor: "rgba(255, 255, 255, 0.06)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(201, 169, 97, 0.4)";
                e.currentTarget.style.boxShadow =
                  "0 0 30px rgba(201, 169, 97, 0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.06)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brass-500/10 text-brass-300">
                <div className="h-6 w-6">{ICONS[industry.icon]}</div>
              </div>
              <h3 className="mb-2 text-lg font-bold text-white md:text-xl">
                {industry.name}
              </h3>
              <p className="mb-4 text-sm leading-[1.6] text-[#B6B8BC]">
                {industry.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {industry.examples.map((ex) => (
                  <span
                    key={ex}
                    className="rounded-full border border-[#23262B] bg-white/[0.03] px-2.5 py-1 text-xs text-[#D3CCBA]"
                  >
                    {ex}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center md:mt-14">
          <p className="mb-5 text-base text-[#B6B8BC] md:text-lg">
            Your industry isn&apos;t listed? We&apos;ve probably built it
            anyway.
          </p>
          <a
            href="/contact"
            className="btn-glow inline-block rounded-lg px-8 py-4 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: "linear-gradient(180deg, #DAB97A 0%, #C9A961 60%, #A8893F 100%)" }}
          >
            Build My AI Operating System
          </a>
        </div>
      </div>
    </section>
  );
}
