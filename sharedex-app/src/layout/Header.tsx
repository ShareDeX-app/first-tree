import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/LogoDex.png';

const Header = () => {
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem 2rem',
      backgroundColor: '#111',
      borderBottom: '1px solid #333',
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="ShareDeX Logo" width="40" style={{ marginRight: '1rem' }} />
        <span style={{ fontSize: '1.5rem', fontWeight: 600, color: '#00e6e6' }}>ShareDeX</span>
      </div>
      <nav>
        <Link to="/" style={{ color: '#ccc', marginRight: '1.5rem' }}>Home</Link>
        <Link to="/booking" style={{ color: '#ccc', marginRight: '1.5rem' }}>Booking</Link>
        <Link to="/admin" style={{ color: '#ccc', marginRight: '1.5rem' }}>Admin</Link>
        <Link to="/login" style={{ color: '#ccc' }}>Login</Link>
      </nav>
    </header>
  );
};

export default Header;
