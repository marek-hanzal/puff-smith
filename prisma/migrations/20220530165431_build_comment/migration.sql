-- CreateTable
CREATE TABLE "BuildComment" (
    "id" TEXT NOT NULL,
    "buildId" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,

    CONSTRAINT "BuildComment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BuildComment" ADD CONSTRAINT "BuildComment_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BuildComment" ADD CONSTRAINT "BuildComment_buildId_fkey" FOREIGN KEY ("buildId") REFERENCES "Build"("id") ON DELETE CASCADE ON UPDATE CASCADE;
