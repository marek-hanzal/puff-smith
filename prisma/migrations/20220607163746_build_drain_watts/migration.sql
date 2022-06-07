-- AlterTable
ALTER TABLE "Atomizer" ADD COLUMN     "isHybrid" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Build" ADD COLUMN     "drain" DOUBLE PRECISION,
ADD COLUMN     "watts" DOUBLE PRECISION;
