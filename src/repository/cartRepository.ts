import { Prisma, PrismaClient, Cart, Products } from "@prisma/client";

const prisma = new PrismaClient();

export const cartRepository = {
  createCart: () => {},
  fetchAllCart: async (): Promise<Cart[]> => {
    const cartData = await prisma.cart.findMany({
      include: { products: true },
    });
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
    totalPrice: number,
    productId: number
  ): Promise<Cart> => {
    try {
      const cartData = await prisma.cart.create({
        data: {
          userId,
          totalPrice,
          products: {
            connect: { id: productId },
          },
        },
        include: {
          products: true,
        },
      });

      return cartData;
    } catch (error) {
      console.error("Error creating cart:", error);
      throw error;
    }
  },

  // existingCart: async (
  //   userId: number,
  //   productQuantity: number,
  //   price: number
  // ): Promise<Cart[]> => {
  //   const existingCartItems = await prisma.cart.findMany({
  //     where: { userId: userId, productQuantity: productQuantity, price: price },
  //   });
  //   return existingCartItems;
  // },
};
