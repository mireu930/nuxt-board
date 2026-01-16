import { defineEventHandler, getQuery, sendRedirect, setCookie } from 'file://C:/my-app/nuxt-board/node_modules/h3/dist/index.mjs';
import { g as getDbPool } from '../../../../_/db.mjs';
import { g as generateToken } from '../../../../_/nitro.mjs';
import 'file://C:/my-app/nuxt-board/node_modules/mysql2/promise.js';
import 'file://C:/my-app/nuxt-board/node_modules/destr/dist/index.mjs';
import 'file://C:/my-app/nuxt-board/node_modules/hookable/dist/index.mjs';
import 'file://C:/my-app/nuxt-board/node_modules/ofetch/dist/node.mjs';
import 'file://C:/my-app/nuxt-board/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/my-app/nuxt-board/node_modules/ufo/dist/index.mjs';
import 'file://C:/my-app/nuxt-board/node_modules/unstorage/dist/index.mjs';
import 'file://C:/my-app/nuxt-board/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/my-app/nuxt-board/node_modules/@nuxt/nitro-server/dist/runtime/utils/cache-driver.js';
import 'file://C:/my-app/nuxt-board/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/my-app/nuxt-board/node_modules/ohash/dist/index.mjs';
import 'file://C:/my-app/nuxt-board/node_modules/klona/dist/index.mjs';
import 'file://C:/my-app/nuxt-board/node_modules/defu/dist/defu.mjs';
import 'file://C:/my-app/nuxt-board/node_modules/scule/dist/index.mjs';
import 'file://C:/my-app/nuxt-board/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/my-app/nuxt-board/node_modules/pathe/dist/index.mjs';
import 'file://C:/my-app/nuxt-board/node_modules/jsonwebtoken/index.js';

const callback_get = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const code = query.code;
  if (!code) {
    return sendRedirect(event, "/login?error=no_code");
  }
  try {
    const tokenResponse = await $fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      body: {
        code,
        client_id: process.env.YOUR_GOOGLE_CLIENT_ID + ".apps.googleusercontent.com",
        client_secret: process.env.YOUR_GOOGLE_CLIENT_SECRET,
        redirect_uri: "http://localhost:3000/api/auth/google/callback",
        grant_type: "authorization_code"
      }
    });
    const googleUser = await $fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: { Authorization: `Bearer ${tokenResponse.access_token}` }
    });
    const pool = getDbPool();
    const [users] = await pool.query(
      "SELECT userid, name FROM nextict_tbl_user WHERE userid = ?",
      [googleUser.email]
    );
    let user = users[0];
    if (!user) {
      const dummyPassword = "SOCIAL_LOGIN_USER";
      await pool.query(
        "INSERT INTO nextict_tbl_user (userid, name, password, social) VALUES (?, ?, ?, 1)",
        [googleUser.email, googleUser.name || "GoogleUser", dummyPassword]
      );
      user = { userid: googleUser.email, name: googleUser.name };
    }
    const token = generateToken({
      userid: user.userid,
      name: user.name
    });
    setCookie(event, "auth_token", token, {
      httpOnly: false,
      secure: false,
      maxAge: 60 * 60 * 24,
      path: "/"
    });
    setCookie(event, "user_name", user.name, {
      maxAge: 60 * 60 * 24,
      path: "/"
    });
    setCookie(event, "user_id", user.userid, {
      maxAge: 60 * 60 * 24,
      path: "/"
    });
    return sendRedirect(event, "/board/list");
  } catch (error) {
    console.error("Google Callback Error:", error);
    return sendRedirect(event, "/login?error=" + encodeURIComponent(error.message));
  }
});

export { callback_get as default };
//# sourceMappingURL=callback.get.mjs.map
