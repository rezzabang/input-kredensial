//import next request and response
import { NextResponse } from "next/server";

//import prisma client
import prisma from "@/lib/prisma";

export async function GET() {

  const Dataribadi = await prisma.dataribadi.findMany();

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

export async function POST(request: Request) {
  //get all request
  const { nip, nama, tempatLahir, tanggalLahir, jenisKelamin, phone, email, alamat } = await request.json();

  //create data post
  const Dataribadi = await prisma.dataribadi.create({
    data: {
      nip,
      nama,
      tempatLahir,
      tanggalLahir,
      jenisKelamin,
      phone,
      email,
      alamat,
    },
  });

  //return response JSON
  return NextResponse.json(
    {
      success: true,
      message: "Post Created Successfully!",
      data: Dataribadi,
    },
    { status: 201 }
  );
}