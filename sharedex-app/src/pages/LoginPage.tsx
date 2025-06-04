import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';

const logos = [logo1, logo2, logo3, logo4];

const LoginPage = () => {
  const navigate = useNavigate();

  const [logoIndex, setLogoIndex] = useState(0);
  const [typingTimer, setTypingTimer] = useState<NodeJS.Timeout | null>(null);
  const [typing, setTyping] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: boolean; password?: boolean }>({});

  const handleTyping = () => {
    if (typingTimer) clearTimeout(typingTimer);
    setTyping(true);
    setLogoIndex((prev) => (prev + 1) % logos.length);
    const newTimer = setTimeout(() => setTyping(false), 2500);
    setTypingTimer(newTimer);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: { email?: boolean; password?: boolean } = {};
    if (!email.trim()) newErrors.email = true;
    if (!password.trim()) newErrors.password = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    console.log('🔐 Логинимся с:', { email, password });

    // TODO: Авторизация
    // navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-black dark:via-gray-900 dark:to-gray-800 px-4">
      <div className="w-full max-w-md bg-white/10 dark:bg-gray-800/40 backdrop-blur-md p-8 rounded-xl text-gray-900 dark:text-white shadow-lg">
        <motion.img
          src={logos[logoIndex]}
          alt="ShareDeX Logo"
          className="h-16 mx-auto mb-6"
          animate={{ opacity: 1, scale: typing ? 1.05 : 1 }}
          transition={{ duration: 0.4 }}
        />

        <h2 className="text-2xl font-bold text-center mb-4">Вход в ShareDeX</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              handleTyping();
            }}
            className={`w-full px-4 py-2 rounded-md bg-white/20 dark:bg-white/10 placeholder-gray-400 text-black dark:text-white focus:outline-none focus:ring-2 ${
              errors.email ? 'ring-red-500' : 'focus:ring-teal-400'
            }`}
          />
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              handleTyping();
            }}
            className={`w-full px-4 py-2 rounded-md bg-white/20 dark:bg-white/10 placeholder-gray-400 text-black dark:text-white focus:outline-none focus:ring-2 ${
              errors.password ? 'ring-red-500' : 'focus:ring-teal-400'
            }`}
          />

          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-400 text-black font-semibold py-2 rounded-md transition"
          >
            Войти
          </button>
        </form>

        <motion.div
          className="mt-4 flex flex-col sm:flex-row sm:justify-between text-sm text-center text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.span
            className="text-teal-500 hover:underline cursor-pointer mb-2 sm:mb-0"
            onClick={() => navigate('/forgot-password')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
          >
            Забыли пароль?
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0, duration: 0.6 }}
          >
            Нет аккаунта?{' '}
            <motion.span
              className="text-teal-500 hover:underline cursor-pointer"
              onClick={() => navigate('/register')}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.6 }}
            >
              Зарегистрироваться
            </motion.span>
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;
