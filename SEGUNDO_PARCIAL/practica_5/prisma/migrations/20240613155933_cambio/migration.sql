/*
  Warnings:

  - You are about to drop the column `estado` on the `paciente` table. All the data in the column will be lost.
  - You are about to drop the column `estado` on the `resultado` table. All the data in the column will be lost.
  - You are about to drop the column `estado` on the `tipo_de_examen` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "paciente" DROP COLUMN "estado";

-- AlterTable
ALTER TABLE "resultado" DROP COLUMN "estado";

-- AlterTable
ALTER TABLE "tipo_de_examen" DROP COLUMN "estado";

-- DropEnum
DROP TYPE "estado";
