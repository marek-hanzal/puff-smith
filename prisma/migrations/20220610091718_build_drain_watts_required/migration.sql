/*
  Warnings:

  - Made the column `drain` on table `Build` required. This step will fail if there are existing NULL values in that column.
  - Made the column `watts` on table `Build` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Build" ALTER COLUMN "drain" SET NOT NULL,
ALTER COLUMN "watts" SET NOT NULL;
