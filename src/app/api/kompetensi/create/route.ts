import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const kompetensiList = await req.json();

    if (!Array.isArray(kompetensiList) || kompetensiList.length === 0) {
      return NextResponse.json({ message: 'Data tidak valid' }, { status: 400 });
    }

    // Ambil semua kuk dari request
    const kukList = kompetensiList.map((k: any) => k.kuk);

    // Cek duplikat di database
    const existing = await prisma.kompetensi.findMany({
      where: { kuk: { in: kukList } },
      select: { kuk: true },
    });

    if (existing.length > 0) {
      const existingKuk = existing.map((e) => e.kuk);
      return NextResponse.json(
        { message: `Hapus Kode Kompetensi berikut sudah ada: ${existingKuk.join(', ')}` },
        { status: 409 }
      );
    }

    // Simpan semua kompetensi sekaligus
    await prisma.kompetensi.createMany({
      data: kompetensiList,
      skipDuplicates: true,
    });

    return NextResponse.json({ message: 'Data kompetensi berhasil disimpan.' }, { status: 200 });
  } catch (error) {
    console.error('Error saat menyimpan kompetensi:', error);
    return NextResponse.json(
      { message: 'Terjadi kesalahan saat menyimpan kompetensi.' },
      { status: 500 }
    );
  }
}
