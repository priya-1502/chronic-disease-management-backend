const jwt = require("jsonwebtoken");

class JWT {
  static createToken(userPayload) {
    return jwt.sign(userPayload.toObject(), process.env.SECRET_KEY, {
      expiresIn: "10h",
    });
  }
  static async authorize(req, res, next) {
    var { token } = req.cookies;
    if (token) {
      const result = jwt.verify(token, process.env.SECRET_KEY);
      if (result) {
        next();
      }
      res.status(500).send("Invalid token");
    } else {
      res.status(500).send("Token not found");
    }
  }
}

module.exports = { JWT };
