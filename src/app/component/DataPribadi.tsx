'use client';
import React, { useEffect, useState } from 'react';
import { Form, Input, DatePicker, Select, Card, Button, message } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';


const DataPribadi = ({ form }) => {

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true); // Ensures this runs only on the client
  }, []);

  if (!hydrated) return null;

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
      message.error(json.message || 'Data tidak ditemukan!');
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
      noSip: data.pekerjaan?.noSip,
      tanggalSip: data.pekerjaan?.tanggalSip ? dayjs(data.pekerjaan.tanggalSip) : null,
      universitas: data.pendidikan?.universitas,
      jurusan: data.pendidikan?.jurusan,
      noIjazah: data.pendidikan?.noIjazah,
      tanggalIjazah: data.pendidikan?.tanggalIjazah ? dayjs(data.pendidikan.tanggalIjazah) : null,
      fileIjazah: data.pendidikan?.fileIjazah,
    });

    message.success('Data berhasil dimuat!');
  } catch (err) {
    console.error(err);
    message.error('Terjadi kesalahan saat memuat data.');
  }
  };

  return (
    <Card>
      <h2>A. Data Pribadi</h2>

      <Form.Item
        label="NIP"
        name="nip"
        rules={[
          { required: true, message: 'NIP mohon untuk diisi!' },
          { pattern: /^\S+$/, message: 'NIP tidak boleh mengandung spasi!' },
        ]}
      >
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Input
            style={{ flex: 1 }}
              onPressEnter={(e) => {
              e.preventDefault();
              fetchData();
            }}
          />
          <Button 
            type="dashed" 
            shape="circle" 
            icon={<SearchOutlined />} 
            onClick={fetchData}
          >
          </Button>
        </div>
      </Form.Item>


      <Form.Item
        label="Nama"
        name="nama"
        rules={[{ required: true, message: 'Nama mohon untuk diisi!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Tempat Lahir"
        name="tempatLahir"
        rules={[{ required: true, message: 'Tempat Lahir mohon untuk diisi!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Tanggal Lahir"
        name="tanggalLahir"
        rules={[{ required: true, message: 'Tanggal Lahir mohon untuk diisi!' }]}
      >
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        label="Jenis Kelamin"
        name="jenisKelamin"
        initialValue="Pilih Jenis Kelamin"
        rules={[
          { required: true, message: 'Jenis Kelamin mohon untuk diisi!' },
          {
            validator: (_, value) =>
              value === 'Laki-laki' || value === 'Perempuan'
                ? Promise.resolve()
                : Promise.reject(new Error('Jenis Kelamin harus "Laki-laki" atau "Perempuan"!')),
          },
        ]}
      >
        <Select
          options={[
            { value: 'Laki-laki', label: 'Laki-laki' },
            { value: 'Perempuan', label: 'Perempuan' },
          ]}
        />
      </Form.Item>

      <Form.Item
        label="No. Handphone"
        name="phone"
        rules={[{ required: true, message: 'No. Handphone mohon untuk diisi!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="E-mail"
        name="email"
        rules={[{ required: true, message: 'E-mail mohon untuk diisi!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Alamat"
        name="alamat"
        rules={[{ required: true, message: 'Alamat mohon untuk diisi!' }]}
      >
        <Input.TextArea />
      </Form.Item>
    </Card>
  );
};

export default DataPribadi;
