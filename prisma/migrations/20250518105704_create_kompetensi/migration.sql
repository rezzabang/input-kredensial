-- CreateTable
CREATE TABLE `Kompetensi` (
    `kuk` VARCHAR(191) NOT NULL,
    `detail` VARCHAR(191) NOT NULL,
    `kompetensi` VARCHAR(191) NOT NULL,
    `kategori` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`kuk`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
