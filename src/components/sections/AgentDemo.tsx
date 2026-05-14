"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

type Step = {
  type: "thought" | "tool" | "result";
  label: string;
  detail: string;
  duration: number;
};

const SCENARIOS: Record<
  string,
  { title: string; userInput: string; steps: Step[]; outcome: string }
> = {
  leads: {
    title: "Lead Qualification Agent",
    userInput:
      "New form submission: Sarah Chen, sarah@acme-retail.io. 'Interested in automating our inventory reorder process'",
    steps: [
      {
        type: "thought",
        label: "Reasoning",
        detail:
          "New lead. Need to enrich the company, score the lead, and route appropriately.",
        duration: 900,
      },
      {
        type: "tool",
        label: "tool: enrichCompany",
        detail: "Querying Apollo + LinkedIn API for acme-retail.io...",
        duration: 1200,
      },
      {
        type: "result",
        label: "Enrichment found",
        detail:
          "Acme Retail. 48 employees, $12M revenue, e-commerce sector. Sarah is Head of Operations.",
        duration: 800,
      },
      {
        type: "thought",
        label: "Reasoning",
        detail:
          "Strong ICP match. SMB, ops persona, inventory pain point. Score: 87/100. Route to sales.",
        duration: 900,
      },
      {
        type: "tool",
        label: "tool: hubspotCRM.create",
        detail: "Creating contact + deal in HubSpot pipeline 'Inbound'...",
        duration: 1000,
      },
      {
        type: "tool",
        label: "tool: gmail.sendReply",
        detail:
          "Drafting personalized response referencing inventory + e-commerce context...",
        duration: 1100,
      },
      {
        type: "tool",
        label: "tool: calendar.book",
        detail: "Sending 3 Calendly slots Tue/Wed/Thu next week.",
        duration: 900,
      },
    ],
    outcome:
      "Lead enriched, scored 87/100, added to CRM, personalized reply sent with 3 booking slots. Elapsed: 6.8s.",
  },
  support: {
    title: "Support Triage Agent",
    userInput:
      "Customer email: 'My order #4471 hasn't arrived and tracking shows it was delivered yesterday but I never got it'",
    steps: [
      {
        type: "thought",
        label: "Reasoning",
        detail: "Missing package complaint. Need order facts before responding.",
        duration: 900,
      },
      {
        type: "tool",
        label: "tool: shopify.getOrder",
        detail: "Fetching order #4471 from Shopify...",
        duration: 1000,
      },
      {
        type: "result",
        label: "Order data",
        detail:
          "Order #4471 · $189 · Shipped via UPS · Tracking 1Z999... · Status: Delivered 2026-05-12 14:32.",
        duration: 800,
      },
      {
        type: "tool",
        label: "tool: ups.disputeStatus",
        detail: "Checking UPS dispute API for known delivery issues in zone...",
        duration: 1100,
      },
      {
        type: "result",
        label: "Found",
        detail:
          "UPS flagged 3 misdeliveries in same zip code this week. Likely route error.",
        duration: 800,
      },
      {
        type: "thought",
        label: "Reasoning",
        detail:
          "Pattern of misdeliveries + first-time complaint from customer = approve replacement under policy.",
        duration: 900,
      },
      {
        type: "tool",
        label: "tool: shopify.createReplacement",
        detail: "Creating replacement order with expedited shipping (no charge)...",
        duration: 1000,
      },
      {
        type: "tool",
        label: "tool: gmail.sendReply",
        detail:
          "Drafting empathetic reply with new tracking number + UPS investigation note.",
        duration: 1000,
      },
    ],
    outcome:
      "Resolved in 7.5s. Replacement shipped, customer informed, UPS case logged for refund recovery.",
  },
  booking: {
    title: "Voice Booking Agent",
    userInput:
      "Inbound call: 'Hi, this is Mike. I need to book an HVAC service call for tomorrow afternoon.'",
    steps: [
      {
        type: "thought",
        label: "Reasoning",
        detail: "Service booking. Need name, address, service type, time window.",
        duration: 800,
      },
      {
        type: "tool",
        label: "tool: stt.transcribe",
        detail: "Transcribing in real-time via Deepgram...",
        duration: 700,
      },
      {
        type: "tool",
        label: "tool: crm.findCustomer",
        detail: "Looking up 'Mike' by phone +1-416-555-0188...",
        duration: 900,
      },
      {
        type: "result",
        label: "Match",
        detail: "Mike Johnson. 142 Oak St, last service 2024-11.",
        duration: 700,
      },
      {
        type: "thought",
        label: "Reasoning",
        detail:
          "Returning customer. Skip address. Ask urgency + check tomorrow PM availability.",
        duration: 800,
      },
      {
        type: "tool",
        label: "tool: gcal.availability",
        detail: "Querying technician calendars for tomorrow 12pm–5pm...",
        duration: 1000,
      },
      {
        type: "tool",
        label: "tool: tts.respond",
        detail:
          "Speaking: 'I can do tomorrow at 2pm with Dave, or 4pm with Carlos, which works?'",
        duration: 1100,
      },
      {
        type: "tool",
        label: "tool: gcal.createEvent",
        detail: "Booking confirmed slot. Sending SMS confirmation via Twilio.",
        duration: 900,
      },
    ],
    outcome:
      "Service booked, SMS confirmation sent, technician dispatched. Total call: 1m 12s.",
  },
};

