import { Request } from "express";
import { cartServices } from "../services/cartServices";
export const cartController = {
  getAllCart: async () => {
    return await cartServices.fetchAllCartData();
  },
  getCartId: async (request: Request) => {
    return await cartServices.fetchCartDataById(Number(request.params.id));
  },
};
