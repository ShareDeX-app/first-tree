import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './layout/Header';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <HomePage />
          </>
        } />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
