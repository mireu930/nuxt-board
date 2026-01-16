import mysql from 'file://C:/my-app/nuxt-board/node_modules/mysql2/promise.js';

let pool;
const getDbPool = () => {
  if (!pool) {
    pool = mysql.createPool({
      host: "125.133.91.90",
      port: 3400,
      user: "webmaster",
      password: "12345",
      database: "webdev",
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });
  }
  return pool;
};

export { getDbPool as g };
//# sourceMappingURL=db.mjs.map
