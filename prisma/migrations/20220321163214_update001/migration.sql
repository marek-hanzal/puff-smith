-- CreateEnum
CREATE TYPE "JobStatus" AS ENUM ('NEW', 'RUNNING', 'SUCCESS', 'FAILURE', 'REVIEW', 'DONE');

-- CreateTable
CREATE TABLE "Job" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "status" "JobStatus" NOT NULL DEFAULT E'NEW',
    "total" INTEGER NOT NULL DEFAULT 0,
    "progress" DECIMAL(5,2) NOT NULL DEFAULT 0,
    "success" INTEGER,
    "successRatio" DECIMAL(5,2),
    "failure" INTEGER,
    "failureRatio" DECIMAL(5,2),
    "skip" INTEGER,
    "skipRatio" DECIMAL(5,2),
    "created" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,
    "params" TEXT,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobLog" (
    "id" TEXT NOT NULL,
    "jobId" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "JobLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "label" TEXT,
    "group" TEXT NOT NULL,
    "sort" INTEGER,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vendor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Vendor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Atomizer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "vendorId" TEXT NOT NULL,
    "typeId" TEXT NOT NULL,
    "coilMin" DECIMAL(3,2),
    "coilMax" DECIMAL(3,2),
    "dualCoil" BOOLEAN NOT NULL DEFAULT false,
    "squonk" BOOLEAN NOT NULL DEFAULT false,
    "cost" DECIMAL(5,2),

    CONSTRAINT "Atomizer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AtomizerDraw" (
    "id" TEXT NOT NULL,
    "atomizerId" TEXT NOT NULL,
    "drawId" TEXT NOT NULL,

    CONSTRAINT "AtomizerDraw_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" TEXT NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "created" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "note" TEXT,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AtomizerTransaction" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "atomizerId" TEXT NOT NULL,
    "transactionId" TEXT NOT NULL,

    CONSTRAINT "AtomizerTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tag_code_group_key" ON "Tag"("code", "group");

-- CreateIndex
CREATE UNIQUE INDEX "Vendor_name_key" ON "Vendor"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Atomizer_name_vendorId_key" ON "Atomizer"("name", "vendorId");

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobLog" ADD CONSTRAINT "JobLog_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Atomizer" ADD CONSTRAINT "Atomizer_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Atomizer" ADD CONSTRAINT "Atomizer_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "Vendor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AtomizerDraw" ADD CONSTRAINT "AtomizerDraw_drawId_fkey" FOREIGN KEY ("drawId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AtomizerDraw" ADD CONSTRAINT "AtomizerDraw_atomizerId_fkey" FOREIGN KEY ("atomizerId") REFERENCES "Atomizer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AtomizerTransaction" ADD CONSTRAINT "AtomizerTransaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AtomizerTransaction" ADD CONSTRAINT "AtomizerTransaction_atomizerId_fkey" FOREIGN KEY ("atomizerId") REFERENCES "Atomizer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AtomizerTransaction" ADD CONSTRAINT "AtomizerTransaction_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE CASCADE ON UPDATE CASCADE;
