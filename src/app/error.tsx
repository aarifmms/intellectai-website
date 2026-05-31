"use client";

import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Page error:", error);
  }, [error]);

  return (
    <>
      <Header />
      <main className="pb-20 pt-32 md:pb-32 md:pt-44" style={{ backgroundColor: "#0E0F11" }}>
        <div className="mx-auto max-w-7xl px-6 text-center md:px-8">
          <p className="text-8xl font-bold text-brass-300 md:text-9xl">500</p>
          <h1 className="mt-4 text-[28px] font-bold tracking-tight text-white md:text-[40px]">
            Something went wrong
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base leading-[1.6] text-[#B6B8BC]">
            An unexpected error occurred. It&apos;s been logged and we&apos;re
            looking into it.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button
              onClick={reset}
              className="btn-glow inline-block rounded-lg bg-gradient-to-r from-brass-500 to-bone-200 px-6 py-3 text-base font-semibold text-white shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md"
            >
              Try Again
            </button>
            <a
              href="/"
              className="inline-block rounded-lg border border-[rgba(255,255,255,0.12)] px-6 py-3 text-base font-semibold text-white transition-all duration-150 hover:border-brass-500/30 hover:text-brass-300"
            >
              Back to Home
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
