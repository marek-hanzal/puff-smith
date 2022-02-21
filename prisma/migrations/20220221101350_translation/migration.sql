-- CreateTable
CREATE TABLE "translation" (
    "id" UUID NOT NULL,
    "language" VARCHAR(32) NOT NULL,
    "title" TEXT NOT NULL,
    "hash" VARCHAR(128) NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "translation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "translation_language_hash_key" ON "translation"("language", "hash");
