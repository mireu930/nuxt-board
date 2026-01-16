import { defineEventHandler } from 'file://C:/my-app/nuxt-board/node_modules/h3/dist/index.mjs';
import { g as getDbPool } from '../../../_/db.mjs';
import 'file://C:/my-app/nuxt-board/node_modules/mysql2/promise.js';

const _id__get = defineEventHandler(async (event) => {
  try {
    const id = event.context.params.id;
    const pool = getDbPool();
    await pool.query(
      "UPDATE nextict_tbl_board SET hitno = hitno + 1 WHERE bno = ?",
      [id]
    );
    const [rows] = await pool.query(
      "SELECT bno, userid, writer, title, content, hitno, regDate FROM nextict_tbl_board WHERE bno = ?",
      [id]
    );
    if (rows.length === 0) {
      return {
        success: false,
        error: "\uAC8C\uC2DC\uBB3C\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."
      };
    }
    const [prevRows] = await pool.query(
      "SELECT bno, title FROM nextict_tbl_board WHERE bno < ? ORDER BY bno DESC LIMIT 1",
      [id]
    );
    const [nextRows] = await pool.query(
      "SELECT bno, title FROM nextict_tbl_board WHERE bno > ? ORDER BY bno ASC LIMIT 1",
      [id]
    );
    return {
      success: true,
      data: rows[0],
      prev: prevRows.length > 0 ? prevRows[0] : null,
      next: nextRows.length > 0 ? nextRows[0] : null
    };
  } catch (error) {
    console.error("Database error:", error);
    return {
      success: false,
      error: error.message
    };
  }
});

export { _id__get as default };
//# sourceMappingURL=_id_.get.mjs.map
