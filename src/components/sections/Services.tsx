"use client";

import Image from "next/image";
import { SERVICES } from "@/lib/constants";

const ICONS = [
  // Search / Magnifying Glass
  <svg
    key="search"
    className="h-12 w-12 text-brass-300"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>,
  // Lightning Bolt
  <svg
    key="bolt"
    className="h-12 w-12 text-brass-300"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>,
  // CPU / Chip
  <svg
    key="cpu"
    className="h-12 w-12 text-brass-300"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="15" x2="23" y2="15" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="15" x2="4" y2="15" />
  </svg>,
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-16 md:py-24"
      style={{ backgroundColor: "#0E0F11" }}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-8 text-center md:mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-brass-300">
            The Platform
          </span>
          <h2 className="mt-4 text-[32px] font-bold leading-[1.15] tracking-tight text-white md:text-[48px]">
            We Build Your{" "}
            <span className="text-gradient">AI Operating System</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-[1.6] text-[#B6B8BC] md:text-lg">
            Voice AI, workflow orchestration, and autonomous agents, combined
            into one intelligent business system, customized to your industry
            and operations.
          </p>
        </div>

        <div className="relative mb-10 overflow-hidden rounded-2xl border border-[#23262B] md:mb-12">
          <Image
            src="/images/image9.jpeg"
            alt="AI agent architecture showing memory, autonomous action, reactivity, tool use, and human-in-the-loop control"
            width={1920}
            height={1080}
            className="h-[240px] w-full object-cover md:h-[360px]"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(9,9,11,0.2) 0%, rgba(9,9,11,0.6) 100%)",
            }}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {SERVICES.map((service, i) => {
            const isPopular = service.popular;

            return (
              <div
                key={service.title}
                className="card-3d group relative flex flex-col rounded-xl p-6 transition-all duration-300 md:p-8"
                style={{
                  backgroundColor: "#17181B",
                  border: isPopular
                    ? "1px solid rgba(201, 169, 97, 0.4)"
                    : "1px solid rgba(255, 255, 255, 0.06)",
                  boxShadow: isPopular
                    ? "0 0 40px rgba(201, 169, 97, 0.12), 0 8px 32px rgba(0, 0, 0, 0.3)"
                    : "0 0 0 1px rgba(255, 255, 255, 0.06), 0 8px 40px rgba(0, 0, 0, 0.4)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.backgroundColor = "#1C1F23";
                  el.style.transform = "translateY(-4px)";
                  el.style.borderColor = isPopular
                    ? "rgba(201, 169, 97, 0.5)"
                    : "rgba(255, 255, 255, 0.12)";
                  if (!isPopular) {
                    el.style.boxShadow =
                      "0 0 30px rgba(201, 169, 97, 0.08), 0 8px 40px rgba(0, 0, 0, 0.4)";
                  }
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.backgroundColor = "#17181B";
                  el.style.transform = "translateY(0)";
                  el.style.borderColor = isPopular
                    ? "rgba(201, 169, 97, 0.4)"
                    : "rgba(255, 255, 255, 0.06)";
                  el.style.boxShadow = isPopular
                    ? "0 0 40px rgba(201, 169, 97, 0.12), 0 8px 32px rgba(0, 0, 0, 0.3)"
                    : "0 0 0 1px rgba(255, 255, 255, 0.06), 0 8px 40px rgba(0, 0, 0, 0.4)";
                }}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-brass-500 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-brass-500/10">
                  {ICONS[i]}
                </div>

                <h3 className="mb-3 text-xl font-bold text-white md:text-2xl">
                  {service.title}
                </h3>

                <p className="mb-6 grow text-base leading-[1.6] text-[#B6B8BC]">
                  {service.description}
                </p>

                <ul className="mb-6 space-y-2">
                  {service.features.map((feature) => (
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

                <div className="mb-6">
                  <span className="text-sm text-[#8A8D93]">Starting at </span>
                  <span className="text-2xl font-bold text-white md:text-3xl">
                    {service.price}
                  </span>
                  {"originalPrice" in service && service.originalPrice && (
                    <span className="ml-2 text-sm text-[#8A8D93] line-through">
                      {service.originalPrice}
                    </span>
                  )}
                </div>

                <a
                  href="/contact"
                  className={`block w-full rounded-lg py-3 text-center text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ${
                    isPopular
                      ? "text-white"
                      : "border border-brass-500/30 bg-transparent text-brass-300 hover:bg-brass-500/10"
                  }`}
                  style={
                    isPopular
                      ? {
                          background:
                            "linear-gradient(180deg, #DAB97A 0%, #C9A961 60%, #A8893F 100%)",
                          boxShadow: "0 0 20px rgba(201, 169, 97, 0.3)",
                        }
                      : undefined
                  }
                >
                  {service.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
