import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const data = await prisma.kompetensi.findMany({
      orderBy: {
        kuk: 'asc', // optional: sort by KUK
      },
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json(
      { success: false, message: 'Gagal mengambil data kompetensi.' },
      { status: 500 }
    );
  }
}
