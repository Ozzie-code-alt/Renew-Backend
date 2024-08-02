import { Prisma, Cart, Products } from "@prisma/client";
import { cartRepository } from "../repository/cartRepository";
export const cartServices = {
  fetchAllCartData: async (): Promise<Cart[]> => {
    const servicesCartData = await cartRepository.fetchAllCart();
    if (!servicesCartData) {
      console.error("Services Cart Error");
    }
    return servicesCartData;
  },
  fetchCartDataById: async (id: number) => {
    const cartDataId = await cartRepository.fetchCartById(id);
    if (!cartDataId) {
      console.error("Error Fetching Cart Data ID Services");
    }
    return cartDataId;
  },
  addToCart: async ({
    userId,
    totalPrice,
    productId,
  }: {
    userId: number;
    totalPrice: number;
    productId: number;
  }) => {
    const cartData = await cartRepository.addToCart(userId, totalPrice, productId);
    return cartData;
  },
};
