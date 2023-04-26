const jwt = require("jsonwebtoken");
const { writeResponse } = require("../utils/utility");

const SECRET_KEY = process.env.ACCESS_TOKEN_SECRET;

const verifyToken = async (req, res, next) => {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    try {
      const tokenPayload = jwt.verify(
        req.headers.authorization.split(" ")[1],
        SECRET_KEY
      );
      if (!validPayload(tokenPayload)) {
        return writeResponse(
          {
            code: 403,
            message: "forbidden request",
          },
          null,
          res
        );
      }
      req.authUserId = tokenPayload["userId"];
      req.authUserType = tokenPayload["userType"];
    } catch (err) {
      return writeResponse(
        {
          code: 500,
          message: "provided token is not valid or expired",
        },
        null,
        res
      );
    }
    next();
  } else {
    return writeResponse(
      {
        code: 403,
        message: "Token is not provided",
      },
      null,
      res
    );
  }
};

const isSeller = async (req, res, next) => {
  if (!req.authUserType || req.authUserType !== "seller") {
    return writeResponse(
      {
        code: 403,
        message: "forbidden request",
      },
      null,
      res
    );
  }
  next();
};

const isBuyer = async (req, res, next) => {
  if (!req.authUserType || req.authUserType !== "buyer") {
    return writeResponse(
      {
        code: 403,
        message: "forbidden request",
      },
      null,
      res
    );
  }
  next();
};

const validPayload = (payload) => {
  if (!payload) return false;
  if (!("userId" in payload)) return false;
  if (!("userType" in payload)) return false;
  return true;
};

module.exports = {
  verifyToken,
  isSeller,
  isBuyer,
};
