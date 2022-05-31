/*
  Warnings:

  - You are about to drop the column `archived` on the `Build` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Build" DROP COLUMN "archived",
ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true;
