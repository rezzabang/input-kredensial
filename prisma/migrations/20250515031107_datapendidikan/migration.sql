-- CreateTable
CREATE TABLE `DataPendidikan` (
    `nip` VARCHAR(191) NOT NULL,
    `universitas` VARCHAR(191) NOT NULL,
    `jurusan` VARCHAR(191) NOT NULL,
    `noIjazah` VARCHAR(191) NOT NULL,
    `tanggalIjazah` DATETIME(3) NOT NULL,
    `fileIjazah` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`nip`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `DataPendidikan` ADD CONSTRAINT `DataPendidikan_nip_fkey` FOREIGN KEY (`nip`) REFERENCES `Datapribadi`(`nip`) ON DELETE CASCADE ON UPDATE CASCADE;
