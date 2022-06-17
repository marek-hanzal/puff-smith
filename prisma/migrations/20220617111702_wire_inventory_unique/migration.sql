/*
  Warnings:

  - A unique constraint covering the columns `[userId,wireId]` on the table `WireInventory` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "WireInventory_userId_wireId_key" ON "WireInventory"("userId", "wireId");
