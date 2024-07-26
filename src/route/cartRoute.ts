import express from "express";
import { cartController } from "../controller/cartController";
import toHandler from "../../utils/controllerHandler";

const cartRouter = express.Router();

cartRouter.get("/getCart", toHandler(cartController.getAllCart));

export default cartRouter;
