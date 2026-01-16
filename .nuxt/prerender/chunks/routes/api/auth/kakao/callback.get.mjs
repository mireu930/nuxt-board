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
  const code = getQuery(event).code;
  if (!code) return sendRedirect(event, "/?error=no_code");
  try {
    const tokenRes = await $fetch("https://kauth.kakao.com/oauth/token", {
      method: "POST",
      headers: { "Content-type": "application/x-www-form-urlencoded;charset=utf-8" },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        client_id: process.env.KAKAO_REST_API_KEY,
        redirect_uri: "http://localhost:3000/api/auth/kakao/callback",
        code
      })
    });
    const kakaoUser = await $fetch("https://kapi.kakao.com/v2/user/me", {
      headers: { Authorization: `Bearer ${tokenRes.access_token}` }
    });
    const pool = getDbPool();
    const [users] = await pool.query("SELECT * FROM nextict_tbl_user WHERE userid = ?", [kakaoUser.id.toString()]);
    let user = users[0];
    if (!user) {
      await pool.query(
        "INSERT INTO nextict_tbl_user (userid, name, password, social) VALUES (?, ?, ?, 2)",
        [kakaoUser.id.toString(), kakaoUser.properties.nickname, "KAKAO_AUTH"]
      );
      user = { userid: kakaoUser.id.toString(), name: kakaoUser.properties.nickname };
    }
    const token = generateToken({ userid: user.userid, name: user.name });
    setCookie(event, "auth_token", token, { maxAge: 60 * 60 * 24, path: "/" });
    setCookie(event, "user_name", user.name, { maxAge: 60 * 60 * 24, path: "/" });
    setCookie(event, "user_id", user.userid, {
      maxAge: 60 * 60 * 24,
      path: "/"
    });
    return sendRedirect(event, "/board/list");
  } catch (error) {
    console.error("Kakao Error:", error);
    return sendRedirect(event, "/?error=kakao_failed");
  }
});

export { callback_get as default };
//# sourceMappingURL=callback.get.mjs.map
