// server/api/auth/kakao.get.js
export default defineEventHandler(async (event) => {
  const restApiKey = 'cf597e39aa8b460de022df377243f819';
  const redirectUri = 'https://www.nextboard.kro.kr/api/auth/kakao/callback';
  
  const kakaoAuthUrl = 'https://kauth.kakao.com/oauth/authorize';
  
  const params = new URLSearchParams({
    client_id: restApiKey,
    redirect_uri: redirectUri,
    response_type: 'code', // 인증 코드 방식으로 고정
  }).toString();

  // 카카오 인증 페이지로 이동
  return sendRedirect(event, `${kakaoAuthUrl}?${params}`);
});