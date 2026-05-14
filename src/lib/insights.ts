export type Insight = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readingMinutes: number;
  tags: string[];
  body: string;
};

export const INSIGHTS: Insight[] = [
  {
    slug: "chatbot-vs-agentic-ai-for-smbs",
    title: "Chatbot vs Agentic AI: What SMBs Actually Need in 2026",
    description:
      "Most small businesses are buying chatbots and calling it 'AI strategy.' Here's why agentic AI is a completely different category — and which one will actually move your numbers.",
    publishedAt: "2026-05-10",
    readingMinutes: 6,
    tags: ["Agentic AI", "SMB", "Strategy"],
    body: `If you've been pitched "AI for your business" in the last year, 95% of the time you were sold a chatbot. A reskinned LLM that answers FAQ-style questions on your website. Useful? Sometimes. Transformational? Almost never.

## The category confusion

A **chatbot** is a text-in, text-out tool. It reads, it writes, it responds. That's the entire job. If the conversation needs to *do* something — update a CRM, send an invoice, dispatch a technician — a chatbot says "please contact our team" and ends the loop.

An **agent** is a system that plans, calls tools, observes results, and adjusts. It doesn't *describe* the work — it *does* the work. The chatbot is the receptionist. The agent is the employee.

## Why this matters for SMBs specifically

Big enterprises can afford to deploy a chatbot, deflect 12% of tickets, and call it a win. SMBs can't. The ROI math is different:

- **Enterprise win**: deflect 12% of 100,000 tickets = real money even at marginal lift.
- **SMB win**: deflect 12% of 800 tickets = nobody notices. You need full-task automation or it isn't worth the integration cost.

For an SMB, AI either replaces a workflow or it doesn't matter. Half-measures don't move the P&L.

## What "agentic AI" actually looks like at SMB scale

Real examples we've shipped for businesses with 5-50 employees:

1. **Lead-qualification agent** that enriches incoming leads, scores them, writes a personalized reply, and books a call — all without a human until the call itself.
2. **Voice booking agent** that picks up missed calls 24/7, books service appointments into Google Calendar, and SMSes confirmations.
3. **Inventory reorder agent** that monitors stock, checks supplier prices across 3 vendors, and creates POs when thresholds hit.

In all three, no human touches the workflow until something genuinely needs judgment. That's agentic.

## Three questions to ask before you buy "AI"

1. Does it integrate with your stack (CRM, email, calendar, billing) — or does it just chat?
2. Can it complete a task end-to-end, or does it hand off to a human halfway?
3. Does it have escalation logic for when it's unsure, or does it just fail silently?

If the answer to any of these is no, you're buying a chatbot. That might be fine — but price it like a chatbot, not like a digital employee.

## The bottom line

The AI conversation for SMBs in 2026 is not "should we have AI." It's "should we have an agent or a chatbot." Different category, different price, completely different outcome.

If you want a starting point: pick one workflow your team does manually every day. Map it step by step. If it has more than 3 decisions in it, you need an agent — not a chatbot.`,
  },
  {
    slug: "5-ai-agent-use-cases-every-smb-can-deploy-this-quarter",
    title: "5 Agentic AI Use Cases Every SMB Can Deploy This Quarter",
    description:
      "Practical, shippable AI agent ideas that pay for themselves in under 90 days — across retail, services, real estate, and professional services.",
    publishedAt: "2026-05-05",
    readingMinutes: 5,
    tags: ["Use Cases", "Automation", "ROI"],
    body: `You don't need a 12-month digital transformation to get value from AI. Here are five agents we've built for SMBs that paid for themselves in under 90 days each.

## 1. The Inbound Lead Agent

**Problem**: Lead form submissions sit in an inbox until someone has time. By then, the prospect has called a competitor.

**Agent**: Watches the inbox, enriches the company (size, industry, revenue), scores the lead against your ICP, drafts a personalized reply, and books a call slot — all within 2 minutes.

**Typical SMB ROI**: 30-40% lift in inbound-to-meeting conversion. Pays for itself in weeks if your sales cycle has any size to it.

## 2. The Voice Booking Agent

**Problem**: You miss calls during operating hours. After hours? Forget it. Each missed call is potentially a missed customer.

**Agent**: Answers the phone in a natural voice, qualifies the request, checks availability in your calendar, books the slot, sends an SMS confirmation, and creates the customer record in your CRM.

**Typical SMB ROI**: Reclaim 20-40% of "lost" calls that were going to voicemail. Especially powerful in trades, clinics, salons, and home services.

## 3. The Review Response Agent

**Problem**: You should be responding to every Google review within 24 hours. You're not.

**Agent**: Monitors reviews across Google, Yelp, Facebook. Drafts a contextual response (acknowledging the specific praise or complaint). Flags negative reviews for human approval before posting.

**Typical SMB ROI**: Better SEO from response activity + materially higher review acquisition rate from happy customers who feel seen.

## 4. The Onboarding Agent

**Problem**: Every new client triggers the same 14-step process — contract, intake form, kickoff scheduling, document collection, system access. Half of it falls through the cracks.

**Agent**: Triggers on contract-signed event. Sends intake. Chases missing items. Schedules kickoff. Creates project channels in Slack. Provisions tool access. Hands the human a "ready to start" notification only when everything's done.

**Typical SMB ROI**: 10-15 hours/week saved at agencies, consultancies, and any service business with onboarding-heavy workflow.

## 5. The Email Triage Agent

**Problem**: Your inbox is a queue you can't keep up with. 60% of it is routine. 30% is informational. 10% actually needs you.

**Agent**: Reads incoming email. Categorizes. Drafts replies to the routine. Summarizes the informational. Surfaces only the 10% to your attention with context attached.

**Typical SMB ROI**: 60-90 minutes/day reclaimed for owner-operators. The single highest-impact agent for solopreneurs and small teams.

## Common pattern

Notice what these all share: each one **completes** the workflow. None of them say "I found a thing, please review." That's the chatbot trap. Agents do the work and only escalate when judgment is needed.

## How to pick yours

Look at your team's calendar. Find the recurring task that's everyone's least favorite hour of the day. That's your first agent. We can usually scope and ship it in 2-3 weeks.`,
  },
  {
    slug: "how-to-prepare-your-smb-for-ai-agents",
    title: "How to Prepare Your SMB for AI Agents (Before You Hire Anyone to Build Them)",
    description:
      "A 5-step checklist for SMB owners: get your data, processes, and tools in shape so you can move fast when you're ready to deploy AI agents.",
    publishedAt: "2026-04-28",
    readingMinutes: 7,
    tags: ["Strategy", "Implementation", "SMB"],
    body: `Most failed AI projects don't fail because the AI was bad. They fail because the business wasn't ready. Here's what to fix *before* you hire someone like us.

## 1. Document one workflow end-to-end

Pick the workflow you want to automate first. Write down every step. Every decision. Every system involved. Every exception.

Don't write what the workflow *should* be. Write what it actually is, with the messy parts included. Agents have to handle reality, not the org chart.

If you can't document the workflow in a single page, you're not ready to automate it — you're ready to *redesign* it first.

## 2. Audit your systems

For the workflow above, list every system involved: CRM, email, calendar, billing, project management, spreadsheets, that one Notion page nobody else can find.

For each system, check:

- **Has an API?** (Most modern SaaS does. Older stuff often doesn't.)
- **Has webhook support?** (For real-time triggers.)
- **Single source of truth?** (If customer data lives in 3 places, agents will make mistakes.)

If your stack is split across systems that don't talk to each other, the first phase of any AI project is going to be plumbing. Budget for it.

## 3. Get your data clean enough

Agents are only as good as the context you give them. If your CRM has duplicate contacts, blank fields, and 3 different formats for phone numbers, your agent will inherit all of it.

You don't need perfect data. You need:

- A consistent source of truth for the entities the agent will touch (customers, orders, leads, projects).
- Reasonable hygiene — required fields are filled, duplicates aren't rampant, formats are standardized in the field that matters most.

90% clean is fine. 50% clean is going to bite you.

## 4. Decide what "escalate to human" means

The most underrated agent decision is: when does it stop and ask?

For every workflow, define:

- **Confidence threshold**: below what score does the agent flag rather than act?
- **Cost threshold**: above what dollar amount does it require human approval?
- **Tone/risk threshold**: what categories (legal, complaints, refunds over $X) always escalate?

If you don't decide these upfront, the agent will either escalate too often (annoying) or not enough (dangerous).

## 5. Pick a metric you'll actually measure

Before kickoff, agree on what success looks like. The good metrics are simple:

- Time saved per week (track it before, track it after)
- Tickets closed without human touch
- Lead-to-meeting conversion rate
- Hours of human time on workflow X

The bad metrics are vibes-based. "It feels faster" isn't measurable. "We saved 14 hours/week" is.

## The 90-day mental model

If you do these five things — document the workflow, audit your systems, clean the data enough, define escalation, pick a metric — you can have your first agent live in 30 days and your second one live in 60.

Most SMBs we work with try to skip 1-3 and then wonder why month one is all integration work. Don't do that. Do the prep. The agent ships faster and works better.

## When to hire

Hire (or call us) when you've done the prep and you've picked the workflow. Not before. The audit conversation is way more productive when you've already mapped what you're trying to fix.`,
  },
];

export function getInsight(slug: string) {
  return INSIGHTS.find((p) => p.slug === slug);
}

export function getAllInsights() {
  return [...INSIGHTS].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  );
}
