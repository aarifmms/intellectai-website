import { NextResponse } from "next/server";
import { escapeHtml, isValidEmail, checkRateLimit, isSameOrigin } from "@/lib/utils";
import { ensureContactLeadsTable, insertContactLead } from "@/lib/db";

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
    if (!checkRateLimit(`contact:${ip}`, 5, 60_000)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    await ensureContactLeadsTable();
    const lead = await insertContactLead({
      name,
      email,
      phone: phone || "",
      service,
      message,
    });

    if (process.env.RESEND_API_KEY) {
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
          subject: `New Lead: ${name}. ${service}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <table style="border-collapse:collapse;width:100%;max-width:600px;">
              <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(name)}</td></tr>
              <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
              ${phone ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Phone</td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(phone)}</td></tr>` : ""}
              <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Service</td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(service)}</td></tr>
              <tr><td style="padding:8px;font-weight:bold;vertical-align:top;">Message</td><td style="padding:8px;">${escapeHtml(message).replace(/\n/g, "<br>")}</td></tr>
            </table>
            <p style="margin-top:16px;color:#666;">Lead ID: ${lead.id}</p>
          `,
        }),
      }).catch(() => {
        console.error("Resend notification failed for contact lead:", lead.id);
      });
    }

    return NextResponse.json({ success: true, id: lead.id });
  } catch (error) {
    console.error("Contact form submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
