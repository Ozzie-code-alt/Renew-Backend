import { ProductServices } from "../services/productServices";

export const ProductController = {
  fetchAllProduct: async () => {
    return await ProductServices.fetchAllProduct();
  },
};
