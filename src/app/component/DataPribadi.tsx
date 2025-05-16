'use client';
import React, { useEffect, useState } from 'react';
import { Form, Input, DatePicker, Select } from 'antd';
import CariDataAll from './CariDataAll';


const DataPribadi = ({ form }) => {

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true); // Ensures this runs only on the client
  }, []);

  if (!hydrated) return null;

  return (
    <>
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
          }}
          />
          <CariDataAll form={form}/>
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
    </>
  );
};

export default DataPribadi;
