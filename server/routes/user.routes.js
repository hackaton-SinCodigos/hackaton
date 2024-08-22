import { Router } from "express";
import { getUserByTokenController } from "../controllers/user.controllers.js";

const userRouter = Router();

userRouter.get('/token/:token', getUserByTokenController);

export default userRouter;