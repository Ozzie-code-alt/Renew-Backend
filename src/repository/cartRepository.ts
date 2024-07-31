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
  fetchCartById: async (id: number) => {
    try {
      const cartDataId = await prisma.cart.findMany({
        where: { userId: id },
      });

      if (!cartDataId) {
        console.error("Cart ID Not Found");
        return null;
      }

      return cartDataId;
    } catch (error) {
      console.error("Error fetching cart by ID:", error);
      throw error;
    }
  },
  addToCart: async (
    userId: number,
    productQuantity: number,
    price: number,
    date: Date
  ): Promise<Cart> => {
    const cartData = await prisma.cart.create({
      data: { userId, productQuantity, price, date },
    });
    if (!cartData) {
      console.log("CartData not found");
    }
    return cartData;
  },

  existingCart: async (
    userId: number,
    productQuantity: number,
    price: number
  ): Promise<Cart[]> => {
    const existingCartItems = await prisma.cart.findMany({
      where: { userId: userId, productQuantity: productQuantity, price: price },
    });
    return existingCartItems;
  },
};
