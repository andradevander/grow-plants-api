module.exports = async function (knex) {
  try {
    // Deletes ALL existing entries
    await knex("users").del();
    await knex("plants").del();

    await knex("users").insert({
      first_name: "adminFirstName",
      last_name: "adminLastName",
      email: "admin@admin.com",
      password: "123456",
      created_at: new Date(),
    });

    await knex("plants").insert([
      {
        name: "little plant",
        moisture: 45,
        soil_temperature: 25,
        fertilized_at: new Date(),
        user_id: 1,
        created_at: new Date(),
      },
      {
        name: "little plant 2",
        moisture: 25,
        soil_temperature: 35,
        fertilized_at: new Date(),
        user_id: 1,
        created_at: new Date(),
      },
      {
        name: "little plant 3",
        moisture: 25,
        soil_temperature: 35,
        fertilized_at: new Date(),
        user_id: 1,
        created_at: new Date(),
      },
    ]);
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};
