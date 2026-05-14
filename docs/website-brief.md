# IntellectAI Website Build — Claude Code Brief

> **HOW TO USE THIS FILE:** Open Claude Code CLI, then paste the relevant section when activating each agent. Follow the steps in order.

---

## STEP 1: COPY AGENTS (Run this first if you haven't already)

```bash
cp -r /Users/aarifshaikhs/Documents/Claude/intellectai-agents/intellectai-team ~/.claude/agents/
```

---

## STEP 2: INITIALIZE PROJECT

Open Claude Code in your project folder:

```bash
mkdir -p ~/Documents/Claude/intellectai-website
cd ~/Documents/Claude/intellectai-website
claude
```

Then say:

```
Initialize a new Next.js 14+ project with TypeScript, Tailwind CSS, and App Router. Name it "intellectai-website". Use pnpm as the package manager. Set up the basic folder structure. Don't add any pages yet — just the clean scaffolding.
```

Wait for it to finish. Then proceed to Step 3.

---

## STEP 3: ACTIVATE DESIGNER AGENT — Design the Landing Page

Say this in Claude Code:

```
Activate Designer mode.

I need you to design a conversion-focused landing page for IntellectAI — an Agentic AI Agency.

## Brand Identity
- Company: IntellectAI — Agentic AI Agency
- Tagline: "We don't build chatbots. We build AI employees."
- Primary color: Amber/Gold #F59E0B
- Secondary color: Black #000000
- Accent: White #FFFFFF
- Typography: Clean, modern sans-serif (Inter or similar)
- Style: Content-creator / modern SaaS — NOT generic AI imagery. No purple gradients, no neural network graphics, no robot faces. Think clean, bold, professional.

## Page Sections (in this order)

### 1. HERO SECTION
- Bold headline: "Your Business Deserves AI That Actually Works"
- Subheadline: "We build custom AI agents and automations that do the work of entire teams — so you can scale without scaling headcount."
- Primary CTA button: "Book a Free AI Audit" (amber/gold background, black text)
- Secondary CTA: "See Our Work" (links to case study section)
- Clean, minimal background — no stock images of robots

### 2. PROBLEM/SOLUTION SECTION
- Headline: "The AI Problem Nobody Talks About"
- Left side: The problem — "Most AI tools are just fancy chatbots. They answer questions but don't DO anything. You need AI that takes action."
- Right side: The solution — "IntellectAI builds agentic AI — systems that reason, plan, use tools, and complete real work autonomously. 24/7. No supervision needed."

### 3. SERVICES SECTION
- Headline: "What We Build"
- Three cards side by side:
  - Card 1: AI Readiness Audit — "Find out where AI can save you time and money" — FREE / $500 — CTA: "Get Your Free Audit"
  - Card 2: AI Automation Setup — "Eliminate manual, repetitive work forever" — Starting at $2,000 — CTA: "Automate Your Business"
  - Card 3: Custom AI Agent Build — "A digital employee that works 24/7" — Starting at $5,000 — CTA: "Build Your AI Agent"
- Each card should have a subtle icon (not AI-looking), price, brief description, and CTA button

### 4. PROOF / CASE STUDY SECTION
- Headline: "We Don't Just Talk About AI. We Ship It."
- Feature SellerPilotAI as the case study
- Key stats in a row: "Under 4 Weeks Build" | "24/7 Monitoring" | "$49/mo vs $3,000+/mo for humans"
- Brief description: "We built SellerPilotAI — an AI-powered compliance monitoring platform for Amazon sellers. It watches accounts 24/7, catches compliance risks before they become suspensions, and costs less than a single VA."
- CTA: "Read the Full Case Study" (link to PDF/page)
- Link: https://www.sellerpilotai.ai

### 5. HOW IT WORKS SECTION
- Headline: "How We Work"
- Three steps:
  1. "We Audit" — Free discovery call + AI opportunity assessment
  2. "We Build" — Custom AI agent or automation, built in 1-4 weeks
  3. "You Scale" — Your AI works 24/7 while you focus on growth
- Clean icons for each step, horizontal layout

### 6. ABOUT / FOUNDER SECTION
- Headline: "Built by a Builder"
- Brief about Aarif Shaikh — founder of IntellectAI and SellerPilotAI
- Key message: "I don't just sell AI services — I run my entire company on the same AI agents I build for clients. My 7-person AI team works 24/7."
- Photo placeholder area

### 7. FAQ SECTION
- 5-6 common questions:
  - "What's the difference between a chatbot and an AI agent?"
  - "How long does it take to build a custom AI agent?"
  - "What if I don't know where to start with AI?"
  - "Do you work with small businesses?"
  - "What happens after the project is delivered?"
  - "How much does it cost?"

### 8. FINAL CTA SECTION
- Headline: "Ready to Put AI to Work?"
- Subheadline: "Book a free AI Readiness Audit. We'll show you exactly where AI can save you time and money — no commitment, no pressure."
- Big CTA button: "Book Your Free AI Audit"
- Contact email: aarifshaikhs@hotmail.com

### 9. FOOTER
- IntellectAI logo/text
- Links: Services, Case Study, About, Contact
- Social links: LinkedIn, X/Twitter, Facebook
- "© 2026 IntellectAI. All rights reserved."

## Design Guidelines
- Mobile-first responsive design
- Amber/gold #F59E0B for CTAs and accents
- Black for text and headers
- White/light backgrounds — clean and airy
- Subtle section dividers, no harsh lines
- Smooth scroll between sections
- Minimal animations — fade-in on scroll is fine, nothing flashy
- MUST look professional on both desktop and mobile

Create the complete design spec with component hierarchy, spacing, and all styles defined. Output as a design document I can hand to the engineer.
```

