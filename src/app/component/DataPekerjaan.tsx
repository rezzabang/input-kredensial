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
    <Card>
            <h2>B. Data Pekerjaan</h2>
            <Form.Item
              label="Nama Tempat Kerja"
              name="namaTempatBekerja"
              rules={[
                { required: true, message: 'Nama Tempat Kerja mohon untuk diisi!' },
              ]}
            >
              <Input/>
            </Form.Item>
            <Form.Item
              label="Alamat Tempat Kerja"
              name="alamatPekerjaan"
              rules={[
                { required: true, message: 'Alamat Tempat Kerja mohon untuk diisi!' },
              ]}
            >
              <Input.TextArea/>
            </Form.Item>
            <Form.Item
              label="Nomor STR"
              name="noStr"
              rules={[
                { required: true, message: 'Nomor STR mohon untuk diisi!' },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Tanggal Berlaku STR"
              name="tanggalStr"
              rules={[
                { required: true, message: 'Tanggal Berlaku STR mohon untuk diisi!' },
              ]}
            >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item
              label="Nomor SIP"
              name="noSip"
              rules={[
                { required: true, message: 'Nomor SIP mohon untuk diisi!' },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Tanggal Berlaku SIP"
              name="tanggalSip"
              rules={[
                { required: true, message: 'Tanggal Berlaku SIP mohon untuk diisi!' },
              ]}
            >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
    </Card>
  );
};

export default DataPekerjaan;
