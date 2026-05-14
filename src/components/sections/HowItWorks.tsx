import Image from "next/image";
import { STEPS } from "@/lib/constants";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24" style={{ backgroundColor: "#131416" }}>
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-8 text-center md:mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-brass-300">
            The Deployment Path
          </span>
          <h2 className="mt-4 text-[32px] font-bold leading-[1.15] tracking-tight text-white md:text-[48px]">
            From Audit to{" "}
            <span className="text-gradient">Autonomous Operations</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-[1.6] text-zinc-400 md:text-lg">
            Three phases. Three to four weeks. Zero buzzwords, just a
            deployable AI Operating System for your business.
          </p>
        </div>

        <div className="mx-auto mb-12 max-w-5xl overflow-hidden rounded-2xl border border-white/[0.06] md:mb-16">
          <Image
            src="/images/image3.jpeg"
            alt="A growth trajectory showing AI tools and processes scaling from laptop to mobile"
            width={1920}
            height={1080}
            className="h-[200px] w-full object-cover md:h-[280px]"
          />
        </div>

        <div className="relative mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          <div className="absolute left-[16.67%] right-[16.67%] top-10 hidden h-0.5 bg-gradient-to-r from-brass-500/30 to-transparent md:block" />

          {STEPS.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-brass-500/30 bg-brass-500/10 text-4xl font-extrabold text-brass-300 md:h-24 md:w-24 md:text-5xl">
                {step.number}
              </div>
              <h3 className="mb-3 text-xl font-bold text-white md:text-2xl">
                {step.title}
              </h3>
              <p className="mx-auto max-w-xs text-base leading-[1.6] text-zinc-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
