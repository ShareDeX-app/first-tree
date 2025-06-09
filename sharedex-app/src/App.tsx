import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import AdminPage from './pages/AdminPage';
import Header from './layout/Header'; // если он есть

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-black text-black dark:text-white">
        <Header /> {/* Header должен быть внутри flex-контейнера */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
