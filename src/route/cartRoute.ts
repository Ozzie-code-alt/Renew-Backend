import express from "express";
import { cartController } from "../controller/cartController";
import toHandler from "../../utils/controllerHandler";


const cartRouter = express.Router();

cartRouter.get("/", toHandler(cartController.getAllCart));
cartRouter.get("/:id", toHandler(cartController.getCartId));
cartRouter.post("/", toHandler(cartController.addToCart));
export default cartRouter;
