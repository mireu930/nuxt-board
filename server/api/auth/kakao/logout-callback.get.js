export default defineEventHandler((event) => {
  // 최종 쿠키 정리
  deleteCookie(event, 'auth_token', { path: '/' });
  deleteCookie(event, 'user_id', { path: '/' });
  deleteCookie(event, 'user_name', { path: '/' });

  return sendRedirect(event, '/');
});