export default function AgentDemo() {
  const [scenarioKey, setScenarioKey] = useState<keyof typeof SCENARIOS>("leads");

  return (
    <section
      id="demo"
      className="relative overflow-hidden py-16 md:py-24"
      style={{ background: "#0E0F11" }}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(circle, rgba(201, 169, 97,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        <div className="mb-10 text-center md:mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-brass-300">
            See It In Action
          </span>
          <h2 className="mt-4 text-[32px] font-extrabold leading-[1.15] tracking-tight text-white md:text-[48px]">
            Watch an Agent <span className="text-gradient">Actually Work</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-[1.6] text-zinc-400 md:text-lg">
            Pick a scenario. Hit run. See exactly how an agent reasons, uses
            tools, and completes a real business task end-to-end.
          </p>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-4 md:mb-10 md:grid-cols-2">
          <figure className="overflow-hidden rounded-xl border border-white/[0.06]">
            <Image
              src="/images/image6.jpeg"
              alt="An AI workforce dashboard showing live call volume and per-agent metrics"
              width={1920}
              height={1080}
              className="h-full w-full object-cover"
            />
            <figcaption className="border-t border-white/[0.04] bg-black/30 px-4 py-2 text-xs text-zinc-500">
              Live AI workforce operations dashboard
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-xl border border-white/[0.06]">
            <Image
              src="/images/image5.jpeg"
              alt="Voice AI agent interface with active calls, transcripts, and appointment booking"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
            <figcaption className="border-t border-white/[0.04] bg-black/30 px-4 py-2 text-xs text-zinc-500">
              Voice agent: live calls, transcripts, bookings
            </figcaption>
          </figure>
        </div>

        {/* Scenario tabs */}
        <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
          {(Object.keys(SCENARIOS) as Array<keyof typeof SCENARIOS>).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setScenarioKey(key)}
              className={`rounded-lg border px-4 py-2 text-sm font-semibold transition-all ${
                scenarioKey === key
                  ? "border-brass-500/50 bg-brass-500/10 text-brass-300"
                  : "border-white/[0.08] bg-white/[0.02] text-zinc-400 hover:text-white"
              }`}
            >
              {SCENARIOS[key].title}
            </button>
          ))}
        </div>

        <DemoRunner key={scenarioKey} scenario={SCENARIOS[scenarioKey]} />

        <p className="mt-4 text-center text-xs text-zinc-500">
          Demo is a deterministic simulation. Your production agent uses GPT-4o
          / Claude / Gemini with real tool calls to your stack.
        </p>
      </div>
    </section>
  );
}

