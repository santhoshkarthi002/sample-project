import products from "./routes/productRoutes";

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/products", products);

export default app;
