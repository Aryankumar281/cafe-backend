
import express from 'express';
import { register,login,showUser,patch, remove, profile } from "../controllers/userController.js";
import { authenticate, authorize } from "../middlewares/auth.js";

const Router = express.Router();




Router.post("/register", register);
Router.post("/login", login);
Router.get("/showusers", authenticate, authorize("admin"),showUser);
Router.patch('/:id',authenticate, authorize("admin"),patch)
Router.delete("/:id",authenticate, authorize("admin"),remove)
Router.get("/:id/profile",profile)
export default Router;