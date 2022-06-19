-- CreateTable
CREATE TABLE "AromaInventoryComment" (
    "id" TEXT NOT NULL,
    "aromaInventoryId" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,

    CONSTRAINT "AromaInventoryComment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AromaInventoryComment" ADD CONSTRAINT "AromaInventoryComment_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AromaInventoryComment" ADD CONSTRAINT "AromaInventoryComment_aromaInventoryId_fkey" FOREIGN KEY ("aromaInventoryId") REFERENCES "AromaInventory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
