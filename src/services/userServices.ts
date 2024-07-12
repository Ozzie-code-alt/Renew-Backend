import { Prisma, User } from "@prisma/client";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import { userRepository } from "../repository/userRepository";

const generateToken = (user: User) => {
  return jwt.sign({ user }, process.env.JWT_SECRET as string);
};

type CreateUserResponse = {
  statusCode: number;
  data: User | null;
  message: string;
};

export const userService = {
  createUser: async (data: Prisma.UserCreateInput): Promise<CreateUserResponse> => {
    try {

      // Hash the password
      const password = await bcrypt.hash(data.password, 10);
      data.password = password;

      // Create the user
      const createdUser = await userRepository.createUser(data);
      if (!createdUser) {
        return {
          statusCode: 500,
          data: null,
          message: "Failed to create user",
        };
      }

      return {
        statusCode: 201,
        data: createdUser,
        message: "User created successfully",
      };
    } catch (error) {
      console.error("Error creating user:", error);
      return {
        statusCode: 500,
        data: null,
        message: "Internal server error",
      };
    }
  },
};
