const express = require("express");
const router = express.Router();
const userService = require("../service/user-service");
const plantService = require("../service/plant-service");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, async function (req, res) {
  try {
    const createdPlant = await plantService.createPlant(req.body);
    return res.json({ createdPlant });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

router.patch("/:id", authMiddleware, async function (req, res) {
  try {
    const updatedPlant = await plantService.updatePlant(
      req.params.id,
      req.body
    );
    return res.json({ updatedPlant });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

router.get("/all", authMiddleware, async function (_req, res) {
  const plants = await plantService.getAllPlants();
  return res.json(plants);
});

router.get("/my-plants", authMiddleware, async function (_req, res) {
  const { id } = res.locals.loggedUser;
  const plants = await plantService.getAllPlantsByUserId(id);
  return res.json(plants);
});

router.get("/:id", authMiddleware, async function (req, res) {
  const plants = await plantService.getPlantById(req.params.id);
  return res.json(plants[0]);
});

router.delete("/:id", authMiddleware, async function (req, res) {
  const plant = await userService.deletePlantById(req.params.id);
  return res.json(plant);
});

module.exports = router;
