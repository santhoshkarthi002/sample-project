
const express = require("express");
const router = express.Router();
const registerController = require("../controllers/registerController");

router.get("/", registerController.getAllUsers);
router.get("/:id", registerController.getUserById);
router.post("/", registerController.addUser);
router.delete("/:id", registerController.deleteUser);

export default router;