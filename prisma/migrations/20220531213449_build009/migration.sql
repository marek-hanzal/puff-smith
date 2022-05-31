-- CreateTable
CREATE TABLE "BuildLiquidRating" (
    "id" TEXT NOT NULL,
    "buildId" TEXT NOT NULL,
    "liquidId" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL,
    "rating" INTEGER,

    CONSTRAINT "BuildLiquidRating_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BuildLiquidRating" ADD CONSTRAINT "BuildLiquidRating_liquidId_fkey" FOREIGN KEY ("liquidId") REFERENCES "Liquid"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BuildLiquidRating" ADD CONSTRAINT "BuildLiquidRating_buildId_fkey" FOREIGN KEY ("buildId") REFERENCES "Build"("id") ON DELETE CASCADE ON UPDATE CASCADE;
