// export default defineNuxtConfig({
//   devtools: { enabled: true }
// })
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    // 1. 서버에서만 필요한 비밀키 (Private)
    jwtSecret: '',              // NUXT_JWT_SECRET 와 매핑
    googleClientSecret: '',     // NUXT_GOOGLE_CLIENT_SECRET 와 매핑
    kakaoRestApiKey: '',        // NUXT_KAKAO_REST_API_KEY 와 매핑

    // 2. 브라우저에도 공개되는 키 (Public)
    public: {
      googleClientId: '',       // NUXT_PUBLIC_GOOGLE_CLIENT_ID 와 매핑
    }
  }
})