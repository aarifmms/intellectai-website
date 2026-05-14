const LOGOS = [
  {
    name: "Next.js",
    svg: (
      <svg viewBox="0 0 180 180" className="h-7 w-7" fill="currentColor">
        <mask id="nextjs-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
          <circle cx="90" cy="90" r="90" fill="white" />
        </mask>
        <g mask="url(#nextjs-mask)">
          <circle cx="90" cy="90" r="90" fill="currentColor" />
          <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#nextjs-grad-a)" />
          <rect x="115" y="54" width="12" height="72" fill="url(#nextjs-grad-b)" />
        </g>
        <defs>
          <linearGradient id="nextjs-grad-a" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="nextjs-grad-b" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "React",
    svg: (
      <svg viewBox="-11.5 -10.232 23 20.463" className="h-7 w-7" fill="currentColor">
        <circle r="2.05" />
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: "Vercel",
    svg: (
      <svg viewBox="0 0 76 65" className="h-6 w-6" fill="currentColor">
        <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
      </svg>
    ),
  },
  {
    name: "Supabase",
    svg: (
      <svg viewBox="0 0 109 113" className="h-7 w-7" fill="none">
        <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627H99.1935C108.243 40.0627 113.2 50.9018 107.298 57.5536L63.7076 110.284Z" fill="url(#supa-a)" />
        <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627H99.1935C108.243 40.0627 113.2 50.9018 107.298 57.5536L63.7076 110.284Z" fill="url(#supa-b)" fillOpacity="0.2" />
        <path d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C0.781425 72.2922 -4.17547 61.4531 1.72659 54.8013L45.317 2.07103Z" fill="currentColor" />
        <defs>
          <linearGradient id="supa-a" x1="53.9738" y1="54.974" x2="94.1635" y2="71.8295" gradientUnits="userSpaceOnUse">
            <stop stopColor="currentColor" stopOpacity="0.6" />
            <stop offset="1" stopColor="currentColor" />
          </linearGradient>
          <linearGradient id="supa-b" x1="36.1558" y1="30.578" x2="54.4844" y2="65.0806" gradientUnits="userSpaceOnUse">
            <stop />
            <stop offset="1" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "Stripe",
    svg: (
      <svg viewBox="0 0 60 25" className="h-6 w-auto" fill="currentColor">
        <path d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a13.17 13.17 0 0 1-4.56.75c-4.14 0-6.96-2.58-6.96-6.96 0-3.94 2.42-7.03 6.29-7.03 3.87 0 6.17 3.09 6.17 7.03 0 .39-.04 1.01-.13 1.29zm-6.17-5.16c-1.12 0-2.09.83-2.27 2.5h4.42c-.04-1.53-.72-2.5-2.15-2.5zM41.5 19.95c-1.46 0-2.57-.53-3.24-1.08l-.02 4.76-4.27.91V6.27h3.69l.16 1.01c.73-.71 1.94-1.28 3.37-1.28 3.16 0 5.37 2.87 5.37 6.87 0 4.5-2.31 7.08-5.06 7.08zm-.73-10.24c-.95 0-1.63.37-2.05.78l.04 5.58c.4.38 1.06.73 2.01.73 1.58 0 2.56-1.65 2.56-3.57 0-1.88-.96-3.52-2.56-3.52zM28.68 2.41c1.44 0 2.54.48 2.54 2.1 0 1.58-1.1 2.13-2.54 2.13s-2.55-.55-2.55-2.13c0-1.62 1.1-2.1 2.55-2.1zm-2.14 3.86h4.27v13.48h-4.27V6.27zm-5.29-2.61l-4.27.91v15.18h4.27V3.66zM11.1 6.27l.22 1.33c.81-1.07 2.1-1.6 3.38-1.6.39 0 .82.05 1.12.14v3.8a6.65 6.65 0 0 0-1.36-.14c-1.32 0-2.49.52-3.08 1.38v8.57H7.1V6.27h4zm-7.1.43v3.24c-.95-.44-2.35-.66-3.29-.66-.85 0-1.43.25-1.43.76 0 1.85 5.72.69 5.72 5.36 0 2.92-2.33 4.55-5.6 4.55A14.5 14.5 0 0 1 0 19.53V16.2c1.05.6 2.63 1 3.88 1 .96 0 1.56-.27 1.56-.82 0-1.85-5.67-.62-5.67-5.22C-.23 8.35 2.13 6 5.68 6c1.06 0 2.04.24 2.32.7z" fillRule="evenodd" />
      </svg>
    ),
  },
  {
    name: "OpenAI",
    svg: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
      </svg>
    ),
  },
  {
    name: "Anthropic",
    svg: (
      <span className="text-base font-bold tracking-tight">Anthropic</span>
    ),
  },
  {
    name: "Vapi",
    svg: (
      <span className="text-base font-bold tracking-tight">Vapi</span>
    ),
  },
  {
    name: "n8n",
    svg: (
      <span className="text-base font-bold tracking-tight">n8n</span>
    ),
  },
];

export default function LogoBar() {
  return (
    <section
      className="border-t border-b py-10 md:py-14"
      style={{
        background: "#131416",
        borderColor: "rgba(255, 255, 255, 0.06)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <p className="mb-6 text-center text-sm font-medium uppercase tracking-wider text-[#8A8D93]">
          Powering AI infrastructure with industry-leading platforms
        </p>
        <div className="relative overflow-hidden">
          {/* Fade edges matching #131416 bg */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16"
            style={{
              background: "linear-gradient(to right, #131416, transparent)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16"
            style={{
              background: "linear-gradient(to left, #131416, transparent)",
            }}
          />
          {/* Scrolling track */}
          <div className="animate-marquee flex w-max items-center gap-12 md:gap-16">
            {/* First set */}
            {LOGOS.map((logo) => (
              <div
                key={logo.name}
                className="flex shrink-0 items-center gap-2 text-zinc-600 transition-all duration-300 hover:text-[#D3CCBA]"
                aria-label={logo.name}
              >
                {logo.svg}
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {LOGOS.map((logo) => (
              <div
                key={`${logo.name}-dup`}
                className="flex shrink-0 items-center gap-2 text-zinc-600 transition-all duration-300 hover:text-[#D3CCBA]"
                aria-label={logo.name}
              >
                {logo.svg}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
