import { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import prisma from "@/lib/prisma";
import formidable from "formidable";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

const getField = (field: any) => Array.isArray(field) ? field[0] : field;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const form = formidable({
    multiples: false,
    uploadDir: path.join(process.cwd(), "/public/uploads"),
    keepExtensions: true,
    filename: (_name, _ext, part) => {
      const ext = path.extname(part.originalFilename || "") || ".pdf";
      return `${uuidv4()}${ext}`;
    },
  });

  try {
    const [fields, files] = await new Promise<any[]>((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        else resolve([fields, files]);
      });
    });

    const {
      nip,
      nama,
      tempatLahir,
      tanggalLahir,
      jenisKelamin,
      phone,
      email,
      alamat,
      namaTempatBekerja,
      alamatPekerjaan,
      noStr,
      tanggalStr,
      noSip,
      tanggalSip,
      universitas,
      jurusan,
      noIjazah,
      tanggalIjazah,
    } = fields;

    const fileIjazah = files.fileIjazah?.[0]?.newFilename;

    if (!fileIjazah) {
      return res.status(400).json({ success: false, message: "File ijazah tidak ditemukan." });
    }

    // Upsert DataPribadi
    await prisma.datapribadi.upsert({
      where: { nip: getField(nip) },
      update: {
        nama: getField(nama),
        tempatLahir: getField(tempatLahir),
        tanggalLahir: new Date(getField(tanggalLahir)),
        jenisKelamin: getField(jenisKelamin),
        phone: getField(phone),
        email: getField(email),
        alamat: getField(alamat),
      },
      create: {
        nip: getField(nip),
        nama: getField(nama),
        tempatLahir: getField(tempatLahir),
        tanggalLahir: new Date(getField(tanggalLahir)),
        jenisKelamin: getField(jenisKelamin),
        phone: getField(phone),
        email: getField(email),
        alamat: getField(alamat),
      },
    });

    // Upsert DataPekerjaan
    await prisma.dataPekerjaan.upsert({
      where: { nip: getField(nip) },
      update: {
        namaTempatBekerja: getField(namaTempatBekerja),
        alamatPekerjaan: getField(alamatPekerjaan),
        noStr: getField(noStr),
        tanggalStr: new Date(getField(tanggalStr)),
        noSip: getField(noSip),
        tanggalSip: new Date(getField(tanggalSip)),
      },
      create: {
        nip: getField(nip),
        namaTempatBekerja: getField(namaTempatBekerja),
        alamatPekerjaan: getField(alamatPekerjaan),
        noStr: getField(noStr),
        tanggalStr: new Date(getField(tanggalStr)),
        noSip: getField(noSip),
        tanggalSip: new Date(getField(tanggalSip)),
      },
    });

    // Upsert DataPendidikan
    const pendidikan = await prisma.dataPendidikan.upsert({
      where: { nip: getField(nip) },
      update: {
        universitas: getField(universitas),
        jurusan: getField(jurusan),
        noIjazah: getField(noIjazah),
        tanggalIjazah: new Date(getField(tanggalIjazah)),
        fileIjazah,
      },
      create: {
        nip: getField(nip),
        universitas: getField(universitas),
        jurusan: getField(jurusan),
        noIjazah: getField(noIjazah),
        tanggalIjazah: new Date(getField(tanggalIjazah)),
        fileIjazah,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Data berhasil disimpan atau diperbarui.",
      data: pendidikan,
    });

  } catch (error) {
    console.error("Error saving data:", error);
    return res.status(500).json({ success: false, message: "Terjadi kesalahan saat menyimpan data." });
  }
};

export default handler;