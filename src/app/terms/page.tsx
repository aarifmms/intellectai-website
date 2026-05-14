import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | IntellectAI",
  description:
    "IntellectAI Terms of Service. Read the terms and conditions governing the use of our AI consulting and development services.",
};

export default function TermsOfService() {
  return (
    <>
      <Header />
      <main className="pb-20 pt-32 md:pb-32 md:pt-44" style={{ backgroundColor: "#0E0F11" }}>
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <h1 className="mb-8 text-[32px] font-bold leading-[1.1] tracking-tight text-white md:text-[48px]">
            Terms of Service
          </h1>
          <p className="mb-8 text-sm text-[#B6B8BC]">
            Last updated: April 28, 2026
          </p>

          <div className="space-y-8 text-base leading-[1.8] text-[#B6B8BC]">
            <section>
              <h2 className="mb-3 text-xl font-bold text-white">
                Agreement to Terms
              </h2>
              <p>
                By accessing or using the IntellectAI website and services, you
                agree to be bound by these Terms of Service. If you do not agree
                to these terms, please do not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-white">
                Services
              </h2>
              <p>
                IntellectAI provides AI consulting, custom AI agent development,
                workflow automation, and related technology services. The
                specific scope, deliverables, and timeline for each engagement
                will be outlined in a separate statement of work or service
                agreement. We reserve the right to modify, suspend, or
                discontinue any aspect of our services at any time with
                reasonable notice.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-white">
                Payment Terms
              </h2>
              <p>
                Payment terms will be specified in your individual service
                agreement. Unless otherwise stated, invoices are due within 14
                days of receipt. Late payments may incur interest at a rate of
                1.5% per month. We reserve the right to suspend services for
                overdue accounts. All fees are quoted in Canadian dollars (CAD)
                unless otherwise specified.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-white">
                Intellectual Property
              </h2>
              <p>
                Upon full payment, clients receive ownership of custom-built
                deliverables as specified in the service agreement. IntellectAI
                retains ownership of pre-existing tools, frameworks, libraries,
                and methodologies used in the development process. We reserve the
                right to use general knowledge and techniques gained during
                engagements for future projects. The IntellectAI name, logo, and
                branding are our exclusive property.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-white">
                Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, IntellectAI shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages arising from or related to the use of our
                services. Our total liability for any claim shall not exceed the
                amount paid by you for the specific services giving rise to the
                claim. AI-powered solutions are provided on an as-is basis and we
                do not guarantee specific business outcomes or results.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-white">
                Confidentiality
              </h2>
              <p>
                Both parties agree to maintain the confidentiality of proprietary
                information shared during the course of an engagement. This
                obligation survives the termination of any service agreement and
                remains in effect for a period of two years thereafter.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-white">
                Governing Law
              </h2>
              <p>
                These Terms of Service shall be governed by and construed in
                accordance with the laws of the Province of Ontario and the
                federal laws of Canada applicable therein. Any disputes arising
                under these terms shall be subject to the exclusive jurisdiction
                of the courts of the Province of Ontario, Canada.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-white">
                Changes to Terms
              </h2>
              <p>
                We reserve the right to update these Terms of Service at any
                time. Changes will be posted on this page with an updated
                revision date. Your continued use of our website or services
                after changes are posted constitutes acceptance of the revised
                terms.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-white">
                Contact
              </h2>
              <p>
                For questions about these Terms of Service, please contact us at:
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
