import { Prisma, PrismaClient, Cart } from "@prisma/client";
import { number } from "zod";

const prisma = new PrismaClient();

export const cartRepository = {
  createCart: () => {},
  fetchAllCart: async (): Promise<Cart[]> => {
    const cartData = await prisma.cart.findMany({});
    if (!cartData) {
      console.error("No Cart to be fetched");
    }
    return cartData;
  },
  fetchCartById: async (id: number) => {
    try {
      const cartDataId = await prisma.cart.findMany({
        where: { userId: id },
      });

      if (!cartDataId) {
        console.error("Cart ID Not Found");
        return null; // Or you can throw an error if that fits your error handling strategy
      }

      return cartDataId;
    } catch (error) {
      console.error("Error fetching cart by ID:", error);
      throw error; // Re-throw the error to handle it further up the call stack if needed
    }
  },
};
