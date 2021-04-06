const jwt = require("jsonwebtoken");
const userService = require("./user-service");

class AuthService {
  async login(credentials) {
    const user = await userService.getUserByCredentials(credentials);

    if (!user.length) {
      return false;
    }

    delete user[0].password;

    return jwt.sign(user[0], "1a2b3c4d5e");
  }

  async getUserById() {}
  async createUser(newUserData) {}
}
module.exports = new AuthService();
