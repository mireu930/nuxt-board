// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    // 1. Private (서버용) - process.env로 직접 연결
    jwtSecret: process.env.NUXT_JWT_SECRET,
    googleClientSecret: process.env.NUXT_GOOGLE_CLIENT_SECRET,
    kakaoRestApiKey: process.env.NUXT_KAKAO_REST_API_KEY,

    // 2. Public (브라우저용) - process.env로 직접 연결
    public: {
      googleClientId: process.env.NUXT_PUBLIC_GOOGLE_CLIENT_ID,
    }
  }
})