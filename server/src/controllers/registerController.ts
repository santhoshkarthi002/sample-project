import { Request, Response } from "express";
const bcrypt = require("bcryptjs");
const register = require("../models/registerModel");

exports.getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await register.getAllUsers();
    res.status(200).json(users.rows);
  } catch (err) {
    res.status(500).json(err);
    console.log("err :", err);
  }
};

exports.getUserById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const user = await register.getUserById(id);
    res.status(200).json(user.rows[0]);
  } catch (err) {
    res.status(500).json(err);
    console.log("err :", err);
  }
};

exports.addUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    
    const userPasword = user.password;
    const confirmPassword = user.confirmPassword;
    
    if (userPasword !== confirmPassword) {
      throw new Error("passwords do not match");
    }
    
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const hashedConfirmPassword = await bcrypt.hash(user.confirmPassword, 10);
    user.password = hashedPassword;
    user.confirmPassword = hashedConfirmPassword;

    await register.addUser(user);
    return res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.log("err :", err);
    return res.status(500).json(err);
  }
};

exports.deleteUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deletedUser = await register.deleteUser(id);
    res.status(200).json(deletedUser.rows);
  } catch (err) {
    res.status(500).json(err);
    console.log("err :", err);
  }
};
