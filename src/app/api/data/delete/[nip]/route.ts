import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function DELETE(
  request: Request,
  { params }: { params: { nip: string } }
) {
  try {
    const { nip } = params;

    // Delete all related DataPekerjaan records (if any)
    await prisma.dataPekerjaan.deleteMany({
      where: { nip },
    });

    // Delete the Datapribadi record
    const deletedRecord = await prisma.datapribadi.delete({
      where: { nip },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Data berhasil dihapus!",
        data: deletedRecord,
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