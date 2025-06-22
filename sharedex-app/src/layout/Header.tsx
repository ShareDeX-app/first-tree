import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/LogoDex.png';
import { motion } from 'framer-motion';

const Header = () => {
  const [darkMode, setDarkMode] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  React.useEffect(() => {
    const token = localStorage.getItem('access_token');
    const role = localStorage.getItem('user_role');

    if (!token || !role) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('user_role');
    }
  }, []);

  const role = localStorage.getItem('user_role');
  const isLoggedIn = !!localStorage.getItem('access_token');

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_role');
    navigate('/login');
  };

  return (
    <header className="bg-white text-black dark:bg-black dark:text-white py-4 px-8 flex items-center justify-between shadow-md transition-colors">
      <Link to="/home" className="flex items-center gap-3">
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
          <Link to="/home" className="hover:text-teal-400 transition">Home</Link>
          {(role === 'user' || role === 'admin') && (
            <Link to="/booking" className="hover:text-teal-400 transition">Booking</Link>
          )}
          {(role === 'user' || role === 'admin') && (
            <Link to="/profile" className="hover:text-teal-400 transition">Profile</Link>
          )}
          {role === 'admin' && (
            <Link to="/settings" className="hover:text-teal-400 transition">Settings</Link>
          )}
          {role === 'admin' && (
            <Link to="/admin" className="hover:text-teal-400 transition">Admin</Link>
          )}
          {isLoggedIn && (
            <Link to="/demo" className="hover:text-teal-400 transition">Demo</Link>
          )}
          {!isLoggedIn && (
            <Link to="/login" className="hover:text-teal-400 transition">Login</Link>
          )}
        </nav>

        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className="px-3 py-1 border rounded transition border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
          >
            Logout
          </button>
        )}

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 px-3 py-1 border rounded transition 
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
