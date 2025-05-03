'use client';
import React from 'react';
import DataPendidikan from './DataPendidikan';
import { Button, Input, DatePicker, Select, Form} from 'antd';

const DataPribadi = () => {
    const [form] = Form.useForm();
  
    const handleSubmit = (values: any) => {
      console.log('Form values:', values);
    };
  
    return (
      <div className="App" style={{ padding: '20px' }}>
        <h1>Kredensial Rekam Medis</h1>
        <Form
          form={form}
          name="kredensial-form"
          onFinish={handleSubmit}
          initialValues={{ jeniskelamin: 'Pilih Jenis Kelamin' }}
          style={{ maxWidth: '100%' }}
        >
          <div style={{ display: 'flex', gap: '40px' }}>
            {/* Left Column */}
            <div style={{ flex: 1 }}>
              <h2>A. Data Pribadi</h2>
  
              <Form.Item label="Nama" name="nama" rules={[{ required: true, message: 'Nama mohon untuk diisi!' }]}>
                <Input />
              </Form.Item>
  
              <Form.Item label="Tempat Lahir" name="tempatlahir" rules={[{ required: true, message: 'Tempat Lahir mohon untuk diisi!' }]}>
                <Input />
              </Form.Item>
  
              <Form.Item label="Tanggal Lahir" name="tanggalahir" rules={[{ required: true, message: 'Tanggal Lahir mohon untuk diisi!' }]}>
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
  
              <Form.Item label="Jenis Kelamin" name="jeniskelamin" rules={[{ required: true, message: 'Jenis Kelamin mohon untuk diisi!' }]}>
                <Select
                  options={[
                    { value: 'Laki-laki', label: 'Laki-laki' },
                    { value: 'Perempuan', label: 'Perempuan' },
                  ]}
                />
              </Form.Item>
  
              <Form.Item label="No. Handphone" name="phone" rules={[{ required: true, message: 'No. Handphone mohon untuk diisi!' }]}>
                <Input />
              </Form.Item>
  
              <Form.Item label="E-mail" name="email" rules={[{ required: true, message: 'E-mail mohon untuk diisi!' }]}>
                <Input />
              </Form.Item>
  
              <Form.Item label="Alamat" name="address" rules={[{ required: true, message: 'Alamat mohon untuk diisi!' }]}>
                <Input.TextArea />
              </Form.Item>
            </div>
  
            {/* Right Column */}
            <div style={{ flex: 1 }}>
              <DataPendidikan />
            </div>
          </div>
  
          {/* Single Submit Button */}
          <Form.Item style={{ marginTop: 24, textAlign: 'center' }}>
            <Button type="primary" htmlType="submit">
              SIMPAN
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  };
  
  export default DataPribadi;