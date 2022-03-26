/*
  Warnings:

  - You are about to drop the column `mxied` on the `Liquid` table. All the data in the column will be lost.
  - Added the required column `mixed` to the `Liquid` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Liquid" DROP COLUMN "mxied",
ADD COLUMN     "mixed" TIMESTAMP(3) NOT NULL;
