import Image from "next/image";

const TESTIMONIALS = [
  {
    quote:
      "SellerPilotAI watches our Amazon account 24/7. It caught a listing suspension risk at 2 AM and alerted us before it became a problem. Our previous VA team cost $3,000/mo and missed these things regularly.",
    name: "Amazon FBA Seller",
    role: "7-Figure Brand",
    project: "SellerPilotAI",
    image: "/images/image4.jpeg",
  },
  {
    quote:
      "We needed a booking system that wouldn't miss calls during driving lessons. The voice agent handles every call, books appointments into Google Calendar, and students love how fast it is. We haven't missed a single booking since launch.",
    name: "Driving School Owner",
    role: "Toronto, ON",
    project: "Driving Academy Voice Agent",
    image: "/images/image7.jpeg",
  },
  {
    quote:
      "TheEVHub replaced four SaaS subscriptions with one platform. Stripe payments, product matching, trade-in programs — all custom-built. Our shipping coverage across Canada and the US makes us competitive with Amazon.",
    name: "E-Commerce Founder",
    role: "EV Equipment Retailer",
    project: "TheEVHub",
    image: "/images/image3.jpeg",
  },
];

export default function Testimonials() {
  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: "#131416" }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-8 text-center md:mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brass-300">
            Client Results
          </span>
          <h2 className="mt-4 text-[32px] font-bold leading-[1.15] tracking-tight text-white md:text-[48px]">
            What Our{" "}
            <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-[1.6] text-[#B6B8BC] md:text-xl">
            Real feedback from businesses running on AI infrastructure we built
            and deployed.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-xl p-6 md:p-8"
              style={{
                backgroundColor: "#17181B",
                border: "1px solid #23262B",
              }}
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-[#23262B]">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    {t.name}
                  </div>
                  <div className="text-xs text-[#8A8D93]">
                    {t.role}
                  </div>
                </div>
              </div>

              <blockquote className="flex-1 text-base leading-[1.7] text-[#D3CCBA]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="mt-5 border-t pt-4" style={{ borderColor: "#23262B" }}>
                <span className="text-xs font-medium uppercase tracking-wider text-brass-300">
                  {t.project}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
