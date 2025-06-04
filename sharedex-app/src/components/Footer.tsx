import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-8 text-center text-sm">
      © {new Date().getFullYear()} ShareDeX. Все права защищены.
    </footer>
  );
};

export default Footer;
