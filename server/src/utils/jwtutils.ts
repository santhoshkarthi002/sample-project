const jwt = require("jsonwebtoken");

exports.genarateToken = (user: any) => {
  const users = {
    userName: user.userName,
    email: user.email,
  };
  return jwt.sign(users, process.env.JWT_SECRET, { expiresIn: "5h" });
};

exports.verifyToken = (token: string) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return null;
  }
};
