import express from "express";
import { userController } from "../controller/userController";
import toHandler from "../../utils/controllerHandler";
const userRouter = express.Router();

userRouter.post("/createUser", toHandler(userController.createUser));
userRouter.post("/signInUser", toHandler(userController.signInUser));
userRouter.get("/getUser", toHandler(userController.getAllUser));
userRouter.get("/:id", toHandler(userController.getUserById));
export default userRouter;
