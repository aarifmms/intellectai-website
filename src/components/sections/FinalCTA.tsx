import { SITE } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section id="book-a-call" className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: "#09090B" }}>
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "800px",
          height: "800px",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.05) 0%, rgba(59,130,246,0.02) 40%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            Your Move
          </span>
          <h2 className="mt-4 mb-4 text-[32px] font-bold leading-[1.15] tracking-tight text-white md:text-[48px]">
            Deploy Your AI Workforce.{" "}
            <span className="text-gradient">Today.</span>
          </h2>
          <p className="mb-8 text-base leading-[1.6] text-zinc-400 md:text-lg">
            Book your free AI Operations Audit. We&apos;ll architect your AI
            Operating System and show you the highest-ROI place to start. No
            commitment, no pressure, just a deployable blueprint.
          </p>
          <a
            href="/contact"
            className="btn-glow inline-block rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-150 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
          >
            Get My AI Blueprint
          </a>
          <p className="mt-4 text-sm text-zinc-500">
            Or email{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="font-medium text-blue-400 hover:underline"
            >
              {SITE.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
