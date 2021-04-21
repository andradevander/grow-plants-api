const express = require("express");
const router = express.Router();
const userService = require("../service/user-service");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, async function (req, res) {
  try {
    const createdUser = await userService.createUser(req.body);
    return res.json({ createdUser });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

router.get("/", authMiddleware, async function (req, res) {
  const { id } = res.locals.loggedUser;

  const users = await userService.getUserById(req.params.id);
  return res.json(users[0]);
});

router.patch("/:id", authMiddleware, async function (req, res) {
  try {
    const updatedUser = await userService.updateUser(req.params.id, req.body);

    return res.json({ updatedUser });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

router.get("/all", authMiddleware, async function (_req, res) {
  const users = await userService.getAllUsers();
  return res.json(users);
});

router.delete("/:id", authMiddleware, async function (req, res) {
  await userService.deleteUserById(req.params.id);
  return res.json({ message: "User deleted successfully" });
});

router.get("/:id", authMiddleware, async function (req, res) {
  const users = await userService.getUserById(req.params.id);
  return res.json(users[0]);
});

module.exports = router;
