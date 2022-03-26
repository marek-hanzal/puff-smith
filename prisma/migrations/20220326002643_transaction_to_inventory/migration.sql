/*
  Warnings:

  - You are about to drop the `AromaTransaction` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AtomizerTransaction` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BaseTransaction` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BoosterTransaction` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CellTransaction` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CottonTransaction` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ModTransaction` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VoucherTransaction` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AromaTransaction" DROP CONSTRAINT "AromaTransaction_aromaId_fkey";

-- DropForeignKey
ALTER TABLE "AromaTransaction" DROP CONSTRAINT "AromaTransaction_transactionId_fkey";

-- DropForeignKey
ALTER TABLE "AromaTransaction" DROP CONSTRAINT "AromaTransaction_userId_fkey";

-- DropForeignKey
ALTER TABLE "AtomizerTransaction" DROP CONSTRAINT "AtomizerTransaction_atomizerId_fkey";

-- DropForeignKey
ALTER TABLE "AtomizerTransaction" DROP CONSTRAINT "AtomizerTransaction_transactionId_fkey";

-- DropForeignKey
ALTER TABLE "AtomizerTransaction" DROP CONSTRAINT "AtomizerTransaction_userId_fkey";

-- DropForeignKey
ALTER TABLE "BaseTransaction" DROP CONSTRAINT "BaseTransaction_baseId_fkey";

-- DropForeignKey
ALTER TABLE "BaseTransaction" DROP CONSTRAINT "BaseTransaction_transactionId_fkey";

-- DropForeignKey
ALTER TABLE "BaseTransaction" DROP CONSTRAINT "BaseTransaction_userId_fkey";

-- DropForeignKey
ALTER TABLE "BoosterTransaction" DROP CONSTRAINT "BoosterTransaction_boosterId_fkey";

-- DropForeignKey
ALTER TABLE "BoosterTransaction" DROP CONSTRAINT "BoosterTransaction_transactionId_fkey";

-- DropForeignKey
ALTER TABLE "BoosterTransaction" DROP CONSTRAINT "BoosterTransaction_userId_fkey";

-- DropForeignKey
ALTER TABLE "CellTransaction" DROP CONSTRAINT "CellTransaction_cellId_fkey";

-- DropForeignKey
ALTER TABLE "CellTransaction" DROP CONSTRAINT "CellTransaction_transactionId_fkey";

-- DropForeignKey
ALTER TABLE "CellTransaction" DROP CONSTRAINT "CellTransaction_userId_fkey";

-- DropForeignKey
ALTER TABLE "CottonTransaction" DROP CONSTRAINT "CottonTransaction_cottonId_fkey";

-- DropForeignKey
ALTER TABLE "CottonTransaction" DROP CONSTRAINT "CottonTransaction_transactionId_fkey";

-- DropForeignKey
ALTER TABLE "CottonTransaction" DROP CONSTRAINT "CottonTransaction_userId_fkey";

-- DropForeignKey
ALTER TABLE "ModTransaction" DROP CONSTRAINT "ModTransaction_modId_fkey";

-- DropForeignKey
ALTER TABLE "ModTransaction" DROP CONSTRAINT "ModTransaction_transactionId_fkey";

-- DropForeignKey
ALTER TABLE "ModTransaction" DROP CONSTRAINT "ModTransaction_userId_fkey";

-- DropForeignKey
ALTER TABLE "VoucherTransaction" DROP CONSTRAINT "VoucherTransaction_transactionId_fkey";

-- DropForeignKey
ALTER TABLE "VoucherTransaction" DROP CONSTRAINT "VoucherTransaction_userId_fkey";

-- DropForeignKey
ALTER TABLE "VoucherTransaction" DROP CONSTRAINT "VoucherTransaction_voucherId_fkey";

-- DropTable
DROP TABLE "AromaTransaction";

-- DropTable
DROP TABLE "AtomizerTransaction";

-- DropTable
DROP TABLE "BaseTransaction";

-- DropTable
DROP TABLE "BoosterTransaction";

-- DropTable
DROP TABLE "CellTransaction";

-- DropTable
DROP TABLE "CottonTransaction";

-- DropTable
DROP TABLE "ModTransaction";

-- DropTable
DROP TABLE "VoucherTransaction";

-- CreateTable
CREATE TABLE "AtomizerInventory" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "atomizerId" TEXT NOT NULL,
    "transactionId" TEXT NOT NULL,

    CONSTRAINT "AtomizerInventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CellInventory" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "cellId" TEXT NOT NULL,
    "transactionId" TEXT NOT NULL,

    CONSTRAINT "CellInventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModInventory" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "modId" TEXT NOT NULL,
    "transactionId" TEXT NOT NULL,

    CONSTRAINT "ModInventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CottonInventory" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "cottonId" TEXT NOT NULL,
    "transactionId" TEXT NOT NULL,

    CONSTRAINT "CottonInventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VoucherInventory" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "voucherId" TEXT NOT NULL,
    "transactionId" TEXT NOT NULL,

    CONSTRAINT "VoucherInventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AromaInventory" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "aromaId" TEXT NOT NULL,
    "transactionId" TEXT NOT NULL,

    CONSTRAINT "AromaInventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BoosterInventory" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "boosterId" TEXT NOT NULL,
    "transactionId" TEXT NOT NULL,

    CONSTRAINT "BoosterInventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BaseInventory" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "baseId" TEXT NOT NULL,
    "transactionId" TEXT NOT NULL,

    CONSTRAINT "BaseInventory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AtomizerInventory" ADD CONSTRAINT "AtomizerInventory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AtomizerInventory" ADD CONSTRAINT "AtomizerInventory_atomizerId_fkey" FOREIGN KEY ("atomizerId") REFERENCES "Atomizer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AtomizerInventory" ADD CONSTRAINT "AtomizerInventory_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CellInventory" ADD CONSTRAINT "CellInventory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CellInventory" ADD CONSTRAINT "CellInventory_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CellInventory" ADD CONSTRAINT "CellInventory_cellId_fkey" FOREIGN KEY ("cellId") REFERENCES "Cell"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModInventory" ADD CONSTRAINT "ModInventory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModInventory" ADD CONSTRAINT "ModInventory_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModInventory" ADD CONSTRAINT "ModInventory_modId_fkey" FOREIGN KEY ("modId") REFERENCES "Mod"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CottonInventory" ADD CONSTRAINT "CottonInventory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CottonInventory" ADD CONSTRAINT "CottonInventory_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CottonInventory" ADD CONSTRAINT "CottonInventory_cottonId_fkey" FOREIGN KEY ("cottonId") REFERENCES "Cotton"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VoucherInventory" ADD CONSTRAINT "VoucherInventory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VoucherInventory" ADD CONSTRAINT "VoucherInventory_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VoucherInventory" ADD CONSTRAINT "VoucherInventory_voucherId_fkey" FOREIGN KEY ("voucherId") REFERENCES "Voucher"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AromaInventory" ADD CONSTRAINT "AromaInventory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AromaInventory" ADD CONSTRAINT "AromaInventory_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AromaInventory" ADD CONSTRAINT "AromaInventory_aromaId_fkey" FOREIGN KEY ("aromaId") REFERENCES "Aroma"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoosterInventory" ADD CONSTRAINT "BoosterInventory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoosterInventory" ADD CONSTRAINT "BoosterInventory_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoosterInventory" ADD CONSTRAINT "BoosterInventory_boosterId_fkey" FOREIGN KEY ("boosterId") REFERENCES "Booster"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BaseInventory" ADD CONSTRAINT "BaseInventory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BaseInventory" ADD CONSTRAINT "BaseInventory_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BaseInventory" ADD CONSTRAINT "BaseInventory_baseId_fkey" FOREIGN KEY ("baseId") REFERENCES "Base"("id") ON DELETE CASCADE ON UPDATE CASCADE;
