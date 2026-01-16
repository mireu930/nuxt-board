import { defineEventHandler, sendRedirect } from 'file://C:/my-app/nuxt-board/node_modules/h3/dist/index.mjs';

const kakao_get = defineEventHandler(async (event) => {
  const restApiKey = "cf597e39aa8b460de022df377243f819";
  const redirectUri = "http://localhost:3000/api/auth/kakao/callback";
  const kakaoAuthUrl = "https://kauth.kakao.com/oauth/authorize";
  const params = new URLSearchParams({
    client_id: restApiKey,
    redirect_uri: redirectUri,
    response_type: "code"
    // 인증 코드 방식으로 고정
  }).toString();
  return sendRedirect(event, `${kakaoAuthUrl}?${params}`);
});

export { kakao_get as default };
//# sourceMappingURL=kakao.get.mjs.map
