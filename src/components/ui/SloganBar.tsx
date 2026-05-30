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
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-5 md:py-6 md:px-8">
        <p className="text-center text-lg italic leading-relaxed tracking-wide text-[#D3CCBA] md:text-xl">
          {slogan}
        </p>
        <p className="mt-1 text-sm font-medium tracking-wider text-[#8A8D93]">
          &mdash; IntellectAI
        </p>
      </div>
    </div>
  );
}
