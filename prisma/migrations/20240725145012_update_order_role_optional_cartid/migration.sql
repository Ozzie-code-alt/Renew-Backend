-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_cartId_fkey";

-- AlterTable
ALTER TABLE "Products" ALTER COLUMN "cartId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart"("id") ON DELETE SET NULL ON UPDATE CASCADE;
