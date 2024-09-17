/*
  Warnings:

  - You are about to drop the column `finDeStage` on the `Intern` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Intern" DROP COLUMN "finDeStage",
ALTER COLUMN "lastName" DROP NOT NULL,
ALTER COLUMN "adress" DROP NOT NULL,
ALTER COLUMN "cin" DROP NOT NULL,
ALTER COLUMN "birth" DROP NOT NULL;
