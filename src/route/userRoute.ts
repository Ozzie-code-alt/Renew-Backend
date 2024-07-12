import express from "express";
import { userController } from "../controller/userController";

const userRouter = express.Router();

userRouter.post("/createUser", userController.createUser);

export default userRouter;
