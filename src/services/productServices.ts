import { Products, PrismaClient } from "@prisma/client";
import { ProductRepository } from "../repository/productRepository";
export const ProductServices = {
  fetchAllProduct: async (): Promise<Products[]> => {
    try {
      const getProducts = await ProductRepository.getProducts();
      if (!getProducts) {
        console.log("No Products found in Services");
      }
      return getProducts;
    } catch (error) {
      console.error("Services Error");
      throw error;
    }
  },
};
