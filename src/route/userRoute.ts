import express from "express";
import { userController } from "../controller/userController";
import toHandler from "../../utils/controllerHandler"
const userRouter = express.Router();

userRouter.post("/createUser", toHandler(userController.createUser));

export default userRouter;
