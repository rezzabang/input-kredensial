'use client';
import React from 'react';
import { Button, message } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

const CariDataAll = ({ form }) => {
  const fetchData = async () => {
    const nip = form.getFieldValue('nip')?.trim();
    if (!nip) {
      message.warning('Silakan masukkan NIP terlebih dahulu.');
      return;
    }

    try {
      const res = await fetch(`/api/data/${nip}`);
      const json = await res.json();

      if (!json.success) {
        message.warning(json.message || 'Data tidak ditemukan!');
        return;
      }

      const { data } = json;

      form.setFieldsValue({
        nip: data.nip,
        nama: data.nama,
        tempatLahir: data.tempatLahir,
        tanggalLahir: dayjs(data.tanggalLahir),
        jenisKelamin: data.jenisKelamin,
        phone: data.phone,
        email: data.email,
        alamat: data.alamat,
        namaTempatBekerja: data.pekerjaan?.namaTempatBekerja,
        alamatPekerjaan: data.pekerjaan?.alamatPekerjaan,
        noStr: data.pekerjaan?.noStr,
        tanggalStr: data.pekerjaan?.tanggalStr ? dayjs(data.pekerjaan.tanggalStr) : null,
        fileStr: data.pekerjaan?.fileStr
          ? [{
              uid: '-1',
              name: data.pekerjaan.fileStr,
              status: 'done',
              url: `/uploads/${data.nip}/${data.pekerjaan.fileStr}`,
            }]
          : [],
        noSip: data.pekerjaan?.noSip,
        tanggalSip: data.pekerjaan?.tanggalSip ? dayjs(data.pekerjaan.tanggalSip) : null,
        fileSik: data.pekerjaan?.fileSik
          ? [{
              uid: '-1',
              name: data.pekerjaan.fileSik,
              status: 'done',
              url: `/uploads/${data.nip}/${data.pekerjaan.fileSik}`,
            }]
          : [],
        universitas: data.pendidikan?.universitas,
        jurusan: data.pendidikan?.jurusan,
        noIjazah: data.pendidikan?.noIjazah,
        tanggalIjazah: data.pendidikan?.tanggalIjazah ? dayjs(data.pendidikan.tanggalIjazah) : null,
        fileIjazah: data.pendidikan?.fileIjazah
          ? [{
              uid: '-1',
              name: data.pendidikan.fileIjazah,
              status: 'done',
              url: `/uploads/${data.nip}/${data.pendidikan.fileIjazah}`,
            }]
          : [],
      });

      message.success('Data berhasil dimuat!');
    } catch (err) {
      message.error(err + 'Terjadi kesalahan saat memuat data.');
    }
  };

  return (
    <Button 
      type="dashed" 
      shape="circle" 
      icon={<SearchOutlined />} 
      onClick={fetchData}
    />
  );
};

export default CariDataAll;
