/*
  Warnings:

  - You are about to drop the column `image_url` on the `Note` table. All the data in the column will be lost.

*/
-- AlterTable
--ALTER TABLE "Note" DROP COLUMN "image_url";

-- CreateTable
CREATE TABLE IF NOT EXISTS "UserToken" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "refresh_token" TEXT NOT NULL,
    "expires_date" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserToken_pkey" PRIMARY KEY ("id")
);

ALTER TABLE "UserToken" ADD CONSTRAINT "UserToken_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

