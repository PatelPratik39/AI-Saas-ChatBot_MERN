import { Router } from "express";
import { getAllUsers } from "../controllers/user-controllers.js";
const userRoutes = Router();
userRoutes.get("/", getAllUsers);
userRoutes.post("/signup", userSignUp);
export default userRoutes;
//# sourceMappingURL=user-routes.js.map