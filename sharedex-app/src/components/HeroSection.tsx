import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-[100vh] flex flex-col items-center justify-center text-white bg-gradient-to-br from-black via-gray-900 to-gray-800 overflow-hidden">

      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-center max-w-4xl z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Effortless Desk Booking <br className="hidden md:inline" /> for Modern Teams
      </motion.h1>

      <motion.p
        className="mt-6 text-lg md:text-xl text-gray-300 text-center max-w-xl z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        ShareDeX empowers hybrid workplaces with intuitive, customizable desk reservations that fit every team.
      </motion.p>

      <motion.button
        onClick={() => navigate('/booking')}
        className="mt-10 px-8 py-3 bg-teal-500 text-black font-semibold rounded-xl hover:bg-teal-400 transition z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        Book Your DeX Now
      </motion.button>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-500/10 via-transparent to-transparent z-0" />
    </section>
  );
};

export default HeroSection;
