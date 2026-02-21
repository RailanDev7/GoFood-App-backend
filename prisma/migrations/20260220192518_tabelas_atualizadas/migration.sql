/*
  Warnings:

  - You are about to drop the column `telefone` on the `user` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `User_telefone_key` ON `user`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `telefone`,
    ADD COLUMN `checked_user` BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE `Session` (
    `id` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,
    `expiresAt` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Session` ADD CONSTRAINT `Session_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
