/*
  Warnings:

  - You are about to drop the column `price` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the column `productQuantity` on the `Cart` table. All the data in the column will be lost.
  - Added the required column `totalPrice` to the `Cart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productQuantity` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cart" DROP COLUMN "price",
DROP COLUMN "productQuantity",
ADD COLUMN     "totalPrice" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "date" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "productQuantity" INTEGER NOT NULL;
