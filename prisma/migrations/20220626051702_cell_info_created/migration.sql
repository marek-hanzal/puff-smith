/*
  Warnings:

  - Added the required column `created` to the `CellInfo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CellInfo" ADD COLUMN     "created" TIMESTAMP(3) NOT NULL;
