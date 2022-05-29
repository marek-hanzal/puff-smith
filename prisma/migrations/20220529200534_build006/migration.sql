/*
  Warnings:

  - Added the required column `coilId` to the `Build` table without a default value. This is not possible if the table is not empty.

*/

DELETE FROM "Coil";

-- AlterTable
ALTER TABLE "Build" ADD COLUMN     "coilId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Build" ADD CONSTRAINT "Build_coilId_fkey" FOREIGN KEY ("coilId") REFERENCES "Coil"("id") ON DELETE CASCADE ON UPDATE CASCADE;
