import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";


export async function GET(request: NextRequest, { params }: { params: { nip: string } }) {
  const { nip } = params;
  try {

    const datapribadi = await prisma.datapribadi.findUnique({
      where: { nip },
      include: {
        pekerjaan: true,
        pendidikan: true,
      },
    });

    if (!datapribadi) {
      return NextResponse.json(
        {
          success: false,
          message: "NIP tidak ditemukan!",
          data: null,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Detail NIP ditemukan!",
        data: datapribadi,
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Error fetching data:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Error fetching data",
        error: String(error),
      },
      { status: 500 }
    );
  }
}