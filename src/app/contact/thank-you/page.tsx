import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Message Sent | IntellectAI",
  description: "Thank you for reaching out. We'll get back to you within 24 hours.",
};

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main className="pb-20 pt-32 md:pb-32 md:pt-44" style={{ backgroundColor: "#0E0F11" }}>
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-900/30 border border-green-800">
              <svg
                className="h-8 w-8 text-green-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h1 className="mb-4 text-[32px] font-bold leading-[1.1] tracking-tight text-white md:text-[48px]">
              Message <span className="text-brass-300">Received</span>
            </h1>
            <p className="mb-8 text-lg leading-[1.6] text-[#B6B8BC]">
              Thank you for reaching out. We&apos;ll review your message and get
              back to you within 24 hours.
            </p>

            <div className="mb-10 rounded-xl border border-[rgba(255,255,255,0.06)] p-6 text-left" style={{ backgroundColor: "#16181B" }}>
              <h2 className="mb-4 text-lg font-bold text-white">
                What happens next?
              </h2>
              <ol className="space-y-3 text-base leading-[1.6] text-[#B6B8BC]">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brass-500 text-xs font-bold text-white">
                    1
                  </span>
                  We review your message and research your business
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brass-500 text-xs font-bold text-white">
                    2
                  </span>
                  We reply with initial thoughts and schedule a call if needed
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brass-500 text-xs font-bold text-white">
                    3
                  </span>
                  You get a clear proposal with scope, timeline, and pricing
                </li>
              </ol>
            </div>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/"
                className="btn-glow inline-block rounded-lg bg-gradient-to-r from-brass-500 to-bone-200 px-6 py-3 text-base font-semibold text-white shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md"
              >
                Back to Home
              </Link>
              <Link
                href="/case-study"
                className="inline-block rounded-lg border border-[rgba(255,255,255,0.12)] px-6 py-3 text-base font-semibold text-white transition-all duration-150 hover:border-brass-500/30 hover:text-brass-300"
              >
                View Our Case Studies
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
