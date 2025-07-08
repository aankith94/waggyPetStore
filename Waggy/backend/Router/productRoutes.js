import express from "express";
import {
  addProduct,
  allProduct,
  deleteProductById,
  findProductById,
  updateProductById,
} from "../Controller/productController.js";
import middleware from "../Middleware/middleware.js";

const productRoute = express.Router();

productRoute.post("/addproduct", addProduct);
productRoute.get("/allproduct", allProduct);
productRoute.get("/findproductbyid/:id", findProductById);
productRoute.put("/updateproductbyid/:id", updateProductById);
productRoute.delete("/deleteproductbyid/:id", deleteProductById);
export default productRoute;
