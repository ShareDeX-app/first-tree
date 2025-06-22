// components/SmartRedirect.tsx
import { Navigate } from 'react-router-dom';

const SmartRedirect = () => {
  const token = localStorage.getItem('access_token');
  const role = localStorage.getItem('user_role');

  if (!token) return <Navigate to="/home" />;
  if (role === 'guest') return <Navigate to="/guest-info" />;
  if (role === 'admin') return <Navigate to="/admin" />;
  return <Navigate to="/dashboard" />;
};

export default SmartRedirect;
