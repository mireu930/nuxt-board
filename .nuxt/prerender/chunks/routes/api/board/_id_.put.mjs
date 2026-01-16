import { defineEventHandler, readBody } from 'file://C:/my-app/nuxt-board/node_modules/h3/dist/index.mjs';
import { g as getDbPool } from '../../../_/db.mjs';
import 'file://C:/my-app/nuxt-board/node_modules/mysql2/promise.js';

const _id__put = defineEventHandler(async (event) => {
  try {
    const id = event.context.params.id;
    const body = await readBody(event);
    const user = event.context.user;
    const pool = getDbPool();
    const [rows] = await pool.query(
      "SELECT userid FROM nextict_tbl_board WHERE bno = ?",
      [id]
    );
    if (rows.length === 0) {
      return {
        success: false,
        error: "\uAC8C\uC2DC\uBB3C\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."
      };
    }
    if (rows[0].userid !== user.userid) {
      return {
        success: false,
        error: "\uC218\uC815 \uAD8C\uD55C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."
      };
    }
    await pool.query(
      "UPDATE nextict_tbl_board SET title = ?, content = ? WHERE bno = ?",
      [body.title, body.content, id]
    );
    return {
      success: true,
      message: "\uAC8C\uC2DC\uBB3C\uC774 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4."
    };
  } catch (error) {
    console.error("Database error:", error);
    return {
      success: false,
      error: error.message
    };
  }
});

export { _id__put as default };
//# sourceMappingURL=_id_.put.mjs.map
