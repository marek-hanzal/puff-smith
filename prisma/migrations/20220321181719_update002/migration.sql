-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL,
    "public" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AtomizerComment" (
    "id" TEXT NOT NULL,
    "atomizerId" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,

    CONSTRAINT "AtomizerComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cell" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "drain" DECIMAL(10,2) NOT NULL,
    "voltage" DECIMAL(10,2) NOT NULL,
    "ohm" DECIMAL(10,2) NOT NULL,
    "cost" DECIMAL(10,2) NOT NULL,
    "typeId" TEXT NOT NULL,
    "vendorId" TEXT NOT NULL,

    CONSTRAINT "Cell_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CellTransaction" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "cellId" TEXT NOT NULL,
    "transactionId" TEXT NOT NULL,

    CONSTRAINT "CellTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CellComment" (
    "id" TEXT NOT NULL,
    "cellId" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,

    CONSTRAINT "CellComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mod" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "vendorId" TEXT NOT NULL,
    "cost" DECIMAL(10,2) NOT NULL,
    "voltage" DECIMAL(10,2) NOT NULL,
    "power" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "Mod_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModCell" (
    "id" TEXT NOT NULL,
    "modId" TEXT NOT NULL,
    "cellId" TEXT NOT NULL,

    CONSTRAINT "ModCell_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModTransaction" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "modId" TEXT NOT NULL,
    "transactionId" TEXT NOT NULL,

    CONSTRAINT "ModTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModComment" (
    "id" TEXT NOT NULL,
    "modId" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,

    CONSTRAINT "ModComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cotton" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "vendorId" TEXT NOT NULL,
    "cost" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "Cotton_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CottonTransaction" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "cottonId" TEXT NOT NULL,
    "transactionId" TEXT NOT NULL,

    CONSTRAINT "CottonTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CottonComment" (
    "id" TEXT NOT NULL,
    "cottonId" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,

    CONSTRAINT "CottonComment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cell_name_vendorId_key" ON "Cell"("name", "vendorId");

-- CreateIndex
CREATE UNIQUE INDEX "Mod_name_vendorId_key" ON "Mod"("name", "vendorId");

-- CreateIndex
CREATE UNIQUE INDEX "Cotton_name_vendorId_key" ON "Cotton"("name", "vendorId");

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AtomizerComment" ADD CONSTRAINT "AtomizerComment_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AtomizerComment" ADD CONSTRAINT "AtomizerComment_atomizerId_fkey" FOREIGN KEY ("atomizerId") REFERENCES "Atomizer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cell" ADD CONSTRAINT "Cell_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cell" ADD CONSTRAINT "Cell_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "Vendor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CellTransaction" ADD CONSTRAINT "CellTransaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CellTransaction" ADD CONSTRAINT "CellTransaction_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CellTransaction" ADD CONSTRAINT "CellTransaction_cellId_fkey" FOREIGN KEY ("cellId") REFERENCES "Cell"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CellComment" ADD CONSTRAINT "CellComment_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CellComment" ADD CONSTRAINT "CellComment_cellId_fkey" FOREIGN KEY ("cellId") REFERENCES "Cell"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mod" ADD CONSTRAINT "Mod_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "Vendor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModCell" ADD CONSTRAINT "ModCell_cellId_fkey" FOREIGN KEY ("cellId") REFERENCES "Cell"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModCell" ADD CONSTRAINT "ModCell_modId_fkey" FOREIGN KEY ("modId") REFERENCES "Mod"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModTransaction" ADD CONSTRAINT "ModTransaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModTransaction" ADD CONSTRAINT "ModTransaction_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModTransaction" ADD CONSTRAINT "ModTransaction_modId_fkey" FOREIGN KEY ("modId") REFERENCES "Mod"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModComment" ADD CONSTRAINT "ModComment_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModComment" ADD CONSTRAINT "ModComment_modId_fkey" FOREIGN KEY ("modId") REFERENCES "Mod"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cotton" ADD CONSTRAINT "Cotton_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "Vendor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CottonTransaction" ADD CONSTRAINT "CottonTransaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CottonTransaction" ADD CONSTRAINT "CottonTransaction_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CottonTransaction" ADD CONSTRAINT "CottonTransaction_cottonId_fkey" FOREIGN KEY ("cottonId") REFERENCES "Cotton"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CottonComment" ADD CONSTRAINT "CottonComment_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CottonComment" ADD CONSTRAINT "CottonComment_cottonId_fkey" FOREIGN KEY ("cottonId") REFERENCES "Cotton"("id") ON DELETE CASCADE ON UPDATE CASCADE;
