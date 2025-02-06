import { Request, Response } from "express";
const register = require("../models/registerModel");

exports.getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await register.getAllUsers();
    res.status(200).json(users.rows);
  } catch (err) {
    res.status(500).json(err);
    console.log('err :', err);

  }
};

exports.getUserById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const user = await register.getUserById(id);
    res.status(200).json(user.rows[0]);
  } catch (err) {
    res.status(500).json(err);
    console.log('err :', err);
  }
};

exports.addUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const newUser = await register.addUser(user);
    res.status(201).json(newUser.rows);
  } catch (err) {
    res.status(500).json(err);
    console.log('err :', err);
  }
};

exports.deleteUser = async (req: Request, res: Response) => {
try{
    const id = req.params.id;
    const deletedUser = await register.deleteUser(id);
    res.status(200).json(deletedUser.rows);
  } catch (err) {    
    res.status(500).json(err);
    console.log('err :', err);
}
}
