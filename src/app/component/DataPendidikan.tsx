'use client';
import React, {useEffect, useState} from 'react';
import { Button, Input, DatePicker,  Form, Upload, UploadProps, message, Card } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadChangeParam, UploadFile } from 'antd/es/upload/interface';

const props: UploadProps = {
  beforeUpload: (file) => {
    const isPDF = file.type === 'application/pdf';
    if (!isPDF) {
      message.error(`${file.name} bukan file PDF`);
    }
    return isPDF || Upload.LIST_IGNORE;
  },
  onChange: (info) => {
    console.log(info.fileList);
  },
};

const normFile = (
  e: UploadChangeParam<UploadFile> | UploadFile[]
): UploadFile[] => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList || [];
};

const DataPendidikan = ({ form }) => {
    const [hydrated, setHydrated] = useState(false);
  
    useEffect(() => {
      setHydrated(true); // Ensures this runs only on the client
    }, []);
  
    if (!hydrated) return null;
    return (
    <Card>
      <h2>C. Data Pendidikan Terakhir</h2>
      <Form.Item label="Nama Perguruan Tinggi" name="universitas" rules={[{ required: true, message: 'Nama Sekolah mohon untuk diisi!' }]}>
          <Input type="text" id="sekolah"/>
      </Form.Item>

      <Form.Item
          label="Jurusan/Program"
          name="jurusan"
          rules={[{ required: true, message: 'Jurusan/Program mohon diisi!' }]}
      >
          <Input type="text" id="jurusan"/>
      </Form.Item>

      <Form.Item
          label="Nomor Ijazah"
          name="noIjazah"
          rules={[{ required: true, message: 'Nomor Ijazah mohon diisi!' }]}
      >
          <Input type="text" id="noijazah"/>
      </Form.Item>
      
      <Form.Item
          label="Tanggal Ijazah"
          name="tanggalIjazah"
          rules={[{ required: true, message: 'Tanggal Ijazah mohon diisi!' }]}
      >
          <DatePicker id="tanggaijazah" />
      </Form.Item>

      <Form.Item
        label="Upload Ijazah"
        name="fileIjazah"
        valuePropName="fileList"
        rules={[{ required: true, message: 'File Ijazah mohon diupload!' }]}
        getValueFromEvent={normFile}
      >
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>File Ijazah</Button>
        </Upload>
      </Form.Item>
    </Card>
  );
};

export default DataPendidikan;
