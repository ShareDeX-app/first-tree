import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/LogoDex.png';
import { motion } from 'framer-motion';

const Header = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <header className="bg-white text-black dark:bg-black dark:text-white py-4 px-8 flex items-center justify-between shadow-md transition-colors">
      <Link to="/" className="flex items-center gap-3">
        <motion.img
          src={logo}
          alt="ShareDeX Logo"
          className="h-10 w-auto"
          whileHover={{ rotate: 5, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
        />
      </Link>

      <div className="flex items-center gap-6">
        <nav className="flex gap-6">
          <Link to="/" className="hover:text-teal-400 transition">Home</Link>
          <Link to="/booking" className="hover:text-teal-400 transition">Booking</Link>
          <Link to="/admin" className="hover:text-teal-400 transition">Admin</Link>
          <Link to="/login" className="hover:text-teal-400 transition">Login</Link>
        </nav>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-6 px-3 py-1 border rounded transition 
                     border-black dark:border-white 
                     hover:bg-black hover:text-white 
                     dark:hover:bg-white dark:hover:text-black"
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </header>
  );
};

export default Header;
