import { Request } from "express";
import { userService } from "../services/userServices";

export const userController = {
  createUser: async (request: Request) =>
    await userService.createUser(request.body),
  signInUser: async (request: Request) => {
    return await userService.signIn(request.body);
  },
  getAllUser: async () => {
    return await userService.fetchAllUser();
  },
};
