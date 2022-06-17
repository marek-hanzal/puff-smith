/*
  Warnings:

  - A unique constraint covering the columns `[userId,aromaId]` on the table `AromaInventory` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,baseId]` on the table `BaseInventory` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,boosterId]` on the table `BoosterInventory` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "AromaInventory" ALTER COLUMN "transactionId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "BaseInventory" ALTER COLUMN "transactionId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "BoosterInventory" ALTER COLUMN "transactionId" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "AromaInventory_userId_aromaId_key" ON "AromaInventory"("userId", "aromaId");

-- CreateIndex
CREATE UNIQUE INDEX "BaseInventory_userId_baseId_key" ON "BaseInventory"("userId", "baseId");

-- CreateIndex
CREATE UNIQUE INDEX "BoosterInventory_userId_boosterId_key" ON "BoosterInventory"("userId", "boosterId");