---

## STEP 4: ACTIVATE LEAD ENGINEER — Build the Website

After the Designer finishes, say this in Claude Code:

```
Activate Lead Engineer mode.

Build the IntellectAI landing page website based on the design spec just created. Here are the requirements:

## Tech Stack
- Next.js 14+ with App Router
- TypeScript
- Tailwind CSS
- No external UI libraries unless absolutely necessary
- Deploy-ready for Vercel

## Pages to Build
- Home page (landing page with all sections from the design)
- /case-study (SellerPilotAI case study page — full content)

## Key Requirements
1. All sections from the design: Hero, Problem/Solution, Services, Case Study, How It Works, About, FAQ, CTA, Footer
2. Responsive — mobile-first, must look great on phone, tablet, and desktop
3. Smooth scroll navigation from header links
4. FAQ accordion (click to expand/collapse)
5. CTA buttons should link to a mailto:aarifshaikhs@hotmail.com or a Calendly placeholder
6. SEO optimized — proper meta tags, Open Graph, page title
7. Fast — no unnecessary JavaScript, optimize for Core Web Vitals
8. Accessible — proper heading hierarchy, alt texts, ARIA labels

## Content Files Available
The following documents in /Users/aarifshaikhs/Documents/Claude/intellectai-agents/ contain the exact content to use:
- IntellectAI-Service-Packages.docx — pricing and service descriptions for the Services section
- SellerPilotAI-Case-Study.docx — full case study content for the Case Study section and /case-study page

Use the actual text from these documents. Don't make up placeholder content.

## Brand
- Primary: #F59E0B (amber/gold)
- Secondary: #000000 (black)
- Background: #FFFFFF (white) and #FAFAFA (light gray for alternating sections)
- Font: Inter (import from Google Fonts)

Build the complete website. Every section. Every piece of content. Deploy-ready.
```

---

## STEP 5: TEST & DEPLOY

After the engineer finishes building, say:

```
Run the development server so I can preview the website. Then help me deploy to Vercel.
```

If you don't have a Vercel account yet, create one at vercel.com (free tier is fine). Then:

```bash
pnpm install -g vercel
vercel
```

Follow the prompts and your site will be live.

---

## WHEN TO USE EACH DOCUMENT

| Document | When to Use | How to Use |
|----------|-------------|------------|
| **IntellectAI-Service-Packages.docx** | Step 4 (Lead Engineer builds website) | Engineer reads it for Services section content, pricing, and package details |
| **IntellectAI-Service-Packages.docx** | Sales calls & DMs | Send as a PDF to prospects who ask "what do you offer?" |
| **IntellectAI-Service-Packages.docx** | Website copy reference | Use exact pricing and descriptions on the live site |
| **SellerPilotAI-Case-Study.docx** | Step 4 (Lead Engineer builds website) | Engineer reads it for Case Study section + dedicated /case-study page |
| **SellerPilotAI-Case-Study.docx** | Sales calls & proposals | Send to prospects as proof of what you've built |
| **SellerPilotAI-Case-Study.docx** | Social media content | Pull stats and quotes for social posts |
| **IntellectAI-90-Day-Revenue-Plan.docx** | Your personal roadmap | Reference weekly for milestones and priorities |

---

## TROUBLESHOOTING

If Claude Code doesn't recognize an agent:
```bash
ls ~/.claude/agents/intellectai-team/
```
Make sure the 7 agent files are there. If not, run the copy command from Step 1.

If Claude Code says "I don't know what Designer mode is":
Just paste the full brief from Step 3 directly — the agent instructions are embedded in the prompt.

If the build has errors:
Say "Fix all build errors and make sure the dev server runs clean with zero warnings."

---

## AFTER THE WEBSITE IS LIVE

Come back here to Cowork mode and we'll tackle:
- Week 1, Item 2: Service packages are DONE ✓
- Week 1, Item 3: Case study is DONE ✓
- Week 1, Item 4: Social media engine is DONE ✓
- Week 2: Cold outreach sequences (activate Sales agent)
- Week 2: Community strategy
- Week 2: Referral program setup
