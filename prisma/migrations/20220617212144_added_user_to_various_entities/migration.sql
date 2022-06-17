-- AlterTable
ALTER TABLE "Aroma" ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "Atomizer" ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "Base" ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "Booster" ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "Cell" ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "Coil" ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "Cotton" ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "Fiber" ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "Mod" ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "Wire" ADD COLUMN     "userId" TEXT;

-- AddForeignKey
ALTER TABLE "Atomizer" ADD CONSTRAINT "Atomizer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cell" ADD CONSTRAINT "Cell_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mod" ADD CONSTRAINT "Mod_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cotton" ADD CONSTRAINT "Cotton_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aroma" ADD CONSTRAINT "Aroma_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booster" ADD CONSTRAINT "Booster_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Base" ADD CONSTRAINT "Base_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coil" ADD CONSTRAINT "Coil_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wire" ADD CONSTRAINT "Wire_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fiber" ADD CONSTRAINT "Fiber_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
