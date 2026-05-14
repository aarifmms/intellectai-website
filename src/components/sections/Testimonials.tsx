"use client";

const TESTIMONIALS = [
  {
    quote:
      "IntellectAI built our compliance monitoring platform in under 4 weeks. What used to require 2-3 VAs now runs 24/7 autonomously. Game changer for our Amazon business.",
    name: "SellerPilotAI",
    role: "AI SaaS Product",
    metric: "From concept to launch in <4 weeks",
  },
  {
    quote:
      "The voice booking agent handles all our appointment scheduling. No more missed calls during lessons. It's like having a receptionist that never takes a break.",
    name: "Driving Academy",
    role: "AI Voice Agent",
    metric: "24/7 automated booking",
  },
  {
    quote:
      "They delivered a full e-commerce platform with Stripe payments, product quiz, and admin dashboard. Professional, fast, and exactly what we needed to launch.",
    name: "TheEVHub",
    role: "E-Commerce Platform",
    metric: "50+ products, CA & US shipping",
  },
];

export default function Testimonials() {
  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: "#09090B" }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-8 text-center md:mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            Shipped &amp; Running
          </span>
          <h2 className="mt-4 text-[32px] font-extrabold leading-[1.15] tracking-tight text-white md:text-[48px]">
            AI Operating Systems{" "}
            <span className="text-gradient">in Production</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-[1.6] text-zinc-400 md:text-xl">
            Real AI workforces shipped for real businesses. No demos, no
            slideware, just systems running in the wild.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="group flex flex-col rounded-xl p-6 transition-all duration-300"
              style={{
                backgroundColor: "#131620",
                border: "1px solid rgba(255, 255, 255, 0.06)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "rgba(255, 255, 255, 0.12)";
                el.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "rgba(255, 255, 255, 0.06)";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* Quote icon */}
              <svg
                className="mb-3 h-8 w-8 text-blue-500/20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>

              <p className="mb-6 flex-1 text-base leading-[1.7] text-zinc-300">
                {t.quote}
              </p>

              <div
                className="pt-4"
                style={{ borderTop: "1px solid rgba(63, 63, 70, 0.5)" }}
              >
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-sm text-zinc-500">{t.role}</p>
                <p className="mt-1 text-xs font-medium text-blue-400">
                  {t.metric}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
