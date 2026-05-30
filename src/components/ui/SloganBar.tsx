"use client";

import { useState } from "react";

const SLOGANS = [
  "We Identify. We Automate. You Scale.",
  "Your Pain Points In. Automation Out.",
];

export default function SloganBar() {
  const [slogan] = useState(() => SLOGANS[Math.floor(Math.random() * SLOGANS.length)]);

  return (
    <div
      className="border-b border-[rgba(255,255,255,0.04)]"
      style={{ backgroundColor: "#0E0F11" }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-end px-6 py-4 md:px-8">
        <p className="text-sm italic leading-relaxed tracking-wide text-[#B6B8BC] md:text-base">
          {slogan}
        </p>
        <p className="mt-0.5 text-xs font-medium tracking-wider text-[#8A8D93]">
          &mdash; IntellectAI
        </p>
      </div>
    </div>
  );
}
