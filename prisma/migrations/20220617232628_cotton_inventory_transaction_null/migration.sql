-- DropForeignKey
ALTER TABLE "Atomizer" DROP CONSTRAINT "Atomizer_userId_fkey";

-- AlterTable
ALTER TABLE "CottonInventory" ALTER COLUMN "transactionId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Atomizer" ADD CONSTRAINT "Atomizer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
