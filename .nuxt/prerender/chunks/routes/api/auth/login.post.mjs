import { defineEventHandler, readBody, setCookie } from 'file://C:/my-app/nuxt-board/node_modules/h3/dist/index.mjs';
import bcrypt from 'file://C:/my-app/nuxt-board/node_modules/bcrypt/bcrypt.js';
import { g as getDbPool } from '../../../_/db.mjs';
import { g as generateToken } from '../../../_/nitro.mjs';
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

const login_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    if (!body.userid || !body.password) {
      return {
        success: false,
        error: "\uC544\uC774\uB514\uC640 \uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694."
      };
    }
    const pool = getDbPool();
    const [users] = await pool.query(
      "SELECT userid, name, password FROM nextict_tbl_user WHERE userid = ?",
      [body.userid]
    );
    if (users.length === 0) {
      return {
        success: false,
        error: "\uC544\uC774\uB514 \uB610\uB294 \uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
      };
    }
    const user = users[0];
    const isValid = await bcrypt.compare(body.password, user.password);
    if (!isValid) {
      return {
        success: false,
        error: "\uC544\uC774\uB514 \uB610\uB294 \uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
      };
    }
    const token = generateToken({
      userid: user.userid,
      name: user.name
    });
    setCookie(event, "auth_token", token, {
      httpOnly: false,
      secure: false,
      maxAge: 60 * 60 * 24,
      // 24시간
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
    return {
      success: true,
      user: {
        userid: user.userid,
        name: user.name
      }
    };
  } catch (error) {
    console.error("Login error:", error);
    return {
      success: false,
      error: error.message
    };
  }
});

export { login_post as default };
//# sourceMappingURL=login.post.mjs.map
