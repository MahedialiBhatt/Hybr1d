require("dotenv").config();

function getLoggedInUserId(req) {
  return req.authUserId || null;
}

async function validatePasswordHash(password, hash) {
  return await bcrypt.compare(password, hash);
}

async function generateHashPassword(password) {
  const saltRounds = 10;
  const hash = await bcrypt.hash(password, saltRounds);
  return hash;
}

module.exports = {
  getLoggedInUserId,
  validatePasswordHash,
  generateHashPassword,
};
