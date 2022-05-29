/*
  Warnings:

  - Added the required column `ohm` to the `Build` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Build" ADD COLUMN     "ohm" DECIMAL(5,3) NOT NULL;
