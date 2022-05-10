/*
  Warnings:

  - You are about to drop the column `vendorId` on the `Coil` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Coil` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Coil" DROP CONSTRAINT "Coil_vendorId_fkey";

-- DropIndex
DROP INDEX "Coil_name_vendorId_key";

-- AlterTable
ALTER TABLE "Coil" DROP COLUMN "vendorId";

-- CreateIndex
CREATE UNIQUE INDEX "Coil_name_key" ON "Coil"("name");
