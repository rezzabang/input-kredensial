//import next request and response
import { NextResponse } from "next/server";

//import prisma client
import prisma from "@/lib/prisma";

export async function GET(request: Request, { params }: { params: { nip: string } }) {
  try {
    // Get params ID without converting to number
    const { nip } = params;

    // Fetch data from database
    const Dataribadi = await prisma.dataribadi.findUnique({
      where: { nip },
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

    // Return success response with data
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

