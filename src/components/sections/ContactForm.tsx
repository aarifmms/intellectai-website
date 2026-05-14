"use client";

import { useState, type FormEvent } from "react";

const SERVICE_OPTIONS = [
  "AI Strategy Session",
  "Workflow Automation",
  "AI-Powered Workflow",
  "Voice/Chat Agent",
  "Custom AI Agent",
  "Other",
] as const;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, service, message }),
      });

      if (res.ok) {
        window.location.href = "/contact/thank-you";
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="mb-1.5 block text-sm font-medium text-white"
        >
          Name <span className="text-blue-400">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your full name"
          className="w-full rounded-lg border border-[rgba(255,255,255,0.06)] bg-[#131620] px-4 py-3 text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-sm font-medium text-white"
        >
          Email <span className="text-blue-400">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="w-full rounded-lg border border-[rgba(255,255,255,0.06)] bg-[#131620] px-4 py-3 text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="mb-1.5 block text-sm font-medium text-white"
        >
          Phone <span className="text-sm font-normal text-zinc-500">(optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+1 (416) 555-0123"
          className="w-full rounded-lg border border-[rgba(255,255,255,0.06)] bg-[#131620] px-4 py-3 text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div>
        <label
          htmlFor="service"
          className="mb-1.5 block text-sm font-medium text-white"
        >
          Service Interest <span className="text-blue-400">*</span>
        </label>
        <select
          id="service"
          name="service"
          required
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="w-full rounded-lg border border-[rgba(255,255,255,0.06)] bg-[#131620] px-4 py-3 text-white outline-none transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        >
          <option value="" disabled>
            Select a service
          </option>
          {SERVICE_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-white"
        >
          Message <span className="text-blue-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your project or what you need help with..."
          className="w-full resize-none rounded-lg border border-[rgba(255,255,255,0.06)] bg-[#131620] px-4 py-3 text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-500">
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-glow w-full rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 text-lg font-semibold text-white shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 disabled:pointer-events-none disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
