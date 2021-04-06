const knex = require("../../configs/knex");
class UserService {
  async getUserByCredentials(credentials) {
    return knex("users")
      .select()
      .where("email", credentials.email)
      .where("password", credentials.password);
  }
  async getUserById() {}
  async createUser(newUserData) {}
}

module.exports = new UserService();
