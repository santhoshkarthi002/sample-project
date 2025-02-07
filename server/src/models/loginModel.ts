import pool from "../config/db";

// exports.login = async (user: any) => {
//     return await  pool.query("SELECT * FROM users WHERE email =$1 AND password =$2", [user.email, user.password]);
// }

exports.findUserByEmail = async (email: string) => {
  const user = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);
  return user.rows[0];
};
