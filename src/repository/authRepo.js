const { mySqlConnectionPool } = require("../configs/db.config");

async function register(username, password, userType) {
  const sql = "INSERT INTO users(username, password, type) VALUES(?,?,?);";

  const [rows] = await mySqlConnectionPool.execute(sql, [
    username,
    password,
    userType,
  ]);
  return rows.insertId;
}

async function getUserByUsername(username) {
  const sql =
    "SELECT id, username, password, type FROM users WHERE username = ? ;";
  const [rows] = await mySqlConnectionPool.execute(sql, [username]);
  return rows[0];
}

module.exports = { register, getUserByUsername };
