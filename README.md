# NORDEN VERK — Håndverk som varer

Landing page for a Norwegian furniture workshop. Has a custom hammer cursor and smooth scrolling.

## 🎨 About

Fictional woodworking workshop site. Built to practice custom cursor implementation and Lenis smooth scroll. Uses Tailwind CSS 4 and React 19.

## ✨ Features

- **Custom Hammer Cursor** — Changes on hover and click
- **Lenis Smooth Scroll** — Works at any refresh rate
- **Framer Motion** — Scroll animations
- **Responsive** — Mobile from 320px, burger menu on small screens
- **Google Fonts** — Barlow, Barlow Condensed, Playfair Display
- **Tailwind CSS 4** — Utility classes
- **TypeScript** — Type checking
- **React 19** — Latest React

## 🛠️ Tech Stack

| Technology | Version |
|---|---|
| React | 19 |
| TypeScript | 6 |
| Vite | 8 |
| Framer Motion | 12 |
| Lenis | 1.3 |
| Tailwind CSS | 4 |
| Bun | runtime |

## 🚀 Getting Started

```bash
bun install
bun run dev       # http://localhost:5173
bun run build     # production build
bun run preview   # preview build
```

## 📁 Structure

```
src/
├── components/
│   ├── sections/       # Landing sections
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Kolleksjonen.tsx
│   │   ├── Materialer.tsx
│   │   ├── Verkstedet.tsx
│   │   ├── FooterCTA.tsx
│   │   └── Footer.tsx
│   └── ui/
│       ├── Button.tsx
│       └── CustomCursor.tsx
├── contexts/
│   └── LenisContext.tsx  # Smooth scroll provider
├── hooks/
│   └── useLenis.ts
└── utils/
    └── animations.ts
```

## 🎯 Key Sections

- **Header** — Navigation with burger menu
- **Hero** — Full-screen hero with animated text
- **Kolleksjonen** — Product collection showcase
- **Materialer** — Materials and craftsmanship
- **Verkstedet** — Workshop story section
- **FooterCTA** — Call-to-action section
- **Footer** — Contact information and links

## 🎯 Learning Goals

- React 19 with TypeScript 6
- Lenis smooth scroll integration
- Custom cursor implementation
- Framer Motion animation patterns
- Tailwind CSS 4 utility patterns
- Context API for global state
- Responsive design techniques

---

**Note:** Portfolio project demonstrating modern React, smooth scroll, and custom interactions.
