-- AlterTable
ALTER TABLE "UserCertificate" ADD COLUMN     "transactionId" TEXT;

-- AlterTable
ALTER TABLE "UserLicense" ADD COLUMN     "transactionId" TEXT;

-- AddForeignKey
ALTER TABLE "UserCertificate" ADD CONSTRAINT "UserCertificate_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLicense" ADD CONSTRAINT "UserLicense_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE CASCADE ON UPDATE CASCADE;
