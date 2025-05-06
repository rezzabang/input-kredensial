'use client';
import React from 'react';
import { Button, Input, DatePicker, Select, Form, Upload} from 'antd';
import { PlusOutlined, MinusCircleOutlined  } from '@ant-design/icons';

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
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

            <div style={{ flex: 1 }}>
            <h2>B. Data Pendidikan</h2>
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

                <Form.Item label="Upload Ijazah" valuePropName="fileList" getValueFromEvent={normFile}>
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
                            <div style={{ marginTop: 8 }}>Tambah File</div>
                        </button>
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

            <Form.Item label="Nama Tempat Kerja" name="namatempatbekerja" rules={[{ required: true, message: 'Nama Tempat Kerja mohon untuk diisi!' }]}>
              <Input />
            </Form.Item>

            <Form.Item label="Alamat Tempat Kerja" name="jobaddress" rules={[{ required: true, message: 'Alamat Tempat Kerja mohon untuk diisi!' }]}>
              <Input.TextArea />
            </Form.Item>

            <Form.Item label="Nomor STR" name="nostr" rules={[{ required: true, message: 'Nomor STR mohon untuk diisi!' }]}>
              <Input />
            </Form.Item>

            <Form.Item label="Tanggal Berlaku STR" name="tanggalstr" rules={[{ required: true, message: 'TTanggal Berlaku STR mohon untuk diisi!' }]}>
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>

            <Form.Item label="Nomor SIP" name="nosip" rules={[{ required: true, message: 'Nomor SIP mohon untuk diisi!' }]}>
              <Input />
            </Form.Item>

            <Form.Item label="Tanggal Berlaku SIP" name="tanggasip" rules={[{ required: true, message: 'TTanggal Berlaku SIP mohon untuk diisi!' }]}>
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
            </div>
            <div style={{ flex: 1 }}>
            <h2>D. Data Pelatihan</h2>

            <Form.List name="pelatihan">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name }) => (
                    <div
                      key={key}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        marginBottom: 12,
                      }}
                    >
                      <Form.Item
                        name={[name, 'namapelatihan']}
                        style={{ flex: 1 }}
                        rules={[{ message: 'Isi nama pelatihan' }]}
                      >
                        <Input placeholder="Nama Pelatihan" />
                      </Form.Item>

                      <Form.Item
                        name={[name, 'jenispelatihan']}
                        style={{ flex: 1 }}
                        rules={[{ message: 'Pilih jenis pelatihan' }]}
                      >
                        <Select
                          placeholder="Pilih Jenis Pelatihan"
                          options={[
                            { value: 'Koder', label: 'Koder' },
                            { value: 'Pelaporan', label: 'Pelaporan' },
                            { value: 'Arsip', label: 'Arsip' },
                            { value: 'Lainnya', label: 'Lainnya' },
                          ]}
                        />
                      </Form.Item>

                      <MinusCircleOutlined
                        onClick={() => remove(name)}
                        style={{ color: 'red', fontSize: '18px', cursor: 'pointer' }}
                      />
                    </div>
                  ))}

                  <Form.Item style={{ textAlign: 'center' }}>
                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                      Tambah Pelatihan
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
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