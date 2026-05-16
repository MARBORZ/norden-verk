# NORDEN VERK — Håndverk som varer

A landing page for a Scandinavian furniture workshop. Portfolio project showcasing modern React architecture with smooth animations and custom interactions.

## 🎨 About

NORDEN VERK is a visually striking landing page for a fictional Norwegian woodworking workshop. Features custom cursor interactions, buttery-smooth scrolling with Lenis, and elegant Framer Motion animations. Built with React 19, TypeScript, and Tailwind CSS 4.

## ✨ Features

- **Custom Hammer Cursor** — Three states: default / hover / click
- **Lenis Smooth Scroll** — Global context, adaptive to any refresh rate
- **Framer Motion Animations** — `whileInView` animations, frame-rate independent
- **Responsive Design** — Mobile from 320px, burger menu ≤768px
- **Google Fonts** — Barlow, Barlow Condensed, Playfair Display
- **Tailwind CSS 4** — Modern utility-first styling
- **TypeScript** — Full type safety
- **React 19** — Latest React with compiler optimizations

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
