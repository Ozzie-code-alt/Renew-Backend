import { Prisma, PrismaClient, Products } from "@prisma/client";

const prisma = new PrismaClient();

export const ProductRepository = {
  getProducts: async (): Promise<Products[]> => {
    try {
      const getProducts = await prisma.products.findMany();
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
