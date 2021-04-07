const express = require("express");
const router = express.Router();
const authService = require("../service/auth-service");

router.post("/login", async function (req, res) {
  const token = await authService.login(req.body);
  if (!token) {
    return res.sendStatus(400);
  }
  return res.json({ token });
});

module.exports = router;
