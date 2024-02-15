/*
  Warnings:

  - You are about to drop the column `CEP` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `neighborhood` on the `Users` table. All the data in the column will be lost.
  - Added the required column `bairro` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cep` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Users" DROP COLUMN "CEP",
DROP COLUMN "neighborhood",
ADD COLUMN     "bairro" TEXT NOT NULL,
ADD COLUMN     "cep" TEXT NOT NULL;
