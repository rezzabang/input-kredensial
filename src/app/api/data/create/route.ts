import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const {
      nip,
      nama,
      tempatLahir,
      tanggalLahir,
      jenisKelamin,
      phone,
      email,
      alamat,
      namaTempatBekerja,
      alamatPekerjaan,
      noStr,
      tanggalStr,
      noSip,
      tanggalSip,
    } = await request.json();

    // Check if DataPribadi exists
    const existingPribadi = await prisma.datapribadi.findUnique({ where: { nip } });

    if (existingPribadi) {
      // Update DataPribadi
      await prisma.datapribadi.update({
        where: { nip },
        data: {
          nama,
          tempatLahir,
          tanggalLahir,
          jenisKelamin,
          phone,
          email,
          alamat,
        },
      });
    } else {
      // Create DataPribadi
      await prisma.datapribadi.create({
        data: {
          nip,
          nama,
          tempatLahir,
          tanggalLahir,
          jenisKelamin,
          phone,
          email,
          alamat,
        },
      });
    }

    // Check if DataPekerjaan exists
    const existingPekerjaan = await prisma.dataPekerjaan.findUnique({ where: { nip } });

    let pekerjaan;

    if (existingPekerjaan) {
      // Update DataPekerjaan
      pekerjaan = await prisma.dataPekerjaan.update({
        where: { nip },
        data: {
          namaTempatBekerja,
          alamatPekerjaan,
          noStr,
          tanggalStr,
          noSip,
          tanggalSip,
        },
      });
    } else {
      // Create DataPekerjaan
      pekerjaan = await prisma.dataPekerjaan.create({
        data: {
          nip,
          namaTempatBekerja,
          alamatPekerjaan,
          noStr,
          tanggalStr,
          noSip,
          tanggalSip,
        },
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: existingPribadi || existingPekerjaan
          ? "Data berhasil diperbarui (create or update)."
          : "Data baru berhasil disimpan.",
        data: pekerjaan,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving/updating data:", error);
    return NextResponse.json(
      { success: false, message: "Terjadi kesalahan saat menyimpan data." },
      { status: 500 }
    );
  }
}
