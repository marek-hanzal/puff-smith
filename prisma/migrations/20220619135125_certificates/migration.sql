/*
  Warnings:

  - You are about to drop the column `until` on the `Token` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Token" DROP COLUMN "until";

-- CreateTable
CREATE TABLE "Certificate" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "cost" DOUBLE PRECISION,

    CONSTRAINT "Certificate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CertificateToken" (
    "id" TEXT NOT NULL,
    "certificateId" TEXT NOT NULL,
    "tokenId" TEXT NOT NULL,

    CONSTRAINT "CertificateToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserCertificate" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "certificateId" TEXT NOT NULL,

    CONSTRAINT "UserCertificate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "License" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "cost" DOUBLE PRECISION,
    "renew" DOUBLE PRECISION,
    "duration" INTEGER,

    CONSTRAINT "License_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LicenseToken" (
    "id" TEXT NOT NULL,
    "licenseId" TEXT NOT NULL,
    "tokenId" TEXT NOT NULL,

    CONSTRAINT "LicenseToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserLicense" (
    "id" TEXT NOT NULL,
    "from" TIMESTAMP(3),
    "to" TIMESTAMP(3),
    "userId" TEXT NOT NULL,
    "licenseId" TEXT NOT NULL,

    CONSTRAINT "UserLicense_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Certificate_name_key" ON "Certificate"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Certificate_code_key" ON "Certificate"("code");

-- CreateIndex
CREATE UNIQUE INDEX "CertificateToken_certificateId_tokenId_key" ON "CertificateToken"("certificateId", "tokenId");

-- CreateIndex
CREATE UNIQUE INDEX "UserCertificate_userId_certificateId_key" ON "UserCertificate"("userId", "certificateId");

-- CreateIndex
CREATE UNIQUE INDEX "License_name_key" ON "License"("name");

-- CreateIndex
CREATE UNIQUE INDEX "License_code_key" ON "License"("code");

-- CreateIndex
CREATE UNIQUE INDEX "LicenseToken_licenseId_tokenId_key" ON "LicenseToken"("licenseId", "tokenId");

-- CreateIndex
CREATE UNIQUE INDEX "UserLicense_userId_licenseId_key" ON "UserLicense"("userId", "licenseId");

-- AddForeignKey
ALTER TABLE "CertificateToken" ADD CONSTRAINT "CertificateToken_tokenId_fkey" FOREIGN KEY ("tokenId") REFERENCES "Token"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CertificateToken" ADD CONSTRAINT "CertificateToken_certificateId_fkey" FOREIGN KEY ("certificateId") REFERENCES "Certificate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCertificate" ADD CONSTRAINT "UserCertificate_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCertificate" ADD CONSTRAINT "UserCertificate_certificateId_fkey" FOREIGN KEY ("certificateId") REFERENCES "Certificate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LicenseToken" ADD CONSTRAINT "LicenseToken_tokenId_fkey" FOREIGN KEY ("tokenId") REFERENCES "Token"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LicenseToken" ADD CONSTRAINT "LicenseToken_licenseId_fkey" FOREIGN KEY ("licenseId") REFERENCES "License"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLicense" ADD CONSTRAINT "UserLicense_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLicense" ADD CONSTRAINT "UserLicense_licenseId_fkey" FOREIGN KEY ("licenseId") REFERENCES "License"("id") ON DELETE CASCADE ON UPDATE CASCADE;
