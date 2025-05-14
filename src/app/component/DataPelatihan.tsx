'use client';
import React, {useEffect, useState} from 'react';
import { Form, Input, Select, Card, Row, Col, Button, Upload} from 'antd';
import type { UploadChangeParam, UploadFile } from 'antd/es/upload/interface';
import {
  PlusOutlined,
  MinusCircleOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import type { UploadListType } from 'antd/es/upload/interface';

// Default props for the Upload component; adjust as needed.
const uploadProps = {
  name: 'file',
  // The action URL can be modified or omitted if you handle the upload differently.
  action: '/upload.do',
  listType: 'picture' as UploadListType,
};


// Helper function to process file upload events for Form.Item
const normFile = (
  e: UploadChangeParam<UploadFile> | UploadFile[]
): UploadFile[] => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList || [];
};

const DataPelatihan = ({ form }) => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true); // Ensures this runs only on the client
  }, []);

  if (!hydrated) return null;
  
  return (
    <Card>
      <h2>D. Data Pelatihan</h2>
      <Form.List name="pelatihan">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Card key={key} style={{ marginBottom: 10 }}>
                <Row gutter={6}>
                  <Col xs={24} sm={12}>
                    <Form.Item {...restField} name={[name, 'namaPelatihan']}>
                      <Input placeholder="Nama Pelatihan" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item {...restField} name={[name, 'jenisPelatihan']}>
                      <Select
                        placeholder="Kategori"
                        options={[
                          { value: 'Koder', label: 'Koder' },
                          { value: 'Pelaporan', label: 'Pelaporan' },
                          { value: 'Arsip', label: 'Arsip' },
                          { value: 'Lainnya', label: 'Lainnya' },
                        ]}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      {...restField}
                      name={[name, 'filePelatihan']}
                      valuePropName="fileList"
                      getValueFromEvent={normFile}
                    >
                      <Upload {...uploadProps}>
                        <Button icon={<UploadOutlined />}>Unggah File</Button>
                      </Upload>
                    </Form.Item>
                  </Col>
                  <Col
                    xs={24}
                    sm={12}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <Button
                      danger
                      icon={<MinusCircleOutlined />}
                      onClick={() => remove(name)}
                    >
                      Hapus Pelatihan
                    </Button>
                  </Col>
                </Row>
              </Card>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Tambah Pelatihan
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </Card>
  );
};

export default DataPelatihan;
