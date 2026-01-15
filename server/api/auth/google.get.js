// server/api/auth/google.get.js
export default defineEventHandler(async (event) => {
  // 1. 구글 클라우드 콘솔에서 발급받은 정보
  // 실제 서비스라면 nuxt.config.ts나 .env에서 가져오는 것이 좋지만, 
  // 테스트를 위해 직접 입력하셔도 됩니다.
  const clientId = process.env.YOUR_GOOGLE_CLIENT_ID || '701767528169-4h2oqq8qnjgputbjrncjd3fhdlt1k3dp.apps.googleusercontent.com';
  const redirectUri = 'http://localhost:3000/api/auth/google/callback';

  const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
  
  const options = {
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: 'code',
    scope: 'openid email profile',
    access_type: 'offline',
    prompt: 'consent'
  };

  // 2. URL 파라미터 생성
  const queryString = new URLSearchParams(options).toString();
  
  // 3. 구글 인증 페이지로 리다이렉트
  return sendRedirect(event, `${rootUrl}?${queryString}`);
});