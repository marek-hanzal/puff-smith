/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `CellInventory` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[code]` on the table `Liquid` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[code]` on the table `VoucherInventory` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `code` to the `CellInventory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `code` to the `Liquid` table without a default value. This is not possible if the table is not empty.
  - Added the required column `code` to the `VoucherInventory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CellInventory" ADD COLUMN     "code" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Liquid" ADD COLUMN     "code" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "VoucherInventory" ADD COLUMN     "code" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "CellInventory_code_key" ON "CellInventory"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Liquid_code_key" ON "Liquid"("code");

-- CreateIndex
CREATE UNIQUE INDEX "VoucherInventory_code_key" ON "VoucherInventory"("code");
