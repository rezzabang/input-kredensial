'use client';

import React from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select, Space, message } from 'antd';

const TambahKompetensi = ({ onSuccess }: { onSuccess: () => void }) => {
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    const values = form.getFieldsValue();
    const kompetensiList = values.kompetensi || [];

    try {
      const response = await fetch('/api/kompetensi/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(kompetensiList),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Gagal menambahkan kompetensi.');
      }

      message.success('Kompetensi berhasil disimpan!');
      form.resetFields();
      onSuccess(); // ✅ Trigger table refresh
    } catch (error: any) {
      console.error('Gagal simpan kompetensi:', error);
      message.error(error.message || 'Terjadi kesalahan saat menyimpan data.');
    }
  };


  return (
    <Form
      form={form}
      name="tambah-kompetensi"
      onFinish={handleSubmit}
      style={{ maxWidth: 800 }}
      autoComplete="off"
    >
      <Form.List name="kompetensi">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field) => (
              <Space
                key={field.key}
                style={{ display: 'flex', marginBottom: 8 }}
                align="baseline"
              >
                <Form.Item
                  name={[field.name, 'kuk']}
                  rules={[
                    { required: true, message: 'Isi Kode Kompetensi' },
                    { pattern: /^\S+$/, message: 'Tidak boleh ada spasi!' },
                  ]}
                >
                  <Input placeholder="Kode Kompetensi" style={{ width: 140, borderRadius: 6 }}/>
                </Form.Item>
                <Form.Item
                  name={[field.name, 'detail']}
                  rules={[{ required: true, message: 'Isi Detail Kompetensi' }]}
                >
                  <Input placeholder="Detail Kompetensi" style={{ width: 350, borderRadius: 6 }}/>
                </Form.Item>
                <Form.Item
                  name={[field.name, 'kompetensi']}
                  rules={[{ required: true, message: 'Isi Jenis Kompetensi' }]}
                >
                  <Select
                    placeholder="Kompetensi"
                    options={[
                      { value: 'Keterampilan', label: 'Keterampilan' },
                      { value: 'Keahlian', label: 'Keahlian' },
                    ]}
                  />
                </Form.Item>
                <Form.Item
                  name={[field.name, 'kategori']}
                  rules={[{ required: true, message: 'Isi Kategori Kompetensi' }]}
                >
                  <Select
                    placeholder="Kategori"
                    options={[
                      { value: 'Arsip', label: 'Arsip' },
                      { value: 'Koding', label: 'Koding' },
                      { value: 'Pelaporan', label: 'Pelaporan' },
                      { value: 'Pendaftaran', label: 'Pendaftaran' },
                      { value: 'Pelepasan Informasi', label: 'Pelepasan Informasi' },
                    ]}
                  />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(field.name)} />
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Tambah Kompetensi
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 24 }}>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            SIMPAN
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default TambahKompetensi;
