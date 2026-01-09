import mysql from 'mysql2/promise';

let pool;

export const getDbPool = () => {
  if (!pool) {
    pool = mysql.createPool({
      host: 'localhost',
      user: 'webmaster',
      password: '12345',
      database: 'webdev',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });
  }
  return pool;
};
