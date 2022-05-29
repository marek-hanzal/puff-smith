/*
  Warnings:

  - You are about to drop the `CoilInventory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MixtureInventory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CoilInventory" DROP CONSTRAINT "CoilInventory_coilId_fkey";

-- DropForeignKey
ALTER TABLE "CoilInventory" DROP CONSTRAINT "CoilInventory_userId_fkey";

-- DropForeignKey
ALTER TABLE "CoilInventory" DROP CONSTRAINT "CoilInventory_wireId_fkey";

-- DropForeignKey
ALTER TABLE "MixtureInventory" DROP CONSTRAINT "MixtureInventory_aromaId_fkey";

-- DropForeignKey
ALTER TABLE "MixtureInventory" DROP CONSTRAINT "MixtureInventory_baseId_fkey";

-- DropForeignKey
ALTER TABLE "MixtureInventory" DROP CONSTRAINT "MixtureInventory_boosterId_fkey";

-- DropForeignKey
ALTER TABLE "MixtureInventory" DROP CONSTRAINT "MixtureInventory_mixtureId_fkey";

-- DropForeignKey
ALTER TABLE "MixtureInventory" DROP CONSTRAINT "MixtureInventory_userId_fkey";

-- DropForeignKey
ALTER TABLE "MixtureInventory" DROP CONSTRAINT "MixtureInventory_vendorId_fkey";

-- DropTable
DROP TABLE "CoilInventory";

-- DropTable
DROP TABLE "MixtureInventory";
