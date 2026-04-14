/**
 * ПРИМЕР компонента Hero с Motion и Lenis
 * Переименуй в Hero.tsx и используй как основу
 */

import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '../../utils/animations';
import type { SectionProps } from '../../types';

export const HeroExample = ({ className = '' }: SectionProps) => {
  return (
    <motion.section
      className={`min-h-screen flex flex-col items-center justify-center py-24 px-4 ${className}`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Заголовок */}
      <motion.div variants={staggerItem}>
        <h1 className="text-6xl font-bold text-center mb-6 leading-tight">
          Добро пожаловать в <br />
          <span className="text-accent">Norden Verk</span>
        </h1>
      </motion.div>

      {/* Описание */}
      <motion.div variants={staggerItem} className="max-w-2xl">
        <p className="text-xl text-center text-gray-600 mb-8">
          Красивый, оптимизированный лендинг с плавными анимациями на Motion и
          Lenis.
        </p>
      </motion.div>

      {/* CTA кнопка */}
      <motion.div variants={staggerItem}>
        <motion.button
          className="px-8 py-4 bg-accent text-white rounded-lg font-semibold text-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          Начать
        </motion.button>
      </motion.div>

      {/* Scroll указатель */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </motion.section>
  );
};
