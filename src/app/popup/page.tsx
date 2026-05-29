import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PopupLeadForm from "@/components/sections/PopupLeadForm";

export const metadata: Metadata = {
  title: "IntellectAI | Pop-Up",
  description:
    "Discover AI-powered automation for your business. Drop your pain points and we'll show you what's possible.",
  robots: { index: false, follow: false },
};

export default function PopupPage() {
  return (
    <>
      <Header />
      <main
        className="min-h-screen pb-20 pt-32 md:pb-32 md:pt-44"
        style={{ backgroundColor: "#0E0F11" }}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="mx-auto mb-6 h-0.5 w-20 bg-brass-500" />

            <h1 className="mb-4 text-center text-[32px] font-bold leading-[1.1] tracking-tight text-white md:text-[48px]">
              Your AI Operating System{" "}
              <span className="text-brass-300">Starts Here.</span>
            </h1>
            <p className="mb-12 text-center text-lg leading-[1.6] text-[#B6B8BC]">
              Drop your pain points below. We&apos;ll show you what an AI agent
              can do with them — no slide decks, just results.
            </p>

            <div
              className="rounded-2xl border border-[rgba(255,255,255,0.06)] p-6 shadow-sm md:p-10"
              style={{ backgroundColor: "#17181B" }}
            >
              <PopupLeadForm />
            </div>

            <p className="mt-6 text-center text-sm text-[#8A8D93]">
              Or email us at{" "}
              <a
                href="mailto:letstalk@intellectai.io"
                className="font-medium text-brass-300 hover:underline"
              >
                letstalk@intellectai.io
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
