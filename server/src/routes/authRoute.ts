const router = require("express").Router();
const auth = require("../controllers/loginController");

router.post("/login", auth.login);

export default router;
