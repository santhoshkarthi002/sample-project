import products from "./routes/productRoutes";
import register from "./routes/registerRoutes";

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/register", register);
app.use("/products", products);

export default app;
