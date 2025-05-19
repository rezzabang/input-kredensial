import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function DELETE(
  req: NextRequest,
  { params }: { params: { nip: string } }
) {
  const { nip } = params;

  if (!nip) {
    return NextResponse.json({ success: false, message: 'NIP tidak ditemukan di URL.' }, { status: 400 });
  }

  try {
    const deleted = await prisma.asesmenMandiri.deleteMany({
      where: { nip },
    });

    if (deleted.count === 0) {
      return NextResponse.json({ success: false, message: 'Data tidak ditemukan.' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Data berhasil dihapus.' });
  } catch (error) {
    console.error('Gagal menghapus data asesmen:', error);
    return NextResponse.json({ success: false, message: 'Terjadi kesalahan server.' }, { status: 500 });
  }
}