-- AlterTable
ALTER TABLE "UserCertificateRequest" ADD COLUMN     "userCertificateId" TEXT;

-- AddForeignKey
ALTER TABLE "UserCertificateRequest" ADD CONSTRAINT "UserCertificateRequest_userCertificateId_fkey" FOREIGN KEY ("userCertificateId") REFERENCES "UserCertificate"("id") ON DELETE CASCADE ON UPDATE CASCADE;
