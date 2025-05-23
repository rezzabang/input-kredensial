import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';
import prisma from '@/lib/prisma';

export async function DELETE(req: NextRequest, { params }: { params: { nip: string } }) {
  const { nip } = params;

  try {
    // Get current file name from DB
    const pekerjaan = await prisma.dataPekerjaan.findUnique({
      where: { nip },
    });

    if (!pekerjaan?.fileStr) {
      return NextResponse.json({ success: false, message: 'File SIK & STR tidak ditemukan di database.' }, { status: 404 });
    }

    const filePath = path.join(process.cwd(), 'public', 'uploads', nip, pekerjaan.fileStr);

    // Delete the file from filesystem
    await fs.unlink(filePath).catch(() => {
      // ignore if file doesn't exist
    });

    // Update the DB record, remove fileStr & STR reference
    await prisma.dataPekerjaan.update({
      where: { nip },
      data: { fileStr: null },
    });

    return NextResponse.json({ success: true, message: 'File SIK & STR berhasil dihapus.' });
  } catch (error) {
    console.error('Error deleting SIK & STR file:', error);
    return NextResponse.json({ success: false, message: 'Terjadi kesalahan saat menghapus file SIK & STR.' }, { status: 500 });
  }
}
