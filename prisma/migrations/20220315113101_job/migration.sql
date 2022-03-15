-- CreateEnum
CREATE TYPE "JobStatus" AS ENUM ('NEW', 'RUNNING', 'SUCCESS', 'FAILURE', 'REVIEW', 'DONE');

-- CreateTable
CREATE TABLE "Job" (
    "id" TEXT NOT NULL,
    "status" "JobStatus" NOT NULL DEFAULT E'NEW',
    "total" INTEGER NOT NULL DEFAULT 0,
    "progress" DECIMAL(5,2) NOT NULL DEFAULT 0,
    "success" INTEGER,
    "successRatio" DECIMAL(5,2),
    "failure" INTEGER,
    "failureRatio" DECIMAL(5,2),
    "skip" INTEGER,
    "skipRatio" DECIMAL(5,2),
    "created" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,
    "params" TEXT,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobLog" (
    "id" TEXT NOT NULL,
    "jobId" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "JobLog_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobLog" ADD CONSTRAINT "JobLog_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job"("id") ON DELETE CASCADE ON UPDATE CASCADE;
