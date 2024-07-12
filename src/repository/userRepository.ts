import { Prisma, PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export const userRepository = {
  createUser: async (data: Prisma.UserCreateInput): Promise<User> => {
    return await prisma.user.create({ data });
  },
};
