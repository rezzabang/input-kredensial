'use client';
import React from 'react';
import { Button, Input, DatePicker, Form, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

const DataPendidikan = () => (
  <div className="App" style={{ padding: '20px' }}>
    <h1>Kredensial Rekam Medis</h1>
        <div>
            <h1>B. Data Pendidikan</h1>
            <Form
                name="data-pendidikan"
                initialValues={{ jeniskelamin: 'Pilih Jenis Kelamin' }}
                style={{ maxWidth: 600 }}
                >

                <Form.Item label="Nama Sekolah" name="sekolah" rules={[{ required: true, message: 'Nama Sekolah mohon untuk diisi!' }]}>
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
                    name="noijazah"
                    rules={[{ required: true, message: 'Nomor Ijazah mohon diisi!' }]}
                >
                    <Input type="text" id="noijazah"/>
                </Form.Item>
                
                <Form.Item
                    label="Tanggal Ijazah"
                    name="tanggaijazah"
                    rules={[{ required: true, message: 'Tanggal Ijazah mohon diisi!' }]}
                >
                    <DatePicker id="tanggaijazah" />
                </Form.Item>

                <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
                    <Upload 
                        action="/upload.do"
                        listType="picture-card"
                        accept=".pdf"
                    >
                        <button
                            style={{ color: 'inherit', cursor: 'inherit', border: 0, background: 'none' }}
                            type="button"
                        >
                        <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Upload</div>
                        </button>
                    </Upload>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
  </div>
);

export default DataPendidikan;