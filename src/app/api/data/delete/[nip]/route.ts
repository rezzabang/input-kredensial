import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import fs from "fs";
import path from "path";

export async function DELETE(request: NextRequest, { params }: { params: { nip: string } }) {
  const { nip } = params;
  try {

    // Find existing record with related file info
    const pendidikanRecord = await prisma.dataPendidikan.findUnique({
      where: { nip },
      select: { fileIjazah: true }, // only select the file name
    });

    if (!pendidikanRecord) {
      return NextResponse.json(
        { success: false, message: "Data tidak ditemukan" },
        { status: 404 }
      );
    }

    // Delete the file from public/uploads if it exists
    if (pendidikanRecord.fileIjazah) {
      const filePath = path.join(process.cwd(), "public", "uploads", pendidikanRecord.fileIjazah);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    // Run delete operations in a transaction
    await prisma.$transaction([
      prisma.dataPekerjaan.deleteMany({ where: { nip } }),
      prisma.dataPendidikan.deleteMany({ where: { nip } }),
      prisma.datapribadi.delete({ where: { nip } }),
    ]);

    return NextResponse.json(
      {
        success: true,
        message: "Data dan file berhasil dihapus!",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error menghapus data:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Gagal menghapus data",
        error: error.message,
      },
      { status: 500 }
    );
  }
}