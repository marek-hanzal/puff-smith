-- CreateTable
CREATE TABLE "CottonDraw" (
    "id" TEXT NOT NULL,
    "cottonId" TEXT NOT NULL,
    "drawId" TEXT NOT NULL,

    CONSTRAINT "CottonDraw_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CottonDraw" ADD CONSTRAINT "CottonDraw_drawId_fkey" FOREIGN KEY ("drawId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CottonDraw" ADD CONSTRAINT "CottonDraw_cottonId_fkey" FOREIGN KEY ("cottonId") REFERENCES "Cotton"("id") ON DELETE CASCADE ON UPDATE CASCADE;
