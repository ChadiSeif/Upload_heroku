const jwt = require("jsonwebtoken");

const isAuth = (req, res, next) => {
  const token =
    req.headers["access-token"] || req.body.token || req.query.token; //localhost/user?token=xxxx
  if (!token) {
    return res
      .status(403)
      .send({ msg: "You are not authorized , please Log in !" });
  }
  try {
    jwt.verify(token, process.env.TOKEN_KEY, function (err, decoded) {
      if (err) {
        err = {
          name: "TokenExpiredError",
          message: "Session expired",
        };
        return res.status(401).send(err);
      } else {
        req.user = decoded;
        console.log(decoded);
      }
    });
  } catch (err) {
    return res.status(401).send({ msg: "invalid token" });
  }
  return next();
};

module.exports = isAuth;
