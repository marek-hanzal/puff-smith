-- CreateTable
CREATE TABLE "UserCertificateRequest" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "certificateId" TEXT NOT NULL,
    "approverId" TEXT,
    "status" INTEGER,
    "created" TIMESTAMP(3) NOT NULL,
    "updated" TIMESTAMP(3),

    CONSTRAINT "UserCertificateRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserLicenseRequest" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "licenseId" TEXT NOT NULL,
    "approverId" TEXT,
    "status" INTEGER,
    "created" TIMESTAMP(3) NOT NULL,
    "updated" TIMESTAMP(3),

    CONSTRAINT "UserLicenseRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserCertificateRequest_userId_certificateId_key" ON "UserCertificateRequest"("userId", "certificateId");

-- CreateIndex
CREATE UNIQUE INDEX "UserLicenseRequest_userId_licenseId_key" ON "UserLicenseRequest"("userId", "licenseId");

-- AddForeignKey
ALTER TABLE "UserCertificateRequest" ADD CONSTRAINT "UserCertificateRequest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCertificateRequest" ADD CONSTRAINT "UserCertificateRequest_approverId_fkey" FOREIGN KEY ("approverId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCertificateRequest" ADD CONSTRAINT "UserCertificateRequest_certificateId_fkey" FOREIGN KEY ("certificateId") REFERENCES "Certificate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLicenseRequest" ADD CONSTRAINT "UserLicenseRequest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLicenseRequest" ADD CONSTRAINT "UserLicenseRequest_approverId_fkey" FOREIGN KEY ("approverId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLicenseRequest" ADD CONSTRAINT "UserLicenseRequest_licenseId_fkey" FOREIGN KEY ("licenseId") REFERENCES "License"("id") ON DELETE CASCADE ON UPDATE CASCADE;
