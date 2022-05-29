/*
  Warnings:

  - Added the required column `wireId` to the `CoilInventory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CoilInventory" ADD COLUMN     "wireId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "CoilInventory" ADD CONSTRAINT "CoilInventory_wireId_fkey" FOREIGN KEY ("wireId") REFERENCES "Wire"("id") ON DELETE CASCADE ON UPDATE CASCADE;
