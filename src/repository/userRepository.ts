import { Prisma, PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export const userRepository = {
  createUser: async (data: Prisma.UserCreateInput): Promise<User> => {
    const user = prisma.user.create({ data });
    if (!user) {
      console.log("user Repository not Working");
    } else {
      console.log("Signed in");
    }
    return user;
  },
};
