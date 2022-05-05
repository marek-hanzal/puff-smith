/*
  Warnings:

  - You are about to drop the column `nicotine` on the `Liquid` table. All the data in the column will be lost.
  - You are about to drop the column `pg` on the `Liquid` table. All the data in the column will be lost.
  - You are about to drop the column `steep` on the `Liquid` table. All the data in the column will be lost.
  - You are about to drop the column `vg` on the `Liquid` table. All the data in the column will be lost.
  - You are about to drop the column `volume` on the `Liquid` table. All the data in the column will be lost.
  - You are about to drop the `LiquidAroma` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LiquidBase` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LiquidBooster` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[aromaId,boosterId,baseId,nicotine]` on the table `Mixture` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `mixtureId` to the `Liquid` table without a default value. This is not possible if the table is not empty.

*/

DELETE FROM "Mixture";
DELETE FROM "Liquid";

-- DropForeignKey
ALTER TABLE "LiquidAroma" DROP CONSTRAINT "LiquidAroma_aromaId_fkey";

-- DropForeignKey
ALTER TABLE "LiquidAroma" DROP CONSTRAINT "LiquidAroma_liquidId_fkey";

-- DropForeignKey
ALTER TABLE "LiquidBase" DROP CONSTRAINT "LiquidBase_baseId_fkey";

-- DropForeignKey
ALTER TABLE "LiquidBase" DROP CONSTRAINT "LiquidBase_liquidId_fkey";

-- DropForeignKey
ALTER TABLE "LiquidBooster" DROP CONSTRAINT "LiquidBooster_boosterId_fkey";

-- DropForeignKey
ALTER TABLE "LiquidBooster" DROP CONSTRAINT "LiquidBooster_liquidId_fkey";

-- AlterTable
ALTER TABLE "Liquid" DROP COLUMN "nicotine",
DROP COLUMN "name",
DROP COLUMN "pg",
DROP COLUMN "steep",
DROP COLUMN "vg",
DROP COLUMN "volume",
ADD COLUMN     "mixtureId" TEXT NOT NULL;

-- DropTable
DROP TABLE "LiquidAroma";

-- DropTable
DROP TABLE "LiquidBase";

-- DropTable
DROP TABLE "LiquidBooster";

-- AddForeignKey
ALTER TABLE "Liquid" ADD CONSTRAINT "Liquid_mixtureId_fkey" FOREIGN KEY ("mixtureId") REFERENCES "Mixture"("id") ON DELETE CASCADE ON UPDATE CASCADE;
