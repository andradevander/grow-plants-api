const express = require("express");
const router = express.Router();
const authService = require("../service/auth-service");
const userService = require("../service/user-service");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/", function (_req, res) {
  return res.json({ status: "api running ok!" });
});

router.post("/login", async function (req, res) {
  const token = await authService.login(req.body);
  if (!token) {
    return res.sendStatus(400);
  }
  return res.json({ token });
});

router.post("/user", authMiddleware, async function (req, res) {
  try {
    const createdUser = await userService.createUser(req.body);
    return res.json({ createdUser });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

router.get("/user/all", authMiddleware, async function (_req, res) {
  const user = await userService.getAllUsers();
  return res.json(user);
});

router.get("/user/:id", authMiddleware, async function (req, res) {
  const user = await userService.getUserById(req.params.id);
  return res.json(user);
});

module.exports = router;
