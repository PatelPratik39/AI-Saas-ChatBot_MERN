import { Router} from "express";
import { verifyToken } from "../utils/token-manager.js";

// Protected route
const chatRoutes = Router();

chatRoutes.post("/new",verifyToken,)


export default chatRoutes;