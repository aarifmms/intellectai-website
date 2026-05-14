export default function About() {
  return (
    <section id="about" className="py-16 md:py-24" style={{ backgroundColor: "#09090B" }}>
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="flex justify-center md:justify-end">
            <div
              className="animate-float flex h-80 w-64 items-center justify-center rounded-full ring-4 ring-blue-500/20 md:h-96 md:w-80"
              style={{
                background: "linear-gradient(135deg, #3B82F6, #06B6D4)",
              }}
            >
              <span className="text-5xl font-bold text-white md:text-6xl">
                AS
              </span>
            </div>
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
              About IntellectAI
            </span>
            <h2 className="mt-4 mb-4 text-[32px] font-bold leading-[1.15] tracking-tight text-white md:text-[48px]">
              We Run on the Same{" "}
              <span className="text-gradient">AI We Build</span>
            </h2>
            <h3 className="mb-1 text-xl font-semibold text-white">
              Aarif Shaikh
            </h3>
            <p className="mb-6 text-sm font-medium text-blue-400">
              Founder · IntellectAI &amp; SellerPilotAI
            </p>
            <p className="text-base leading-[1.7] text-zinc-400">
              IntellectAI isn&apos;t a consultancy that talks about AI. We
              operate our own business on a 7-agent AI workforce that handles
              everything from sales outreach to content production to customer
              support — 24/7, at a fraction of the cost of a human team. We
              build the same AI Operating System for SMBs that want the same
              unfair advantage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
