-- CreateTable
CREATE TABLE "Voucher" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cost" DECIMAL(10,2) NOT NULL,
    "maxFortune" DECIMAL(10,2),

    CONSTRAINT "Voucher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VoucherTransaction" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "voucherId" TEXT NOT NULL,
    "transactionId" TEXT NOT NULL,

    CONSTRAINT "VoucherTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Voucher_name_key" ON "Voucher"("name");

-- AddForeignKey
ALTER TABLE "VoucherTransaction" ADD CONSTRAINT "VoucherTransaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VoucherTransaction" ADD CONSTRAINT "VoucherTransaction_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VoucherTransaction" ADD CONSTRAINT "VoucherTransaction_voucherId_fkey" FOREIGN KEY ("voucherId") REFERENCES "Voucher"("id") ON DELETE CASCADE ON UPDATE CASCADE;
