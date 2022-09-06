/*
  Warnings:

  - You are about to drop the column `image_url` on the `Note` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id,refresh_token]` on the table `UserToken` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "UserToken" DROP CONSTRAINT "UserToken_user_id_fkey";

-- AlterTable
ALTER TABLE "Note" DROP COLUMN "image_url";

-- CreateIndex
CREATE UNIQUE INDEX "UserToken_user_id_refresh_token_key" ON "UserToken"("user_id", "refresh_token");
