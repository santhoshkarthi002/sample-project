import database from "../config/database";

// exports.findUserByEmail = async (email: string) => {
//   const user = await pool.query("SELECT * FROM users WHERE email = $1", [
//     email,
//   ]);
//   return user.rows[0];
// };


export const findUserByEmail = async (email: string) => {
  const user = await database.user.findUnique({
    where: { email },
  });
  return user;
};

// export const genarateToken = (user: any) => {
//   const payload = {
//     id: user.id,
//     email: user.email,
//     name: user.name,
//   };
//   return jwt.sign(payload, "secret");
// };

// export const login = async (email: string, password: string) => {
//   const user = await database.user.findUnique({
//     where: { email },
//   });
//   if (!user) {
//     throw new Error("User not found");
//   }
//   const comparePassword = await bcrypt.compare(password, user.password);
//   if (comparePassword) {
//     return user;
//   } else {
//     throw new Error("Invalid Credentials");
//   } 
// }