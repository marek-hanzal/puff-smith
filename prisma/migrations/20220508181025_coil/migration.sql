/*
  Warnings:

  - A unique constraint covering the columns `[aromaId,boosterId,baseId,nicotine]` on the table `Mixture` will be added. If there are existing duplicate values, this will fail.

*/

DELETE FROM "Tag" WHERE "group" = 'material';

-- CreateTable
CREATE TABLE "Build" (
    "id" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Build_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coil" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "size" DECIMAL(10,2) NOT NULL,
    "wraps" INTEGER NOT NULL,
    "wireId" TEXT NOT NULL,
    "vendorId" TEXT NOT NULL,

    CONSTRAINT "Coil_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CoilDraw" (
    "id" TEXT NOT NULL,
    "coilId" TEXT NOT NULL,
    "drawId" TEXT NOT NULL,

    CONSTRAINT "CoilDraw_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Wire" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
	"cost" DECIMAL(10,2) NOT NULL,
    "isTCR" BOOLEAN NOT NULL,
    "mm" DECIMAL(10,2) NOT NULL,
    "mmToRound" DECIMAL(10,2) NOT NULL,
    "vendorId" TEXT NOT NULL,

    CONSTRAINT "Wire_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WireDraw" (
    "id" TEXT NOT NULL,
    "wireId" TEXT NOT NULL,
    "drawId" TEXT NOT NULL,

    CONSTRAINT "WireDraw_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WireFiber" (
    "id" TEXT NOT NULL,
    "count" INTEGER NOT NULL,
    "wireId" TEXT NOT NULL,
    "fiberId" TEXT NOT NULL,

    CONSTRAINT "WireFiber_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fiber" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "mm" DECIMAL(10,2) NOT NULL,
    "ga" INTEGER NOT NULL,
    "materialId" TEXT NOT NULL,

    CONSTRAINT "Fiber_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Coil_code_key" ON "Coil"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Coil_name_vendorId_key" ON "Coil"("name", "vendorId");

-- CreateIndex
CREATE UNIQUE INDEX "Wire_code_key" ON "Wire"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Wire_name_vendorId_key" ON "Wire"("name", "vendorId");

-- CreateIndex
CREATE UNIQUE INDEX "Fiber_code_key" ON "Fiber"("code");

-- AddForeignKey
ALTER TABLE "Build" ADD CONSTRAINT "Build_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coil" ADD CONSTRAINT "Coil_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "Vendor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coil" ADD CONSTRAINT "Coil_wireId_fkey" FOREIGN KEY ("wireId") REFERENCES "Wire"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CoilDraw" ADD CONSTRAINT "CoilDraw_drawId_fkey" FOREIGN KEY ("drawId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CoilDraw" ADD CONSTRAINT "CoilDraw_coilId_fkey" FOREIGN KEY ("coilId") REFERENCES "Coil"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wire" ADD CONSTRAINT "Wire_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "Vendor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WireDraw" ADD CONSTRAINT "WireDraw_drawId_fkey" FOREIGN KEY ("drawId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WireDraw" ADD CONSTRAINT "WireDraw_wireId_fkey" FOREIGN KEY ("wireId") REFERENCES "Wire"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WireFiber" ADD CONSTRAINT "WireFiber_wireId_fkey" FOREIGN KEY ("wireId") REFERENCES "Wire"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WireFiber" ADD CONSTRAINT "WireFiber_fiberId_fkey" FOREIGN KEY ("fiberId") REFERENCES "Fiber"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fiber" ADD CONSTRAINT "Fiber_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- CreateIndex
CREATE UNIQUE INDEX "Fiber_ga_materialId_key" ON "Fiber"("ga", "materialId");
