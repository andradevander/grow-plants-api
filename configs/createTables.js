module.exports = async function (knex) {
  try {
    await knex.schema.dropTableIfExists("users");
    await knex.schema.dropTableIfExists("plants");
    // Create users' table
    await knex.schema
      .createTable("users", (table) => {
        table.increments("id").primary().notNullable();
        table.string("email").unique();
        table.string("password").notNullable();
        table.string("first_name");
        table.string("last_name");
        table.datetime("created_at").notNullable();
      })
      // ...and plants' table
      .createTable("plants", (table) => {
        table.increments("id").primary().notNullable();
        table.string("name");
        table.string("moisture");
        table.integer("soil_temperature");
        table.datetime("fertilized_at");
        table.datetime("created_at").notNullable();
        table.integer("user_id").unsigned().references("users.id");
      });
  } catch (e) {
    console.error(e);
    throw new Error(e.message);
  }
};
