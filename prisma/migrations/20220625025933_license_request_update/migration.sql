-- AlterTable
ALTER TABLE "UserLicenseRequest" ADD COLUMN     "userLicenseId" TEXT;

-- AddForeignKey
ALTER TABLE "UserLicenseRequest" ADD CONSTRAINT "UserLicenseRequest_userLicenseId_fkey" FOREIGN KEY ("userLicenseId") REFERENCES "UserLicense"("id") ON DELETE CASCADE ON UPDATE CASCADE;
