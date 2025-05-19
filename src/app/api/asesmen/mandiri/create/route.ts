import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const { nip, kompetensi } = await req.json();

    if (!nip || !Array.isArray(kompetensi)) {
      return NextResponse.json({ message: 'Invalid request body' }, { status: 400 });
    }

    await prisma.asesmenMandiri.deleteMany({ where: { nip } });

    const data = kompetensi.map((item: { kuk: string; asesmen: string }) => ({
      nip,
      kuk: item.kuk,
      asesmen: item.asesmen,
    }));

    await prisma.asesmenMandiri.createMany({ data });

    return NextResponse.json({ message: 'Data saved successfully' }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}