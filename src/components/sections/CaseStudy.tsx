"use client";

import { CASE_STUDIES } from "@/lib/constants";

export default function CaseStudy() {
  return (
    <section
      id="case-studies"
      className="py-16 md:py-24"
      style={{ backgroundColor: "#0F1117" }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-8 text-center md:mb-12">
          <h2 className="text-[32px] font-extrabold leading-[1.15] tracking-tight text-white md:text-[48px]">
            We Don&apos;t Just Talk About AI. We Ship It.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-[1.6] text-zinc-400 md:text-xl">
            Real products. Real businesses. Built and shipped by IntellectAI.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {CASE_STUDIES.map((study) => (
            <a
              key={study.title}
              href={study.href}
              className="group relative flex flex-col overflow-hidden rounded-xl transition-all duration-300"
              style={{
                backgroundColor: "#131620",
                border: "1px solid rgba(255, 255, 255, 0.06)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.backgroundColor = "#1A1F2E";
                el.style.transform = "scale(1.02)";
                el.style.borderColor = "rgba(59, 130, 246, 0.2)";
                el.style.boxShadow =
                  "0 0 30px rgba(59, 130, 246, 0.1)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.backgroundColor = "#131620";
                el.style.transform = "scale(1)";
                el.style.borderColor = "rgba(255, 255, 255, 0.06)";
                el.style.boxShadow = "none";
              }}
            >
              <div className="flex flex-col p-6">
                {/* Header */}
                <div className="mb-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                      {study.category}
                    </span>
                    <span
                      className={`flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-xs font-medium ${
                        study.status === "Live"
                          ? "border-emerald-800 bg-emerald-900/30 text-emerald-400"
                          : "border-blue-500/30 bg-blue-500/10 text-blue-400"
                      }`}
                    >
                      {study.status === "Live" && (
                        <span className="animate-pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      )}
                      {study.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">
                    {study.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="mb-6 flex-1 text-sm leading-[1.6] text-zinc-400">
                  {study.description}
                </p>

                {/* Stats */}
                <div className="mb-4 grid grid-cols-3 gap-3">
                  {study.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-sm font-bold text-blue-400">
                        {stat.value}
                      </div>
                      <div className="text-xs text-zinc-500">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-zinc-700 px-2 py-0.5 text-xs text-zinc-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link indicator */}
                <div className="mt-4 text-sm font-semibold text-blue-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Read Case Study &rarr;
                </div>
              </div>

              {/* Gradient bottom border on hover */}
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-blue-500 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
