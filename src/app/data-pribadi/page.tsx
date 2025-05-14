'use client';
import React from 'react';
import {
  Button,
  Form,
  message,
} from 'antd';
import DataPribadi from '../component/DataPribadi';
import DataPendidikan from '../component/DataPendidikan';
import DataPekerjaan from '../component/DataPekerjaan';
import DataPelatihan from '../component/DataPelatihan';


const DataPeserta = () => {
  const [form] = Form.useForm();

  const handleSubmit = async (values: any) => {
    try {
      const payload = {
        ...values,
        tanggalLahir: values.tanggalLahir.toDate().toISOString(),
      };

      const response = await fetch('/api/data/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to submit data');
      }

      const result = await response.json();
      message.success('Data berhasil dikirim!');
      console.log('Success:', result);
      form.resetFields();
    } catch (error) {
      message.error('Gagal mengirim data, silakan cek kekurangan dan coba lagi.');
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="App" style={{ padding: '10px' }}>
      <h1>Kredensial Rekam Medis</h1>
      <Form
        form={form}
        name="kredensial-form"
        onFinish={handleSubmit}
        initialValues={{ fileIjazah: [] }}
        style={{ maxWidth: '100%' }}
      >
        <div style={{ display: 'flex', gap: '30px' }}>
          <div style={{ flex: 1 }}>
            <DataPribadi />
          </div>

          <div style={{ flex: 1 }}>
            <DataPekerjaan />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '40px', marginTop: 24 }}>
          <div style={{ flex: 1 }}>
            <DataPendidikan />
          </div>
          <div style={{ flex: 1 }}>
            <DataPelatihan />
          </div>
        </div>
        <Form.Item style={{ marginTop: 24, textAlign: 'center' }}>
          <Button type="primary" htmlType="submit">
            SIMPAN
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default DataPeserta;
