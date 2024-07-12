/*
  Warnings:

  - The primary key for the `Order` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `orderDate` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `orderId` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `totalPrice` on the `Order` table. All the data in the column will be lost.
  - The primary key for the `Products` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `price` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the `Categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrderDetails` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `Date` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Price` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderID` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priceInCents` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Categories" AS ENUM ('Tech', 'Lifestyle', 'Healcare', 'PersonalCare', 'Food');

-- AlterTable
ALTER TABLE "Order" DROP CONSTRAINT "Order_pkey",
DROP COLUMN "orderDate",
DROP COLUMN "orderId",
DROP COLUMN "totalPrice",
ADD COLUMN     "Date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "Price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Order_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Products" DROP CONSTRAINT "Products_pkey",
DROP COLUMN "price",
DROP COLUMN "productId",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD COLUMN     "categories" "Categories"[],
ADD COLUMN     "orderID" INTEGER NOT NULL,
ADD COLUMN     "priceInCents" INTEGER NOT NULL,
ADD CONSTRAINT "Products_pkey" PRIMARY KEY ("Id");

-- DropTable
DROP TABLE "Categories";

-- DropTable
DROP TABLE "OrderDetails";

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_orderID_fkey" FOREIGN KEY ("orderID") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
