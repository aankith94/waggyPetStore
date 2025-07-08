import express from "express";
import dotenv from "dotenv";
import dbConnection from "./Database/dbConnection.js";
import userRoute from "./Router/Routes.js";
import fileUpload from "express-fileupload";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";
import productRoute from "./Router/productRoutes.js";
import cartRoutes from "./Router/cartRoutes.js";
const app = express();

const __filename = fileURLToPath(import.meta.url);
console.log(__filename, "filepath");
const __dirname = path.dirname(__filename);
console.log(__dirname, "directory name");

app.use("/Image", express.static(path.join(__dirname, "Public/Image")));
app.use(cors());
dotenv.config();

app.use(fileUpload());
app.use(express.json());
dbConnection();
const port = process.env.PORT;
app.use("/user", userRoute);
app.use("/product", productRoute);
app.use("/cart", cartRoutes);
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
