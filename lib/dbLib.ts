import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

/**
 * Input interface for Personal Data (DataPribadi)
 */

export interface DataPribadiInput {
  nip: string;
  nama: string;
  tempatLahir: string;
  tanggalLahir: string; // ISO date string (e.g., "2025-05-09")
  jenisKelamin: string;
  phone: string;
  email: string;
  alamat: string;
}

export async function createDataPribadi(data: DataPribadiInput) {
  return await prisma.dataPribadi.create({
    data: {
      nip: data.nip,
      nama: data.nama,
      tempatLahir: data.tempatLahir,
      tanggalLahir: new Date(data.tanggalLahir),
      jenisKelamin: data.jenisKelamin,
      phone: data.phone,
      email: data.email,
      alamat: data.alamat,
    },
  });
}

/**
 * Input interface for Education Data (DataPendidikan)
 */
export interface DataPendidikanInput {
  universitas: string;
  jurusan: string;
  noIjazah: string;
  tanggalIjazah: string; // Expect an ISO date string (e.g., "2025-05-09")
  fileIjazah: string;    // Usually a URL or a file path
  nip: string;           // Must match an existing DataPribadi.nip
}

/**
 * Create an education record in DataPendidikan.
 */
export async function createDataPendidikan(data: DataPendidikanInput) {
  return await prisma.dataPendidikan.create({
    data: {
      universitas: data.universitas,
      jurusan: data.jurusan,
      noIjazah: data.noIjazah,
      tanggalIjazah: new Date(data.tanggalIjazah),
      fileIjazah: data.fileIjazah,
      nip: data.nip,
    },
  });
}

/**
 * Input interface for Work Data (DataPekerjaan)
 */
export interface DataPekerjaanInput {
  namaTempatBekerja: string;
  alamatPekerjaan: string;
  noStr: string;
  tanggalStr: string;    // Expect an ISO date string
  noSip: string;
  tanggalSip: string;    // Expect an ISO date string
  nip: string;           // Must match an existing DataPribadi.nip
}

/**
 * Create a work record in DataPekerjaan.
 */
export async function createDataPekerjaan(data: DataPekerjaanInput) {
  return await prisma.dataPekerjaan.create({
    data: {
      namaTempatBekerja: data.namaTempatBekerja,
      alamatPekerjaan: data.alamatPekerjaan,
      noStr: data.noStr,
      tanggalStr: new Date(data.tanggalStr),
      noSip: data.noSip,
      tanggalSip: new Date(data.tanggalSip),
      nip: data.nip,
    },
  });
}

/**
 * Input interface for Training Data (DataPelatihan)
 */
export interface DataPelatihanInput {
  namaPelatihan: string;
  jenisPelatihan: string;
  filePelatihan: string;  // URL or file path for the training file
  nip: string;            // Must match an existing DataPribadi.nip
}

/**
 * Create a training record in DataPelatihan.
 */
export async function createDataPelatihan(data: DataPelatihanInput) {
  return await prisma.dataPelatihan.create({
    data: {
      namaPelatihan: data.namaPelatihan,
      jenisPelatihan: data.jenisPelatihan,
      filePelatihan: data.filePelatihan,
      nip: data.nip,
    },
  });
}
