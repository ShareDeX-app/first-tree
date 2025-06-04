// src/components/FeaturesSection.tsx
import React from 'react';
import { Bolt, Users, CalendarCheck } from 'lucide-react';

const features = [
  {
    icon: <Bolt className="h-8 w-8 text-teal-400" />,
    title: 'Быстрое бронирование',
    description: 'Бронируй рабочие места за секунды — без регистрации, без лишних кликов.',
  },
  {
    icon: <CalendarCheck className="h-8 w-8 text-teal-400" />,
    title: 'Интеграция с Outlook',
    description: 'Бронирования автоматически синхронизируются с календарем Microsoft.',
  },
  {
    icon: <Users className="h-8 w-8 text-teal-400" />,
    title: 'Аналитика и управление',
    description: 'Анализируй загрузку офиса и управляй зонами через простую админ-панель.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black via-neutral-900 to-black text-white text-center">
      <h2 className="text-4xl font-bold mb-12">Что делает ShareDeX особенным?</h2>
      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-neutral-800 p-8 rounded-2xl shadow-lg hover:scale-105 transition">
            <div className="mb-4 flex justify-center">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
