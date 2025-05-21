'use client';
import React, { useEffect, useState }  from 'react';
import { Form, Input, DatePicker, Card} from 'antd';

const DataPekerjaan = ({ form }) => {

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true); // Ensures this runs only on the client
  }, []);

  if (!hydrated) return null;

  return (
    <>
            <h2>B. Data Pekerjaan</h2>
            <Form.Item
              label="Nama Tempat Kerja"
              name="namaTempatBekerja"
              initialValue="RSUD Prof. Dr. Margono Soekarjo"
              rules={[
                { required: true, message: 'Nama Tempat Kerja mohon untuk diisi!' },
              ]}
            >
              <Input placeholder="RSUD Prof. Dr. Margono Soekarjo" value="RSUD Prof. Dr. Margono Soekarjo" disabled/>
            </Form.Item>
            <Form.Item
              label="Alamat Tempat Kerja"
              name="alamatPekerjaan"
              initialValue="Jl. Dr. Gumbreg No 1, Berkoh, Purwokerto Selatan, Banyumas"
              rules={[
                { required: true, message: 'Alamat Tempat Kerja mohon untuk diisi!' },
              ]}
            >
              <Input.TextArea placeholder="Jl. Dr. Gumbreg No 1, Berkoh, Purwokerto Selatan, Banyumas" value="Jl. Dr. Gumbreg No 1, Berkoh, Purwokerto Selatan, Banyumas" disabled/>
            </Form.Item>
            <Form.Item
              label="Nomor STR"
              name="noStr"
              rules={[
                { required: true, message: 'Nomor STR mohon untuk diisi!' },
              ]}
            >
              <Input placeholder='TE000000XXXXX'/>
            </Form.Item>
            <Form.Item
              label="Tanggal Terbit STR"
              name="tanggalStr"
              rules={[
                { required: true, message: 'Tanggal Terbit STR mohon untuk diisi!' },
              ]}
            >
              <DatePicker placeholder="Pilih Tanggal" style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item
              label="Nomor SIP"
              name="noSip"
              rules={[
                { required: true, message: 'Nomor SIP mohon untuk diisi!' },
              ]}
            >
              <Input placeholder='Perizinan/xxxx/xxxx'/>
            </Form.Item>
            <Form.Item
              label="Tanggal Berakhir SIP"
              name="tanggalSip"
              rules={[
                { required: true, message: 'Tanggal Berakhir SIP mohon untuk diisi!' },
              ]}
            >
              <DatePicker placeholder="Pilih Tanggal" style={{ width: '100%' }} />
            </Form.Item>
    </>
  );
};

export default DataPekerjaan;
