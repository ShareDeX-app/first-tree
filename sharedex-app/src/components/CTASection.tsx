import React from 'react';
import { useNavigate } from 'react-router-dom';

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-teal-600 text-white text-center px-6">
      <h2 className="text-4xl font-bold mb-4">Попробуй ShareDeX уже сегодня</h2>
      <p className="text-lg mb-6">Бронируй рабочие места. Управляй пространством. Будь гибким.</p>
      <button
        onClick={() => navigate('/booking')}
        className="bg-white text-teal-600 px-6 py-3 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
      >
        Начать бронирование
      </button>
    </section>
  );
};

export default CTASection;
