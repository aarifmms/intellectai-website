"use client";

import { useState, useRef, type FormEvent } from "react";

export default function PopupLeadForm() {
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [requirements, setRequirements] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const [recording, setRecording] = useState(false);
  const [audioDataUrl, setAudioDataUrl] = useState<string | null>(null);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const chunks = useRef<Blob[]>([]);

  async function startRecording() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream, { mimeType: "audio/webm" });
      mediaRecorder.current = recorder;
      chunks.current = [];

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunks.current.push(e.data);
      };

      recorder.onstop = () => {
        const blob = new Blob(chunks.current, { type: "audio/webm" });
        const url = URL.createObjectURL(blob);
        setAudioDataUrl(url);
        stream.getTracks().forEach((t) => t.stop());
      };

      recorder.start();
      setRecording(true);
    } catch {
      alert("Microphone access denied. Please type your requirements instead.");
    }
  }

  function stopRecording() {
    mediaRecorder.current?.stop();
    setRecording(false);
  }

  function blobUrlToBase64(url: string): Promise<string> {
    return fetch(url)
      .then((r) => r.blob())
      .then(
        (blob) =>
          new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
              URL.revokeObjectURL(url);
              resolve(reader.result as string);
            };
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          })
      );
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    try {
      const body: Record<string, string> = {
        fullName,
        companyName,
        phone,
        email,
        requirements,
      };

      if (audioDataUrl) {
        body.audioBase64 = await blobUrlToBase64(audioDataUrl);
      }

      const res = await fetch("/api/ris-leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-8">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brass-500/20">
          <svg className="h-8 w-8 text-brass-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Thanks for stopping by!</h3>
        <p className="text-[#B6B8BC]">
          We&apos;ll review your requirements and reach out within 48 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="fullName" className="mb-1.5 block text-sm font-medium text-white">
          Full Name <span className="text-brass-300">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Your full name"
          className="w-full rounded-lg border border-[rgba(255,255,255,0.06)] bg-[#17181B] px-4 py-3 text-white placeholder:text-[#8A8D93] outline-none transition-colors focus:border-brass-500 focus:ring-1 focus:ring-brass-500"
        />
      </div>

      <div>
        <label htmlFor="companyName" className="mb-1.5 block text-sm font-medium text-white">
          Company Name
        </label>
        <input
          type="text"
          id="companyName"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="Your company"
          className="w-full rounded-lg border border-[rgba(255,255,255,0.06)] bg-[#17181B] px-4 py-3 text-white placeholder:text-[#8A8D93] outline-none transition-colors focus:border-brass-500 focus:ring-1 focus:ring-brass-500"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-white">
            Phone #
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+1 (416) 555-0123"
            className="w-full rounded-lg border border-[rgba(255,255,255,0.06)] bg-[#17181B] px-4 py-3 text-white placeholder:text-[#8A8D93] outline-none transition-colors focus:border-brass-500 focus:ring-1 focus:ring-brass-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-white">
            Email <span className="text-brass-300">*</span>
          </label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="w-full rounded-lg border border-[rgba(255,255,255,0.06)] bg-[#17181B] px-4 py-3 text-white placeholder:text-[#8A8D93] outline-none transition-colors focus:border-brass-500 focus:ring-1 focus:ring-brass-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="requirements" className="mb-1.5 block text-sm font-medium text-white">
          What are your pain points, daily repeated tasks, and what automation are you looking for?{" "}
          <span className="text-brass-300">*</span>
        </label>
        <textarea
          id="requirements"
          required
          rows={5}
          value={requirements}
          onChange={(e) => setRequirements(e.target.value)}
          placeholder="Describe your biggest operational headaches, daily manual tasks that eat up time, and what kind of automation or AI solution you're interested in..."
          className="w-full resize-none rounded-lg border border-[rgba(255,255,255,0.06)] bg-[#17181B] px-4 py-3 text-white placeholder:text-[#8A8D93] outline-none transition-colors focus:border-brass-500 focus:ring-1 focus:ring-brass-500"
        />
        <div className="mt-2 flex items-center gap-3">
          {!recording ? (
            <button
              type="button"
              onClick={startRecording}
              className="inline-flex items-center gap-2 rounded-lg border border-[rgba(255,255,255,0.08)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[rgba(255,255,255,0.04)]"
            >
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500" />
              </span>
              Record your pain points
            </button>
          ) : (
            <button
              type="button"
              onClick={stopRecording}
              className="inline-flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400 transition-colors hover:bg-red-500/20"
            >
              <span className="relative flex h-3 w-3">
                <span className="relative inline-flex h-3 w-3 rounded-sm bg-red-500" />
              </span>
              Stop recording
            </button>
          )}
          {audioDataUrl && (
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#8A8D93]">Recording saved</span>
              <audio controls src={audioDataUrl} className="h-8" />
            </div>
          )}
        </div>
      </div>

      {status === "error" && (
        <p className="text-sm text-[#C95A3F]">
          Something went wrong. Please try again or email us at letstalk@intellectai.io.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-glow w-full rounded-lg bg-gradient-to-r from-brass-500 to-bone-200 px-8 py-4 text-lg font-semibold text-white shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 disabled:pointer-events-none disabled:opacity-60"
      >
        {status === "sending" ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
