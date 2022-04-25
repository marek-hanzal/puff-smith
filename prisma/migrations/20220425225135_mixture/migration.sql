-- CreateEnum
CREATE TYPE "MixtureError" AS ENUM ('LESS', 'MORE', 'FULL');

-- CreateTable
CREATE TABLE "Mixture" (
    "id" TEXT NOT NULL,
    "volume" DECIMAL(10,2) NOT NULL,
    "content" DECIMAL(10,2) NOT NULL,
    "available" DECIMAL(10,2) NOT NULL,
    "diff" DECIMAL(10,2) NOT NULL,
    "nicotine" DECIMAL(10,2) NOT NULL,
    "nicotineToRound" INTEGER NOT NULL,
    "vg" DECIMAL(10,2) NOT NULL,
    "pg" DECIMAL(10,2) NOT NULL,
    "vgToMl" DECIMAL(10,2) NOT NULL,
    "vgToRound" INTEGER NOT NULL,
    "pgToMl" DECIMAL(10,2) NOT NULL,
    "pgToRound" INTEGER NOT NULL,
    "aromaId" TEXT NOT NULL,
    "boosterId" TEXT,
    "boosterCount" INTEGER NOT NULL,
    "baseId" TEXT,
    "baseMl" DECIMAL(10,2) NOT NULL,
    "error" "MixtureError",

    CONSTRAINT "Mixture_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Mixture" ADD CONSTRAINT "Mixture_aromaId_fkey" FOREIGN KEY ("aromaId") REFERENCES "Aroma"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mixture" ADD CONSTRAINT "Mixture_boosterId_fkey" FOREIGN KEY ("boosterId") REFERENCES "Booster"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mixture" ADD CONSTRAINT "Mixture_baseId_fkey" FOREIGN KEY ("baseId") REFERENCES "Base"("id") ON DELETE CASCADE ON UPDATE CASCADE;
