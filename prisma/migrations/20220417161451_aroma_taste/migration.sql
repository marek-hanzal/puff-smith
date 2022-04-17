-- CreateTable
CREATE TABLE "AromaTaste" (
    "id" TEXT NOT NULL,
    "aromaId" TEXT NOT NULL,
    "tasteId" TEXT NOT NULL,

    CONSTRAINT "AromaTaste_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AromaTaste" ADD CONSTRAINT "AromaTaste_tasteId_fkey" FOREIGN KEY ("tasteId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AromaTaste" ADD CONSTRAINT "AromaTaste_aromaId_fkey" FOREIGN KEY ("aromaId") REFERENCES "Aroma"("id") ON DELETE CASCADE ON UPDATE CASCADE;
