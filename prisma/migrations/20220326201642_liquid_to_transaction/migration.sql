/*
  Warnings:

  - Added the required column `transactionId` to the `Liquid` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Liquid" ADD COLUMN     "transactionId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Liquid" ADD CONSTRAINT "Liquid_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE CASCADE ON UPDATE CASCADE;
