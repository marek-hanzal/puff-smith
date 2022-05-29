/*
  Warnings:

  - A unique constraint covering the columns `[mixtureId,userId]` on the table `MixtureInventory` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "MixtureInventory_mixtureId_userId_key" ON "MixtureInventory"("mixtureId", "userId");
