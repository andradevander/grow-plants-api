const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  try {
    const { authorization } = req.headers;
    const token = authorization.split("Bearer ", -1)[1];
    res.locals.loggedUser = jwt.verify(token, "1a2b3c4d5e");
    next();
  } catch (error) {
    return res.sendStatus(401);
  }
};
