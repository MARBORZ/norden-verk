# NORDEN VERK — Håndverk som varer

En landingsside for et skandinavisk møbelverksted. Porteføljeprosjekt som viser frem moderne React-arkitektur med jevne animasjoner og tilpassede interaksjoner.

## 🎨 Om

NORDEN VERK er en visuelt slående landingsside for et fiktivt norsk treverksted. Har tilpassede markørinteraksjoner, silkemyk scrolling med Lenis, og elegante Framer Motion-animasjoner. Bygget med React 19, TypeScript og Tailwind CSS 4.

## ✨ Funksjoner

- **Tilpasset Hammer-markør** — Tre tilstander: standard / hover / klikk
- **Lenis Smooth Scroll** — Global kontekst, adaptiv til enhver oppdateringsfrekvens
- **Framer Motion Animasjoner** — `whileInView`-animasjoner, bildefrekvens-uavhengig
- **Responsivt Design** — Mobil fra 320px, burgermeny ≤768px
- **Google Fonts** — Barlow, Barlow Condensed, Playfair Display
- **Tailwind CSS 4** — Moderne utility-first styling
- **TypeScript** — Full typesikkerhet
- **React 19** — Nyeste React med kompilatoroptimaliseringer

## 🛠️ Teknologi

| Teknologi | Versjon |
|---|---|
| React | 19 |
| TypeScript | 6 |
| Vite | 8 |
| Framer Motion | 12 |
| Lenis | 1.3 |
| Tailwind CSS | 4 |
| Bun | runtime |

## 🚀 Kom i Gang

```bash
bun install
bun run dev       # http://localhost:5173
bun run build     # produksjonsbygg
bun run preview   # forhåndsvis bygg
```

## 📁 Struktur

```
src/
├── components/
│   ├── sections/       # Landingsseksjoner
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
│   └── LenisContext.tsx  # Smooth scroll-provider
├── hooks/
│   └── useLenis.ts
└── utils/
    └── animations.ts
```

## 🎯 Nøkkelseksjoner

- **Header** — Navigasjon med burgermeny
- **Hero** — Fullskjerm hero med animert tekst
- **Kolleksjonen** — Produktkolleksjon showcase
- **Materialer** — Materialer og håndverk
- **Verkstedet** — Verkstedshistorie-seksjon
- **FooterCTA** — Call-to-action-seksjon
- **Footer** — Kontaktinformasjon og lenker

## 🎯 Læringsmål

- React 19 med TypeScript 6
- Lenis smooth scroll-integrasjon
- Tilpasset markørimplementering
- Framer Motion-animasjonsmønstre
- Tailwind CSS 4 utility-mønstre
- Context API for global tilstand
- Responsivt designteknikker

---

**Merk:** Porteføljeprosjekt som demonstrerer moderne React, smooth scroll og tilpassede interaksjoner.
