import { Prisma, PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();
//DB Queries Here
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
  fetchByEmail: async (email: string) => {
    const user = prisma.user.findFirst({ where: { email } });
    try {
      if (!user) {
        console.log("User Not Found by Email");
      }
      return user;
    } catch (error) {
      console.log(error);
    }
  },
  fetchAllUser: async (): Promise<User[]> => {
    return await prisma.user.findMany({});
  },
  fetchUserById: async (id: number) => {
    const userId = await prisma.user.findFirst({ where: { id } });
    try {
      if (!userId) {
        console.log("User ID is not found in Repository");
      }
      return userId;
    } catch (error) {
      console.log("Error In fetchin ID In Repository", error);
    }
  },
};
