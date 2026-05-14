import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | IntellectAI",
  description:
    "Get in touch with IntellectAI. Book a free AI Readiness Audit or tell us about your project.",
};

export default function Contact() {
  return (
    <>
      <Header />
      <main className="pb-20 pt-32 md:pb-32 md:pt-44" style={{ backgroundColor: "#09090B" }}>
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="mx-auto mb-8 h-0.5 w-20 bg-blue-500" />
            <h1 className="mb-4 text-center text-[32px] font-extrabold leading-[1.1] tracking-tight text-white md:text-[48px]">
              Let&apos;s Talk <span className="text-blue-400">AI</span>
            </h1>
            <p className="mb-12 text-center text-lg leading-[1.6] text-zinc-400">
              Ready to put AI to work for your business? Fill out the form below
              and we&apos;ll get back to you within 24 hours.
            </p>

            <div className="rounded-2xl border border-[rgba(255,255,255,0.06)] p-6 shadow-sm md:p-10" style={{ backgroundColor: "#131620" }}>
              <ContactForm />
            </div>

            <p className="mt-6 text-center text-sm text-zinc-500">
              Or email us directly at{" "}
              <a
                href="mailto:aarifshaikhs@hotmail.com"
                className="font-medium text-blue-400 hover:underline"
              >
                aarifshaikhs@hotmail.com
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
