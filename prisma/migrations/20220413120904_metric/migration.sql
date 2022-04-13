-- CreateTable
CREATE TABLE "Metric" (
    "id" TEXT NOT NULL,
    "reference" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "start" DECIMAL(10,2) NOT NULL,
    "value" DECIMAL(10,2) NOT NULL,
    "label" TEXT,
    "userId" TEXT,

    CONSTRAINT "Metric_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Metric" ADD CONSTRAINT "Metric_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
