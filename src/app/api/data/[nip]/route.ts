//import next request and response
import { NextResponse } from "next/server";

//import prisma client
import prisma from "@/lib/prisma";

export async function GET(request: Request, { params }: { params: { nip: string } }) {
  try {
    const { nip } = params;

    // Fetch data from database including related pekerjaan
    const Dataribadi = await prisma.datapribadi.findUnique({
      where: { nip },
      include: {
        pekerjaan: true, // this pulls related DataPekerjaan
      },
    });

    if (!Dataribadi) {
      return NextResponse.json(
        {
          success: false,
          message: "Detail NIP tidak ditemukan!",
          data: null,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Detail NIP ditemukan!",
        data: Dataribadi,
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Error fetching data:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Error fetching post",
        error: "Unknown error",
      },
      { status: 500 }
    );
  }
}
