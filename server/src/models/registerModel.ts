import pool from "../config/db";

class Register {
  static async getAllUsers() {
    return await pool.query("SELECT * FROM users");
  }

  static async getUserById(id: number) {
    return await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  }

  static async addUser(user: any) {
    return await pool.query(
      "INSERT INTO users (userName, email, password, confirmPassword) VALUES ($1, $2, $3, $4) RETURNING *",
      [user.userName, user.email, user.password, user.confirmPassword]
    );
  }

  static async deleteUser(id: number) {
    return await pool.query("DELETE FROM users WHERE id = $1", [id]);
  }
}

module.exports = Register;