import express from "express";
import {
  deleteUserByParams,
  findAll,
  findUserByParams,
  Login,
  Signup,
} from "../Controller/userController.js";
import middleware from "../Middleware/middleware.js";

const userRoute = express.Router();
userRoute.post("/signup", Signup);
userRoute.post("/login", Login);
userRoute.get("/findall", middleware, findAll);
userRoute.get("/finduserbyparams/:id", findUserByParams);
userRoute.delete("/deleteuserbyparams/:id", deleteUserByParams);
export default userRoute;
