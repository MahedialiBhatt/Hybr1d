const authRepo = require("../repository/authRepo");
const { getNewAccessToken } = require("../utils/authHelper");
const { generateHashPassword } = require("../utils/utility");

async function register(username, password, userType) {
  password = await generateHashPassword(password);
  return await authRepo.register(username, password, userType);
}

async function getUserByUsername(username) {
  return await authRepo.getUserByUsername(username);
}

function makeLoginResponse(user) {
  const tokenPayLoad = {
    userId: user.id,
    userType: user.type,
  };

  const accessToken = getNewAccessToken(tokenPayLoad);

  return Object.assign(
    {},
    { id: user.id, type: user.type },
    { accessToken: accessToken }
  );
}

module.exports = { register, getUserByUsername, makeLoginResponse };
