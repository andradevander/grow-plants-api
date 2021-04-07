const express = require("express");
const router = express.Router();
const userService = require("../service/user-service");
const plantService = require("../service/plant-service");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, async function (req, res) {
  try {
    const createdUser = await userService.createUser(req.body);
    return res.json({ createdUser });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

router.get("/all", authMiddleware, async function (_req, res) {
  const user = await userService.getAllUsers();
  return res.json(user);
});

router.delete("/:id", authMiddleware, async function (req, res) {
  await userService.deleteUserById(req.params.id);
  return res.json({ user });
});

router.get("/:id", authMiddleware, async function (req, res) {
  const user = await userService.getUserById(req.params.id);
  return res.json(user);
});

module.exports = router;
