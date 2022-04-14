-- DropForeignKey
ALTER TABLE "ModCell" DROP CONSTRAINT "ModCell_cellId_fkey";

-- AddForeignKey
ALTER TABLE "ModCell" ADD CONSTRAINT "ModCell_cellId_fkey" FOREIGN KEY ("cellId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
