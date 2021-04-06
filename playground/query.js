const knex = require("../configs/knex");

const userService = require("../src/service/user-service");
userService.getUserById();
// knex("users")
//   .select()
//   .where("id", 2)
//   .then((result) => {
//     console.log(result);
//   });
// knex("users")
//   .insert()
//   .where("id", 2)
//   .then((result) => {
//     console.log(result);
//   });
