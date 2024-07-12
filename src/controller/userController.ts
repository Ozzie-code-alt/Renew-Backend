import { Request } from "express";
import { userService } from "../services/userServices";

export const userController = {
  createUser: async (request: Request) =>
    await userService.createUser(request.body),
};
