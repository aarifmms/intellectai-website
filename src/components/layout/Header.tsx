"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import BrandName from "@/components/ui/BrandName";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      <div
        className={`${
          scrolled
            ? "bg-[#0E0F11]/80 backdrop-blur-lg border-b border-[#23262B]"
            : "bg-transparent"
        } transition-all duration-300`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 md:px-8">
          <Link href="/" className="text-xl font-bold md:text-2xl">
            <BrandName className="text-xl font-bold md:text-2xl" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded text-sm font-medium text-[#B6B8BC] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E0F11]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/contact"
              className="rounded-lg bg-brass-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:bg-brass-400 hover:shadow-md active:translate-y-0 active:bg-brass-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E0F11]"
            >
              Book a Free Audit
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="rounded p-2 text-white md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-500"
            aria-label="Open menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40" style={{ backgroundColor: "#0E0F11" }}>
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute right-6 top-5 rounded p-2 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-500"
            aria-label="Close menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <div className="flex h-full flex-col items-center justify-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded text-2xl font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-500"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg bg-brass-500 px-8 py-4 text-lg font-semibold text-white shadow-sm transition-all duration-150 hover:bg-brass-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-500"
            >
              Book a Free Audit
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
