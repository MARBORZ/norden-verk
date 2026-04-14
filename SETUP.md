# Setup & Development

## Установка зависимостей

```bash
bun install
```

## Запуск dev сервера

```bash
bun run dev
```

Откроется на `http://localhost:5173`

## Сборка для production

```bash
bun run build
```

## Проверка типов

```bash
bun run tsc
```

## Линтинг

```bash
bun run lint
```

## Технологический стек

- **React 19** - UI библиотека
- **TypeScript** - Типизация
- **Vite** - Сборщик и dev сервер
- **Tailwind CSS** - Стили
- **Framer Motion** - Анимации (адаптивные к refresh rate)
- **Lenis** - Smooth scroll
- **Bun** - Package manager и runtime

## Структура

Смотрите [ARCHITECTURE.md](./ARCHITECTURE.md) для детального описания структуры проекта.

## Важно о refresh rate ⚠️

- Motion использует `requestAnimationFrame` (автоматически адаптируется)
- Не используйте frame-based timing (например `duration: 36`)
- Используйте `duration` в секундах: `duration: 0.6` вместо `duration: 36 frames`
- Тестируйте на разных экранах с разными герцовками (60Hz, 120Hz, 144Hz)
