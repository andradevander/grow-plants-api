const express = require("express");
const router = express.Router();
const authService = require("../service/auth-service");
const userService = require("../service/user-service");

const authMiddleware = function (req, res, next) {
  console.log(req.headers);
  // return res.sendStatus(403);
  next();
};

// define the home page route
router.get("/", function (_req, res) {
  return res.json({ status: "api ok" });
});

// define the home page route
router.post("/login", async function (req, res) {
  const token = await authService.login(req.body);
  if (!token) {
    return res.sendStatus(400);
  }
  return res.json({ token });
});

// middleware that is specific to this router
router.use(authMiddleware);

router.post("/user", function (req, res) {
  return res.json({ status: "api ok", req });
});

// define the about route
router.get("/about", function (req, res) {
  var decoded = jwt.verify(token, "shhhhh");
  res.json({ about: "About birds" });
});

module.exports = router;
