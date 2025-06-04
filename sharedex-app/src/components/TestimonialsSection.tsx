import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Мария К.',
    title: 'HR-менеджер',
    text: 'ShareDeX упростил управление офисом. Люди сами бронируют места — и всё под контролем.',
  },
  {
    name: 'Игорь Л.',
    title: 'Team Lead',
    text: 'Никаких Excel-таблиц больше. Видно, кто где сидит. Настоящий кайф!',
  },
  {
    name: 'Анна П.',
    title: 'IT-админ',
    text: 'Интеграция с Microsoft 365 прошла без проблем. Поддержка — супер!',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900 text-center text-gray-800 dark:text-gray-200">
      <h2 className="text-4xl font-bold mb-12">Что говорят наши клиенты</h2>
      <div className="grid gap-10 md:grid-cols-3 px-6 md:px-20">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
          >
            <p className="italic mb-4">“{t.text}”</p>
            <h4 className="font-semibold">{t.name}</h4>
            <span className="text-sm text-gray-500">{t.title}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
