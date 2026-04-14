# Architecture Guide

## Структура проекта

```
src/
├── components/          # React компоненты
│   ├── sections/        # Основные секции лендинга (Hero, Features, etc)
│   ├── ui/              # Базовые UI компоненты (Button, Card, etc)
│   └── animations/      # Компоненты с встроенными анимациями
├── contexts/            # React контексты (Lenis, etc)
├── hooks/               # Custom hooks (useLenis, useScroll, etc)
├── utils/
│   ├── animations.ts    # Preset'ы Motion анимаций (не зависят от refresh rate)
│   └── constants.ts     # Константы приложения
├── types/               # TypeScript типы
├── styles/              # Глобальные стили
├── index.css            # Tailwind + CSS переменные
└── App.tsx              # Root компонент
```

## Ключевые решения

### 1. **LenisContext** - Глобальный управление скроллом
```tsx
import { useLenis } from '@/hooks/useLenis';

function MyComponent() {
  const lenis = useLenis();
  // Используйте lenis для управления скроллом
}
```

### 2. **Framer Motion анимации**
- Все анимации в `src/utils/animations.ts`
- **Не используются жесткие 60fps значения** - Motion адаптируется к refresh rate экрана
- Используйте `duration` в секундах (не frame-based)
- Используйте `ease` функции вместо frame-based timing

### 3. **Tailwind CSS**
- Все стили через Tailwind classes
- CSS переменные в `:root` для цветов и типографии (для совместимости с дизайном)
- Минимальные кастомные стили только где необходимо

### 4. **TypeScript**
- Все компоненты типизированы
- Типы в `src/types/index.ts`

## Как использовать

### Создание нового UI компонента
```tsx
// src/components/ui/Card.tsx
import { motion } from 'framer-motion';
import { UIComponentProps } from '../../types';

export const Card = ({ className = '', children, ...props }: UIComponentProps) => {
  return (
    <motion.div
      className={`bg-white rounded-lg shadow p-4 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
```

### Создание секции
```tsx
// src/components/sections/Hero.tsx
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '../../utils/animations';

export const Hero = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      className="py-24"
    >
      <motion.h1 variants={staggerItem} className="text-5xl font-bold">
        Welcome
      </motion.h1>
      <motion.p variants={staggerItem} className="text-lg">
        Description
      </motion.p>
    </motion.section>
  );
};
```

### Использование Lenis
```tsx
import { useLenis } from '@/hooks/useLenis';

function ScrollToTop() {
  const lenis = useLenis();
  
  return (
    <button onClick={() => lenis?.scrollTo(0)}>
      Scroll to top
    </button>
  );
}
```

## Важные моменты

### ⚠️ Refresh Rate
- Motion использует `requestAnimationFrame` который автоматически адаптируется к refresh rate экрана
- Не используйте frame-based duration (типа 60 frames)
- Используйте `duration` в **секундах**: `duration: 0.6` (не `duration: 36 frames`)
- Motion автоматически оптимизирует для 60Hz, 120Hz, 144Hz и т.д.

### 🎨 Стили
- Предпочитайте Tailwind классы
- CSS переменные для цветов уже определены в `index.css`
- Для сложных анимаций используйте Motion `style` prop

### 📦 Организация
- Один компонент = один файл
- Экспортируйте из `index.tsx` если папка содержит несколько файлов
- Не создавайте циклические зависимости между компонентами

## Примеры компонентов

Смотрите примеры в:
- `src/components/ui/Button.tsx` - базовый компонент с Motion
- Добавляйте свои компоненты в `sections/` и `ui/`
