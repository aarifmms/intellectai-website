export const SITE = {
  name: "IntellectAI",
  tagline: "The AI Operating System Built for SMBs.",
  description:
    "We design and deploy Agentic AI infrastructure for small and medium businesses. AI agents, workflow automation, and autonomous operations that run your business 24/7.",
  url: "https://intellectai.io",
  email: "letstalk@intellectai.io",
  founder: "Aarif Shaikh",
  location: "Toronto, Canada",
} as const;

export const NAV_LINKS = [
  { label: "Platform", href: "/#services" },
  { label: "Industries", href: "/#industries" },
  { label: "Demo", href: "/#demo" },
  { label: "ROI", href: "/#roi" },
  { label: "Pricing", href: "/pricing" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
] as const;

export const HERO_CAPABILITIES = [
  "Handle inbound calls and bookings",
  "Follow up with leads automatically",
  "Manage customer conversations",
  "Schedule appointments end-to-end",
  "Coordinate tasks across your tools",
  "Run reports and operations 24/7",
] as const;

export const SERVICES = [
  {
    title: "AI Operations Audit",
    description:
      "We map your business, identify automation opportunities, and architect your AI Operating System. You leave with a deployable blueprint, not a slide deck.",
    price: "FREE",
    originalPrice: "$500",
    cta: "Get Your AI Blueprint",
    popular: false,
    features: [
      "60-minute strategy session",
      "AI Opportunity Map ranked by ROI",
      "Custom AI workforce architecture",
      "Implementation roadmap with costs & timelines",
      "Deliverable in 3 business days",
    ],
  },
  {
    title: "AI Workflow Automation",
    description:
      "Deploy autonomous workflows across your stack. AI handles the busywork, your team handles the customers. Connected, intelligent, always-on.",
    price: "Starting at $2,500",
    cta: "Automate Your Operations",
    popular: true,
    features: [
      "Cross-tool workflow orchestration",
      "Integrations: CRM, email, calendar, Slack, billing",
      "AI-powered decision logic & routing",
      "Live monitoring dashboard",
      "30 days post-launch support",
    ],
  },
  {
    title: "Custom AI Workforce",
    description:
      "Digital employees that work alongside your team. Voice agents, sales agents, support agents, ops agents, built for your business, running 24/7.",
    price: "Starting at $5,500",
    cta: "Deploy Your AI Workforce",
    popular: false,
    features: [
      "Custom-trained AI agents (voice + text)",
      "Tool use: CRMs, calendars, databases, APIs",
      "Multi-step reasoning & escalation logic",
      "Unified ops dashboard for your team",
      "60 days post-launch support",
    ],
  },
] as const;

export const CASE_STUDY_STATS = [
  { value: "Under 4 Weeks", label: "Build Time" },
  { value: "24/7", label: "Autonomous Ops" },
  { value: "$49/mo", label: "vs $3,000+/mo for humans" },
] as const;

export const CASE_STUDIES = [
  {
    title: "SellerPilotAI",
    category: "Autonomous AI Platform",
    description:
      "AI-powered compliance monitoring for Amazon sellers. Watches accounts 24/7, catches risks before suspensions. Replaces $3,000+/mo VA teams at $49/mo.",
    tags: ["E-commerce", "SaaS", "Autonomous AI"],
    href: "/case-study",
    status: "Live" as const,
    liveUrl: "sellerpilotai.ai",
    stats: [
      { value: "< 4 Weeks", label: "Build Time" },
      { value: "24/7", label: "Autonomous" },
      { value: "$49/mo", label: "Starting Price" },
    ],
  },
  {
    title: "TheEVHub",
    category: "AI-Powered E-Commerce",
    description:
      "Full-stack e-commerce platform for certified EV charging equipment. Product catalog, Stripe checkout, admin dashboard, quiz-based product matcher, and trade-in program.",
    tags: ["E-Commerce", "EV / Clean Energy", "Full-Stack"],
    href: "/case-study/evhub",
    status: "Live" as const,
    liveUrl: "theevhub.com",
    stats: [
      { value: "Full-Stack", label: "Platform" },
      { value: "50+", label: "Products" },
      { value: "CA & US", label: "Shipping" },
    ],
  },
  {
    title: "ArdenMD",
    category: "Clinical AI Infrastructure",
    description:
      "Clinical decision support for Canadian doctors. 658+ Medical Logic Modules, AI diagnostics, drug interaction checking, and voice encounter capture. PIPEDA compliant.",
    tags: ["Healthcare", "AI + Clinical", "PIPEDA"],
    href: "/case-study/ardenmd",
    status: "In Progress" as const,
    liveUrl: "ardenmd.vercel.app",
    stats: [
      { value: "658+", label: "MLMs" },
      { value: "47", label: "Specialties" },
      { value: "AI", label: "Powered" },
    ],
  },
  {
    title: "Keyblind",
    category: "AI Security / DevTools",
    description:
      "Encrypted secrets vault with MCP integration for AI agents. Protects API keys from leaking to LLM conversations. 16 MCP tools, 40+ CLI commands, browser extension.",
    tags: ["DevTools", "Security", "MCP", "AI"],
    href: "/case-study/keyblind",
    status: "Live" as const,
    liveUrl: "keyblind.dev",
    stats: [
      { value: "40+", label: "CLI Commands" },
      { value: "16", label: "MCP Tools" },
      { value: "MIT", label: "License" },
      { value: "Zero", label: "Telemetry" },
    ],
  },
] as const;

export const STEPS = [
  {
    number: "01",
    title: "Architect",
    description:
      "Free AI Operations Audit. We map your business and design your AI Operating System, what to automate, what to leave alone, and the highest-ROI starting point.",
  },
  {
    number: "02",
    title: "Deploy",
    description:
      "Your AI workforce is built, integrated with your stack, and launched in 1–4 weeks. Voice agents, automations, and workflows go live with monitoring.",
  },
  {
    number: "03",
    title: "Scale",
    description:
      "Your AI runs the operation 24/7. We optimize, expand capabilities, and add agents as your business grows. You focus on growth, not busywork.",
  },
] as const;

export const FAQS = [
  {
    question: "What is an AI Operating System exactly?",
    answer:
      "It's the connected layer of AI agents, automations, and workflows that runs your business operations. Instead of one chatbot for one task, you get an intelligent system that coordinates calls, leads, scheduling, customer comms, and admin work autonomously, all integrated with your existing tools.",
  },
  {
    question: "How is Agentic AI different from a chatbot?",
    answer:
      "A chatbot answers questions. An Agentic AI agent takes action, it can call your CRM, book in your calendar, send emails, update databases, escalate to humans when needed, and complete entire workflows end-to-end. We don't build chatbots. We deploy digital employees.",
  },
  {
    question: "How long does deployment take?",
    answer:
      "Simple automations launch in days. A full AI Workflow setup takes 1–2 weeks. Custom AI Workforce deployments (voice agents, multi-agent systems) ship in 3–4 weeks. Every project starts with a free AI Operations Audit.",
  },
  {
    question: "What if I don't know where to start with AI?",
    answer:
      "That's exactly what the free AI Operations Audit is for. We map your business, identify the highest-ROI automation opportunities, and hand you a deployable blueprint. Zero cost, zero pressure, three business days.",
  },
  {
    question: "Do you work with small businesses?",
    answer:
      "Yes, that's our specialty. We've built AI Operating Systems for service businesses, clinics, e-commerce brands, agencies, real estate teams, and trades. Our entry point is $2,500. Designed specifically for SMBs that want to punch above their weight.",
  },
  {
    question: "What does it cost to deploy an AI workforce?",
    answer:
      "AI Operations Audit: Free. Workflow Automation: From $2,500. Custom AI Workforce: From $5,500. Ongoing optimization: $1,500/mo. We scope every project before we quote, no surprises.",
  },
  {
    question: "What happens after deployment?",
    answer:
      "Every project includes 30–60 days of post-launch support. After that, most clients move to our optimization retainer where we monitor, tune, and expand the AI workforce as the business grows.",
  },
] as const;

export const INDUSTRIES = [
  {
    name: "Automotive & EV",
    icon: "car",
    description:
      "Service booking agents, parts inquiry handlers, lead qualification for dealers and EV brands.",
    examples: ["Voice service booking", "Trade-in valuation", "Test drive scheduling"],
  },
  {
    name: "Restaurants & Hospitality",
    icon: "utensils",
    description:
      "Reservation agents, supplier ordering, review monitoring, staff scheduling, menu Q&A.",
    examples: ["Voice reservation agent", "Supplier reorder bot", "Review responder"],
  },
  {
    name: "Medical & Dental Clinics",
    icon: "heart",
    description:
      "Appointment scheduling, intake automation, insurance verification, follow-up workflows.",
    examples: ["Voice booking agent", "Patient intake", "Recall automation"],
  },
  {
    name: "Real Estate",
    icon: "home",
    description:
      "24/7 lead qualification, listing automation, showing scheduling, market reports.",
    examples: ["Inbound lead qualifier", "Showing scheduler", "Buyer matcher"],
  },
  {
    name: "Law Firms",
    icon: "scale",
    description:
      "Intake automation, conflict checks, document review, client communication, billing follow-ups.",
    examples: ["Client intake agent", "Conflict screener", "Document triage"],
  },
  {
    name: "Home Services & Trades",
    icon: "wrench",
    description:
      "Voice intake, dispatch scheduling, quote-to-job automation, review collection for HVAC, plumbing, electrical, roofing.",
    examples: ["Voice intake agent", "Dispatch optimizer", "Quote automation"],
  },
  {
    name: "Logistics & Trucking",
    icon: "truck",
    description:
      "Dispatch automation, shipment tracking, driver comms, customer ETAs, exception handling.",
    examples: ["Shipment status agent", "Dispatch optimizer", "ETA notifier"],
  },
  {
    name: "Retail & E-Commerce",
    icon: "shopping",
    description:
      "Order triage, customer service automation, abandoned cart recovery, product Q&A, restock alerts.",
    examples: ["Order triage agent", "Review automation", "Cart recovery bot"],
  },
  {
    name: "Finance & Insurance",
    icon: "chart",
    description:
      "Lead qualification, policy Q&A, KYC document collection, renewal reminders, client reporting.",
    examples: ["KYC document agent", "Policy Q&A bot", "Renewal automation"],
  },
  {
    name: "Education & Coaching",
    icon: "academic",
    description:
      "Student enrollment, course Q&A, scheduling, content generation, progress tracking.",
    examples: ["Enrollment agent", "Course content generator", "Progress reporter"],
  },
  {
    name: "Construction & Contracting",
    icon: "hardhat",
    description:
      "Estimate generation, subcontractor coordination, project status updates, supplier ordering, permit tracking.",
    examples: ["Estimate generator", "Project status agent", "Supplier ordering"],
  },
  {
    name: "Salons & Wellness",
    icon: "sparkles",
    description:
      "Voice booking, rebooking automation, loyalty follow-ups, inventory orders, no-show recovery.",
    examples: ["Voice booking agent", "Rebooking automation", "Loyalty workflows"],
  },
  {
    name: "Agencies & Consultants",
    icon: "briefcase",
    description:
      "Proposal generation, client onboarding, time tracking, document review, email triage.",
    examples: ["Proposal generator", "Onboarding agent", "Email triage"],
  },
  {
    name: "Professional Services",
    icon: "building",
    description:
      "Accounting, HR, marketing, IT services, client comms, onboarding, scheduling, and operations automation.",
    examples: ["Client onboarding", "Scheduling agent", "Operations dashboard"],
  },
] as const;

export const CHATBOT_VS_AGENT = [
  {
    capability: "What it does",
    chatbot: "Answers questions from a script",
    agent: "Plans, decides, and completes real work",
  },
  {
    capability: "Tools & systems",
    chatbot: "Read-only, just text in, text out",
    agent: "Uses your CRM, calendar, email, databases, APIs",
  },
  {
    capability: "Reasoning",
    chatbot: "Pattern-matches keywords",
    agent: "Multi-step reasoning with context memory",
  },
  {
    capability: "Autonomy",
    chatbot: "Needs a human for every action",
    agent: "Runs 24/7 with escalation only when needed",
  },
  {
    capability: "Business outcome",
    chatbot: "Deflects FAQ tickets",
    agent: "Replaces entire workflows and roles",
  },
  {
    capability: "When it fails",
    chatbot: "Says 'I don't understand'",
    agent: "Retries, picks a fallback, or asks a human",
  },
] as const;

export const VALUE_PROPS = [
  {
    title: "Reduce Operational Costs",
    description:
      "Replace repetitive manual work with autonomous AI systems. Fixed monthly infra cost vs scaling headcount.",
    icon: "trending-down",
  },
  {
    title: "Never Miss a Lead",
    description:
      "Your AI workforce responds instantly, 24/7. Inbound calls, web forms, DMs, handled in seconds.",
    icon: "zap",
  },
  {
    title: "Scale Without Hiring",
    description:
      "Grow operations, support volume, and customer experience without expanding payroll.",
    icon: "expand",
  },
  {
    title: "Service That Outranks Competitors",
    description:
      "Sub-second response, every channel, every hour. The kind of consistency only payroll used to buy.",
    icon: "star",
  },
  {
    title: "Centralized AI Operations",
    description:
      "One intelligent layer coordinates calls, workflows, automations, and comms across your stack.",
    icon: "layers",
  },
  {
    title: "Continuous Optimization",
    description:
      "Your AI gets smarter every month. We monitor, tune, and expand capabilities as you grow.",
    icon: "refresh",
  },
] as const;

export const PRICING_TIERS = [
  {
    name: "AI Operations Audit",
    price: "Free",
    originalPrice: "$500",
    description:
      "Architect your AI Operating System before spending a dollar.",
    cta: "Get Your AI Blueprint",
    ctaHref: "/contact",
    highlight: false,
    features: [
      "60-minute strategy session",
      "AI Opportunity Map ranked by ROI",
      "Custom workforce architecture",
      "Roadmap with costs & timelines",
      "Deliverable in 3 business days",
    ],
  },
  {
    name: "AI Workflow Automation",
    price: "$2,500",
    priceSuffix: "starting",
    description:
      "Deploy autonomous workflows across your stack. The fast path to AI-powered operations.",
    cta: "Automate Your Operations",
    ctaHref: "/contact",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Cross-tool workflow orchestration",
      "CRM, email, calendar, Slack, billing integrations",
      "AI-powered decision logic & routing",
      "Live monitoring dashboard",
      "30 days post-launch support",
      "Live in 1–2 weeks",
    ],
  },
  {
    name: "Custom AI Workforce",
    price: "$5,500",
    priceSuffix: "starting",
    description:
      "Digital employees built for your business. Voice, sales, support, ops, running 24/7.",
    cta: "Deploy Your AI Workforce",
    ctaHref: "/contact",
    highlight: false,
    features: [
      "Custom-trained AI agents (voice + text)",
      "Tool use: CRMs, calendars, databases, APIs",
      "Multi-step reasoning & escalation logic",
      "Unified ops dashboard",
      "60 days post-launch support",
      "Live in 3–4 weeks",
    ],
  },
  {
    name: "AI Operations Retainer",
    price: "$1,500",
    priceSuffix: "/mo",
    description:
      "Ongoing optimization, expansion, and monitoring of your AI Operating System. Three tiers to grow with you.",
    cta: "Talk to Us",
    ctaHref: "/contact",
    highlight: false,
    features: [
      "Maintain ($1,500/mo): monitoring, fixes, monthly reports",
      "Grow ($2,500/mo): + new workflows & quarterly strategy",
      "Scale ($3,500/mo): + dedicated roadmap & priority support",
      "Quarterly AI strategy session",
      "Cancel anytime",
    ],
  },
] as const;
