import axios from 'axios';

const API_URL = 'http://localhost:3000';

// utils/auth.ts
export function isAuthenticated() {
  return !!localStorage.getItem('access_token');
}

export async function loginUser(email: string, password: string) {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password,
    });

    const { access_token, role } = response.data;

    // Сохраним токен и роль
    localStorage.setItem('access_token', access_token);
    localStorage.setItem('user_role', role);

    return { success: true, role };
  } catch (error: any) {
    console.error('❌ Ошибка логина:', error.response?.data || error.message);
    return { success: false, message: error.response?.data?.message || 'Login failed' };
  }
}
