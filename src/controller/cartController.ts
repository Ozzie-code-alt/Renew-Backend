import { Request } from "express";
import { cartServices } from "../services/cartServices";
export const cartController = {
  getAllCart: async () => {
    return await cartServices.fetchAllCartData();
  },
};
