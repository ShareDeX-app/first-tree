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

      <nav style={{ display: 'flex', gap: '1.5rem' }}>
        <Link to="/" style={navLinkStyle}>Home</Link>
        <Link to="/booking" style={navLinkStyle}>Booking</Link>
        <Link to="/admin" style={navLinkStyle}>Admin</Link>
        <Link to="/login" style={navLinkStyle}>Login</Link>
      </nav>
    </header>
  );
};

// Style for Navigation Buttons 
const navLinkStyle: React.CSSProperties = {
  color: '#ccc',
  textDecoration: 'none',
  fontWeight: 500,
  fontSize: '1rem',
  transition: 'color 0.2s',
};

export default Header;
