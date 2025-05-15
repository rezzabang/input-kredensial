import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: Request, context: { params: { nip: string } }) {
  try {
    const { nip } = context.params;

    const datapribadi = await prisma.datapribadi.findUnique({
      where: { nip },
      include: {
        pekerjaan: true,       // Include related pekerjaan (assuming your relation model name is "pekerjaan")
        pendidikan: true,      // If you want to include pendidikan as well
      },
    });

    if (!datapribadi) {
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