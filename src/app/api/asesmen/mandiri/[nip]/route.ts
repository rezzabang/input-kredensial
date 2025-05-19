import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(
  req: NextRequest,
  { params }: { params: { nip: string } }
) {
  const { nip } = params;

  try {
    const data = await prisma.asesmenMandiri.findMany({
      where: { nip },
      include: {
        kompetensi: true,
      },
    });

    if (data.length === 0) {
      return NextResponse.json({ message: 'Data tidak ditemukan' }, { status: 404 });
    }

    const sanitizedData = data.map((item) => ({
      nip: item.nip,
      kuk: item.kuk,
      asesmen: item.asesmen,
      kompetensi: {
        detail: item.kompetensi.detail,
        kompetensi: item.kompetensi.kompetensi,
        kategori: item.kompetensi.kategori,
      },
    }));

    return NextResponse.json({ success: true, data: sanitizedData });
  } catch (error) {
    console.error('Error fetching asesmen:', error);
    return NextResponse.json({ message: 'Terjadi kesalahan server' }, { status: 500 });
  }
}