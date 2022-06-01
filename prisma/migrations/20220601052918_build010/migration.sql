-- CreateTable
CREATE TABLE "BuildLiquidTasteRating" (
    "id" TEXT NOT NULL,
    "buildId" TEXT NOT NULL,
    "liquidId" TEXT NOT NULL,
    "tasteId" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL,
    "rating" INTEGER,

    CONSTRAINT "BuildLiquidTasteRating_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BuildLiquidTasteRating_buildId_liquidId_tasteId_key" ON "BuildLiquidTasteRating"("buildId", "liquidId", "tasteId");

-- AddForeignKey
ALTER TABLE "BuildLiquidTasteRating" ADD CONSTRAINT "BuildLiquidTasteRating_tasteId_fkey" FOREIGN KEY ("tasteId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BuildLiquidTasteRating" ADD CONSTRAINT "BuildLiquidTasteRating_liquidId_fkey" FOREIGN KEY ("liquidId") REFERENCES "Liquid"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BuildLiquidTasteRating" ADD CONSTRAINT "BuildLiquidTasteRating_buildId_fkey" FOREIGN KEY ("buildId") REFERENCES "Build"("id") ON DELETE CASCADE ON UPDATE CASCADE;
