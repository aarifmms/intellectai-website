import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | IntellectAI",
  description:
    "IntellectAI Privacy Policy. Learn how we collect, use, and protect your personal information in compliance with PIPEDA.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="pb-20 pt-32 md:pb-32 md:pt-44" style={{ backgroundColor: "#0E0F11" }}>
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <h1 className="mb-8 text-[32px] font-bold leading-[1.1] tracking-tight text-white md:text-[48px]">
            Privacy Policy
          </h1>
          <p className="mb-8 text-sm text-[#B6B8BC]">
            Last updated: April 28, 2026
          </p>

          <div className="space-y-8 text-base leading-[1.8] text-[#B6B8BC]">
            <section>
              <h2 className="mb-3 text-xl font-bold text-white">
                Introduction
              </h2>
              <p>
                IntellectAI (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;)
                is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your
                personal information when you visit our website or engage our
                services. We comply with the Personal Information Protection and
                Electronic Documents Act (PIPEDA) and applicable Canadian
                privacy laws.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-white">
                Information Collection
              </h2>
              <p className="mb-3">
                We collect personal information that you voluntarily provide when
                you:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Fill out our contact form (name, email, phone number)</li>
                <li>Request an AI Readiness Audit or consultation</li>
                <li>Communicate with us via email or phone</li>
                <li>Engage us for professional services</li>
              </ul>
              <p className="mt-3">
                We may also automatically collect certain technical information
                such as your IP address, browser type, and pages visited through
                cookies and analytics tools.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-white">
                Use of Information
              </h2>
              <p className="mb-3">
                We use the information we collect for the following purposes:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>To respond to your inquiries and provide requested services</li>
                <li>To schedule consultations and deliver AI solutions</li>
                <li>To send project updates and relevant communications</li>
                <li>To improve our website and service offerings</li>
                <li>To comply with legal obligations</li>
              </ul>
              <p className="mt-3">
                We obtain your consent before collecting, using, or disclosing
                your personal information, except where permitted or required by
                law. You may withdraw your consent at any time by contacting us.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-white">
                Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures to
                protect your personal information against unauthorized access,
                alteration, disclosure, or destruction. While no method of
                transmission over the Internet is 100% secure, we strive to use
                commercially acceptable means to protect your data. We retain
                personal information only as long as necessary to fulfill the
                purposes for which it was collected or as required by law.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-white">
                Third-Party Services
              </h2>
              <p>
                We may use third-party services for analytics, hosting, and
                communication purposes. These providers may have access to your
                personal information only to perform tasks on our behalf and are
                obligated not to disclose or use it for other purposes. We do not
                sell, trade, or rent your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-white">
                Your Rights Under PIPEDA
              </h2>
              <p className="mb-3">
                Under PIPEDA, you have the right to:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Withdraw consent for the use of your information</li>
                <li>File a complaint with the Office of the Privacy Commissioner of Canada</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-white">
                Contact Information
              </h2>
              <p>
                If you have questions about this Privacy Policy or wish to
                exercise your privacy rights, please contact us at:
              </p>
              <p className="mt-3">
                <strong className="text-white">IntellectAI</strong>
                <br />
                Toronto, Ontario, Canada
                <br />
                Email:{" "}
                <a
                  href="mailto:letstalk@intellectai.io"
                  className="font-medium text-brass-300 hover:underline"
                >
                  letstalk@intellectai.io
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
