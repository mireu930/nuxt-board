// server/api/auth/google.get.js
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  // 🔥 [디버깅] 서버 로그 찍기 (Amplify CloudWatch에서 확인 가능)
  console.log('--------------------------------------------------');
  console.log('👉 [DEBUG] Public Config:', config.public);
  console.log('👉 [DEBUG] Client ID:', config.public.googleClientId);
  console.log('👉 [DEBUG] Process Env Check:', process.env.NUXT_PUBLIC_GOOGLE_CLIENT_ID);
  console.log('--------------------------------------------------');

  const clientId = config.public.googleClientId;
  
  // 1. ID가 없으면 에러 페이지 대신 명확한 메시지 출력 (구글로 안 보냄)
  if (!clientId) {
    return {
      error: "Configuration Error",
      message: "Client ID is missing on Server!",
      debug_hint: "Check Amplify Environment Variables",
      received_value: clientId
    };
  }

  const redirectUri = 'https://www.nextboard.kro.kr/api/auth/google/callback';
  const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
  
  const options = {
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: 'code',
    scope: 'openid email profile',
    access_type: 'offline',
    prompt: 'consent'
  };

  const queryString = new URLSearchParams(options).toString();
  
  return sendRedirect(event, `${rootUrl}?${queryString}`);
});