function DemoRunner({
  scenario,
}: {
  scenario: (typeof SCENARIOS)[keyof typeof SCENARIOS];
}) {
  const [running, setRunning] = useState(false);
  const [stepIndex, setStepIndex] = useState(-1);
  const [done, setDone] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  function reset() {
    if (timerRef.current) clearTimeout(timerRef.current);
    setStepIndex(-1);
    setDone(false);
    setRunning(false);
  }

  function run() {
    if (timerRef.current) clearTimeout(timerRef.current);
    setStepIndex(0);
    setDone(false);
    setRunning(true);
    let i = 0;
    const tick = () => {
      if (i >= scenario.steps.length - 1) {
        timerRef.current = setTimeout(() => {
          setDone(true);
          setRunning(false);
        }, scenario.steps[i].duration);
        return;
      }
      timerRef.current = setTimeout(() => {
        i += 1;
        setStepIndex(i);
        tick();
      }, scenario.steps[i].duration);
    };
    tick();
  }

  return (
    <div
      className="rounded-2xl border p-4 md:p-6"
      style={{
        background: "#16181B",
        borderColor: "rgba(255, 255, 255, 0.06)",
      }}
    >
      <div className="mb-4 flex items-center justify-between border-b border-white/[0.06] pb-3">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
          <span className="h-3 w-3 rounded-full bg-[#28C840]" />
          <span className="ml-3 font-mono text-xs text-zinc-500">
            agent.run · {scenario.title}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {running && (
            <span className="flex items-center gap-1.5 text-xs font-medium text-brass-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-brass-400" />
              RUNNING
            </span>
          )}
          {done && (
            <span className="flex items-center gap-1.5 text-xs font-medium text-sage-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              COMPLETED
            </span>
          )}
        </div>
      </div>

      <div className="mb-5">
        <div className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-500">
          Input
        </div>
        <div className="rounded-lg border border-white/[0.04] bg-black/30 p-3 font-mono text-xs leading-relaxed text-zinc-300 md:text-sm">
          {scenario.userInput}
        </div>
      </div>

      <div className="mb-5 min-h-[280px]">
        <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
          Agent execution trace
        </div>
        <div className="space-y-2">
          {scenario.steps.map((step, i) => {
            const visible = stepIndex >= i;
            const current = stepIndex === i && running;
            return (
              <div
                key={i}
                className={`flex items-start gap-3 rounded-md border p-3 transition-all duration-300 ${
                  visible
                    ? "border-white/[0.06] bg-black/20 opacity-100"
                    : "border-transparent opacity-30"
                }`}
              >
                <StepIcon type={step.type} pulsing={current} />
                <div className="flex-1">
                  <div
                    className={`font-mono text-[11px] font-semibold uppercase tracking-wider ${
                      step.type === "thought"
                        ? "text-bone-300"
                        : step.type === "tool"
                          ? "text-brass-300"
                          : "text-sage-400"
                    }`}
                  >
                    {step.label}
                  </div>
                  <div className="mt-0.5 text-sm leading-[1.5] text-zinc-300">
                    {step.detail}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {done && (
        <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-4">
          <div className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sage-400">
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Task Completed
          </div>
          <div className="text-sm leading-[1.5] text-zinc-200">
            {scenario.outcome}
          </div>
        </div>
      )}

      <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row">
        {!running && !done && (
          <button
            type="button"
            onClick={run}
            className="btn-glow w-full rounded-lg px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 sm:w-auto"
            style={{
              background: "linear-gradient(135deg, #C9A961, #E8E2D4)",
            }}
          >
            ▶ Run Agent
          </button>
        )}
        {running && (
          <button
            type="button"
            onClick={reset}
            className="w-full rounded-lg border border-white/[0.12] px-6 py-3 text-sm font-semibold text-white sm:w-auto"
          >
            Stop
          </button>
        )}
        {done && (
          <>
            <button
              type="button"
              onClick={run}
              className="w-full rounded-lg border border-white/[0.12] px-6 py-3 text-sm font-semibold text-white sm:w-auto"
            >
              Run again
            </button>
            <a
              href="/contact"
              className="w-full rounded-lg px-6 py-3 text-center text-sm font-semibold text-white sm:w-auto"
              style={{
                background: "linear-gradient(135deg, #C9A961, #E8E2D4)",
              }}
            >
              Build one for my business →
            </a>
          </>
        )}
      </div>
    </div>
  );
}

function StepIcon({
  type,
  pulsing,
}: {
  type: Step["type"];
  pulsing?: boolean;
}) {
  const color =
    type === "thought"
      ? "bg-purple-400"
      : type === "tool"
        ? "bg-brass-400"
        : "bg-emerald-400";
  return (
    <div className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center">
      <span
        className={`h-2 w-2 rounded-full ${color} ${
          pulsing ? "animate-pulse" : ""
        }`}
      />
    </div>
  );
}
