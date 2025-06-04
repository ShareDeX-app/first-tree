import React, { useState } from 'react';
import logo from '../assets/LogoDex.png';

const LogoAnimated = () => {
  const [style, setStyle] = useState({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -30;

    setStyle({
      transform: `rotateX(${y}deg) rotateY(${x}deg)`,
    });
  };

  const resetStyle = () => {
    setStyle({
      transform: 'rotateX(0deg) rotateY(0deg)',
      transition: 'transform 0.3s ease-out',
    });
  };

  return (
    <div
      className="w-28 h-28 mx-auto transition-transform duration-300"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetStyle}
      style={{ perspective: 1000 }}
    >
      <div
        className="w-full h-full"
        style={{
          ...style,
          transformStyle: 'preserve-3d',
        }}
      >
        <img
          src={logo}
          alt="ShareDeX Logo"
          className="w-full h-full object-contain rounded-xl shadow-xl"
        />
      </div>
    </div>
  );
};

export default LogoAnimated;
