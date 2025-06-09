import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import AdminPage from './pages/AdminPage';
import { isAuthenticated } from './utils/auth';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/admin"
          element={
            isAuthenticated() ? <AdminPage /> : <Navigate to="/login" />
          }
        />
        {/* добавь другие маршруты по желанию */}
      </Routes>
    </>
  );
}

export default App;
