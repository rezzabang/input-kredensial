import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';
import prisma from '@/lib/prisma';

export async function DELETE(req: NextRequest, { params }: { params: { nip: string } }) {
  const { nip } = params;

  try {
    // Get current file name from DB
    const pendidikan = await prisma.dataPendidikan.findUnique({
      where: { nip },
    });

    if (!pendidikan?.fileIjazah) {
      return NextResponse.json({ success: false, message: 'File ijazah tidak ditemukan di database.' }, { status: 404 });
    }

    const filePath = path.join(process.cwd(), 'public', 'uploads', nip, pendidikan.fileIjazah);

    // Delete the file from filesystem
    await fs.unlink(filePath).catch(() => {
      // ignore if file doesn't exist
    });

    // Update the DB record, remove fileIjazah reference
    await prisma.dataPendidikan.update({
      where: { nip },
      data: { fileIjazah: null },
    });

    return NextResponse.json({ success: true, message: 'File ijazah berhasil dihapus.' });
  } catch (error) {
    console.error('Error deleting ijazah file:', error);
    return NextResponse.json({ success: false, message: 'Terjadi kesalahan saat menghapus file ijazah.' }, { status: 500 });
  }
}
