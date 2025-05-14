//import next request and response
import { NextResponse } from "next/server";

//import prisma client
import prisma from "@/lib/prisma";

export async function GET() {

  const Dataribadi = await prisma.datapribadi.findMany();

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