"use client";

import { useState } from "react";
import { FAQS } from "@/lib/constants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-24" style={{ backgroundColor: "#131416" }}>
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-8 text-center md:mb-12">
          <h2 className="text-[32px] font-bold leading-[1.15] tracking-tight text-white md:text-[48px]">
            Questions? We&apos;ve Got Answers.
          </h2>
        </div>
        <div className="mx-auto max-w-2xl">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`mb-3 overflow-hidden rounded-xl transition-all duration-300 ${
                  isOpen
                    ? "border border-blue-500/20"
                    : "border border-[rgba(255,255,255,0.06)]"
                }`}
                style={{
                  backgroundColor: isOpen ? "#1C1F23" : "#16181B",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between px-5 py-5 text-left focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#131416] focus-visible:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4 text-base font-semibold text-white md:text-lg">
                    {faq.question}
                  </span>
                  <svg
                    className={`h-5 w-5 shrink-0 text-[#8A8D93] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-base leading-[1.6] text-[#B6B8BC]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
