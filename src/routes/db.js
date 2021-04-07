const express = require("express");
const router = express.Router();
const plantService = require("../service/plant-service");
const userService = require("../service/user-service");

router.get("/overview", async function (req, res) {
  const users = await userService.getAllUsers();
  const plants = await plantService.getAllPlants();
  return res.json({ users, plants });
});

module.exports = router;
