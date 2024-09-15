-- AlterTable
ALTER TABLE "Intern" ADD COLUMN     "encadrantId" TEXT;

-- AddForeignKey
ALTER TABLE "Intern" ADD CONSTRAINT "Intern_encadrantId_fkey" FOREIGN KEY ("encadrantId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
