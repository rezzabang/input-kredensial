'use client';
import React, { useEffect, useState } from 'react';
import { Button, Input, DatePicker, Form, Upload, message, Card } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadChangeParam, UploadFile, UploadProps } from 'antd/es/upload/interface';

const normFile = (e: UploadChangeParam<UploadFile> | UploadFile[]): UploadFile[] => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList || [];
};

const DataPendidikan = ({ form }) => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

const uploadProps: UploadProps = {
  beforeUpload: (file) => {
    const isPDF = file.type === 'application/pdf';
    if (!isPDF) {
      message.error(`${file.name} bukan file PDF`);
    }
    return isPDF || Upload.LIST_IGNORE;
  },
  maxCount: 1,
  showUploadList: {
    showRemoveIcon: true,
    showDownloadIcon: true,
  },
  listType: 'text',
  onRemove: async (file) => {
    const nip = form.getFieldValue('nip'); // ← you need `form` here
    if (!nip) {
      message.error('NIP tidak ditemukan. Tidak bisa hapus file.');
      return false;
    }

    try {
      const res = await fetch(`/api/data/delete-ijazah/${nip}`, {
        method: 'DELETE',
      });

      const json = await res.json();

      if (json.success) {
        message.success('File ijazah berhasil dihapus');
        form.setFieldsValue({ fileIjazah: [] });
        return true; // remove from UI
      } else {
        message.error(json.message || 'Gagal menghapus file ijazah');
        return false; // keep file in UI
      }
    } catch (err) {
      message.error('Terjadi kesalahan saat menghapus file ijazah.');
      return false; // keep file in UI
    }
  },
};

  if (!hydrated) return null;

  return (
    <>
      <h2>C. Data Pendidikan Terakhir</h2>

      <Form.Item
        label="Nama Perguruan Tinggi"
        name="universitas"
        rules={[{ required: true, message: 'Nama Sekolah mohon untuk diisi!' }]}
      >
        <Input placeholder='Universitas Apa Aja'/>
      </Form.Item>

      <Form.Item
        label="Program Studi"
        name="jurusan"
        rules={[{ required: true, message: 'Program Studi mohon diisi!' }]}
      >
        <Input placeholder='D-III Rekam Medis dan Informasi Kesehatan'/>
      </Form.Item>

      <Form.Item
        label="Nomor Ijazah"
        name="noIjazah"
        rules={[{ required: true, message: 'Nomor Ijazah mohon diisi!' }]}
      >
        <Input placeholder='12345-12'/>
      </Form.Item>

      <Form.Item
        label="Tanggal Ijazah"
        name="tanggalIjazah"
        rules={[{ required: true, message: 'Tanggal Ijazah mohon diisi!' }]}
      >
        <DatePicker placeholder='Pilih Tanggal'/>
      </Form.Item>

      <Form.Item
        label="Upload Ijazah"
        name="fileIjazah"
        rules={[{ required: true, message: 'Mohon upload file ijazah!' }]}
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload {...uploadProps}>
          <Button icon={<UploadOutlined />}>File Ijazah</Button>
        </Upload>
      </Form.Item>
    </>
  );
};

export default DataPendidikan;
