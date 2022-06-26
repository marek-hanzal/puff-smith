-- AlterTable
ALTER TABLE "Cell" ADD COLUMN     "capacity" INTEGER;

-- CreateTable
CREATE TABLE "CellInfo" (
    "id" TEXT NOT NULL,
    "cellId" TEXT NOT NULL,
    "cellInventoryId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "capacity" INTEGER,
    "capacityRatio" DOUBLE PRECISION,
    "voltage" INTEGER,
    "voltageRatio" DOUBLE PRECISION,
    "health" DOUBLE PRECISION,

    CONSTRAINT "CellInfo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CellInfo" ADD CONSTRAINT "CellInfo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CellInfo" ADD CONSTRAINT "CellInfo_cellId_fkey" FOREIGN KEY ("cellId") REFERENCES "Cell"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CellInfo" ADD CONSTRAINT "CellInfo_cellInventoryId_fkey" FOREIGN KEY ("cellInventoryId") REFERENCES "CellInventory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
