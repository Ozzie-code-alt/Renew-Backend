import { Prisma, Cart } from "@prisma/client";
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
};
