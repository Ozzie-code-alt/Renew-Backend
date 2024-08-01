import { Router } from "express";
import toHandler from "../../utils/controllerHandler";
import { ProductController } from "../controller/productController";

const productRouter = Router();

productRouter.get("/getProducts", toHandler(ProductController.fetchAllProduct));

export default productRouter;
