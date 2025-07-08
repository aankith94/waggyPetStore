import express from "express";
import {
  cartCreate,
  deleteAllCartItem,
  deleteSingleCartItem,
  findAllCart,
  updateCart,
} from "../Controller/cartController.js";
import middleware from "../Middleware/middleware.js";

const cartRoutes = express.Router();

cartRoutes.post("/addtocart", middleware, cartCreate);
cartRoutes.get("/findallcart", middleware, findAllCart);
cartRoutes.put("/updatecart/:id", middleware, updateCart);
cartRoutes.delete("/deletesinglecart/:id", middleware, deleteSingleCartItem);
cartRoutes.delete("/deleteallcart", middleware, deleteAllCartItem);

export default cartRoutes;
