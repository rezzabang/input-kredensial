// pages/api/asesmen/mandiri/create.ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { nip, nama, kompetensi } = req.body;

  if (!nip || !Array.isArray(kompetensi)) {
    return res.status(400).json({ message: 'Invalid request body' });
  }

  try {
    // Optional: Delete existing entries for the user
    await prisma.asesmenMandiri.deleteMany({
      where: { nip },
    });

    // Create new entries
    const data = kompetensi.map((item: { kuk: string; asesmen: string }) => ({
      nip,
      nama,
      kuk: item.kuk,
      asesmen: item.asesmen,
    }));

    await prisma.asesmenMandiri.createMany({ data });

    return res.status(200).json({ message: 'Data saved successfully' });
  } catch (error) {
    console.error('Error saving data:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
