const knex = require("../../configs/knex");

class PlantService {
  async createPlant(newPlant) {
    await knex.insert({});
  }
  async getPlantById(id) {}
  async getAllPlantsByUserId(user_id) {}
  async deletePlantById(id) {}
}

module.exports = new PlantService();
