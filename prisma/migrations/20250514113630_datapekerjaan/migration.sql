-- CreateTable
CREATE TABLE `DataPekerjaan` (
    `nip` VARCHAR(191) NOT NULL,
    `namaTempatBekerja` VARCHAR(191) NOT NULL,
    `alamatPekerjaan` VARCHAR(191) NOT NULL,
    `noStr` VARCHAR(191) NOT NULL,
    `tanggalStr` DATETIME(3) NOT NULL,
    `noSip` VARCHAR(191) NOT NULL,
    `tanggalSip` DATETIME(3) NOT NULL,

    PRIMARY KEY (`nip`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `DataPekerjaan` ADD CONSTRAINT `DataPekerjaan_nip_fkey` FOREIGN KEY (`nip`) REFERENCES `Datapribadi`(`nip`) ON DELETE CASCADE ON UPDATE CASCADE;
