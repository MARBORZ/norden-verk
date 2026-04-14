# Быстрый старт 🚀

## ✅ Что готово

- ✅ **LenisContext** - контекст для управления smooth scroll (без каши)
- ✅ **Framer Motion** - интегрирован, адаптивен к refresh rate экрана
- ✅ **Tailwind CSS v4** - готов к использованию
- ✅ **TypeScript** - строгая типизация
- ✅ **Структура** - минималистичная, логичная, расширяемая

## 🚀 Запуск

```bash
# Установка
bun install

# Dev сервер
bun run dev  # → http://localhost:5174

# Build
bun run build

# Lint
bun run lint
```

## 📝 Как создавать компоненты

### 1. UI компонент (кнопка, карточка, etc)
```tsx
// src/components/ui/MyButton.tsx
import { motion } from 'framer-motion';
import type { UIComponentProps } from '../../types';

export const MyButton = ({ className = '', children, ...props }: UIComponentProps) => {
  return (
    <motion.button
      className={`bg-accent text-white px-4 py-2 rounded-lg ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};
```

### 2. Секция (Hero, Features, etc)
```tsx
// src/components/sections/Features.tsx
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '../../utils/animations';
import type { SectionProps } from '../../types';

export const Features = ({ className = '' }: SectionProps) => {
  return (
    <motion.section
      className={`py-24 ${className}`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
    >
      <motion.h2 variants={staggerItem} className="text-4xl font-bold">
        Особенности
      </motion.h2>
      {/* ... */}
    </motion.section>
  );
};
```

### 3. Использование в App.tsx
```tsx
import { Hero } from '@/components/sections';
import { Features } from '@/components/sections';

function App() {
  return (
    <>
      <Hero />
      <Features />
    </>
  );
}
```

## 🎨 Стили

### Tailwind классы
```tsx
<div className="flex items-center justify-between gap-4 p-8 bg-white rounded-lg shadow-md">
  Контент
</div>
```

### CSS переменные (для дизайна)
```tsx
<div style={{ color: 'var(--accent)' }}>Акцент</div>
```

### Motion встроено в компоненты
```tsx
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
>
  Контент
</motion.div>
```

## 🎬 Анимации

### Preset'ы в `src/utils/animations.ts`
```tsx
import { fadeInUp, staggerContainer } from '@/utils/animations';

<motion.div variants={fadeInUp} initial="hidden" whileInView="visible">
  Текст
</motion.div>
```

### Или свои inline анимации
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Контент
</motion.div>
```

## 🔗 Lenis (Smooth Scroll)

Уже обёрнут в контекст! Просто используйте:

```tsx
import { useLenis } from '@/hooks/useLenis';

function ScrollButton() {
  const lenis = useLenis();
  
  return (
    <button onClick={() => lenis?.scrollTo(0)}>
      Вверх
    </button>
  );
}
```

## ⚠️ ВАЖНО: Refresh Rate

- ✅ Motion **автоматически адаптируется** к 60Hz, 120Hz, 144Hz
- ✅ Не используйте frame-based timing (например `duration: 36`)
- ✅ Используйте время в **секундах**: `duration: 0.6`
- ✅ Тестируйте на разных мониторах!

## 📁 Структура проекта

```
src/
├── components/
│   ├── sections/          ← Большие блоки лендинга
│   ├── ui/                ← Переиспользуемые компоненты
│   └── animations/        ← Компоненты только с анимациями
├── contexts/
│   └── LenisContext.tsx   ← Контекст для Lenis
├── hooks/
│   └── useLenis.ts        ← Хук для доступа к Lenis
├── utils/
│   └── animations.ts      ← Preset'ы Motion анимаций
├── types/
│   └── index.ts           ← TypeScript типы
└── App.tsx                ← Root компонент
```

## 🎯 Следующие шаги

1. **Откройте дизайн в Pencil** и изучите макет
2. **Создайте компоненты** по секциям из дизайна
3. **Используйте Tailwind** для стилей
4. **Добавьте Motion анимации** для жизни на странице
5. **Тестируйте** на разных герцовках экранов

---

Документация: [ARCHITECTURE.md](./ARCHITECTURE.md)
