/*
  Warnings:

  - Made the column `volume` on table `Aroma` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Aroma" ALTER COLUMN "volume" SET NOT NULL;
