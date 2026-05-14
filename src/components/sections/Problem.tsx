"use client";

export default function Problem() {
  return (
    <section
      id="problem"
      className="grid-bg py-16 md:py-24"
      style={{ background: "#0E0F11" }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-8 text-center md:mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-brass-300">
            Beyond Automation
          </span>
          <h2 className="mt-4 text-[32px] font-bold leading-[1.15] tracking-tight text-zinc-100 md:text-[48px]">
            Most SMBs Are Stuck With{" "}
            <span className="text-gradient">Yesterday&apos;s AI</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-[1.6] text-[#B6B8BC] md:text-lg">
            Generic chatbots. Disconnected tools. Half-finished automations.
            None of it actually runs your business.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <div
            className="group rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 md:p-8"
            style={{
              background: "#17181B",
              borderColor: "rgba(255, 255, 255, 0.06)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.06)";
            }}
          >
            <div className="mb-4">
              <svg
                className="h-8 w-8 text-[#C95A3F]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <div className="mb-4 flex items-center gap-3">
              <h3 className="text-xl font-bold text-[#C95A3F] md:text-2xl">
                The Old Way
              </h3>
            </div>
            <ul className="space-y-2.5 text-base leading-[1.6] text-[#B6B8BC]">
              <li className="flex gap-2">
                <span className="text-[#B85450]/70">·</span>
                Chatbots that just answer FAQs and end the loop
              </li>
              <li className="flex gap-2">
                <span className="text-[#B85450]/70">·</span>
                Missed calls, dropped leads, manual scheduling
              </li>
              <li className="flex gap-2">
                <span className="text-[#B85450]/70">·</span>
                Tools that don&apos;t talk to each other
              </li>
              <li className="flex gap-2">
                <span className="text-[#B85450]/70">·</span>
                Hiring more people every time you scale
              </li>
            </ul>
          </div>

          <div
            className="group rounded-xl border border-l-2 p-6 transition-all duration-300 hover:-translate-y-1 md:p-8"
            style={{
              background: "#17181B",
              borderColor: "rgba(255, 255, 255, 0.06)",
              borderLeftColor: "#C9A961",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
              e.currentTarget.style.borderLeftColor = "#DAB97A";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.06)";
              e.currentTarget.style.borderLeftColor = "#C9A961";
            }}
          >
            <div className="mb-4">
              <svg
                className="h-8 w-8 text-brass-300"
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
            <div className="mb-4 flex items-center gap-3">
              <h3 className="text-xl font-bold text-brass-300 md:text-2xl">
                The AI Operating System
              </h3>
            </div>
            <ul className="space-y-2.5 text-base leading-[1.6] text-[#D3CCBA]">
              <li className="flex gap-2">
                <span className="text-brass-300">·</span>
                Autonomous agents that complete entire workflows
              </li>
              <li className="flex gap-2">
                <span className="text-brass-300">·</span>
                Voice + text + automation in one intelligent layer
              </li>
              <li className="flex gap-2">
                <span className="text-brass-300">·</span>
                Integrated with your CRM, calendar, billing, and ops
              </li>
              <li className="flex gap-2">
                <span className="text-brass-300">·</span>
                A digital workforce that scales without payroll
              </li>
            </ul>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-lg font-medium text-[#D3CCBA] md:text-xl">
          Beyond automation.{" "}
          <span className="text-gradient">Into autonomous operations.</span>
        </p>
      </div>
    </section>
  );
}
