export function isAuthenticated(): boolean {
  return !!localStorage.getItem('token'); // или 'access_token' — в зависимости от твоей логики
}
