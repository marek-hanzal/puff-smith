/*
  Warnings:

  - A unique constraint covering the columns `[name,wireId]` on the table `Coil` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Coil_name_key";

-- CreateIndex
CREATE UNIQUE INDEX "Coil_name_wireId_key" ON "Coil"("name", "wireId");
