/*
  Warnings:

  - A unique constraint covering the columns `[buildId,liquidId]` on the table `BuildLiquidRating` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "BuildLiquidRating_buildId_liquidId_key" ON "BuildLiquidRating"("buildId", "liquidId");
