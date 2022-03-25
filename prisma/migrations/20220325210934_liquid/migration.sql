-- CreateTable
CREATE TABLE "Aroma" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cost" DECIMAL(10,2) NOT NULL,
    "volume" DECIMAL(10,2) NOT NULL,
    "pg" DECIMAL(10,2) NOT NULL,
    "vg" DECIMAL(10,2) NOT NULL,
    "vendorId" TEXT NOT NULL,
    "steep" INTEGER NOT NULL DEFAULT 14,

    CONSTRAINT "Aroma_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AromaComment" (
    "id" TEXT NOT NULL,
    "aromaId" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,

    CONSTRAINT "AromaComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AromaTransaction" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "aromaId" TEXT NOT NULL,
    "transactionId" TEXT NOT NULL,

    CONSTRAINT "AromaTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Booster" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cost" DECIMAL(10,2) NOT NULL,
    "volume" DECIMAL(10,2) NOT NULL,
    "nicotine" DECIMAL(10,2) NOT NULL,
    "pg" DECIMAL(10,2) NOT NULL,
    "vg" DECIMAL(10,2) NOT NULL,
    "vendorId" TEXT NOT NULL,

    CONSTRAINT "Booster_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BoosterTransaction" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "boosterId" TEXT NOT NULL,
    "transactionId" TEXT NOT NULL,

    CONSTRAINT "BoosterTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Base" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cost" DECIMAL(10,2) NOT NULL,
    "pg" DECIMAL(10,2) NOT NULL,
    "vg" DECIMAL(10,2) NOT NULL,
    "vendorId" TEXT NOT NULL,

    CONSTRAINT "Base_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BaseTransaction" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "baseId" TEXT NOT NULL,
    "transactionId" TEXT NOT NULL,

    CONSTRAINT "BaseTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Liquid" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nicotine" DECIMAL(10,2) NOT NULL DEFAULT 0,
    "pg" DECIMAL(10,2) NOT NULL,
    "vg" DECIMAL(10,2) NOT NULL,
    "volume" DECIMAL(10,2) NOT NULL,
    "userId" TEXT NOT NULL,
    "steep" INTEGER NOT NULL,
    "created" TIMESTAMP(3) NOT NULL,
    "mxied" TIMESTAMP(3) NOT NULL,
    "archived" TIMESTAMP(3),

    CONSTRAINT "Liquid_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LiquidAroma" (
    "id" TEXT NOT NULL,
    "content" DECIMAL(10,2) NOT NULL,
    "liquidId" TEXT NOT NULL,
    "aromaId" TEXT NOT NULL,

    CONSTRAINT "LiquidAroma_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LiquidBase" (
    "id" TEXT NOT NULL,
    "content" DECIMAL(10,2) NOT NULL,
    "liquidId" TEXT NOT NULL,
    "baseId" TEXT NOT NULL,

    CONSTRAINT "LiquidBase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LiquidBooster" (
    "id" TEXT NOT NULL,
    "content" DECIMAL(10,2) NOT NULL,
    "liquidId" TEXT NOT NULL,
    "boosterId" TEXT NOT NULL,

    CONSTRAINT "LiquidBooster_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Aroma_name_vendorId_key" ON "Aroma"("name", "vendorId");

-- CreateIndex
CREATE UNIQUE INDEX "Booster_name_vendorId_key" ON "Booster"("name", "vendorId");

-- CreateIndex
CREATE UNIQUE INDEX "Base_name_vendorId_key" ON "Base"("name", "vendorId");

-- AddForeignKey
ALTER TABLE "Aroma" ADD CONSTRAINT "Aroma_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "Vendor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AromaComment" ADD CONSTRAINT "AromaComment_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AromaComment" ADD CONSTRAINT "AromaComment_aromaId_fkey" FOREIGN KEY ("aromaId") REFERENCES "Aroma"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AromaTransaction" ADD CONSTRAINT "AromaTransaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AromaTransaction" ADD CONSTRAINT "AromaTransaction_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AromaTransaction" ADD CONSTRAINT "AromaTransaction_aromaId_fkey" FOREIGN KEY ("aromaId") REFERENCES "Aroma"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booster" ADD CONSTRAINT "Booster_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "Vendor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoosterTransaction" ADD CONSTRAINT "BoosterTransaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoosterTransaction" ADD CONSTRAINT "BoosterTransaction_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoosterTransaction" ADD CONSTRAINT "BoosterTransaction_boosterId_fkey" FOREIGN KEY ("boosterId") REFERENCES "Booster"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Base" ADD CONSTRAINT "Base_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "Vendor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BaseTransaction" ADD CONSTRAINT "BaseTransaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BaseTransaction" ADD CONSTRAINT "BaseTransaction_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BaseTransaction" ADD CONSTRAINT "BaseTransaction_baseId_fkey" FOREIGN KEY ("baseId") REFERENCES "Base"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Liquid" ADD CONSTRAINT "Liquid_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiquidAroma" ADD CONSTRAINT "LiquidAroma_aromaId_fkey" FOREIGN KEY ("aromaId") REFERENCES "Aroma"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiquidAroma" ADD CONSTRAINT "LiquidAroma_liquidId_fkey" FOREIGN KEY ("liquidId") REFERENCES "Liquid"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiquidBase" ADD CONSTRAINT "LiquidBase_baseId_fkey" FOREIGN KEY ("baseId") REFERENCES "Base"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiquidBase" ADD CONSTRAINT "LiquidBase_liquidId_fkey" FOREIGN KEY ("liquidId") REFERENCES "Liquid"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiquidBooster" ADD CONSTRAINT "LiquidBooster_boosterId_fkey" FOREIGN KEY ("boosterId") REFERENCES "Booster"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiquidBooster" ADD CONSTRAINT "LiquidBooster_liquidId_fkey" FOREIGN KEY ("liquidId") REFERENCES "Liquid"("id") ON DELETE CASCADE ON UPDATE CASCADE;
