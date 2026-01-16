import { defineEventHandler, getQuery } from 'file://C:/my-app/nuxt-board/node_modules/h3/dist/index.mjs';
import { g as getDbPool } from '../../_/db.mjs';
import 'file://C:/my-app/nuxt-board/node_modules/mysql2/promise.js';

const boards = defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);
    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 10;
    const offset = (page - 1) * limit;
    const pool = getDbPool();
    const [countResult] = await pool.query(
      "SELECT COUNT(*) as total FROM tbl_board"
    );
    const totalCount = countResult[0].total;
    const [rows] = await pool.query(
      `SELECT 
        bno, 
        userid, 
        writer, 
        title, 
        hitno, 
        regDate,
        (SELECT COUNT(*) FROM nextict_tbl_board) - (
          SELECT COUNT(*) FROM nextict_tbl_board AS b2 WHERE b2.bno > nextict_tbl_board.bno
        ) AS rownum
      FROM nextict_tbl_board 
      ORDER BY bno DESC 
      LIMIT ? OFFSET ?`,
      [limit, offset]
    );
    return {
      success: true,
      data: rows,
      pagination: {
        currentPage: page,
        totalCount,
        totalPages: Math.ceil(totalCount / limit),
        limit
      }
    };
  } catch (error) {
    console.error("Database error:", error);
    return {
      success: false,
      error: error.message
    };
  }
});

export { boards as default };
//# sourceMappingURL=boards.mjs.map
