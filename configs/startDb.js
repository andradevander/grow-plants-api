const knex = require("./knex");
const createTables = require("./createTables");
const seeder = require("../seeds/initial");

async function startDb() {
  await createTables(knex);
  await seeder(knex);
}

startDb().then(() => {
  console.log("Database created");
  process.exit();
});
