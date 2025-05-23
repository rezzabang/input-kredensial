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
const normFilestr = (e: UploadChangeParam<UploadFile> | UploadFile[]): UploadFile[] => {
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

  const uploadPropsStr: UploadProps = {
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
      const nip = form.getFieldValue('nip');
      if (!nip) {
        message.error('NIP tidak ditemukan. Tidak bisa hapus file STR.');
        return false;
      }

      try {
        const res = await fetch(`/api/data/delete-str/${nip}`, {
          method: 'DELETE',
        });
        const json = await res.json();
        if (json.success) {
          message.success('File STR berhasil dihapus');
          form.setFieldsValue({ fileStr: [] });
          return true;
        } else {
          message.error(json.message || 'Gagal menghapus file STR');
          return false;
        }
      } catch (err) {
        message.error(err + 'Terjadi kesalahan saat menghapus file STR');
        return false;
      }
    },
  };

  const uploadPropsSik: UploadProps = {
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
      const nip = form.getFieldValue('nip');
      if (!nip) {
        message.error('NIP tidak ditemukan. Tidak bisa hapus file SIK.');
        return false;
      }

      try {
        const res = await fetch(`/api/data/delete-sik/${nip}`, {
          method: 'DELETE',
        });
        const json = await res.json();
        if (json.success) {
          message.success('File SIK berhasil dihapus');
          form.setFieldsValue({ fileSik: [] });
          return true;
        } else {
          message.error(json.message || 'Gagal menghapus file SIK');
          return false;
        }
      } catch (err) {
        message.error(err + 'Terjadi kesalahan saat menghapus file SIK');
        return false;
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
        label="Upload STR"
        name="fileStr"
        rules={[{ required: true, message: 'Mohon upload file STR!' }]}
        valuePropName="fileList"
        getValueFromEvent={normFilestr}
      >
        <Upload {...uploadPropsStr}>
          <Button icon={<UploadOutlined />}>File STR</Button>
        </Upload>
      </Form.Item>
      <Form.Item
        label="Nomor SIK"
        name="noSip"
        rules={[
          { required: true, message: 'Nomor SIP mohon untuk diisi!' },
        ]}
      >
        <Input placeholder='Perizinan/xxxx/xxxx'/>
      </Form.Item>
      <Form.Item
        label="Tanggal Berakhir SIK"
        name="tanggalSip"
        rules={[
          { required: true, message: 'Tanggal Berakhir SIP mohon untuk diisi!' },
        ]}
      >
        <DatePicker placeholder="Pilih Tanggal" style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item
        label="Upload SIK"
        name="fileSik"
        rules={[{ required: true, message: 'Mohon upload file SIK!' }]}
        valuePropName="fileList"
        getValueFromEvent={normFilesik}
      >
        <Upload {...uploadPropsSik}>
          <Button icon={<UploadOutlined />}>File SIK</Button>
        </Upload>
      </Form.Item>
    </>
  );
};

export default DataPekerjaan;
