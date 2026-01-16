import { defineEventHandler, getCookie, deleteCookie } from 'file://C:/my-app/nuxt-board/node_modules/h3/dist/index.mjs';
import { g as getDbPool } from '../../../_/db.mjs';
import 'file://C:/my-app/nuxt-board/node_modules/mysql2/promise.js';

const logout_post = defineEventHandler(async (event) => {
  const userId = getCookie(event, "user_id");
  let socialType;
  if (userId) {
    const pool = getDbPool();
    const [rows] = await pool.query(
      "SELECT social FROM nextict_tbl_user WHERE userid = ?",
      [userId]
    );
    if (rows.length > 0) {
      socialType = rows[0].social;
    }
  }
  if (socialType !== "2" && socialType !== "kakao") {
    deleteCookie(event, "auth_token", { path: "/" });
    deleteCookie(event, "user_id", { path: "/" });
    deleteCookie(event, "user_name", { path: "/" });
  }
  return {
    success: true,
    socialType,
    kakaoApiKey: process.env.KAKAO_REST_API_KEY
  };
});

export { logout_post as default };
//# sourceMappingURL=logout.post.mjs.map
