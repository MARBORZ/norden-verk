# NORDEN VERK — Håndverk som varer

Лендинг для скандинавской мебельной мастерской. Портфолио-проект.

## Стек

| Технология | Версия |
|---|---|
| React | 19 |
| TypeScript | 6 |
| Vite | 8 |
| Framer Motion | 12 |
| Lenis | 1.3 |
| Tailwind CSS | 4 |
| Bun | runtime |

## Запуск

```bash
bun install
bun run dev       # http://localhost:5173
bun run build     # production сборка
bun run preview   # предпросмотр сборки
```

## Структура

```
src/
├── components/
│   ├── sections/       # Секции лендинга
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Kolleksjonen.tsx
│   │   ├── Materialer.tsx
│   │   ├── Verkstedet.tsx
│   │   ├── FooterCTA.tsx
│   │   └── Footer.tsx
│   └── ui/
│       └── CustomCursor.tsx
├── contexts/
│   └── LenisContext.tsx  # Smooth scroll провайдер
├── hooks/
│   └── useLenis.ts
└── utils/
    └── animations.ts
```

## Особенности

- **Кастомный курсор-молоток** — три состояния: default / hover / click
- **Lenis smooth scroll** — глобальный контекст, адаптивен к любой герцовке
- **Framer Motion** — анимации через `whileInView`, без привязки к 60fps
- **Адаптив** — мобилки от 320px, бургер-меню на ≤768px
- **Google Fonts** — Barlow, Barlow Condensed, Playfair Display
