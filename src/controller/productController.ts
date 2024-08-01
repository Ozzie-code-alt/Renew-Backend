import { ItemCategories } from "@prisma/client";
import { ProductServices } from "../services/productServices";
import { Request } from "express";
export const ProductController = {
  fetchAllProduct: async (request:Request) => {
    return await ProductServices.fetchAllProduct(request.params.id as ItemCategories);
  },
};
