const jwt = require("jsonwebtoken");
const { User } = require("../models/user");

const { RequestError } = require("../helpers/RequestError");

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const auth = async (req, res, next) => {
  try {
    const { authorization = "" } = req.headers;
    const [bearer, token] = authorization.split(" ");
    if (bearer !== "Bearer" || !token) {
      throw RequestError(401, "Not authorized");
    }
    const { id } = jwt.verify(token, JWT_SECRET_KEY);
    const user = await User.findById(id);
    if (!user || user.token !== token) {
      throw RequestError(401, "Not authorized");
    }
    req.user = user;
    next();
  } catch (error) {
    if (
      error.message === "invalid signature" ||
      error.message === "jwt expired"
    ) {
      error.status = 401;
    }
    next(error);
  }
};

module.exports = auth;
