import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function DELETE(request: NextRequest, { params }: { params: { kuk: string } }) {
  try {
    const decodedKuk = decodeURIComponent(params.kuk);


    await prisma.kompetensi.delete({
      where: { kuk: decodedKuk },
    });

    return NextResponse.json({ success: true, message: 'Kompetensi berhasil dihapus.' });
  } catch (error) {
    console.error('Delete error:', error);
    return NextResponse.json(
      { success: false, message: 'Gagal menghapus kompetensi.' },
      { status: 500 }
    );
  }
}
