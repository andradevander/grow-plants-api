const knex = require("../../configs/knex");
class UserService {
  async getUserByCredentials(credentials) {
    return knex("users")
      .select()
      .where("email", credentials.email)
      .where("password", credentials.password);
  }
  async getUserById(id) {
    return knex("users").where("id", id).select();
  }

  async getAllUsers() {
    return knex("users").select();
  }

  async deletePlantById(id) {
    await knex("plants").where("id", id).del();
  }

  async deleteUserById(id) {
    await knex("users").where("id", id).del();
  }

  async updateUser(id, newUserData) {
    return knex("users").where("id", id).update(newUserData);
  }

  async createUser(newUserData) {
    return knex("users").insert({
      first_name: newUserData.first_name,
      last_name: newUserData.last_name,
      email: newUserData.email,
      password: newUserData.password,
      created_at: new Date(),
    });
  }
}

module.exports = new UserService();
