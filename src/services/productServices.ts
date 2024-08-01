import { Products, PrismaClient, ItemCategories } from "@prisma/client";
import { ProductRepository } from "../repository/productRepository";
export const ProductServices = {
  fetchAllProduct: async (category:ItemCategories): Promise<Products[]> => {
    try {
      const getProducts = await ProductRepository.getProducts(category);
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
