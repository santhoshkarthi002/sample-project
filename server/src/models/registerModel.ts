// import pool from "../config/db";

import database from "../config/database";

// class Register {
//   static async getAlluser() {
//     return await pool.query("SELECT * FROM user");
//   }

//   static async getUserById(id: number) {
//     return await pool.query("SELECT * FROM user WHERE id = $1", [id]);
//   }

//   static async addUser(user: any) {
//     return await pool.query(
//       "INSERT INTO user (userName, email, password, confirmPassword) VALUES ($1, $2, $3, $4) RETURNING *",
//       [user.userName, user.email, user.password, user.confirmPassword]
//     );
//   }

//   static async deleteUser(id: number) {
//     return await pool.query("DELETE FROM user WHERE id = $1", [id]);
//   }
// }

// module.exports = Register;

export const getAllUsers = async () => {
  const users = await database.user.findMany();
  return users;
};

export const getUserById = async (id: number) => {
  const user = await database.user.findUnique({
    where: { id },
  });
  return user;
};

export const addUser = async (user: any) => {
  const newUser = await database.user.create({
    data: user,
  });
  return newUser;
};

export const deleteUser = async (id: number) => {
  const deletedUser = await database.user.delete({
    where: { id },
  });
  return deletedUser;
};  