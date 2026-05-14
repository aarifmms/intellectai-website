import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24" style={{ backgroundColor: "#09090B" }}>
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-white/[0.06]">
              <Image
                src="/images/image2.jpeg"
                alt="An AI system operating an enterprise workflow dashboard, the way IntellectAI runs its own business"
                width={1024}
                height={576}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 hidden h-20 w-20 items-center justify-center rounded-full ring-4 ring-[#09090B] md:flex"
              style={{ background: "linear-gradient(135deg, #3B82F6, #06B6D4)" }}>
              <span className="text-xl font-bold text-white">AS</span>
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
              support. 24/7, at a fraction of the cost of a human team. We
              build the same AI Operating System for SMBs that want the same
              unfair advantage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
