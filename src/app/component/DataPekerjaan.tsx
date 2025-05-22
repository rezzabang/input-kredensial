'use client';
import React, { useEffect, useState }  from 'react';
import { Form, Input, DatePicker, Button, Upload, message} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadChangeParam, UploadFile, UploadProps } from 'antd/es/upload/interface';

const normFilesik = (e: UploadChangeParam<UploadFile> | UploadFile[]): UploadFile[] => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList || [];
};

const DataPekerjaan = ({ form }) => {

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

    const uploadProps: UploadProps = {
    beforeUpload: (fileSik) => {
      const isPDF = fileSik.type === 'application/pdf';
      if (!isPDF) {
        message.error(`${fileSik.name} bukan SikfileSik PDF`);
      }
      return isPDF || Upload.LIST_IGNORE;
    },
    maxCount: 2,
    showUploadList: {
      showRemoveIcon: true,
      showDownloadIcon: true,
    },
    listType: 'text',
    onRemove: async (fileSik) => {
      const nip = form.getFieldValue('nip');
      if (!nip) {
        message.error('NIP tidak ditemukan. Tidak bisa hapus SikfileSik.');
        return false;
      }

      try {
        const res = await fetch(`/api/data/delete-sik/${nip}`, {
          method: 'DELETE',
        });

        const json = await res.json();

        if (json.success) {
          message.success('File berhasil dihapus');
          form.setFieldsValue({ fileSip: [] });
          return true; // remove from UI
        } else {
          message.error(json.message || 'Gagal menghapus file');
          return false; // keep file in UI
        }
      } catch (err) {
        message.error('Terjadi kesalahan saat menghapus file');
        return false; // keep file in UI
      }
    },
  };

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
      <Form.Item
        label="Upload SIK & STR"
        name="fileSik"
        rules={[{ required: true, message: 'Mohon upload file SIK!' }]}
        valuePropName="fileList"
        getValueFromEvent={normFilesik}
      >
        <Upload {...uploadProps}>
          <Button icon={<UploadOutlined />}>File SIK & STR</Button>
        </Upload>
      </Form.Item>
    </>
  );
};

export default DataPekerjaan;
