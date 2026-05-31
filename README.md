# Fity.ness Landing Page

An ultra-minimalist, high-performance landing page built for the **Fity.ness** ecosystem. It features a premium black-and-white aesthetic, strict Shadcn/v4 token integration, and fluid, native CSS stacking animations.

---

## 🚀 Tech Stack

* **React** (TypeScript)
* **Tailwind CSS** (v4 ready)
* **Shadcn/ui** (Core primitives)
* **Lucide React** (Iconography)

---

## 💎 Key Features

* **Mesh Grid Hero:** A mathematical background grid built with native CSS gradients and radial masking to focus attention on the main value proposition.
* **Sticky Stacking Cards (`Operation.tsx`):** A frictionless 3-step onboarding showcase where cards stack natively via CSS `sticky` layout during scroll, keeping the contextual header pinned on the left.
* **Target Focus Grid (`Skills.tsx`):** Clean, structural grid displaying specific training pillars (Hypertrophy, Strength, and Endurance).
* **Borderless FAQ (`Questions.tsx`):** An elegant, wide-typography accordion component with all borders removed, displaying the most critical answer open by default.
* **Inverted Premium Footer:** A full-width `foreground` background section that mirrors the Hero's mesh grid layout in a striking, high-contrast inverted style.

---

## 📂 Component Structure

```bash
src/
├── components/
│   ├── Hero.tsx         # Main entry section with the mesh grid background
│   ├── Operation.tsx    # Native stacking scroll effect (3 steps)
│   ├── Skills.tsx       # Training objectives grid
│   ├── Questions.tsx    # Borderless, high-impact FAQ accordion
│   └── Footer.tsx       # Inverted full-width call-to-action & links