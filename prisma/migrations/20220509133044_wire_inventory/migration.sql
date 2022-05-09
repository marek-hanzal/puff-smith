-- CreateTable
CREATE TABLE "WireInventory" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "wireId" TEXT NOT NULL,
    "transactionId" TEXT NOT NULL,

    CONSTRAINT "WireInventory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "WireInventory" ADD CONSTRAINT "WireInventory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WireInventory" ADD CONSTRAINT "WireInventory_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WireInventory" ADD CONSTRAINT "WireInventory_wireId_fkey" FOREIGN KEY ("wireId") REFERENCES "Wire"("id") ON DELETE CASCADE ON UPDATE CASCADE;
