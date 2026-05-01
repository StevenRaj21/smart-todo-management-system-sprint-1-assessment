const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "raj2494",
  database: "todo_list_db",
});

module.exports = client;
