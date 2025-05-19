-- CreateTable
CREATE TABLE `AsesmenMandiri` (
    `nip` VARCHAR(191) NOT NULL,
    `kuk` VARCHAR(191) NOT NULL,
    `asesmen` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`nip`, `kuk`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `AsesmenMandiri` ADD CONSTRAINT `AsesmenMandiri_nip_fkey` FOREIGN KEY (`nip`) REFERENCES `Datapribadi`(`nip`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AsesmenMandiri` ADD CONSTRAINT `AsesmenMandiri_kuk_fkey` FOREIGN KEY (`kuk`) REFERENCES `Kompetensi`(`kuk`) ON DELETE CASCADE ON UPDATE CASCADE;
