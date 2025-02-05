const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

pool
  .connect()
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err: any) => {
    console.log(err);
  });

module.exports = pool;
