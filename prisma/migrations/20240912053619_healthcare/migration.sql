/*
  Warnings:

  - The values [Healcare] on the enum `ItemCategories` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ItemCategories_new" AS ENUM ('Tech', 'Lifestyle', 'Healthcare', 'PersonalCare', 'Food');
ALTER TABLE "Products" ALTER COLUMN "category" TYPE "ItemCategories_new"[] USING ("category"::text::"ItemCategories_new"[]);
ALTER TYPE "ItemCategories" RENAME TO "ItemCategories_old";
ALTER TYPE "ItemCategories_new" RENAME TO "ItemCategories";
DROP TYPE "ItemCategories_old";
COMMIT;
