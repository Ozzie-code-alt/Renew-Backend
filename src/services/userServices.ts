import { Prisma, User } from "@prisma/client";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import { userRepository } from "../repository/userRepository";
//Business Logic Here
const generateToken = (user: User) => {
  return jwt.sign({ user }, process.env.JWT_SECRET as string, {
    expiresIn: "1m",
  });
};

type CreateUserResponse = {
  statusCode: number;
  data: User | null;
  message: string;
};

export const userService = {
  createUser: async (
    data: Prisma.UserCreateInput
  ): Promise<CreateUserResponse> => {
    try {
      // Hash the password
      const password = await bcrypt.hash(data.hashedPassword as string, 10);
      data.hashedPassword = password;

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
  signIn: async ({
    email,
    hashedPassword,
  }: {
    email: string;
    hashedPassword: string;
  }): Promise<{ user: User; token: string } | undefined> => {
    const user = await userRepository.fetchByEmail(email);
    try {
      if (
        user &&
        (await bcrypt.compare(hashedPassword, user?.hashedPassword as string))
      ) {
        const token = generateToken(user);
        return { user, token };
      } else {
        return undefined;
      }
    } catch (error) {
      console.log(error);
    }
  },
  fetchAllUser: async (): Promise<User[]> => {
    const getUser = await userRepository.fetchAllUser();
    try {
      if (!getUser) {
        console.log("No User List");
        return [];
      }
      return getUser;
    } catch (error) {
      console.log(error);
      return [];
    }
  },

  fetchUserByid: async (id: number) => {
    const getUserById = await userRepository.fetchUserById(id);
    try {
      if (!getUserById) {
        console.log("Error Fetching User in Controller");
      }
      return getUserById;
    } catch (error) {
      console.log("Error in fetching in Controller", error);
    }
  },
};
