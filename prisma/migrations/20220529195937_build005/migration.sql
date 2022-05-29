/*
  Warnings:

  - Added the required column `atomizerId` to the `Build` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cottonId` to the `Build` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Build" ADD COLUMN     "atomizerId" TEXT NOT NULL,
ADD COLUMN     "cottonId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Build" ADD CONSTRAINT "Build_atomizerId_fkey" FOREIGN KEY ("atomizerId") REFERENCES "Atomizer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Build" ADD CONSTRAINT "Build_cottonId_fkey" FOREIGN KEY ("cottonId") REFERENCES "Cotton"("id") ON DELETE CASCADE ON UPDATE CASCADE;
