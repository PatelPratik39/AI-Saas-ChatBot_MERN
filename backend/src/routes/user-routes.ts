import { Router} from "express";
import { getAllUsers, userSignUp, userLogin, verifyUser } from "../controllers/user-controllers.js";
import {validate, signUpValidator, loginValidator} from "../utils/validators.js";
import { verifyToken } from "../utils/token-manager.js";

const userRoutes = Router();

userRoutes.get("/",getAllUsers);
userRoutes.post("/signup", validate(signUpValidator) ,userSignUp)
userRoutes.post("/login", validate(loginValidator), userLogin)
userRoutes.get("/auth-status", verifyToken, verifyUser);

export default userRoutes;