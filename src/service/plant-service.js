const knex = require("../../configs/knex");

class PlantService {
  async createPlant(newPlant) {
    return knex("plants").insert({
      name: newPlant.name,
      moisture: newPlant.moisture,
      soil_temperature: newPlant.soil_temperature,
      fertilized_at: new Date(newPlant.fertilized_at),
      status: newPlant.status,
      user_id: newPlant.user_id,
      created_at: new Date(),
    });
  }

  async getPlantById(id) {
    return knex("plants").where("id", id).select();
  }

  async getAllPlants() {
    return knex("plants").select();
  }

  async getAllPlantsByUserId(user_id) {
    return knex("plants").where("user_id", user_id).select();
  }

  async deletePlantById(id) {
    await knex("plants").where("id", id).del();
  }
}

module.exports = new PlantService();
