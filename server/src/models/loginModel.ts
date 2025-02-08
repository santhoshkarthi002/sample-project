import pool from "../config/db";

exports.findUserByEmail = async (email: string) => {
  const user = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);
  return user.rows[0];
};
