"use client";

import { useState, useMemo } from "react";

const TASKS = [
  { id: "leads", label: "Lead qualification & follow-up", defaultHours: 10 },
  { id: "support", label: "Customer support / email triage", defaultHours: 12 },
  { id: "scheduling", label: "Booking & appointment scheduling", defaultHours: 6 },
  { id: "data", label: "Data entry & CRM updates", defaultHours: 8 },
  { id: "content", label: "Content / report writing", defaultHours: 5 },
  { id: "ops", label: "Invoicing, onboarding, admin", defaultHours: 7 },
];

const AUTOMATION_RATE = 0.7; // 70% of work realistically automatable
const AGENT_COST_MONTHLY = 250; // running cost average

function currency(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

export default function ROICalculator() {
  const [hourlyRate, setHourlyRate] = useState(35);
  const [teamSize, setTeamSize] = useState(3);
  const [hours, setHours] = useState<Record<string, number>>(() =>
    Object.fromEntries(TASKS.map((t) => [t.id, t.defaultHours])),
  );

  const totals = useMemo(() => {
    const weeklyHours = Object.values(hours).reduce((a, b) => a + b, 0);
    const weeklyHoursSaved = weeklyHours * AUTOMATION_RATE;
    const monthlyHoursSaved = weeklyHoursSaved * 4.33 * teamSize;
    const monthlyDollarsSaved = monthlyHoursSaved * hourlyRate;
    const monthlyNet = monthlyDollarsSaved - AGENT_COST_MONTHLY;
    const annualNet = monthlyNet * 12;
    const paybackMonths = monthlyNet > 0 ? 2000 / monthlyNet : 0; // $2k setup
    return {
      weeklyHours,
      monthlyHoursSaved: Math.round(monthlyHoursSaved),
      monthlyDollarsSaved: Math.round(monthlyDollarsSaved),
      monthlyNet: Math.round(monthlyNet),
      annualNet: Math.round(annualNet),
      paybackWeeks: paybackMonths > 0 ? Math.max(1, Math.round(paybackMonths * 4.33)) : 0,
    };
  }, [hours, hourlyRate, teamSize]);

  return (
    <section
      id="roi"
      className="relative overflow-hidden py-16 md:py-24"
      style={{ background: "#09090B" }}
    >
      <div
        className="pointer-events-none absolute right-1/4 top-1/4 h-[400px] w-[400px]"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        <div className="mb-10 text-center md:mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            ROI Calculator
          </span>
          <h2 className="mt-4 text-[32px] font-extrabold leading-[1.15] tracking-tight text-white md:text-[48px]">
            How Much Could <span className="text-gradient">You Save?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-[1.6] text-zinc-400 md:text-lg">
            Estimate the hours and dollars an AI agent could save your business
            every month. Numbers update as you type.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* Inputs */}
          <div
            className="rounded-xl border p-6 md:p-8 lg:col-span-3"
            style={{
              background: "#131620",
              borderColor: "rgba(255, 255, 255, 0.06)",
            }}
          >
            <h3 className="mb-6 text-lg font-bold text-white md:text-xl">
              Your business inputs
            </h3>

            <div className="mb-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field
                label="Avg hourly cost (USD)"
                value={hourlyRate}
                min={15}
                max={150}
                step={5}
                onChange={setHourlyRate}
                format={(v) => `$${v}/hr`}
                hint="Fully-loaded cost: wages + benefits + tools"
              />
              <Field
                label="Team members doing this work"
                value={teamSize}
                min={1}
                max={25}
                step={1}
                onChange={setTeamSize}
                format={(v) => `${v} ${v === 1 ? "person" : "people"}`}
                hint="How many on your team handle these tasks"
              />
            </div>

            <div className="mb-2 text-sm font-semibold text-zinc-300">
              Hours/week spent on these tasks (per person)
            </div>
            <div className="mb-1 text-xs text-zinc-500">
              Move the sliders — leave at 0 if it doesn&apos;t apply.
            </div>

            <div className="mt-4 space-y-4">
              {TASKS.map((task) => (
                <div key={task.id}>
                  <div className="mb-1.5 flex items-center justify-between">
                    <label
                      htmlFor={task.id}
                      className="text-sm text-zinc-300"
                    >
                      {task.label}
                    </label>
                    <span className="font-mono text-sm font-semibold text-blue-400">
                      {hours[task.id]}h
                    </span>
                  </div>
                  <input
                    id={task.id}
                    type="range"
                    min={0}
                    max={40}
                    step={1}
                    value={hours[task.id]}
                    onChange={(e) =>
                      setHours((prev) => ({
                        ...prev,
                        [task.id]: parseInt(e.target.value, 10),
                      }))
                    }
                    className="w-full accent-blue-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div
            className="relative overflow-hidden rounded-xl border p-6 md:p-8 lg:col-span-2"
            style={{
              background:
                "linear-gradient(135deg, rgba(59,130,246,0.08), rgba(6,182,212,0.04)), #131620",
              borderColor: "rgba(59, 130, 246, 0.3)",
              boxShadow: "0 0 40px rgba(59, 130, 246, 0.10)",
            }}
          >
            <h3 className="mb-6 text-lg font-bold text-white md:text-xl">
              Estimated savings
            </h3>

            <div className="space-y-5">
              <Stat
                label="Hours reclaimed / month"
                value={`${totals.monthlyHoursSaved}h`}
                muted
              />
              <Stat
                label="Gross labor savings / month"
                value={currency(totals.monthlyDollarsSaved)}
                muted
              />

              <div className="my-5 border-t border-white/[0.08]" />

              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                  Net monthly savings
                </div>
                <div className="mt-2 text-4xl font-extrabold text-white md:text-5xl">
                  {currency(totals.monthlyNet)}
                </div>
                <div className="mt-1 text-xs text-zinc-500">
                  After ~{currency(AGENT_COST_MONTHLY)}/mo agent infra cost
                </div>
              </div>

              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  Annual impact
                </div>
                <div className="mt-1 text-2xl font-bold text-white md:text-3xl">
                  {currency(totals.annualNet)}
                </div>
              </div>

              {totals.paybackWeeks > 0 && totals.monthlyNet > 0 && (
                <div className="rounded-lg border border-white/[0.06] bg-black/20 p-3">
                  <div className="text-xs text-zinc-400">
                    A typical{" "}
                    <span className="font-semibold text-zinc-200">$2,000</span>{" "}
                    automation pays for itself in
                  </div>
                  <div className="mt-0.5 text-lg font-bold text-emerald-400">
                    ~{totals.paybackWeeks} weeks
                  </div>
                </div>
              )}
            </div>

            <a
              href="/contact"
              className="mt-7 block w-full rounded-lg py-3 text-center text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #3B82F6, #06B6D4)",
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
              }}
            >
              Get My Custom ROI Report →
            </a>
            <p className="mt-3 text-center text-xs text-zinc-500">
              Estimates assume 70% automation rate. Your audit gets exact
              numbers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  min,
  max,
  step,
  onChange,
  format,
  hint,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (n: number) => void;
  format: (n: number) => string;
  hint?: string;
}) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <label className="text-sm font-semibold text-zinc-300">{label}</label>
        <span className="font-mono text-sm font-semibold text-blue-400">
          {format(value)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value, 10))}
        className="w-full accent-blue-500"
      />
      {hint && <div className="mt-1 text-xs text-zinc-500">{hint}</div>}
    </div>
  );
}

function Stat({
  label,
  value,
  muted,
}: {
  label: string;
  value: string;
  muted?: boolean;
}) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <span className="text-sm text-zinc-400">{label}</span>
      <span
        className={`font-mono text-lg font-bold ${
          muted ? "text-zinc-200" : "text-white"
        }`}
      >
        {value}
      </span>
    </div>
  );
}
