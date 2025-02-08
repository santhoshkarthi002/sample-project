import { PrismaClient } from "@prisma/client";
import app from "./app";

const prisma = new PrismaClient();

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
