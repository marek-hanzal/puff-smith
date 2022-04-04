/*
  Warnings:

  - Added the required column `content` to the `Aroma` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Aroma" ADD COLUMN     "content" DECIMAL(10,2) NOT NULL,
ALTER COLUMN "volume" DROP NOT NULL;
