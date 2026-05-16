# NORDEN VERK — Håndverk som varer

Лендинг для скандинавской мебельной мастерской. Портфолио-проект, демонстрирующий современную React архитектуру с плавными анимациями и кастомными взаимодействиями.

## 🎨 О Проекте

NORDEN VERK — это визуально впечатляющий лендинг для вымышленной норвежской столярной мастерской. Включает кастомные взаимодействия с курсором, шелковистую прокрутку с Lenis и элегантные Framer Motion анимации. Построен на React 19, TypeScript и Tailwind CSS 4.

## ✨ Возможности

- **Кастомный Курсор-Молоток** — Три состояния: default / hover / click
- **Lenis Smooth Scroll** — Глобальный контекст, адаптивен к любой герцовке
- **Framer Motion Анимации** — `whileInView` анимации, независимые от частоты кадров
- **Адаптивный Дизайн** — Мобилки от 320px, бургер-меню ≤768px
- **Google Fonts** — Barlow, Barlow Condensed, Playfair Display
- **Tailwind CSS 4** — Современный utility-first стилинг
- **TypeScript** — Полная типобезопасность
- **React 19** — Последний React с оптимизациями компилятора

## 🛠️ Технологии

| Технология | Версия |
|---|---|
| React | 19 |
| TypeScript | 6 |
| Vite | 8 |
| Framer Motion | 12 |
| Lenis | 1.3 |
| Tailwind CSS | 4 |
| Bun | runtime |

## 🚀 Начало Работы

```bash
bun install
bun run dev       # http://localhost:5173
bun run build     # production сборка
bun run preview   # предпросмотр сборки
```

## 📁 Структура

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
│       ├── Button.tsx
│       └── CustomCursor.tsx
├── contexts/
│   └── LenisContext.tsx  # Smooth scroll провайдер
├── hooks/
│   └── useLenis.ts
└── utils/
    └── animations.ts
```

## 🎯 Ключевые Секции

- **Header** — Навигация с бургер-меню
- **Hero** — Полноэкранный hero с анимированным текстом
- **Kolleksjonen** — Демонстрация коллекции продуктов
- **Materialer** — Материалы и мастерство
- **Verkstedet** — Секция истории мастерской
- **FooterCTA** — Call-to-action секция
- **Footer** — Контактная информация и ссылки

## 🎯 Цели Обучения

- React 19 с TypeScript 6
- Интеграция Lenis smooth scroll
- Реализация кастомного курсора
- Паттерны анимации Framer Motion
- Utility-паттерны Tailwind CSS 4
- Context API для глобального состояния
- Техники адаптивного дизайна

---

**Примечание:** Портфолио-проект, демонстрирующий современный React, smooth scroll и кастомные взаимодействия.
