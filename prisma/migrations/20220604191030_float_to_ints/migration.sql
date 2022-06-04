/*
  Warnings:

  - You are about to alter the column `content` on the `Aroma` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `volume` on the `Aroma` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `pg` on the `Aroma` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `vg` on the `Aroma` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `volume` on the `Booster` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to drop the column `error` on the `Mixture` table. All the data in the column will be lost.
  - You are about to alter the column `volume` on the `Mixture` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `content` on the `Mixture` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `available` on the `Mixture` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `diff` on the `Mixture` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `nicotine` on the `Mixture` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `baseMl` on the `Mixture` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Aroma" ALTER COLUMN "content" SET DATA TYPE INTEGER,
ALTER COLUMN "volume" SET DATA TYPE INTEGER,
ALTER COLUMN "pg" SET DATA TYPE INTEGER,
ALTER COLUMN "vg" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "Booster" ALTER COLUMN "volume" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "Mixture" DROP COLUMN "error",
ALTER COLUMN "volume" SET DATA TYPE INTEGER,
ALTER COLUMN "content" SET DATA TYPE INTEGER,
ALTER COLUMN "available" SET DATA TYPE INTEGER,
ALTER COLUMN "diff" SET DATA TYPE INTEGER,
ALTER COLUMN "nicotine" SET DATA TYPE INTEGER,
ALTER COLUMN "baseMl" SET DATA TYPE INTEGER;

-- DropEnum
DROP TYPE "MixtureError";
