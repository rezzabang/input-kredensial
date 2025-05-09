'use client';
import React from 'react';
import { Button, Input, DatePicker, Select, Form, Upload, UploadProps, message, Card, Row, Col} from 'antd';
import { PlusOutlined, MinusCircleOutlined , UploadOutlined } from '@ant-design/icons';
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
const DataPribadi = () => {
    const [form] = Form.useForm();
  
    const handleSubmit = (values: string) => {
      console.log('Form values:', values);
    };
  
    return (
      <div className="App" style={{ padding: '20px' }}>
        <h1>Kredensial Rekam Medis</h1>
        <Form
          form={form}
          name="kredensial-form"
          onFinish={handleSubmit}
          initialValues={{ jenisKelamin: 'Pilih Jenis Kelamin', fileIjazah: []  }}
          style={{ maxWidth: '100%' }}
        >
          <div style={{ display: 'flex', gap: '40px' }}>
            <div style={{ flex: 1 }}>
              <h2>A. Data Pribadi</h2>
  
              <Form.Item label="Nama" name="nama" rules={[{ required: true, message: 'Nama mohon untuk diisi!' }]}>
                <Input />
              </Form.Item>
  
              <Form.Item label="Tempat Lahir" name="tempatLahir" rules={[{ required: true, message: 'Tempat Lahir mohon untuk diisi!' }]}>
                <Input />
              </Form.Item>
  
              <Form.Item label="Tanggal Lahir" name="tanggalLahir" rules={[{ required: true, message: 'Tanggal Lahir mohon untuk diisi!' }]}>
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
  
              <Form.Item label="Jenis Kelamin" name="jenisKelamin" rules={[{ required: true, message: 'Jenis Kelamin mohon untuk diisi!' }]}>
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
  
              <Form.Item label="Alamat" name="alamat" rules={[{ required: true, message: 'Alamat mohon untuk diisi!' }]}>
                <Input.TextArea />
              </Form.Item>
            </div>

            <div style={{ flex: 1 }}>
            <h2>B. Data Pendidikan</h2>
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
            </div>
          </div>
          <div style={{ display: 'flex', gap: '40px' }}>
            <div style={{ flex: 1 }}>
            <h2>C. Data Pekerjaan</h2>

            <Form.Item label="NIP" name="nip" rules={[{ required: true, message: 'NIP mohon untuk diisi!' }]}>
              <Input />
            </Form.Item>

            <Form.Item label="Nama Tempat Kerja" name="namaTempatBekerja" rules={[{ required: true, message: 'Nama Tempat Kerja mohon untuk diisi!' }]}>
              <Input />
            </Form.Item>

            <Form.Item label="Alamat Tempat Kerja" name="alamatPekerjaan" rules={[{ required: true, message: 'Alamat Tempat Kerja mohon untuk diisi!' }]}>
              <Input.TextArea />
            </Form.Item>

            <Form.Item label="Nomor STR" name="noStr" rules={[{ required: true, message: 'Nomor STR mohon untuk diisi!' }]}>
              <Input />
            </Form.Item>

            <Form.Item label="Tanggal Berlaku STR" name="tanggalStr" rules={[{ required: true, message: 'TTanggal Berlaku STR mohon untuk diisi!' }]}>
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>

            <Form.Item label="Nomor SIP" name="noSip" rules={[{ required: true, message: 'Nomor SIP mohon untuk diisi!' }]}>
              <Input />
            </Form.Item>

            <Form.Item label="Tanggal Berlaku SIP" name="tanggalSip" rules={[{ required: true, message: 'TTanggal Berlaku SIP mohon untuk diisi!' }]}>
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
            </div>
            <div style={{ flex: 1 }}>
              <h2>D. Data Pelatihan</h2>
              <Form.List name="pelatihan">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, ...restField }) => (
                      <Card key={key} style={{ marginBottom: 16 }}>
                        <Row gutter={6}>
                          <Col xs={24} sm={12}>
                            <Form.Item
                              {...restField}
                              name={[name, 'namaPelatihan']}
                            >
                              <Input placeholder="Nama Pelatihan" />
                            </Form.Item>
                          </Col>
                          <Col xs={24} sm={12}>
                            <Form.Item
                              {...restField}
                              name={[name, 'jenisPelatihan']}
                            >
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
                              <Upload {...props}>
                                <Button icon={<UploadOutlined />}>Unggah File</Button>
                              </Upload>
                            </Form.Item>
                          </Col>
                          <Col xs={24} sm={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                            <Button danger icon={<MinusCircleOutlined />} onClick={() => remove(name)}>
                              Hapus Pelatihan
                            </Button>
                          </Col>
                        </Row>
                      </Card>
                    ))}
                    <Form.Item>
                      <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                        Tambah Pelatihan
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
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
  
  export default DataPribadi;