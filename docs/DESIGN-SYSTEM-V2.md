# IntellectAI Design System V2

## Design Direction
Inspired by: Linear, Vercel, Stripe — dark-first, depth through layering, restrained elegance.
NOT: generic SaaS templates, orange/amber branding, flat colored boxes.

---

## Color Palette (replacing amber/orange)

### Primary: Electric Blue → Cyan gradient
- `--primary`: #3B82F6 (blue-500)
- `--primary-light`: #60A5FA (blue-400)
- `--primary-dark`: #2563EB (blue-600)
- `--accent`: #06B6D4 (cyan-500)
- `--accent-light`: #22D3EE (cyan-400)

### Backgrounds: Rich dark palette
- `--bg-primary`: #09090B (zinc-950 — near black)
- `--bg-secondary`: #0F1117 (slightly lighter dark)
- `--bg-card`: #131620 (card surfaces)
- `--bg-card-hover`: #1A1F2E (card hover)
- `--bg-elevated`: #1E2330 (elevated surfaces)

### Text hierarchy
- `--text-primary`: #F4F4F5 (zinc-100 — primary headings)
- `--text-secondary`: #A1A1AA (zinc-400 — body text)
- `--text-muted`: #71717A (zinc-500 — captions)

### Borders
- `--border`: rgba(255, 255, 255, 0.06)
- `--border-hover`: rgba(255, 255, 255, 0.12)
- `--border-accent`: rgba(59, 130, 246, 0.3)

### Gradient combos
- Hero gradient: linear-gradient(135deg, #3B82F6, #8B5CF6, #06B6D4)
- CTA button: linear-gradient(135deg, #3B82F6, #06B6D4)
- Card glow: radial-gradient(circle, rgba(59, 130, 246, 0.08), transparent)
- Text gradient: linear-gradient(90deg, #60A5FA, #22D3EE)

---

## 3D Effects & Depth

### Card hover tilt (CSS perspective + transform)
```css
.card-3d {
  perspective: 1000px;
  transform-style: preserve-3d;
}
.card-3d:hover {
  transform: rotateY(-2deg) rotateX(2deg) translateZ(10px);
}
```

### Layered depth
- Cards float above background with `box-shadow: 0 0 0 1px rgba(255,255,255,0.06), 0 8px 40px rgba(0,0,0,0.4)`
- Hover state: glow + lift (`translateY(-4px)` + blue glow shadow)
- Background layers: base dark → subtle grid pattern → content

### Glow effects
- Subtle blue glow behind hero heading
- Card hover glow: `box-shadow: 0 0 30px rgba(59, 130, 246, 0.1)`
- CTA button glow: `box-shadow: 0 0 20px rgba(59, 130, 246, 0.3)`

### Grid pattern background
- Subtle grid lines at ~60px spacing, rgba(255,255,255,0.03)
- Used on hero and dark sections for texture

---

## Typography
- Font: Inter (keep existing)
- Headings: font-extrabold, text-white
- Hero H1: 64px desktop, 40px mobile, with gradient text option
- Section H2: 48px desktop, 32px mobile
- Body: 16-18px, text-secondary (zinc-400)
- Monospace for code/metrics: font-mono

---

## Component Patterns

### Cards
- Dark bg (#131620), rounded-xl (12px), border rgba(255,255,255,0.06)
- Hover: bg lightens to #1A1F2E, border to rgba(255,255,255,0.12), subtle lift + glow
- 3D tilt on hover for featured cards
- NO glassmorphism/blur — it's overused. Use solid dark cards with subtle borders.

### Buttons
- Primary: gradient bg (blue→cyan), white text, glow on hover
- Secondary: transparent bg, border, white text, fill on hover
- Ghost: no border, text only, underline on hover

### Section backgrounds
- ALL sections dark (no white sections — full dark theme)
- Variety through: subtle grid patterns, gradient orbs (very subtle, 3-5% opacity), different bg shades
- Section dividers: gradient line (blue→transparent) or subtle border

### Status badges
- Live: green dot + green text on dark bg
- In Progress: blue dot + blue text on dark bg

---

## What makes this $50K quality
1. DARK THEME throughout — no jarring light/dark alternation
2. Restrained color — blue/cyan as accent, not everywhere
3. Depth through shadows and layering, not blur effects
4. 3D card tilts on hover — subtle but noticeable
5. Grid pattern backgrounds for texture
6. Gradient text on key headings
7. Consistent spacing system
8. Systematic, not random effects
