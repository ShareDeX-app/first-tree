import React, { JSX } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './layout/Header';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import AdminPage from './pages/AdminPage';
import GuestPage from './pages/GuestPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import DemoPage from './pages/DemoPage';

const getRole = () => localStorage.getItem('user_role');
const isLoggedIn = () => !!localStorage.getItem('access_token');

const roleCheck = (roles: string[], element: JSX.Element) =>
  isLoggedIn() && roles.includes(getRole() || '') ? element : <Navigate to="/login" />;

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-black text-black dark:text-white">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={(() => {
              const token = localStorage.getItem('access_token');
              const role = localStorage.getItem('user_role');

              if (!token) return <Navigate to="/home" />;
              if (role === 'guest') return <Navigate to="/guest-info" />;
              if (role === 'admin') return <Navigate to="/admin" />;
              return <Navigate to="/dashboard" />;
            })()}
          />

          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={roleCheck(['user', 'admin'], <Dashboard />)} />
          <Route path="/admin" element={roleCheck(['admin'], <AdminPage />)} />
          <Route path="/guest-info" element={roleCheck(['guest'], <GuestPage />)} />
          <Route path="/profile" element={roleCheck(['user', 'admin'], <ProfilePage />)} />
          <Route path="/settings" element={roleCheck(['admin'], <SettingsPage />)} />
          <Route path="/demo" element={roleCheck(['guest', 'user', 'admin'], <DemoPage />)} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
