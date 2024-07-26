import { Prisma, PrismaClient, Cart } from "@prisma/client";

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
};
