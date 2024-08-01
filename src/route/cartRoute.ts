import express from "express";
import { cartController } from "../controller/cartController";
import toHandler from "../../utils/controllerHandler";


const cartRouter = express.Router();

cartRouter.get("/getCart", toHandler(cartController.getAllCart));
cartRouter.get("/:id", toHandler(cartController.getCartId));
cartRouter.post("/Addcart", toHandler(cartController.addToCart));
export default cartRouter;
