import { ItemCategories, Prisma, PrismaClient, Products } from "@prisma/client";

const prisma = new PrismaClient();

export const ProductRepository = {
  getProducts: async (category: ItemCategories): Promise<Products[]> => {
    try {
      const getProducts = await prisma.products.findMany({
        where: { category: { has: category } },
      });
      if (!getProducts) {
        console.log("Empty Products");
      }
      return getProducts;
    } catch (error) {
      console.error("Error DB Products  ");
      throw error;
    }
  },
};
