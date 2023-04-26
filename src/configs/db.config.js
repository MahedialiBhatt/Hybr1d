const mysql = require("mysql2/promise");
require('dotenv').config()

const mySqlConnectionPool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB,
  connectionLimit: 10, // Default: 10
  waitForConnections: true, // Default: true
  queueLimit: 0, // Default:0
});

module.exports = { mySqlConnectionPool };
