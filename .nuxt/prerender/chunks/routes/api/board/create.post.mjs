import { defineEventHandler, readBody } from 'file://C:/my-app/nuxt-board/node_modules/h3/dist/index.mjs';
import { g as getDbPool } from '../../../_/db.mjs';
import 'file://C:/my-app/nuxt-board/node_modules/mysql2/promise.js';

const create_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const user = event.context.user;
    if (!body.title || !body.content) {
      return {
        success: false,
        error: "\uC81C\uBAA9\uACFC \uB0B4\uC6A9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694."
      };
    }
    const pool = getDbPool();
    const [result] = await pool.query(
      "INSERT INTO nextict_tbl_board (userid, writer, title, content, regDate) VALUES (?, ?, ?, ?, NOW())",
      [user.userid, user.name, body.title, body.content]
    );
    return {
      success: true,
      message: "\uAC8C\uC2DC\uBB3C\uC774 \uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4.",
      insertId: result.insertId
    };
  } catch (error) {
    console.error("Database error:", error);
    return {
      success: false,
      error: error.message
    };
  }
});

export { create_post as default };
//# sourceMappingURL=create.post.mjs.map
