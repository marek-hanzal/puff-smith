/*
  Warnings:

  - Added the required column `archived` to the `Build` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transactionId` to the `Build` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Build" ADD COLUMN     "archived" BOOLEAN NOT NULL,
ADD COLUMN     "transactionId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "CoilInventory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "coilId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "CoilInventory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CoilInventory_coilId_userId_key" ON "CoilInventory"("coilId", "userId");

-- AddForeignKey
ALTER TABLE "Build" ADD CONSTRAINT "Build_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CoilInventory" ADD CONSTRAINT "CoilInventory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CoilInventory" ADD CONSTRAINT "CoilInventory_coilId_fkey" FOREIGN KEY ("coilId") REFERENCES "Coil"("id") ON DELETE CASCADE ON UPDATE CASCADE;
