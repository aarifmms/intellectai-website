import { NextResponse } from "next/server";
import { ensureRisLeadsTable, insertRisLead } from "@/lib/db";
import { escapeHtml, isValidEmail, checkRateLimit, isSameOrigin } from "@/lib/utils";

const SENDER_EMAIL =
  process.env.SENDER_EMAIL || "IntellectAI <onboarding@resend.dev>";

export async function POST(request: Request) {
  try {
    if (!isSameOrigin(request)) {
      return NextResponse.json(
        { error: "Invalid origin" },
        { status: 403 }
      );
    }

    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "unknown";
    if (!checkRateLimit(`ris-leads:${ip}`, 10, 60_000)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    await ensureRisLeadsTable();

    const body = await request.json();
    const { fullName, companyName, phone, email, requirements, audioBase64, eventName } = body;

    if (!fullName || !email || !requirements) {
      return NextResponse.json(
        { error: "Full name, email, and requirements are required" },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const lead = await insertRisLead({
      fullName,
      companyName: companyName || "",
      phone: phone || "",
      email,
      requirements,
      audioBase64: audioBase64 || null,
      eventName: eventName || null,
    });

    if (process.env.RESEND_API_KEY) {
      const hasAudio = Boolean(audioBase64);
      const eventLabel = eventName || "Pop-Up";
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: SENDER_EMAIL,
          to: "letstalk@intellectai.io",
          reply_to: email,
          subject: `${eventLabel} Lead: ${fullName} (${companyName || "No company"})`,
          html: `
            <h2>New ${escapeHtml(eventLabel)} Lead</h2>
            <table style="border-collapse:collapse;width:100%;max-width:600px;">
              <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Event</td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(eventLabel)}</td></tr>
              <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(fullName)}</td></tr>
              <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Company</td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(companyName) || "—"}</td></tr>
              <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Phone</td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(phone) || "—"}</td></tr>
              <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
              <tr><td style="padding:8px;font-weight:bold;vertical-align:top;border-bottom:1px solid #eee;">Requirements</td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(requirements).replace(/\n/g, "<br>")}</td></tr>
              <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Voice Recording</td><td style="padding:8px;border-bottom:1px solid #eee;">${hasAudio ? "Yes — listen on the admin page" : "No recording"}</td></tr>
            </table>
            <p style="margin-top:16px;color:#666;">Lead ID: ${lead.id} · <a href="https://intellectai.io/popup/admin">View in admin</a></p>
          `,
        }),
      }).catch(() => {
        console.error("Resend notification failed for lead:", lead.id);
      });
    }

    return NextResponse.json({ success: true, id: lead.id });
  } catch (error) {
    console.error("Popup lead submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
