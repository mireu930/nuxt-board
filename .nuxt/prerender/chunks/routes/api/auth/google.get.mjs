import { defineEventHandler, sendRedirect } from 'file://C:/my-app/nuxt-board/node_modules/h3/dist/index.mjs';

const google_get = defineEventHandler(async (event) => {
  const clientId = process.env.YOUR_GOOGLE_CLIENT_ID || "701767528169-4h2oqq8qnjgputbjrncjd3fhdlt1k3dp.apps.googleusercontent.com";
  const redirectUri = "http://localhost:3000/api/auth/google/callback";
  const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";
  const options = {
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: "code",
    scope: "openid email profile",
    access_type: "offline",
    prompt: "consent"
  };
  const queryString = new URLSearchParams(options).toString();
  return sendRedirect(event, `${rootUrl}?${queryString}`);
});

export { google_get as default };
//# sourceMappingURL=google.get.mjs.map
