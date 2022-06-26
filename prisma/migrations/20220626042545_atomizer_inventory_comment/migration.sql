-- CreateTable
CREATE TABLE "AtomizerInventoryComment" (
    "id" TEXT NOT NULL,
    "atomizerInventoryId" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,

    CONSTRAINT "AtomizerInventoryComment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AtomizerInventoryComment" ADD CONSTRAINT "AtomizerInventoryComment_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AtomizerInventoryComment" ADD CONSTRAINT "AtomizerInventoryComment_atomizerInventoryId_fkey" FOREIGN KEY ("atomizerInventoryId") REFERENCES "AtomizerInventory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
