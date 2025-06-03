import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/LogoDex.png';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '80vh',
      backgroundColor: '#0a0a0a',
      color: '#f0f0f0',
      textAlign: 'center',
      padding: '2rem',
    }}>
      <img src={logo} alt="ShareDeX Logo" width="150" style={{ marginBottom: '1.5rem' }} />
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
        Smart Desk Booking for Modern Workplaces
      </h1>
      <p style={{ maxWidth: '600px', fontSize: '1.2rem', marginBottom: '2rem' }}>
        ShareDeX helps teams reserve desks, manage space, and stay connected — whether you're remote, hybrid or on-site.
      </p>
      <button
        onClick={() => navigate('/booking')}
        style={{
          backgroundColor: '#00e6e6',
          border: 'none',
          padding: '1rem 2rem',
          fontSize: '1rem',
          fontWeight: 600,
          borderRadius: '8px',
          color: '#000',
          cursor: 'pointer',
        }}
      >
        Start Booking
      </button>
    </section>
  );
};

export default HeroSection;
