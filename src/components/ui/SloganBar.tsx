"use client";

import { useState, useEffect } from "react";
import BrandName from "@/components/ui/BrandName";

const SLOGANS = [
  "We Identify. We Automate. You Scale.",
  "Your Pain Points In. Our Automation Out.",
];

export default function SloganBar() {
  const [slogan, setSlogan] = useState(SLOGANS[0]);
  useEffect(() => {
    setSlogan(SLOGANS[Math.floor(Math.random() * SLOGANS.length)]);
  }, []);

  return (
    <div
      className="border-b border-[rgba(255,255,255,0.04)]"
      style={{ backgroundColor: "#0E0F11" }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-3 md:px-8">
        <div className="w-fit">
          <p className="text-center text-lg italic leading-relaxed tracking-wide text-[#D3CCBA] md:text-xl">
            {slogan}
          </p>
          <p className="mt-1 text-right text-sm font-medium tracking-wider text-[#8A8D93]">
            &mdash; <BrandName className="text-sm font-medium tracking-wider" />
          </p>
        </div>
      </div>
    </div>
  );
}
