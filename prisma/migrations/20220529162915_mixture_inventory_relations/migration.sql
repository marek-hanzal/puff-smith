-- AlterTable
ALTER TABLE "MixtureInventory" ADD COLUMN     "aromaInventoryId" TEXT,
ADD COLUMN     "baseInventoryId" TEXT,
ADD COLUMN     "boosterInventoryId" TEXT;

-- AddForeignKey
ALTER TABLE "MixtureInventory" ADD CONSTRAINT "MixtureInventory_aromaInventoryId_fkey" FOREIGN KEY ("aromaInventoryId") REFERENCES "AromaInventory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MixtureInventory" ADD CONSTRAINT "MixtureInventory_boosterInventoryId_fkey" FOREIGN KEY ("boosterInventoryId") REFERENCES "BoosterInventory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MixtureInventory" ADD CONSTRAINT "MixtureInventory_baseInventoryId_fkey" FOREIGN KEY ("baseInventoryId") REFERENCES "BaseInventory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
