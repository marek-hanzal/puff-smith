-- CreateTable
CREATE TABLE "CellInventoryComment" (
    "id" TEXT NOT NULL,
    "cellInventoryId" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,

    CONSTRAINT "CellInventoryComment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CellInventoryComment" ADD CONSTRAINT "CellInventoryComment_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CellInventoryComment" ADD CONSTRAINT "CellInventoryComment_cellInventoryId_fkey" FOREIGN KEY ("cellInventoryId") REFERENCES "CellInventory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
