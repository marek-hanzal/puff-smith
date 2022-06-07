/*
  Warnings:

  - You are about to alter the column `coilMin` on the `Atomizer` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(3,2)`.
  - You are about to alter the column `coilMax` on the `Atomizer` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(3,2)`.

*/
-- AlterTable
ALTER TABLE "Atomizer" ADD COLUMN     "wrapsMax" INTEGER,
ADD COLUMN     "wrapsMin" INTEGER,
ALTER COLUMN "coilMin" SET DATA TYPE DECIMAL(3,2),
ALTER COLUMN "coilMax" SET DATA TYPE DECIMAL(3,2);
