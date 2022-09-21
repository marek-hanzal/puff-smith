-- CreateEnum
CREATE TYPE "JobStatus" AS ENUM ('NEW', 'RUNNING', 'SUCCESS', 'FAILURE', 'REVIEW', 'DONE');

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    "oauth_token_secret" TEXT,
    "oauth_token" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "tariffId" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "Token" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Token_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserToken" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "tokenId" TEXT NOT NULL,

    CONSTRAINT "UserToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Translation" (
    "id" TEXT NOT NULL,
    "language" VARCHAR(32) NOT NULL,
    "label" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "hash" VARCHAR(128) NOT NULL,

    CONSTRAINT "Translation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Keyword" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "Keyword_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "File" (
    "id" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "mime" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "ttl" INTEGER,
    "created" TIMESTAMP(3) NOT NULL,
    "updated" TIMESTAMP(3),
    "userId" TEXT NOT NULL,

    CONSTRAINT "File_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Job" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "status" "JobStatus" NOT NULL DEFAULT 'NEW',
    "total" INTEGER NOT NULL DEFAULT 0,
    "progress" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "success" INTEGER NOT NULL,
    "successRatio" DOUBLE PRECISION NOT NULL,
    "failure" INTEGER NOT NULL,
    "failureRatio" DOUBLE PRECISION NOT NULL,
    "skip" INTEGER NOT NULL,
    "skipRatio" DOUBLE PRECISION NOT NULL,
    "created" TIMESTAMP(3) NOT NULL,
    "started" TIMESTAMP(3),
    "finished" TIMESTAMP(3),
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
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommentRating" (
    "id" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,

    CONSTRAINT "CommentRating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "group" TEXT NOT NULL,
    "sort" INTEGER,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TagKeyword" (
    "id" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,
    "keywordId" TEXT NOT NULL,

    CONSTRAINT "TagKeyword_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vendor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Vendor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tariff" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "description" TEXT,
    "from" TIMESTAMP(3),
    "to" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tariff_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Price" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "tariffId" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Price_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" TEXT NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "created" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "priceId" TEXT,
    "note" TEXT,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Atomizer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "vendorId" TEXT NOT NULL,
    "typeId" TEXT NOT NULL,
    "coilMin" DECIMAL(3,2),
    "coilMax" DECIMAL(3,2),
    "wrapsMin" INTEGER,
    "wrapsMax" INTEGER,
    "dualCoil" BOOLEAN NOT NULL DEFAULT false,
    "squonk" BOOLEAN NOT NULL DEFAULT false,
    "isHybrid" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT,

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
CREATE TABLE "AtomizerComment" (
    "id" TEXT NOT NULL,
    "atomizerId" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,

    CONSTRAINT "AtomizerComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AtomizerInventory" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "atomizerId" TEXT NOT NULL,
    "rating" INTEGER,

    CONSTRAINT "AtomizerInventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AtomizerInventoryComment" (
    "id" TEXT NOT NULL,
    "atomizerInventoryId" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,

    CONSTRAINT "AtomizerInventoryComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cell" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "voltage" DOUBLE PRECISION NOT NULL,
    "voltageMax" DOUBLE PRECISION,
    "drain" DOUBLE PRECISION,
    "ohm" DOUBLE PRECISION,
    "capacity" INTEGER,
    "typeId" TEXT NOT NULL,
    "vendorId" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Cell_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CellComment" (
    "id" TEXT NOT NULL,
    "cellId" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,

    CONSTRAINT "CellComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CellInventory" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "cellId" TEXT NOT NULL,
    "rating" INTEGER,

    CONSTRAINT "CellInventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CellHealth" (
    "id" TEXT NOT NULL,
    "cellId" TEXT NOT NULL,
    "cellInventoryId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "capacity" INTEGER,
    "capacityRatio" DOUBLE PRECISION,
    "voltage" DOUBLE PRECISION,
    "voltageRatio" DOUBLE PRECISION,
    "health" DOUBLE PRECISION,
    "created" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CellHealth_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CellInventoryComment" (
    "id" TEXT NOT NULL,
    "cellInventoryId" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,

    CONSTRAINT "CellInventoryComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mod" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "vendorId" TEXT NOT NULL,
    "voltage" DOUBLE PRECISION NOT NULL,
    "power" DOUBLE PRECISION NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Mod_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModComment" (
    "id" TEXT NOT NULL,
    "modId" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,

    CONSTRAINT "ModComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModCell" (
    "id" TEXT NOT NULL,
    "modId" TEXT NOT NULL,
    "cellId" TEXT NOT NULL,

    CONSTRAINT "ModCell_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModInventory" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "modId" TEXT NOT NULL,
    "rating" INTEGER,

    CONSTRAINT "ModInventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModInventoryComment" (
    "id" TEXT NOT NULL,
    "modInventoryId" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,

    CONSTRAINT "ModInventoryComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cotton" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "vendorId" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Cotton_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CottonComment" (
    "id" TEXT NOT NULL,
    "cottonId" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,

    CONSTRAINT "CottonComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CottonDraw" (
    "id" TEXT NOT NULL,
    "cottonId" TEXT NOT NULL,
    "drawId" TEXT NOT NULL,

    CONSTRAINT "CottonDraw_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CottonInventory" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "cottonId" TEXT NOT NULL,
    "rating" INTEGER,

    CONSTRAINT "CottonInventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CottonInventoryComment" (
    "id" TEXT NOT NULL,
    "cottonInventoryId" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,

    CONSTRAINT "CottonInventoryComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Voucher" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "premium" DOUBLE PRECISION NOT NULL,
    "maxFortune" DOUBLE PRECISION,

    CONSTRAINT "Voucher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VoucherInventory" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "voucherId" TEXT NOT NULL,

    CONSTRAINT "VoucherInventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Aroma" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "content" INTEGER NOT NULL,
    "volume" INTEGER NOT NULL,
    "pg" INTEGER NOT NULL,
    "vg" INTEGER NOT NULL,
    "nicotine" INTEGER DEFAULT 0,
    "vendorId" TEXT NOT NULL,
    "steep" INTEGER NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Aroma_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AromaKeyword" (
    "id" TEXT NOT NULL,
    "aromaId" TEXT NOT NULL,
    "keywordId" TEXT NOT NULL,

    CONSTRAINT "AromaKeyword_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AromaTaste" (
    "id" TEXT NOT NULL,
    "aromaId" TEXT NOT NULL,
    "tasteId" TEXT NOT NULL,

    CONSTRAINT "AromaTaste_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AromaComment" (
    "id" TEXT NOT NULL,
    "aromaId" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,

    CONSTRAINT "AromaComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AromaInventory" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "aromaId" TEXT NOT NULL,
    "rating" INTEGER,

    CONSTRAINT "AromaInventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AromaInventoryComment" (
    "id" TEXT NOT NULL,
    "aromaInventoryId" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,

    CONSTRAINT "AromaInventoryComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Liquid" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "aromaId" TEXT NOT NULL,
    "vendorId" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL,
    "mixed" TIMESTAMP(3) NOT NULL,
    "rating" INTEGER,

    CONSTRAINT "Liquid_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Build" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL,
    "coilId" TEXT NOT NULL,
    "cottonId" TEXT NOT NULL,
    "ohm" DECIMAL(5,3) NOT NULL,
    "drain" DOUBLE PRECISION NOT NULL,
    "watts" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Build_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BuildAtomizer" (
    "id" TEXT NOT NULL,
    "buildId" TEXT NOT NULL,
    "atomizerId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "rating" INTEGER,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "transactionId" TEXT NOT NULL,

    CONSTRAINT "BuildAtomizer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BuildAtomizerComment" (
    "id" TEXT NOT NULL,
    "buildAtomizerId" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,

    CONSTRAINT "BuildAtomizerComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BuildLiquidTasteRating" (
    "id" TEXT NOT NULL,
    "buildId" TEXT NOT NULL,
    "liquidId" TEXT NOT NULL,
    "tasteId" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL,
    "rating" INTEGER,

    CONSTRAINT "BuildLiquidTasteRating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BuildLiquidRating" (
    "id" TEXT NOT NULL,
    "buildId" TEXT NOT NULL,
    "liquidId" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL,
    "rating" INTEGER,

    CONSTRAINT "BuildLiquidRating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coil" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "size" DECIMAL(3,2) NOT NULL,
    "wraps" INTEGER NOT NULL,
    "wireId" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Coil_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CoilDraw" (
    "id" TEXT NOT NULL,
    "coilId" TEXT NOT NULL,
    "drawId" TEXT NOT NULL,

    CONSTRAINT "CoilDraw_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Wire" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "isTCR" BOOLEAN NOT NULL,
    "mm" DOUBLE PRECISION NOT NULL,
    "mmToRound" DOUBLE PRECISION NOT NULL,
    "vendorId" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Wire_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WireInventory" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "wireId" TEXT NOT NULL,
    "rating" INTEGER,

    CONSTRAINT "WireInventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WireDraw" (
    "id" TEXT NOT NULL,
    "wireId" TEXT NOT NULL,
    "drawId" TEXT NOT NULL,

    CONSTRAINT "WireDraw_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WireFiber" (
    "id" TEXT NOT NULL,
    "count" INTEGER NOT NULL,
    "wireId" TEXT NOT NULL,
    "fiberId" TEXT NOT NULL,

    CONSTRAINT "WireFiber_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fiber" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "mm" DOUBLE PRECISION NOT NULL,
    "ga" INTEGER NOT NULL,
    "materialId" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Fiber_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Certificate" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,

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
CREATE TABLE "UserCertificateRequest" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "certificateId" TEXT NOT NULL,
    "approverId" TEXT,
    "userCertificateId" TEXT,
    "status" INTEGER,
    "created" TIMESTAMP(3) NOT NULL,
    "updated" TIMESTAMP(3),

    CONSTRAINT "UserCertificateRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "License" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
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

-- CreateTable
CREATE TABLE "UserLicenseRequest" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "licenseId" TEXT NOT NULL,
    "approverId" TEXT,
    "userLicenseId" TEXT,
    "status" INTEGER,
    "created" TIMESTAMP(3) NOT NULL,
    "updated" TIMESTAMP(3),

    CONSTRAINT "UserLicenseRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Wishlist" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT,
    "cost" DOUBLE PRECISION,
    "note" TEXT,
    "userId" TEXT NOT NULL,
    "sort" INTEGER,
    "created" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Wishlist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WishlistTag" (
    "id" TEXT NOT NULL,
    "wishlistId" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,

    CONSTRAINT "WishlistTag_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "Token_name_key" ON "Token"("name");

-- CreateIndex
CREATE UNIQUE INDEX "UserToken_userId_tokenId_key" ON "UserToken"("userId", "tokenId");

-- CreateIndex
CREATE UNIQUE INDEX "Translation_language_hash_key" ON "Translation"("language", "hash");

-- CreateIndex
CREATE UNIQUE INDEX "Keyword_text_key" ON "Keyword"("text");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_tag_group_key" ON "Tag"("tag", "group");

-- CreateIndex
CREATE UNIQUE INDEX "Vendor_name_key" ON "Vendor"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Tariff_code_key" ON "Tariff"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Atomizer_code_key" ON "Atomizer"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Atomizer_name_vendorId_key" ON "Atomizer"("name", "vendorId");

-- CreateIndex
CREATE UNIQUE INDEX "AtomizerInventory_code_key" ON "AtomizerInventory"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Cell_code_key" ON "Cell"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Cell_name_vendorId_key" ON "Cell"("name", "vendorId");

-- CreateIndex
CREATE UNIQUE INDEX "CellInventory_code_key" ON "CellInventory"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Mod_code_key" ON "Mod"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Mod_name_vendorId_key" ON "Mod"("name", "vendorId");

-- CreateIndex
CREATE UNIQUE INDEX "ModInventory_code_key" ON "ModInventory"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Cotton_code_key" ON "Cotton"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Cotton_name_vendorId_key" ON "Cotton"("name", "vendorId");

-- CreateIndex
CREATE UNIQUE INDEX "CottonInventory_code_key" ON "CottonInventory"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Voucher_name_key" ON "Voucher"("name");

-- CreateIndex
CREATE UNIQUE INDEX "VoucherInventory_code_key" ON "VoucherInventory"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Aroma_code_key" ON "Aroma"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Aroma_name_vendorId_key" ON "Aroma"("name", "vendorId");

-- CreateIndex
CREATE UNIQUE INDEX "AromaInventory_code_key" ON "AromaInventory"("code");

-- CreateIndex
CREATE UNIQUE INDEX "AromaInventory_userId_aromaId_key" ON "AromaInventory"("userId", "aromaId");

-- CreateIndex
CREATE UNIQUE INDEX "Liquid_code_key" ON "Liquid"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Build_code_key" ON "Build"("code");

-- CreateIndex
CREATE UNIQUE INDEX "BuildLiquidTasteRating_buildId_liquidId_tasteId_key" ON "BuildLiquidTasteRating"("buildId", "liquidId", "tasteId");

-- CreateIndex
CREATE UNIQUE INDEX "BuildLiquidRating_buildId_liquidId_key" ON "BuildLiquidRating"("buildId", "liquidId");

-- CreateIndex
CREATE UNIQUE INDEX "Coil_code_key" ON "Coil"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Coil_name_wireId_key" ON "Coil"("name", "wireId");

-- CreateIndex
CREATE UNIQUE INDEX "Wire_code_key" ON "Wire"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Wire_name_vendorId_key" ON "Wire"("name", "vendorId");

-- CreateIndex
CREATE UNIQUE INDEX "WireInventory_code_key" ON "WireInventory"("code");

-- CreateIndex
CREATE UNIQUE INDEX "WireInventory_userId_wireId_key" ON "WireInventory"("userId", "wireId");

-- CreateIndex
CREATE UNIQUE INDEX "Fiber_code_key" ON "Fiber"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Fiber_ga_materialId_key" ON "Fiber"("ga", "materialId");

-- CreateIndex
CREATE UNIQUE INDEX "Certificate_name_key" ON "Certificate"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Certificate_code_key" ON "Certificate"("code");

-- CreateIndex
CREATE UNIQUE INDEX "CertificateToken_certificateId_tokenId_key" ON "CertificateToken"("certificateId", "tokenId");

-- CreateIndex
CREATE UNIQUE INDEX "UserCertificate_userId_certificateId_key" ON "UserCertificate"("userId", "certificateId");

-- CreateIndex
CREATE UNIQUE INDEX "UserCertificateRequest_userId_certificateId_key" ON "UserCertificateRequest"("userId", "certificateId");

-- CreateIndex
CREATE UNIQUE INDEX "License_name_key" ON "License"("name");

-- CreateIndex
CREATE UNIQUE INDEX "License_code_key" ON "License"("code");

-- CreateIndex
CREATE UNIQUE INDEX "LicenseToken_licenseId_tokenId_key" ON "LicenseToken"("licenseId", "tokenId");

-- CreateIndex
CREATE UNIQUE INDEX "UserLicense_userId_licenseId_key" ON "UserLicense"("userId", "licenseId");

-- CreateIndex
CREATE UNIQUE INDEX "UserLicenseRequest_userId_licenseId_key" ON "UserLicenseRequest"("userId", "licenseId");

-- CreateIndex
CREATE UNIQUE INDEX "WishlistTag_wishlistId_tagId_key" ON "WishlistTag"("wishlistId", "tagId");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_tariffId_fkey" FOREIGN KEY ("tariffId") REFERENCES "Tariff"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserToken" ADD CONSTRAINT "UserToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserToken" ADD CONSTRAINT "UserToken_tokenId_fkey" FOREIGN KEY ("tokenId") REFERENCES "Token"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobLog" ADD CONSTRAINT "JobLog_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommentRating" ADD CONSTRAINT "CommentRating_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommentRating" ADD CONSTRAINT "CommentRating_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagKeyword" ADD CONSTRAINT "TagKeyword_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagKeyword" ADD CONSTRAINT "TagKeyword_keywordId_fkey" FOREIGN KEY ("keywordId") REFERENCES "Keyword"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vendor" ADD CONSTRAINT "Vendor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Price" ADD CONSTRAINT "Price_tariffId_fkey" FOREIGN KEY ("tariffId") REFERENCES "Tariff"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_priceId_fkey" FOREIGN KEY ("priceId") REFERENCES "Price"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Atomizer" ADD CONSTRAINT "Atomizer_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "Vendor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Atomizer" ADD CONSTRAINT "Atomizer_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Atomizer" ADD CONSTRAINT "Atomizer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AtomizerDraw" ADD CONSTRAINT "AtomizerDraw_atomizerId_fkey" FOREIGN KEY ("atomizerId") REFERENCES "Atomizer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AtomizerDraw" ADD CONSTRAINT "AtomizerDraw_drawId_fkey" FOREIGN KEY ("drawId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AtomizerComment" ADD CONSTRAINT "AtomizerComment_atomizerId_fkey" FOREIGN KEY ("atomizerId") REFERENCES "Atomizer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AtomizerComment" ADD CONSTRAINT "AtomizerComment_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AtomizerInventory" ADD CONSTRAINT "AtomizerInventory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AtomizerInventory" ADD CONSTRAINT "AtomizerInventory_atomizerId_fkey" FOREIGN KEY ("atomizerId") REFERENCES "Atomizer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AtomizerInventoryComment" ADD CONSTRAINT "AtomizerInventoryComment_atomizerInventoryId_fkey" FOREIGN KEY ("atomizerInventoryId") REFERENCES "AtomizerInventory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AtomizerInventoryComment" ADD CONSTRAINT "AtomizerInventoryComment_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cell" ADD CONSTRAINT "Cell_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cell" ADD CONSTRAINT "Cell_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "Vendor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cell" ADD CONSTRAINT "Cell_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CellComment" ADD CONSTRAINT "CellComment_cellId_fkey" FOREIGN KEY ("cellId") REFERENCES "Cell"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CellComment" ADD CONSTRAINT "CellComment_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CellInventory" ADD CONSTRAINT "CellInventory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CellInventory" ADD CONSTRAINT "CellInventory_cellId_fkey" FOREIGN KEY ("cellId") REFERENCES "Cell"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CellHealth" ADD CONSTRAINT "CellHealth_cellId_fkey" FOREIGN KEY ("cellId") REFERENCES "Cell"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CellHealth" ADD CONSTRAINT "CellHealth_cellInventoryId_fkey" FOREIGN KEY ("cellInventoryId") REFERENCES "CellInventory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CellHealth" ADD CONSTRAINT "CellHealth_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CellInventoryComment" ADD CONSTRAINT "CellInventoryComment_cellInventoryId_fkey" FOREIGN KEY ("cellInventoryId") REFERENCES "CellInventory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CellInventoryComment" ADD CONSTRAINT "CellInventoryComment_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mod" ADD CONSTRAINT "Mod_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "Vendor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mod" ADD CONSTRAINT "Mod_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModComment" ADD CONSTRAINT "ModComment_modId_fkey" FOREIGN KEY ("modId") REFERENCES "Mod"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModComment" ADD CONSTRAINT "ModComment_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModCell" ADD CONSTRAINT "ModCell_modId_fkey" FOREIGN KEY ("modId") REFERENCES "Mod"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModCell" ADD CONSTRAINT "ModCell_cellId_fkey" FOREIGN KEY ("cellId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModInventory" ADD CONSTRAINT "ModInventory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModInventory" ADD CONSTRAINT "ModInventory_modId_fkey" FOREIGN KEY ("modId") REFERENCES "Mod"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModInventoryComment" ADD CONSTRAINT "ModInventoryComment_modInventoryId_fkey" FOREIGN KEY ("modInventoryId") REFERENCES "ModInventory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModInventoryComment" ADD CONSTRAINT "ModInventoryComment_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cotton" ADD CONSTRAINT "Cotton_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "Vendor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cotton" ADD CONSTRAINT "Cotton_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CottonComment" ADD CONSTRAINT "CottonComment_cottonId_fkey" FOREIGN KEY ("cottonId") REFERENCES "Cotton"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CottonComment" ADD CONSTRAINT "CottonComment_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CottonDraw" ADD CONSTRAINT "CottonDraw_cottonId_fkey" FOREIGN KEY ("cottonId") REFERENCES "Cotton"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CottonDraw" ADD CONSTRAINT "CottonDraw_drawId_fkey" FOREIGN KEY ("drawId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CottonInventory" ADD CONSTRAINT "CottonInventory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CottonInventory" ADD CONSTRAINT "CottonInventory_cottonId_fkey" FOREIGN KEY ("cottonId") REFERENCES "Cotton"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CottonInventoryComment" ADD CONSTRAINT "CottonInventoryComment_cottonInventoryId_fkey" FOREIGN KEY ("cottonInventoryId") REFERENCES "CottonInventory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CottonInventoryComment" ADD CONSTRAINT "CottonInventoryComment_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VoucherInventory" ADD CONSTRAINT "VoucherInventory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VoucherInventory" ADD CONSTRAINT "VoucherInventory_voucherId_fkey" FOREIGN KEY ("voucherId") REFERENCES "Voucher"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aroma" ADD CONSTRAINT "Aroma_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "Vendor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aroma" ADD CONSTRAINT "Aroma_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AromaKeyword" ADD CONSTRAINT "AromaKeyword_aromaId_fkey" FOREIGN KEY ("aromaId") REFERENCES "Aroma"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AromaKeyword" ADD CONSTRAINT "AromaKeyword_keywordId_fkey" FOREIGN KEY ("keywordId") REFERENCES "Keyword"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AromaTaste" ADD CONSTRAINT "AromaTaste_aromaId_fkey" FOREIGN KEY ("aromaId") REFERENCES "Aroma"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AromaTaste" ADD CONSTRAINT "AromaTaste_tasteId_fkey" FOREIGN KEY ("tasteId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AromaComment" ADD CONSTRAINT "AromaComment_aromaId_fkey" FOREIGN KEY ("aromaId") REFERENCES "Aroma"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AromaComment" ADD CONSTRAINT "AromaComment_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AromaInventory" ADD CONSTRAINT "AromaInventory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AromaInventory" ADD CONSTRAINT "AromaInventory_aromaId_fkey" FOREIGN KEY ("aromaId") REFERENCES "Aroma"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AromaInventoryComment" ADD CONSTRAINT "AromaInventoryComment_aromaInventoryId_fkey" FOREIGN KEY ("aromaInventoryId") REFERENCES "AromaInventory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AromaInventoryComment" ADD CONSTRAINT "AromaInventoryComment_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Liquid" ADD CONSTRAINT "Liquid_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Liquid" ADD CONSTRAINT "Liquid_aromaId_fkey" FOREIGN KEY ("aromaId") REFERENCES "Aroma"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Liquid" ADD CONSTRAINT "Liquid_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "Vendor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Build" ADD CONSTRAINT "Build_coilId_fkey" FOREIGN KEY ("coilId") REFERENCES "Coil"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Build" ADD CONSTRAINT "Build_cottonId_fkey" FOREIGN KEY ("cottonId") REFERENCES "Cotton"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BuildAtomizer" ADD CONSTRAINT "BuildAtomizer_buildId_fkey" FOREIGN KEY ("buildId") REFERENCES "Build"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BuildAtomizer" ADD CONSTRAINT "BuildAtomizer_atomizerId_fkey" FOREIGN KEY ("atomizerId") REFERENCES "Atomizer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BuildAtomizer" ADD CONSTRAINT "BuildAtomizer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BuildAtomizer" ADD CONSTRAINT "BuildAtomizer_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BuildAtomizerComment" ADD CONSTRAINT "BuildAtomizerComment_buildAtomizerId_fkey" FOREIGN KEY ("buildAtomizerId") REFERENCES "BuildAtomizer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BuildAtomizerComment" ADD CONSTRAINT "BuildAtomizerComment_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BuildLiquidTasteRating" ADD CONSTRAINT "BuildLiquidTasteRating_buildId_fkey" FOREIGN KEY ("buildId") REFERENCES "Build"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BuildLiquidTasteRating" ADD CONSTRAINT "BuildLiquidTasteRating_liquidId_fkey" FOREIGN KEY ("liquidId") REFERENCES "Liquid"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BuildLiquidTasteRating" ADD CONSTRAINT "BuildLiquidTasteRating_tasteId_fkey" FOREIGN KEY ("tasteId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BuildLiquidRating" ADD CONSTRAINT "BuildLiquidRating_buildId_fkey" FOREIGN KEY ("buildId") REFERENCES "Build"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BuildLiquidRating" ADD CONSTRAINT "BuildLiquidRating_liquidId_fkey" FOREIGN KEY ("liquidId") REFERENCES "Liquid"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coil" ADD CONSTRAINT "Coil_wireId_fkey" FOREIGN KEY ("wireId") REFERENCES "Wire"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coil" ADD CONSTRAINT "Coil_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CoilDraw" ADD CONSTRAINT "CoilDraw_coilId_fkey" FOREIGN KEY ("coilId") REFERENCES "Coil"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CoilDraw" ADD CONSTRAINT "CoilDraw_drawId_fkey" FOREIGN KEY ("drawId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wire" ADD CONSTRAINT "Wire_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "Vendor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wire" ADD CONSTRAINT "Wire_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WireInventory" ADD CONSTRAINT "WireInventory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WireInventory" ADD CONSTRAINT "WireInventory_wireId_fkey" FOREIGN KEY ("wireId") REFERENCES "Wire"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WireDraw" ADD CONSTRAINT "WireDraw_wireId_fkey" FOREIGN KEY ("wireId") REFERENCES "Wire"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WireDraw" ADD CONSTRAINT "WireDraw_drawId_fkey" FOREIGN KEY ("drawId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WireFiber" ADD CONSTRAINT "WireFiber_wireId_fkey" FOREIGN KEY ("wireId") REFERENCES "Wire"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WireFiber" ADD CONSTRAINT "WireFiber_fiberId_fkey" FOREIGN KEY ("fiberId") REFERENCES "Fiber"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fiber" ADD CONSTRAINT "Fiber_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fiber" ADD CONSTRAINT "Fiber_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CertificateToken" ADD CONSTRAINT "CertificateToken_certificateId_fkey" FOREIGN KEY ("certificateId") REFERENCES "Certificate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CertificateToken" ADD CONSTRAINT "CertificateToken_tokenId_fkey" FOREIGN KEY ("tokenId") REFERENCES "Token"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCertificate" ADD CONSTRAINT "UserCertificate_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCertificate" ADD CONSTRAINT "UserCertificate_certificateId_fkey" FOREIGN KEY ("certificateId") REFERENCES "Certificate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCertificateRequest" ADD CONSTRAINT "UserCertificateRequest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCertificateRequest" ADD CONSTRAINT "UserCertificateRequest_certificateId_fkey" FOREIGN KEY ("certificateId") REFERENCES "Certificate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCertificateRequest" ADD CONSTRAINT "UserCertificateRequest_approverId_fkey" FOREIGN KEY ("approverId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCertificateRequest" ADD CONSTRAINT "UserCertificateRequest_userCertificateId_fkey" FOREIGN KEY ("userCertificateId") REFERENCES "UserCertificate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LicenseToken" ADD CONSTRAINT "LicenseToken_licenseId_fkey" FOREIGN KEY ("licenseId") REFERENCES "License"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LicenseToken" ADD CONSTRAINT "LicenseToken_tokenId_fkey" FOREIGN KEY ("tokenId") REFERENCES "Token"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLicense" ADD CONSTRAINT "UserLicense_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLicense" ADD CONSTRAINT "UserLicense_licenseId_fkey" FOREIGN KEY ("licenseId") REFERENCES "License"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLicenseRequest" ADD CONSTRAINT "UserLicenseRequest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLicenseRequest" ADD CONSTRAINT "UserLicenseRequest_licenseId_fkey" FOREIGN KEY ("licenseId") REFERENCES "License"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLicenseRequest" ADD CONSTRAINT "UserLicenseRequest_approverId_fkey" FOREIGN KEY ("approverId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLicenseRequest" ADD CONSTRAINT "UserLicenseRequest_userLicenseId_fkey" FOREIGN KEY ("userLicenseId") REFERENCES "UserLicense"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wishlist" ADD CONSTRAINT "Wishlist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WishlistTag" ADD CONSTRAINT "WishlistTag_wishlistId_fkey" FOREIGN KEY ("wishlistId") REFERENCES "Wishlist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WishlistTag" ADD CONSTRAINT "WishlistTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
