import { NAV_LINKS, SITE } from "@/lib/constants";
import BrandName from "@/components/ui/BrandName";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0E0F11" }}>
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo + Tagline */}
          <div className="lg:col-span-1">
            <BrandName className="text-xl font-bold" />
            <p className="mt-2 text-sm text-[#B6B8BC]">{SITE.tagline}</p>
            <a
              href="/contact"
              className="btn-glow mt-4 inline-block rounded-lg bg-gradient-to-r from-brass-500 to-bone-200 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
            >
              Book a Free Audit
            </a>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col gap-3">
            <span className="mb-1 text-sm font-semibold text-white">Navigation</span>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#B6B8BC] transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Services */}
          <div className="flex flex-col gap-3">
            <span className="mb-1 text-sm font-semibold text-white">Services</span>
            <a href="/contact" className="text-sm text-[#B6B8BC] transition-colors hover:text-white">
              AI Strategy Session
            </a>
            <a href="/contact" className="text-sm text-[#B6B8BC] transition-colors hover:text-white">
              Workflow Automation
            </a>
            <a href="/contact" className="text-sm text-[#B6B8BC] transition-colors hover:text-white">
              Custom AI Agent
            </a>
            <a href="/contact" className="text-sm text-[#B6B8BC] transition-colors hover:text-white">
              AI Retainer
            </a>
          </div>

          {/* Case Studies */}
          <div className="flex flex-col gap-3">
            <span className="mb-1 text-sm font-semibold text-white">Case Studies</span>
            <a href="/case-study" className="text-sm text-[#B6B8BC] transition-colors hover:text-white">
              SellerPilotAI
            </a>
            <a href="/case-study/evhub" className="text-sm text-[#B6B8BC] transition-colors hover:text-white">
              TheEVHub
            </a>
            <a href="/case-study/ardenmd" className="text-sm text-[#B6B8BC] transition-colors hover:text-white">
              ArdenMD
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-3 md:justify-end lg:flex-col lg:items-end">
            <span className="mb-1 hidden text-sm font-semibold text-white lg:block">Connect</span>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/intellectai-agency"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-800 text-[#B6B8BC] transition-all hover:bg-brass-500 hover:text-white"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://x.com/IntellectAI_io"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-800 text-[#B6B8BC] transition-all hover:bg-brass-500 hover:text-white"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/IntellectAIAgency"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-800 text-[#B6B8BC] transition-all hover:bg-brass-500 hover:text-white"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ backgroundColor: "#050507" }}>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-4 text-xs text-[#8A8D93] md:flex-row md:px-8">
          <span>&copy; 2026 <BrandName className="text-xs" />. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a
              href="/privacy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="transition-colors hover:text-white"
            >
              Terms of Service
            </a>
          </div>
          <span>{SITE.location}</span>
        </div>
      </div>
    </footer>
  );
}
