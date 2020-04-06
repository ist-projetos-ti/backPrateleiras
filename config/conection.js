const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "localhost",
    user: "prateleira",
    password: "Prateleira@123@123",
    database: "prateleira",
  },
});

module.exports = knex;
