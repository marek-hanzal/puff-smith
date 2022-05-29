-- CreateTable
CREATE TABLE "MixtureInventory" (
    "id" TEXT NOT NULL,
    "mixtureId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "MixtureInventory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MixtureInventory" ADD CONSTRAINT "MixtureInventory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MixtureInventory" ADD CONSTRAINT "MixtureInventory_mixtureId_fkey" FOREIGN KEY ("mixtureId") REFERENCES "Mixture"("id") ON DELETE CASCADE ON UPDATE CASCADE;
