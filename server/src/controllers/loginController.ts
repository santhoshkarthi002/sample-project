import { Request, Response } from "express";
import { findUserByEmail } from "../models/loginModel";
const bcrypt = require("bcryptjs");
const { genarateToken } = require("../utils/jwtutils");

exports.login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide email and password" });
    }

    const login = await findUserByEmail(email);
    if (!login) {
      return res.status(404).json({ message: "User not found" });
    }

    const comparePassword = await bcrypt.compare(password, login.password);

    if (comparePassword) {
      const token = genarateToken(login);
      return res.status(200).json({ token: token });
    } else {
      return res.status(404).json({ message: "Invalid Credentials" });
    }
  } catch (err) {
    console.error("Error from login:", err);
    return res.status(500).json(err);
  }
};
