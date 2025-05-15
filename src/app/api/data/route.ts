//import next request and response
import { NextResponse } from "next/server";

//import prisma client
import prisma from "@/lib/prisma";

export async function GET() {

  const Dataribadi = await prisma.datapribadi.findMany({
    include: {
      pekerjaan: true, // Include related pekerjaan (assuming your relation model name is "pekerjaan")
      pendidikan: true, // If you want to include pendidikan as well
    },
  });

  return NextResponse.json(
    {
      sucess: true,
      message: "List Data Pribadi",
      data: { Dataribadi },
    },
    {
      status: 200,
    }
  );
}