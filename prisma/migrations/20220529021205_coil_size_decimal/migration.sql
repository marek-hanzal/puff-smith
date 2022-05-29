/*
  Warnings:

  - You are about to alter the column `size` on the `Coil` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(3,2)`.

*/
-- AlterTable
ALTER TABLE "Coil" ALTER COLUMN "size" SET DATA TYPE DECIMAL(3,2);
