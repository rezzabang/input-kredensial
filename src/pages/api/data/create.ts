import { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import prisma from "@/lib/prisma";
import formidable from "formidable";
import path from "path";
import fs from "fs";

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

  const tempUploadDir = path.join(process.cwd(), "/public/uploads");

  const form = formidable({
    multiples: false,
    uploadDir: tempUploadDir,
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

    const nipValue = getField(fields.nip);
    let fileIjazahName = "";
    let fileSikName = "";

    const fileIjazahObj = files.fileIjazah?.[0];

    if (fileIjazahObj) {
      const filename = fileIjazahObj.newFilename;
      const tempFilePath = fileIjazahObj.filepath;
      const finalDir = path.join(tempUploadDir, nipValue);
      const finalFilePath = path.join(finalDir, filename);

      if (!fs.existsSync(finalDir)) {
        fs.mkdirSync(finalDir, { recursive: true });
      }

      fs.renameSync(tempFilePath, finalFilePath);
      fileIjazahName = filename;
    } else if (fields.fileIjazah_existing) {
      fileIjazahName = getField(fields.fileIjazah_existing);
    } else {
      return res.status(400).json({ success: false, message: "File ijazah tidak ditemukan." });
    }

    const fileSikObj = files.fileSik?.[0];

    if (fileSikObj) {
      const filename = fileSikObj.newFilename;
      const tempFilePath = fileSikObj.filepath;
      const finalDir = path.join(tempUploadDir, nipValue);
      const finalFilePath = path.join(finalDir, filename);

      if (!fs.existsSync(finalDir)) {
        fs.mkdirSync(finalDir, { recursive: true });
      }

      fs.renameSync(tempFilePath, finalFilePath);
      fileSikName = filename;
    } else if (fields.fileSik_existing) {
      fileSikName = getField(fields.fileSik_existing);
    } else {
      return res.status(400).json({ success: false, message: "File SIK & STR tidak ditemukan." });
    }

    // Upsert DataPribadi
    await prisma.datapribadi.upsert({
      where: { nip: nipValue },
      update: {
        nama: getField(fields.nama),
        tempatLahir: getField(fields.tempatLahir),
        tanggalLahir: new Date(getField(fields.tanggalLahir)),
        jenisKelamin: getField(fields.jenisKelamin),
        phone: getField(fields.phone),
        email: getField(fields.email),
        alamat: getField(fields.alamat),
      },
      create: {
        nip: nipValue,
        nama: getField(fields.nama),
        tempatLahir: getField(fields.tempatLahir),
        tanggalLahir: new Date(getField(fields.tanggalLahir)),
        jenisKelamin: getField(fields.jenisKelamin),
        phone: getField(fields.phone),
        email: getField(fields.email),
        alamat: getField(fields.alamat),
      },
    });

    // Upsert DataPekerjaan
    await prisma.dataPekerjaan.upsert({
      where: { nip: nipValue },
      update: {
        namaTempatBekerja: getField(fields.namaTempatBekerja),
        alamatPekerjaan: getField(fields.alamatPekerjaan),
        noStr: getField(fields.noStr),
        tanggalStr: new Date(getField(fields.tanggalStr)),
        noSip: getField(fields.noSip),
        tanggalSip: new Date(getField(fields.tanggalSip)),
        fileSik: fileSikName,
      },
      create: {
        nip: nipValue,
        namaTempatBekerja: getField(fields.namaTempatBekerja),
        alamatPekerjaan: getField(fields.alamatPekerjaan),
        noStr: getField(fields.noStr),
        tanggalStr: new Date(getField(fields.tanggalStr)),
        noSip: getField(fields.noSip),
        tanggalSip: new Date(getField(fields.tanggalSip)),
        fileSik: fileSikName,
      },
    });

    // Upsert DataPendidikan
    const pendidikan = await prisma.dataPendidikan.upsert({
      where: { nip: nipValue },
      update: {
        universitas: getField(fields.universitas),
        jurusan: getField(fields.jurusan),
        noIjazah: getField(fields.noIjazah),
        tanggalIjazah: new Date(getField(fields.tanggalIjazah)),
        fileIjazah: fileIjazahName,
      },
      create: {
        nip: nipValue,
        universitas: getField(fields.universitas),
        jurusan: getField(fields.jurusan),
        noIjazah: getField(fields.noIjazah),
        tanggalIjazah: new Date(getField(fields.tanggalIjazah)),
        fileIjazah: fileIjazahName,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Data berhasil disimpan dan file berhasil dipindahkan.",
      data: pendidikan,
    });

  } catch (error: any) {
    console.error("Error saving data:", error);
    return res.status(500).json({
      success: false,
      message: "Terjadi kesalahan saat menyimpan data.",
      error: error?.message || error,
    });
  }

};

export default handler;
