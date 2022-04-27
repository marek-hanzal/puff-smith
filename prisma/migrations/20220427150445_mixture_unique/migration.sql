/*
  Warnings:

  - A unique constraint covering the columns `[aromaId,boosterId,baseId,nicotine]` on the table `Mixture` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Mixture_aromaId_boosterId_baseId_nicotine_key" ON "Mixture"(hash_record_extended(("aromaId", "boosterId", "baseId", "nicotine"), 0));
