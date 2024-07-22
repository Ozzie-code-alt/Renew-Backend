/*
  Warnings:

  - The primary key for the `Order` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `orderDate` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `orderId` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `totalPrice` on the `Order` table. All the data in the column will be lost.
  - The primary key for the `Products` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `price` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrderDetails` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[cardID]` on the table `Order` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Date` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Price` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cardID` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productID` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priceInCents` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ItemCategories" AS ENUM ('Tech', 'Lifestyle', 'Healcare', 'PersonalCare', 'Food');

-- AlterTable
ALTER TABLE "Order" DROP CONSTRAINT "Order_pkey",
DROP COLUMN "orderDate",
DROP COLUMN "orderId",
DROP COLUMN "totalPrice",
ADD COLUMN     "Date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "Price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "cardID" INTEGER NOT NULL,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "productID" INTEGER NOT NULL,
ADD CONSTRAINT "Order_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Products" DROP CONSTRAINT "Products_pkey",
DROP COLUMN "price",
DROP COLUMN "productId",
ADD COLUMN     "category" "ItemCategories"[],
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "priceInCents" INTEGER NOT NULL,
ADD CONSTRAINT "Products_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" DROP COLUMN "password",
ADD COLUMN     "emailVerified" TIMESTAMP(3),
ADD COLUMN     "hashedPassword" TEXT,
ADD COLUMN     "image" TEXT,
ALTER COLUMN "address" DROP NOT NULL;

-- DropTable
DROP TABLE "Categories";

-- DropTable
DROP TABLE "OrderDetails";

-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cart" (
    "id" SERIAL NOT NULL,
    "productQuantity" INTEGER NOT NULL,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Order_cardID_key" ON "Order"("cardID");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_productID_fkey" FOREIGN KEY ("productID") REFERENCES "Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_cardID_fkey" FOREIGN KEY ("cardID") REFERENCES "Cart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
