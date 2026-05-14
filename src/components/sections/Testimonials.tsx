"use client";

const PROJECTS = [
  {
    name: "SellerPilotAI",
    category: "Autonomous AI Platform",
    summary:
      "Compliance monitoring for Amazon sellers. Watches accounts 24/7 and catches risks before suspensions.",
    replaces: "2 to 3 VAs at $3,000+/mo",
    metric: "Built in under 4 weeks",
  },
  {
    name: "Driving Academy",
    category: "Voice AI Agent",
    summary:
      "Voice booking agent that handles all appointment scheduling. Never misses a call, even during lessons.",
    replaces: "Receptionist on the phone",
    metric: "24/7 automated booking",
  },
  {
    name: "TheEVHub",
    category: "AI-Powered E-Commerce",
    summary:
      "Full-stack platform for certified EV charging gear. Stripe checkout, product matcher, admin dashboard.",
    replaces: "Shopify + 4 SaaS subscriptions",
    metric: "50+ SKUs, CA & US shipping",
  },
];

export default function Testimonials() {
  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: "#0E0F11" }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-8 text-center md:mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brass-300">
            Shipped &amp; Running
          </span>
          <h2 className="mt-4 text-[32px] font-bold leading-[1.15] tracking-tight text-white md:text-[48px]">
            Projects We&apos;ve{" "}
            <span className="text-gradient">Put in Production</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-[1.6] text-[#B6B8BC] md:text-xl">
            Real systems we built and shipped. No slideware, no demos, no
            stock photos pretending to be clients.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3 md:gap-8">
          {PROJECTS.map((p) => (
            <div
              key={p.name}
              className="group flex flex-col rounded-xl p-6 transition-all duration-300 md:p-7"
              style={{
                backgroundColor: "#17181B",
                border: "1px solid #23262B",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "rgba(201, 169, 97, 0.25)";
                el.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "#23262B";
                el.style.transform = "translateY(0)";
              }}
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brass-300">
                {p.category}
              </span>
              <h3 className="mt-2 text-xl font-bold text-white md:text-2xl">
                {p.name}
              </h3>
              <p className="mt-3 flex-1 text-base leading-[1.6] text-[#D3CCBA]">
                {p.summary}
              </p>

              <div
                className="mt-5 grid grid-cols-2 gap-3 border-t pt-4"
                style={{ borderColor: "#23262B" }}
              >
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#8A8D93]">
                    Replaces
                  </div>
                  <div className="mt-1 text-sm font-medium text-[#E6E7E9]">
                    {p.replaces}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#8A8D93]">
                    Outcome
                  </div>
                  <div className="mt-1 text-sm font-medium text-brass-300">
                    {p.metric}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
