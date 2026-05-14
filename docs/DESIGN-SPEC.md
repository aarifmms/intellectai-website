# IntellectAI Landing Page -- Design Specification

**Version**: 1.0
**Date**: 2026-03-07
**Author**: Design Lead, IntellectAI
**Status**: Final -- Ready for Engineering

---

## Table of Contents

1. [Design System](#1-design-system)
2. [Layout System](#2-layout-system)
3. [Component Hierarchy](#3-component-hierarchy)
4. [Interaction Design](#4-interaction-design)
5. [Responsive Behavior](#5-responsive-behavior)
6. [Component File Structure](#6-component-file-structure)

---

## Important: Theme Direction

The current `globals.css` is configured for a **dark** theme. This spec defines a **light/white** theme. Before implementing, update `globals.css` to match the CSS variables defined in Section 1.1 below. Remove `className="dark"` from the `<html>` element in `layout.tsx`.

---

## 1. Design System

### 1.1 Color Palette

| Token                  | Hex       | CSS Variable             | Tailwind Class       | Usage                                                    |
|------------------------|-----------|--------------------------|----------------------|----------------------------------------------------------|
| **Amber 500 (Primary)**| `#F59E0B` | `--color-amber`          | `text-amber` / `bg-amber` | Primary CTA buttons, accent highlights, step numbers     |
| **Amber 400**          | `#FBBF24` | `--color-amber-light`    | `text-amber-light` / `bg-amber-light` | Hover state for primary buttons, subtle accents          |
| **Amber 600**          | `#D97706` | `--color-amber-dark`     | `text-amber-dark` / `bg-amber-dark` | Active/pressed state for primary buttons                 |
| **Amber 50**           | `#FFFBEB` | `--color-amber-50`       | `bg-amber-50`       | Subtle amber tinted backgrounds (Final CTA section)      |
| **Black**              | `#000000` | `--color-foreground`     | `text-foreground`    | Primary body text, headings, nav text                    |
| **White**              | `#FFFFFF` | `--color-background`     | `bg-background`      | Page background, card backgrounds                        |
| **Gray 50**            | `#F9FAFB` | `--color-surface`        | `bg-surface`         | Alternating section backgrounds (Problem, About)         |
| **Gray 100**           | `#F3F4F6` | `--color-surface-2`      | `bg-surface-2`       | Card hover backgrounds, input backgrounds                |
| **Gray 200**           | `#E5E7EB` | `--color-border`         | `border-border`      | Card borders, dividers, FAQ separators                   |
| **Gray 400**           | `#9CA3AF` | `--color-muted`          | `text-muted`         | Secondary text, captions, placeholder text               |
| **Gray 500**           | `#6B7280` | `--color-muted-dark`     | `text-muted-dark`    | Subheadings, descriptions in cards                       |
| **Gray 900**           | `#111827` | `--color-dark`           | `bg-dark`            | Footer background, Case Study section background         |
| **Gray 950**           | `#030712` | `--color-dark-deep`      | `bg-dark-deep`       | Footer bottom bar                                        |

#### Updated globals.css

```css
@import "tailwindcss";

@theme inline {
  --color-background: #FFFFFF;
  --color-foreground: #000000;
  --color-amber: #F59E0B;
  --color-amber-light: #FBBF24;
  --color-amber-dark: #D97706;
  --color-amber-50: #FFFBEB;
  --color-surface: #F9FAFB;
  --color-surface-2: #F3F4F6;
  --color-border: #E5E7EB;
  --color-muted: #9CA3AF;
  --color-muted-dark: #6B7280;
  --color-dark: #111827;
  --color-dark-deep: #030712;
  --font-sans: var(--font-inter);
}

body {
  background: var(--color-background);
  color: var(--color-foreground);
  font-family: var(--font-sans), system-ui, sans-serif;
}
```

### 1.2 Typography Scale

Font family: **Inter** (loaded via `next/font/google`, variable `--font-inter`).

#### Desktop (>= 768px)

| Element      | Size   | Weight | Line Height | Letter Spacing | Tailwind Classes                                           |
|-------------|--------|--------|-------------|----------------|------------------------------------------------------------|
| **H1**       | 64px   | 800    | 1.1         | -0.02em        | `text-[64px] font-extrabold leading-[1.1] tracking-tight`  |
| **H2**       | 48px   | 700    | 1.15        | -0.02em        | `text-[48px] font-bold leading-[1.15] tracking-tight`      |
| **H3**       | 32px   | 700    | 1.2         | -0.01em        | `text-[32px] font-bold leading-[1.2] tracking-[-0.01em]`   |
| **H4**       | 24px   | 600    | 1.3         | 0              | `text-2xl font-semibold leading-[1.3]`                      |
| **H5**       | 20px   | 600    | 1.4         | 0              | `text-xl font-semibold leading-[1.4]`                       |
| **H6**       | 16px   | 600    | 1.5         | 0.01em         | `text-base font-semibold leading-[1.5] tracking-wide`       |
| **Body LG**  | 20px   | 400    | 1.6         | 0              | `text-xl font-normal leading-[1.6]`                         |
| **Body**     | 16px   | 400    | 1.6         | 0              | `text-base font-normal leading-[1.6]`                       |
| **Body SM**  | 14px   | 400    | 1.5         | 0              | `text-sm font-normal leading-[1.5]`                         |
| **Caption**  | 12px   | 500    | 1.5         | 0.02em         | `text-xs font-medium leading-[1.5] tracking-wider`          |
| **Button LG**| 18px   | 600    | 1           | 0              | `text-lg font-semibold leading-none`                         |
| **Button**   | 16px   | 600    | 1           | 0              | `text-base font-semibold leading-none`                       |
| **Button SM**| 14px   | 600    | 1           | 0              | `text-sm font-semibold leading-none`                         |
| **Overline** | 14px   | 600    | 1           | 0.05em         | `text-sm font-semibold leading-none tracking-[0.05em] uppercase` |

#### Mobile (< 768px)

| Element      | Size   | Weight | Line Height | Letter Spacing | Tailwind Classes                                           |
|-------------|--------|--------|-------------|----------------|------------------------------------------------------------|
| **H1**       | 40px   | 800    | 1.1         | -0.02em        | `text-[40px] font-extrabold leading-[1.1] tracking-tight`  |
| **H2**       | 32px   | 700    | 1.15        | -0.01em        | `text-[32px] font-bold leading-[1.15] tracking-[-0.01em]`  |
| **H3**       | 24px   | 700    | 1.2         | 0              | `text-2xl font-bold leading-[1.2]`                          |
| **H4**       | 20px   | 600    | 1.3         | 0              | `text-xl font-semibold leading-[1.3]`                        |
| **H5**       | 18px   | 600    | 1.4         | 0              | `text-lg font-semibold leading-[1.4]`                        |
| **Body LG**  | 18px   | 400    | 1.6         | 0              | `text-lg font-normal leading-[1.6]`                          |
| **Body**     | 16px   | 400    | 1.6         | 0              | `text-base font-normal leading-[1.6]`                        |

#### Combined Responsive Pattern

Use responsive prefixes for headings:

```
H1: text-[40px] md:text-[64px] font-extrabold leading-[1.1] tracking-tight
H2: text-[32px] md:text-[48px] font-bold leading-[1.15] tracking-tight
H3: text-2xl md:text-[32px] font-bold leading-[1.2]
```

### 1.3 Spacing System

#### Section Spacing

| Context                   | Mobile          | Desktop          | Tailwind                        |
|--------------------------|-----------------|------------------|---------------------------------|
| Section vertical padding | 64px top/bottom | 96px top/bottom  | `py-16 md:py-24`                |
| Section inner gap        | 48px            | 64px             | `space-y-12 md:space-y-16`      |
| Heading to content gap   | 32px            | 48px             | `mb-8 md:mb-12`                 |
| Card grid gap            | 24px            | 32px             | `gap-6 md:gap-8`                |

#### Component Spacing

| Context                  | Value    | Tailwind   |
|-------------------------|----------|------------|
| Card internal padding   | 32px     | `p-8`      |
| Card internal padding (mobile) | 24px | `p-6`  |
| Between card title and description | 12px | `mt-3` |
| Between card description and CTA | 24px | `mt-6` |
| Button internal padding (large) | 16px vertical, 32px horizontal | `px-8 py-4` |
| Button internal padding (default) | 12px vertical, 24px horizontal | `px-6 py-3` |
| Button internal padding (small) | 8px vertical, 16px horizontal | `px-4 py-2` |
| Nav link horizontal gap | 32px     | `gap-8`    |
| Icon to text gap        | 12px     | `gap-3`    |
| Stat box internal padding | 24px   | `p-6`      |

### 1.4 Border Radius

| Context          | Value  | Tailwind      |
|-----------------|--------|---------------|
| Buttons (all)   | 8px    | `rounded-lg`  |
| Cards           | 12px   | `rounded-xl`  |
| Badges          | 9999px | `rounded-full`|
| Photo/avatar    | 12px   | `rounded-xl`  |
| Input fields    | 8px    | `rounded-lg`  |
| Modal/dialog    | 16px   | `rounded-2xl` |

### 1.5 Shadow Definitions

| Token           | CSS Value                                          | Tailwind          | Usage                    |
|----------------|----------------------------------------------------|--------------------|--------------------------|
| **Shadow SM**   | `0 1px 2px 0 rgba(0,0,0,0.05)`                    | `shadow-sm`        | Subtle card resting state|
| **Shadow MD**   | `0 4px 6px -1px rgba(0,0,0,0.07), 0 2px 4px -2px rgba(0,0,0,0.05)` | `shadow-md` | Card hover state |
| **Shadow LG**   | `0 10px 15px -3px rgba(0,0,0,0.08), 0 4px 6px -4px rgba(0,0,0,0.04)` | `shadow-lg` | Elevated cards, dropdowns |
| **Shadow Nav**  | `0 1px 3px 0 rgba(0,0,0,0.06)`                    | `shadow-[0_1px_3px_0_rgba(0,0,0,0.06)]` | Sticky nav on scroll |

### 1.6 Button Styles

#### Primary Button

```
Resting:   bg-amber text-foreground font-semibold rounded-lg
           shadow-sm
Hover:     bg-amber-light shadow-md
           transition: background-color 150ms, box-shadow 150ms, transform 150ms
           transform: translateY(-1px)
Active:    bg-amber-dark shadow-sm
           transform: translateY(0)
Focus:     ring-2 ring-amber ring-offset-2 ring-offset-background outline-none
Disabled:  opacity-50 cursor-not-allowed (no hover effects)
```

Tailwind (complete):
```
bg-amber text-foreground font-semibold rounded-lg shadow-sm
hover:bg-amber-light hover:shadow-md hover:-translate-y-0.5
active:bg-amber-dark active:shadow-sm active:translate-y-0
focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2
disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0
transition-all duration-150
```

#### Secondary Button

```
Resting:   bg-transparent text-foreground font-semibold rounded-lg
           border border-border
Hover:     bg-surface border-muted
Active:    bg-surface-2
Focus:     ring-2 ring-foreground ring-offset-2 ring-offset-background outline-none
```

Tailwind (complete):
```
bg-transparent text-foreground font-semibold rounded-lg
border border-border
hover:bg-surface hover:border-muted
active:bg-surface-2
focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2
transition-all duration-150
```

#### Ghost Button (text link style)

```
Resting:   bg-transparent text-foreground font-semibold
           no border, no shadow
Hover:     text-amber underline underline-offset-4
Active:    text-amber-dark
Focus:     ring-2 ring-amber ring-offset-2 ring-offset-background outline-none rounded
```

Tailwind (complete):
```
bg-transparent text-foreground font-semibold
hover:text-amber hover:underline hover:underline-offset-4
active:text-amber-dark
focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:rounded
transition-colors duration-150
```

### 1.7 Card Styles

#### Default Card

```
bg-background border border-border rounded-xl p-6 md:p-8 shadow-sm
hover:shadow-md hover:-translate-y-1
transition-all duration-200
```

#### Problem Card (red-tinted)

```
bg-background border border-red-200 rounded-xl p-6 md:p-8
```
- Title uses `text-red-600`
- Cross icon in `text-red-500`

#### Solution Card (green-tinted)

```
bg-background border border-green-200 rounded-xl p-6 md:p-8
```
- Title uses `text-green-600`
- Check icon in `text-green-500`

#### Service Card (with hover lift)

```
bg-background border border-border rounded-xl p-6 md:p-8 shadow-sm
hover:shadow-lg hover:-translate-y-2 hover:border-amber/30
transition-all duration-300
```

---

## 2. Layout System

### 2.1 Max Content Width

- **Max width**: 1280px
- **Container class**: `max-w-7xl mx-auto px-6 md:px-8`
- Horizontal padding ensures content never touches screen edges on any device.

### 2.2 Grid System

- Uses CSS Grid and Flexbox via Tailwind.
- No fixed column grid. Layouts are defined per-section.

| Layout Pattern        | Tailwind                                        | Usage                              |
|----------------------|--------------------------------------------------|------------------------------------|
| Single column center | `max-w-3xl mx-auto text-center`                 | Hero, Final CTA                    |
| Two columns equal    | `grid grid-cols-1 md:grid-cols-2 gap-8`          | Problem/Solution, About            |
| Three columns equal  | `grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8` | Services, How It Works, Stats      |
| Narrow prose         | `max-w-2xl mx-auto`                              | FAQ section content                |

### 2.3 Breakpoints

| Name       | Min Width | Tailwind Prefix | Description                        |
|------------|-----------|------------------|------------------------------------|
| **Mobile** | 0px       | (default)        | Single column, stacked layouts     |
| **Tablet** | 768px     | `md:`            | Multi-column layouts begin         |
| **Desktop**| 1280px    | `xl:`            | Max content width reached          |

### 2.4 Section Vertical Rhythm

Each section follows this vertical pattern:

```
[Section padding top: py-16 md:py-24]
  [Section heading group: mb-8 md:mb-12]
    [Overline text (optional): mb-3]
    [Heading: mb-4]
    [Subheading: mb-0]
  [Section content]
[Section padding bottom: py-16 md:py-24]
```

---

## 3. Component Hierarchy

### 3.1 NAVIGATION (Sticky Header)

**Behavior**: Sticky to top. Transparent at page top, white background with bottom shadow on scroll.

#### Structure

```
<header>                                              -- sticky top-0 z-50 transition-all duration-300
  <div>                                               -- [scrolled: bg-background/95 backdrop-blur-md shadow-nav]
    <nav>                                             -- max-w-7xl mx-auto px-6 md:px-8 h-16 md:h-20 flex items-center justify-between
      <a href="/">                                    -- Logo
        <span>IntellectAI</span>                      -- text-xl md:text-2xl font-bold text-foreground
      </a>
      <div>                                           -- hidden md:flex items-center gap-8
        <a href="#services">Services</a>              -- text-sm font-medium text-muted-dark hover:text-foreground transition-colors
        <a href="#case-study">Case Study</a>          -- same
        <a href="#about">About</a>                    -- same
        <a href="#book-a-call">Contact</a>            -- same
        <Button variant="primary" size="sm">          -- (see Button component)
          Book a Free Audit
        </Button>
      </div>
      <button>                                        -- md:hidden p-2 text-foreground (hamburger toggle)
        <HamburgerIcon />                             -- w-6 h-6
      </button>
    </nav>
  </div>
</header>
```

#### Mobile Menu (overlay)

```
<div>                                                 -- fixed inset-0 z-40 bg-background
  <div>                                               -- flex flex-col items-center justify-center h-full gap-8
    <a href="#services">Services</a>                  -- text-2xl font-semibold text-foreground
    <a href="#case-study">Case Study</a>              -- same
    <a href="#about">About</a>                        -- same
    <a href="#book-a-call">Contact</a>                -- same
    <Button variant="primary" size="lg">
      Book a Free Audit
    </Button>
  </div>
  <button>                                            -- absolute top-6 right-6 p-2 (close X icon)
    <XIcon />                                         -- w-6 h-6
  </button>
</div>
```

#### Desktop Measurements
- Header height: 80px (`h-20`)
- Logo text: 24px, weight 700
- Nav links: 14px, weight 500, color `#6B7280`, hover `#000000`
- Nav link gap: 32px
- CTA button: small size variant

#### Mobile Measurements
- Header height: 64px (`h-16`)
- Logo text: 20px, weight 700
- Hamburger icon: 24x24px

---

### 3.2 HERO SECTION

**Background**: White (`bg-background`).
**Layout**: Centered single column.
**Accent**: A thin horizontal amber line (2px height, 80px width) above the headline, centered.

#### Structure

```
<section id="hero">                                   -- bg-background py-20 md:py-32 pt-32 md:pt-44
  <div>                                               -- max-w-7xl mx-auto px-6 md:px-8 text-center
    <div>                                             -- max-w-3xl mx-auto
      <div>                                           -- w-20 h-0.5 bg-amber mx-auto mb-8
      </div>
      <h1>
        Your Business Deserves                        -- text-[40px] md:text-[64px] font-extrabold leading-[1.1] tracking-tight text-foreground
        AI That Actually Works                        -- "AI" can be wrapped in <span class="text-amber">
      </h1>
      <p>                                             -- text-lg md:text-xl text-muted-dark leading-[1.6] mt-6 max-w-2xl mx-auto
        We build custom AI agents and automations
        that do the work of entire teams -- so you
        can scale without scaling headcount.
      </p>
      <div>                                           -- flex flex-col sm:flex-row items-center justify-center gap-4 mt-10
        <Button variant="primary" size="lg">
          Book a Free AI Audit                        -- Primary CTA
        </Button>
        <Button variant="ghost">
          See Our Work &darr;                         -- links to #case-study
        </Button>
      </div>
    </div>
  </div>
</section>
```

#### Desktop Measurements
- Top padding: 176px (`pt-44`) to account for sticky nav + breathing room
- Bottom padding: 128px (`py-32`)
- Headline: 64px, weight 800, color `#000000`
- Subheadline: 20px, weight 400, color `#6B7280`
- Gap between headline and subheadline: 24px (`mt-6`)
- Gap between subheadline and CTAs: 40px (`mt-10`)
- Amber accent line: 80px wide, 2px tall, centered, 32px below top of content (`mb-8`)
- Primary CTA button: large size (18px text, 16px vertical padding, 32px horizontal padding)

#### Mobile Measurements
- Top padding: 128px (`pt-32`)
- Bottom padding: 80px (`py-20`)
- Headline: 40px
- Subheadline: 18px
- CTAs stack vertically at `< 640px` (`flex-col sm:flex-row`)

#### Text Content (Exact Copy)

- Headline: `Your Business Deserves AI That Actually Works`
- Subheadline: `We build custom AI agents and automations that do the work of entire teams -- so you can scale without scaling headcount.`
- Primary CTA: `Book a Free AI Audit`
- Secondary CTA: `See Our Work ↓`

---

### 3.3 PROBLEM / SOLUTION SECTION

**Background**: Gray 50 (`bg-surface`).
**Layout**: Two-column grid on desktop, stacked on mobile.

#### Structure

```
<section id="problem">                                -- bg-surface py-16 md:py-24
  <div>                                               -- max-w-7xl mx-auto px-6 md:px-8
    <div>                                             -- text-center mb-8 md:mb-12
      <h2>                                            -- text-[32px] md:text-[48px] font-bold leading-[1.15] tracking-tight text-foreground
        The AI Problem Nobody Talks About
      </h2>
    </div>
    <div>                                             -- grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto
      <!-- Problem Card -->
      <div>                                           -- bg-background border border-red-200 rounded-xl p-6 md:p-8
        <div>                                         -- flex items-center gap-3 mb-4
          <XCircleIcon />                             -- w-6 h-6 text-red-500 flex-shrink-0
          <h3>                                        -- text-xl md:text-2xl font-bold text-red-600
            The Problem
          </h3>
        </div>
        <p>                                           -- text-base text-muted-dark leading-[1.6]
          Most AI tools are just fancy chatbots.
          They answer questions but don't DO
          anything. Your team still does all the
          real work.
        </p>
      </div>
      <!-- Solution Card -->
      <div>                                           -- bg-background border border-green-200 rounded-xl p-6 md:p-8
        <div>                                         -- flex items-center gap-3 mb-4
          <CheckCircleIcon />                         -- w-6 h-6 text-green-500 flex-shrink-0
          <h3>                                        -- text-xl md:text-2xl font-bold text-green-600
            Our Solution
          </h3>
        </div>
        <p>                                           -- text-base text-muted-dark leading-[1.6]
          IntellectAI builds agentic AI -- systems
          that reason, plan, use tools, and complete
          real work autonomously. 24/7. No
          supervision needed.
        </p>
      </div>
    </div>
  </div>
</section>
```

#### Desktop Measurements
- Section max inner width: `max-w-5xl` (1024px) for the card grid
- Card padding: 32px
- Card border radius: 12px
- Icon size: 24x24px
- Card title: 24px, weight 700
- Card body: 16px, weight 400, color `#6B7280`
- Gap between cards: 32px

#### Mobile Measurements
- Cards stack vertically
- Card padding: 24px
- Gap between cards: 24px

#### Text Content (Exact Copy)

- Section heading: `The AI Problem Nobody Talks About`
- Problem card title: `The Problem`
- Problem card body: `Most AI tools are just fancy chatbots. They answer questions but don't DO anything. Your team still does all the real work.`
- Solution card title: `Our Solution`
- Solution card body: `IntellectAI builds agentic AI -- systems that reason, plan, use tools, and complete real work autonomously. 24/7. No supervision needed.`

---

### 3.4 SERVICES SECTION

**Background**: White (`bg-background`).
**Layout**: Three cards in a horizontal row on desktop, stacked on mobile.

#### Structure

```
<section id="services">                               -- bg-background py-16 md:py-24
  <div>                                               -- max-w-7xl mx-auto px-6 md:px-8
    <div>                                             -- text-center mb-8 md:mb-12
      <h2>                                            -- text-[32px] md:text-[48px] font-bold leading-[1.15] tracking-tight text-foreground
        What We Build
      </h2>
    </div>
    <div>                                             -- grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8
      <!-- Card 1: AI Readiness Audit -->
      <!-- Card 2: AI Automation Setup (MOST POPULAR) -->
      <!-- Card 3: Custom AI Agent Build -->
    </div>
  </div>
</section>
```

#### Service Card Template

```
<div>                                                 -- relative bg-background border border-border rounded-xl p-6 md:p-8 shadow-sm
                                                      -- hover:shadow-lg hover:-translate-y-2 hover:border-amber/30
                                                      -- transition-all duration-300
                                                      -- flex flex-col
  <!-- Badge (only Card 2) -->
  <div>                                               -- absolute -top-3 left-1/2 -translate-x-1/2
    <span>                                            -- bg-amber text-foreground text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider
      Most Popular
    </span>
  </div>

  <!-- Icon -->
  <div>                                               -- w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center mb-5
    <Icon />                                          -- w-6 h-6 text-amber
  </div>

  <!-- Title -->
  <h3>                                                -- text-xl md:text-2xl font-bold text-foreground mb-3
    [Card Title]
  </h3>

  <!-- Description -->
  <p>                                                 -- text-base text-muted-dark leading-[1.6] mb-6 flex-grow
    [Card Description]
  </p>

  <!-- Price -->
  <div>                                               -- mb-6
    <span>                                            -- text-2xl md:text-3xl font-bold text-foreground
      [Price]
    </span>
    <span>                                            -- text-sm text-muted line-through ml-2 (only for Card 1)
      [Original Price]
    </span>
  </div>

  <!-- CTA -->
  <Button variant="primary" size="default" fullWidth>
    [CTA Text]
  </Button>
</div>
```

#### Card 1 -- AI Readiness Audit

| Field       | Value                                                                                                      |
|------------|-------------------------------------------------------------------------------------------------------------|
| Icon       | Magnifying glass (use `MagnifyingGlassIcon` from Heroicons or a simple SVG search icon)                     |
| Title      | `AI Readiness Audit`                                                                                        |
| Description| `Find out exactly where AI can save you time and money. We analyze your workflows and deliver a custom AI roadmap.` |
| Price      | `FREE` in bold, with `$500` in strikethrough next to it                                                      |
| CTA        | `Get Your Free Audit`                                                                                        |
| Badge      | None                                                                                                         |

#### Card 2 -- AI Automation Setup

| Field       | Value                                                                                                      |
|------------|-------------------------------------------------------------------------------------------------------------|
| Icon       | Lightning bolt (use `BoltIcon` from Heroicons or a simple SVG lightning icon)                                |
| Title      | `AI Automation Setup`                                                                                        |
| Description| `Eliminate manual, repetitive tasks forever. We connect your tools and build automated workflows that run 24/7.` |
| Price      | `Starting at $2,000`                                                                                         |
| CTA        | `Automate Your Business`                                                                                     |
| Badge      | `MOST POPULAR` -- amber bg, black text, positioned above the card                                            |

#### Card 3 -- Custom AI Agent Build

| Field       | Value                                                                                                      |
|------------|-------------------------------------------------------------------------------------------------------------|
| Icon       | CPU/chip or brain (use `CpuChipIcon` from Heroicons or a simple SVG brain icon -- keep it minimal)          |
| Title      | `Custom AI Agent Build`                                                                                      |
| Description| `A digital employee that works around the clock. Custom-trained on your data, integrated with your tools.`   |
| Price      | `Starting at $5,000`                                                                                         |
| CTA        | `Build Your AI Agent`                                                                                        |
| Badge      | None                                                                                                         |

#### Desktop Measurements
- Three columns, each equal width
- Gap: 32px
- Card padding: 32px
- Icon container: 48x48px, rounded-lg, amber-50 background
- Icon: 24x24px, amber color
- Card title: 24px, weight 700
- Card body: 16px, weight 400, color `#6B7280`
- Price text: 32px, weight 700
- Strikethrough text: 14px, weight 400, color `#9CA3AF`
- CTA button: full width within card
- "Most Popular" badge: positioned absolute, `-top-3`, centered horizontally

#### Mobile Measurements
- Cards stack vertically
- Gap: 24px
- Card padding: 24px

---

### 3.5 CASE STUDY SECTION

**Background**: Dark (`bg-dark` / `#111827`).
**Text**: White.
**Layout**: Centered content with stat boxes in a row.

#### Structure

```
<section id="case-study">                             -- bg-dark py-16 md:py-24
  <div>                                               -- max-w-7xl mx-auto px-6 md:px-8
    <div>                                             -- text-center mb-8 md:mb-12
      <h2>                                            -- text-[32px] md:text-[48px] font-bold leading-[1.15] tracking-tight text-white
        We Don't Just Talk About AI. We Ship It.
      </h2>
      <p>                                             -- text-lg md:text-xl text-gray-400 leading-[1.6] mt-4 max-w-2xl mx-auto
        See how we built SellerPilotAI -- from idea
        to shipped product in under 4 weeks.
      </p>
    </div>

    <!-- Stat Boxes -->
    <div>                                             -- grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto mb-10 md:mb-12
      <StatBox value="Under 4 Weeks" label="Build Time" />
      <StatBox value="24/7" label="Monitoring" />
      <StatBox value="$49/mo" label="vs $3,000+/mo for humans" />
    </div>

    <!-- Description -->
    <div>                                             -- max-w-2xl mx-auto text-center
      <p>                                             -- text-base text-gray-300 leading-[1.7] mb-8
        We built SellerPilotAI -- an AI-powered
        compliance monitoring platform for Amazon
        sellers. It watches accounts 24/7, catches
        compliance risks before they become
        suspensions, and costs less than a single VA.
      </p>
      <a href="https://www.sellerpilotai.ai">        -- text-amber font-semibold hover:text-amber-light hover:underline underline-offset-4 transition-colors
        Read the Full Case Study &rarr;
      </a>
    </div>
  </div>
</section>
```

#### StatBox Component

```
<div>                                                 -- text-center p-6 rounded-xl border border-gray-700/50
  <div>                                               -- text-3xl md:text-4xl font-bold text-amber mb-2
    [value]
  </div>
  <div>                                               -- text-sm text-gray-400 font-medium
    [label]
  </div>
</div>
```

#### Desktop Measurements
- Stat value: 40px, weight 700, color `#F59E0B`
- Stat label: 14px, weight 500, color `#9CA3AF`
- Stat box padding: 24px
- Stat box border: 1px solid `rgba(55,65,81,0.5)` (gray-700 at 50% opacity)
- Stat box border radius: 12px
- Stat grid max width: `max-w-3xl` (768px)
- Gap between stat boxes: 32px
- Description text: 16px, color `#D1D5DB` (gray-300)
- CTA link: amber, semibold, hover underline

#### Mobile Measurements
- Stat boxes stack into a single column below `640px` (`sm:grid-cols-3`)
- Stat value: 32px

#### Text Content (Exact Copy)

- Heading: `We Don't Just Talk About AI. We Ship It.`
- Subheading: `See how we built SellerPilotAI -- from idea to shipped product in under 4 weeks.`
- Stat 1: value `Under 4 Weeks`, label `Build Time`
- Stat 2: value `24/7`, label `Monitoring`
- Stat 3: value `$49/mo`, label `vs $3,000+/mo for humans`
- Description: `We built SellerPilotAI -- an AI-powered compliance monitoring platform for Amazon sellers. It watches accounts 24/7, catches compliance risks before they become suspensions, and costs less than a single VA.`
- CTA: `Read the Full Case Study →`

---

### 3.6 HOW IT WORKS SECTION

**Background**: White (`bg-background`).
**Layout**: Three steps horizontally on desktop, stacked on mobile, with a connecting line between steps on desktop.

#### Structure

```
<section id="how-it-works">                           -- bg-background py-16 md:py-24
  <div>                                               -- max-w-7xl mx-auto px-6 md:px-8
    <div>                                             -- text-center mb-8 md:mb-12
      <h2>                                            -- text-[32px] md:text-[48px] font-bold leading-[1.15] tracking-tight text-foreground
        How We Work
      </h2>
    </div>
    <div>                                             -- relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 max-w-5xl mx-auto
      <!-- Connecting line (desktop only) -->
      <div>                                           -- hidden md:block absolute top-10 left-[16.67%] right-[16.67%] h-0.5 bg-border
      </div>

      <!-- Step 1 -->
      <StepCard number="01" title="We Audit" description="..." />
      <!-- Step 2 -->
      <StepCard number="02" title="We Build" description="..." />
      <!-- Step 3 -->
      <StepCard number="03" title="You Scale" description="..." />
    </div>
  </div>
</section>
```

#### StepCard Component

```
<div>                                                 -- relative text-center
  <!-- Step Number -->
  <div>                                               -- text-5xl md:text-6xl font-extrabold text-amber mb-4
    [number]                                          -- e.g. "01"
  </div>
  <!-- Step Title -->
  <h3>                                                -- text-xl md:text-2xl font-bold text-foreground mb-3
    [title]
  </h3>
  <!-- Step Description -->
  <p>                                                 -- text-base text-muted-dark leading-[1.6] max-w-xs mx-auto
    [description]
  </p>
</div>
```

#### Step Content (Exact Copy)

| Step | Number | Title      | Description                                                                                       |
|------|--------|------------|---------------------------------------------------------------------------------------------------|
| 1    | 01     | We Audit   | Free discovery call + AI opportunity assessment. We find the biggest ROI opportunities.            |
| 2    | 02     | We Build   | Custom AI agent or automation, built and tested in 1-4 weeks. No fluff, just working systems.     |
| 3    | 03     | You Scale  | Your AI works 24/7 while you focus on growth. We provide ongoing support and optimization.        |

#### Desktop Measurements
- Step number: 64px, weight 800, color `#F59E0B`
- Step title: 24px, weight 700
- Step description: 16px, weight 400, color `#6B7280`, max-w-xs (320px)
- Connecting line: 2px tall, color `#E5E7EB`, positioned at `top: 40px` (vertically centered on the step number)
- The line spans from the center of step 1 to the center of step 3

#### Mobile Measurements
- Step number: 48px
- Steps stack vertically with 40px gap (`gap-10`)
- No connecting line on mobile

---

### 3.7 FOUNDER / ABOUT SECTION

**Background**: Gray 50 (`bg-surface`).
**Layout**: Two columns on desktop (photo left, text right), stacked on mobile (photo on top).

#### Structure

```
<section id="about">                                  -- bg-surface py-16 md:py-24
  <div>                                               -- max-w-7xl mx-auto px-6 md:px-8
    <div>                                             -- grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center max-w-5xl mx-auto
      <!-- Photo Placeholder -->
      <div>                                           -- flex justify-center md:justify-end
        <div>                                         -- w-64 h-80 md:w-80 md:h-96 bg-surface-2 rounded-xl flex items-center justify-center border border-border
          <span>                                      -- text-5xl md:text-6xl font-bold text-muted
            AS
          </span>
        </div>
      </div>

      <!-- Text Column -->
      <div>
        <h2>                                          -- text-[32px] md:text-[48px] font-bold leading-[1.15] tracking-tight text-foreground mb-4
          Built by a Builder
        </h2>
        <h3>                                          -- text-xl font-semibold text-foreground mb-1
          Aarif Shaikh
        </h3>
        <p>                                           -- text-sm text-amber font-medium mb-6
          Founder, IntellectAI & SellerPilotAI
        </p>
        <p>                                           -- text-base text-muted-dark leading-[1.7]
          I don't just sell AI services -- I run my
          entire company on the same AI agents I build
          for clients. My 7-person AI team works 24/7,
          handles everything from content creation to
          customer support, and costs a fraction of a
          traditional team. I built IntellectAI to
          give other businesses the same unfair
          advantage.
        </p>
      </div>
    </div>
  </div>
</section>
```

#### Desktop Measurements
- Photo placeholder: 320x384px (`w-80 h-96`)
- Photo background: `#F3F4F6`, border `#E5E7EB`, border-radius 12px
- Initials text: 64px, weight 700, color `#9CA3AF`
- Section heading: 48px, weight 700
- Name: 20px, weight 600
- Title: 14px, weight 500, color `#F59E0B`
- Bio: 16px, weight 400, color `#6B7280`, line-height 1.7
- Gap between columns: 64px (`gap-16`)

#### Mobile Measurements
- Photo placeholder: 256x320px (`w-64 h-80`), centered
- Photo sits above text, 40px gap between photo and text (`gap-10`)
- Section heading: 32px

#### Text Content (Exact Copy)

- Heading: `Built by a Builder`
- Name: `Aarif Shaikh`
- Title: `Founder, IntellectAI & SellerPilotAI`
- Bio: `I don't just sell AI services -- I run my entire company on the same AI agents I build for clients. My 7-person AI team works 24/7, handles everything from content creation to customer support, and costs a fraction of a traditional team. I built IntellectAI to give other businesses the same unfair advantage.`

---

### 3.8 FAQ SECTION

**Background**: White (`bg-background`).
**Layout**: Centered narrow column with accordion items.

#### Structure

```
<section id="faq">                                    -- bg-background py-16 md:py-24
  <div>                                               -- max-w-7xl mx-auto px-6 md:px-8
    <div>                                             -- text-center mb-8 md:mb-12
      <h2>                                            -- text-[32px] md:text-[48px] font-bold leading-[1.15] tracking-tight text-foreground
        Questions? We've Got Answers.
      </h2>
    </div>
    <div>                                             -- max-w-2xl mx-auto
      <AccordionItem question="..." answer="..." />
      <AccordionItem question="..." answer="..." />
      <!-- repeat for all 6 items -->
    </div>
  </div>
</section>
```

#### AccordionItem Component

```
<div>                                                 -- border-b border-border
  <button>                                            -- w-full flex items-center justify-between py-5 text-left
                                                      -- group focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 rounded
    <span>                                            -- text-base md:text-lg font-semibold text-foreground pr-4
      [question]
    </span>
    <span>                                            -- text-xl text-muted flex-shrink-0 transition-transform duration-200
                                                      -- [open: rotate-45]
      +                                               -- changes to "x" or rotates when open
    </span>
  </button>
  <div>                                               -- overflow-hidden transition-all duration-300
                                                      -- [closed: max-h-0 opacity-0] [open: max-h-96 opacity-100]
    <p>                                               -- pb-5 text-base text-muted-dark leading-[1.6]
      [answer]
    </p>
  </div>
</div>
```

#### FAQ Content (Exact Copy)

| # | Question | Answer |
|---|----------|--------|
| 1 | What's the difference between a chatbot and an AI agent? | A chatbot answers questions. An AI agent takes action. Our agents can research, write, analyze data, manage workflows, and complete real tasks -- autonomously. |
| 2 | How long does it take to build a custom AI agent? | Most projects take 1-4 weeks from kickoff to deployment. Simple automations can be live in days. |
| 3 | What if I don't know where to start with AI? | That's exactly what the free AI Readiness Audit is for. We'll analyze your business and show you the highest-ROI opportunities. |
| 4 | Do you work with small businesses? | Yes. Our AI Automation Setup starts at $2,000 -- designed specifically for small businesses and startups that want to punch above their weight. |
| 5 | What happens after the project is delivered? | We don't disappear. Every project includes 30 days of support. We also offer ongoing optimization packages. |
| 6 | How much does it cost? | AI Readiness Audit: Free. Automations: Starting at $2,000. Custom AI Agents: Starting at $5,000. We always scope before we quote. |

#### Desktop Measurements
- FAQ container: max-w-2xl (672px), centered
- Question text: 18px, weight 600
- Answer text: 16px, weight 400, color `#6B7280`, line-height 1.6
- Vertical padding per item: 20px (`py-5`)
- Toggle icon: 20px, color `#9CA3AF`
- Bottom border: 1px solid `#E5E7EB`

#### Mobile Measurements
- Question text: 16px
- Same structure, just narrower

---

### 3.9 FINAL CTA SECTION

**Background**: Amber 50 (`bg-amber-50` / `#FFFBEB`) with a subtle amber border card.
**Layout**: Centered text with large CTA.

#### Structure

```
<section id="book-a-call">                            -- bg-amber-50 py-16 md:py-24
  <div>                                               -- max-w-7xl mx-auto px-6 md:px-8
    <div>                                             -- max-w-2xl mx-auto text-center bg-background rounded-2xl p-8 md:p-12 border border-amber/20 shadow-lg
      <h2>                                            -- text-[32px] md:text-[48px] font-bold leading-[1.15] tracking-tight text-foreground mb-4
        Ready to Put AI to Work?
      </h2>
      <p>                                             -- text-base md:text-lg text-muted-dark leading-[1.6] mb-8
        Book a free AI Readiness Audit. We'll show
        you exactly where AI can save you time and
        money -- no commitment, no pressure.
      </p>
      <Button variant="primary" size="lg">
        Book Your Free AI Audit
      </Button>
      <p>                                             -- text-sm text-muted mt-4
        Or email us at
        <a href="mailto:aarifshaikhs@hotmail.com">   -- text-amber font-medium hover:underline
          aarifshaikhs@hotmail.com
        </a>
      </p>
    </div>
  </div>
</section>
```

#### Desktop Measurements
- Outer section: amber-50 background
- Inner card: white background, rounded-2xl (16px), padding 48px, border `rgba(245,158,11,0.2)`, shadow-lg
- Card max width: `max-w-2xl` (672px)
- Heading: 48px, weight 700
- Subheading: 18px, weight 400, color `#6B7280`
- CTA: large size variant
- Email text: 14px, color `#9CA3AF`, email link in amber

#### Mobile Measurements
- Inner card padding: 32px
- Heading: 32px

#### Text Content (Exact Copy)

- Heading: `Ready to Put AI to Work?`
- Subheading: `Book a free AI Readiness Audit. We'll show you exactly where AI can save you time and money -- no commitment, no pressure.`
- CTA: `Book Your Free AI Audit`
- Below CTA: `Or email us at aarifshaikhs@hotmail.com`

---

### 3.10 FOOTER

**Background**: Dark (`bg-dark` / `#111827`), bottom bar in `bg-dark-deep` / `#030712`.
**Text**: White and gray.

#### Structure

```
<footer>                                              -- bg-dark
  <div>                                               -- max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16
    <div>                                             -- grid grid-cols-1 md:grid-cols-3 gap-8 items-start
      <!-- Left: Logo + Tagline -->
      <div>
        <span>                                        -- text-xl font-bold text-white
          IntellectAI
        </span>
        <p>                                           -- text-sm text-gray-400 mt-2
          We don't build chatbots. We build AI
          employees.
        </p>
      </div>

      <!-- Center: Nav Links -->
      <div>                                           -- flex flex-col items-start md:items-center gap-3
        <a href="#services">                          -- text-sm text-gray-400 hover:text-white transition-colors
          Services
        </a>
        <a href="#case-study">Case Study</a>          -- same styling
        <a href="#about">About</a>                    -- same styling
        <a href="#book-a-call">Contact</a>            -- same styling
      </div>

      <!-- Right: Social Links -->
      <div>                                           -- flex items-center gap-4 md:justify-end
        <a href="#" aria-label="LinkedIn">            -- text-gray-400 hover:text-white transition-colors
          <LinkedInIcon />                            -- w-5 h-5
        </a>
        <a href="#" aria-label="X (Twitter)">         -- same styling
          <XIcon />                                   -- w-5 h-5
        </a>
        <a href="#" aria-label="Facebook">            -- same styling
          <FacebookIcon />                            -- w-5 h-5
        </a>
      </div>
    </div>
  </div>

  <!-- Bottom Bar -->
  <div>                                               -- bg-dark-deep
    <div>                                             -- max-w-7xl mx-auto px-6 md:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-2
      <p>                                             -- text-xs text-gray-500
        &copy; 2026 IntellectAI. All rights reserved.
      </p>
      <p>                                             -- text-xs text-gray-500
        Toronto, Canada
      </p>
    </div>
  </div>
</footer>
```

#### Desktop Measurements
- Footer padding: 64px vertical
- Logo text: 20px, weight 700, white
- Tagline: 14px, weight 400, color `#9CA3AF`
- Nav links: 14px, weight 400, color `#9CA3AF`, hover white
- Social icons: 20x20px, color `#9CA3AF`, hover white
- Bottom bar padding: 16px vertical
- Copyright text: 12px, color `#6B7280`

#### Mobile Measurements
- Three-column grid stacks to single column
- All content left-aligned on mobile
- Bottom bar text stacks vertically, centered

---

## 4. Interaction Design

### 4.1 Scroll Behavior

- `html` element has `scroll-smooth` class (already set in `layout.tsx`).
- All anchor links (`#services`, `#case-study`, etc.) smooth-scroll to target.
- Account for sticky header height: use `scroll-mt-20` on each section's target element.

### 4.2 Sticky Navigation Scroll Effect

```
State: Page Top (scrollY < 10)
  - Background: transparent
  - Shadow: none
  - Transition: background-color 300ms, box-shadow 300ms

State: Scrolled (scrollY >= 10)
  - Background: rgba(255,255,255,0.95)
  - Backdrop filter: blur(12px)
  - Shadow: 0 1px 3px 0 rgba(0,0,0,0.06)
```

Implementation: Use a `useEffect` with `scroll` event listener. Set a boolean state `isScrolled`. Apply classes conditionally.

### 4.3 Hover States Summary

| Element              | Resting                           | Hover                                              |
|---------------------|------------------------------------|----------------------------------------------------|
| Primary button      | `bg-amber shadow-sm`              | `bg-amber-light shadow-md -translate-y-0.5`        |
| Secondary button    | `border-border bg-transparent`     | `border-muted bg-surface`                           |
| Ghost button        | `text-foreground`                  | `text-amber underline underline-offset-4`           |
| Nav link            | `text-muted-dark`                  | `text-foreground`                                    |
| Service card        | `shadow-sm border-border`          | `shadow-lg -translate-y-2 border-amber/30`          |
| Footer link         | `text-gray-400`                    | `text-white`                                         |
| Social icon         | `text-gray-400`                    | `text-white`                                         |
| FAQ accordion toggle| `text-muted`                       | `text-foreground`                                    |

All transitions use `duration-150` for buttons, `duration-200` for cards, `duration-300` for nav background.

### 4.4 Mobile Menu Behavior

- Toggle: Hamburger icon toggles a full-screen overlay.
- Animation: Menu slides in from right (`translate-x-full` to `translate-x-0`, `duration-300`).
- Body scroll lock: When menu is open, `document.body.style.overflow = 'hidden'`.
- Clicking a nav link closes the menu and smooth-scrolls to the section.
- Close button (X icon) in top-right corner, same position as hamburger.

### 4.5 FAQ Accordion Behavior

- Only one item open at a time. Opening one closes the previously open one.
- Toggle icon rotates 45 degrees when open (turning `+` into an `x` shape).
- Content area animates via `max-height` transition (0 to content height).
- Duration: 300ms, easing: `ease-in-out`.
- First item is closed by default (all items start closed).

### 4.6 Scroll-Triggered Animations

Use Intersection Observer (native browser API or a small hook). No heavy animation libraries.

| Section        | Animation                                | Trigger               | Duration | Delay               |
|---------------|------------------------------------------|-----------------------|----------|----------------------|
| Hero content  | Fade up (`opacity: 0 -> 1, translateY: 20px -> 0`) | On page load (no IO) | 600ms    | 0ms headline, 100ms sub, 200ms CTAs |
| Problem cards | Fade up                                  | 20% in viewport       | 500ms    | 0ms left, 150ms right|
| Service cards | Fade up                                  | 20% in viewport       | 500ms    | 0ms, 100ms, 200ms (staggered) |
| Stat boxes    | Fade up + count-up animation on numbers  | 20% in viewport       | 500ms    | 0ms, 100ms, 200ms    |
| How It Works  | Fade up (staggered per step)             | 20% in viewport       | 500ms    | 0ms, 150ms, 300ms    |
| About photo   | Fade in from left                        | 20% in viewport       | 600ms    | 0ms                   |
| About text    | Fade in from right                       | 20% in viewport       | 600ms    | 100ms                 |
| Final CTA     | Fade up                                  | 20% in viewport       | 500ms    | 0ms                   |

**CSS for fade-up animation:**

```css
.animate-fade-up {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 500ms ease-out, transform 500ms ease-out;
}

.animate-fade-up.visible {
  opacity: 1;
  transform: translateY(0);
}
```

**Intersection Observer hook pattern:**

```typescript
// useInView hook
// threshold: 0.2 (20% visible)
// triggerOnce: true (only animate in, never out)
```

---

## 5. Responsive Behavior

### 5.1 Desktop (>= 1280px)

This is the "full" layout. All multi-column grids are active. Max content width is reached. Generous padding.

- Navigation: all links visible, CTA button visible, no hamburger
- Hero: large headline (64px), horizontal CTA row
- Problem/Solution: side-by-side cards
- Services: 3-column card grid
- Case Study: 3-column stat grid
- How It Works: 3-column step layout with connecting line
- About: 2-column (photo left, text right)
- FAQ: centered narrow column
- Final CTA: centered card
- Footer: 3-column grid

### 5.2 Tablet (768px - 1279px)

Identical to desktop layout but with narrower container (content fills more of the screen). Padding decreases slightly. All multi-column layouts remain active at `md:` breakpoint.

Key differences from full desktop:
- Container has more horizontal padding fill
- Cards may be slightly narrower
- Typography uses the desktop scale (breakpoint activates at `md:`)

### 5.3 Mobile (< 768px)

Every multi-column layout collapses to a single column.

| Section          | Mobile Behavior                                                                                       |
|-----------------|-------------------------------------------------------------------------------------------------------|
| **Navigation**   | Logo + hamburger only. Menu is full-screen overlay.                                                   |
| **Hero**         | Headline 40px. CTAs stack vertically (`flex-col`) below `640px`, side-by-side at `sm:`.               |
| **Problem**      | Cards stack vertically. Full width.                                                                    |
| **Services**     | Cards stack vertically. Full width.                                                                    |
| **Case Study**   | Stat boxes stack vertically below `640px`. On `sm:` (640px+) they are 3 columns.                      |
| **How It Works** | Steps stack vertically. No connecting line. 40px gap between steps.                                    |
| **About**        | Photo centered above text. Single column.                                                              |
| **FAQ**          | Full width, same accordion. Question text slightly smaller (16px vs 18px).                             |
| **Final CTA**    | Card padding decreases to 32px. Headline 32px.                                                         |
| **Footer**       | All columns stack. Left-aligned. Bottom bar text centered and stacked.                                 |

### 5.4 Breakpoint Summary

```
Default (0px+):      Single column, mobile typography, compact padding
sm (640px+):         Hero CTAs go side-by-side, stat boxes go 3-col
md (768px+):         All multi-column layouts activate, desktop typography
lg (1024px+):        No additional changes (comfortable breathing room)
xl (1280px+):        Max content width reached
```

---

## 6. Component File Structure

### 6.1 Directory Map

```
src/
  app/
    globals.css                    -- Updated CSS variables (light theme)
    layout.tsx                     -- Root layout (remove "dark" class)
    page.tsx                       -- Landing page (assembles all sections)
    favicon.ico

  components/
    layout/
      Header.tsx                   -- Sticky nav, scroll detection, logo, links, CTA
      MobileNav.tsx                -- Full-screen mobile menu overlay
      Footer.tsx                   -- Footer with links, social icons, bottom bar

    sections/
      Hero.tsx                     -- Hero section with headline, sub, CTAs
      Problem.tsx                  -- Problem/Solution two-card section
      Services.tsx                 -- Three service cards with pricing
      CaseStudy.tsx                -- Dark bg section with stats and description
      HowItWorks.tsx               -- Three-step process with connecting line
      About.tsx                    -- Founder section with photo placeholder
      FAQ.tsx                      -- Accordion FAQ section
      FinalCTA.tsx                 -- Final call-to-action with amber bg

    ui/
      Button.tsx                   -- Button component (primary, secondary, ghost variants; sm, default, lg sizes)
      Card.tsx                     -- Base card component with hover variants
      Badge.tsx                    -- "Most Popular" style badge
      Accordion.tsx                -- Single accordion item (question + collapsible answer)
      SectionHeading.tsx           -- Reusable section heading (overline + h2 + subtitle)
      StatBox.tsx                  -- Stat display (value + label) for Case Study section

  content/
    landing.ts                     -- All text content for the landing page (centralized copy)

  lib/
    constants.ts                   -- Site metadata, nav links (already exists)
    utils.ts                       -- cn() helper (already exists)
    hooks/
      useInView.ts                 -- Intersection Observer hook for scroll animations
      useScrolled.ts               -- Hook to detect if page is scrolled (for nav)

  styles/
    (empty -- all styling via Tailwind classes)

  types/
    index.ts                       -- TypeScript interfaces (already exists)

  public/
    fonts/                         -- (Inter loaded via next/font, no manual fonts needed)
    images/
      (empty for now -- placeholder images generated via CSS)
```

### 6.2 Component Props

#### Button.tsx

```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'default' | 'lg';
  fullWidth?: boolean;
  href?: string;           // If provided, renders as <a> tag
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit';
}
```

#### Card.tsx

```typescript
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;         // Enable hover lift effect (default: true)
}
```

#### Badge.tsx

```typescript
interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}
```

#### Accordion.tsx

```typescript
interface AccordionProps {
  items: Array<{
    question: string;
    answer: string;
  }>;
}
```

Internal state manages which item index is open (or `null` if all closed).

#### SectionHeading.tsx

```typescript
interface SectionHeadingProps {
  overline?: string;       // Small uppercase text above heading
  heading: string;
  subtitle?: string;
  light?: boolean;         // true for dark bg sections (white text)
  className?: string;
}
```

#### StatBox.tsx

```typescript
interface StatBoxProps {
  value: string;
  label: string;
}
```

### 6.3 Page Assembly (page.tsx)

```typescript
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Problem } from '@/components/sections/Problem';
import { Services } from '@/components/sections/Services';
import { CaseStudy } from '@/components/sections/CaseStudy';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { About } from '@/components/sections/About';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Services />
        <CaseStudy />
        <HowItWorks />
        <About />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
```

### 6.4 Content File (content/landing.ts)

All copy should be centralized in this file so that content changes never require touching component code. The file exports objects for each section with all strings.

---

## Appendix A: Icon Reference

Use simple SVG line icons. Recommended source: **Heroicons** (`@heroicons/react/24/outline`). Install via `pnpm add @heroicons/react`.

| Usage                    | Heroicon Name             | Alternative              |
|-------------------------|---------------------------|--------------------------|
| Problem card icon       | `XCircleIcon`             | Custom X in circle SVG   |
| Solution card icon      | `CheckCircleIcon`         | Custom checkmark SVG     |
| Service: Audit          | `MagnifyingGlassIcon`     | `ClipboardDocumentListIcon` |
| Service: Automation     | `BoltIcon`                | `CogIcon`                |
| Service: Custom Agent   | `CpuChipIcon`             | `SparklesIcon`           |
| Hamburger menu          | `Bars3Icon`               | Custom 3-line SVG        |
| Close menu              | `XMarkIcon`               | Custom X SVG             |
| FAQ toggle (open)       | Rotate `+` text 45deg     | `PlusIcon` / `MinusIcon` |
| Social: LinkedIn        | Custom SVG (brand icon)   | Lucide `linkedin`        |
| Social: X/Twitter       | Custom SVG (brand icon)   | Lucide `twitter`         |
| Social: Facebook        | Custom SVG (brand icon)   | Lucide `facebook`        |

Note: Social brand icons are not available in Heroicons. Use simple custom SVGs or install `lucide-react`.

---

## Appendix B: SEO and Accessibility Checklist

### SEO

- Each section uses semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`.
- Single `<h1>` on the page (Hero headline).
- Logical heading hierarchy: h1 > h2 per section > h3 for subsections.
- All images (when added) must have descriptive `alt` text.
- Page `<title>` and `<meta description>` are set in `layout.tsx` metadata.
- Use `id` attributes on sections for anchor links (`#services`, `#case-study`, etc.).
- Add `scroll-mt-20` to each section for sticky header offset.

### Accessibility (WCAG AA)

- All interactive elements are keyboard-focusable with visible focus rings (`focus-visible:ring-2`).
- Color contrast ratios:
  - Black text on white bg: 21:1 (passes AAA)
  - `#6B7280` (muted-dark) on white bg: 5.0:1 (passes AA)
  - `#9CA3AF` (muted) on white bg: 3.0:1 (use only for non-essential supplementary text, NOT for body copy)
  - Black text on amber (`#F59E0B`) bg: 8.6:1 (passes AAA)
  - White text on dark (`#111827`) bg: 16.6:1 (passes AAA)
  - Amber (`#F59E0B`) on dark (`#111827`) bg: 5.5:1 (passes AA)
- Hamburger button has `aria-label="Open menu"`, close button has `aria-label="Close menu"`.
- FAQ accordion buttons have `aria-expanded` attribute.
- FAQ answer panels have `role="region"` and `aria-labelledby` pointing to the question button.
- Social links have `aria-label` attributes (e.g., `aria-label="LinkedIn"`).
- Skip-to-content link: Add a visually hidden link at the top of the page that becomes visible on focus, jumping to `<main>`.
- Reduced motion: Wrap animations in `@media (prefers-reduced-motion: reduce)` to disable them.

---

## Appendix C: Performance Guidelines

- **No animation libraries** (Framer Motion, GSAP). Use CSS transitions + Intersection Observer.
- **No icon libraries loaded in full**. Tree-shake individual icons from Heroicons.
- **Images**: When real images are added, use Next.js `<Image>` component with `width`, `height`, and `priority` for above-the-fold images.
- **Fonts**: Inter is loaded via `next/font/google` with only the weights needed (400, 500, 600, 700, 800, 900). This is already configured.
- **Bundle size**: Keep the landing page as a single route with no client-side routing. Only the FAQ accordion and mobile nav require `"use client"`.
- **Target Core Web Vitals**:
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1

---

*End of Design Specification.*
