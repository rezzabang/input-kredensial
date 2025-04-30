'use client';
import React from 'react';
import { Button, Input, DatePicker, Select, Form} from 'antd';

const DataPendidikan = () => (
  <div className="App" style={{ padding: '20px' }}>
    <h1>Kredensial Rekam Medis</h1>
        <div>
            <h1>A. Data Pribadi</h1>
            <Form
                name="data-pribadi"
                initialValues={{ jeniskelamin: 'Pilih Jenis Kelamin'}}
                style={{ maxWidth: 600 }}
                >

                <Form.Item label="Nama" name="nama" rules={[{ required: true, message: 'Nama mohon untuk diisi!' }]}>
                    <Input type="text" id="name"/>
                </Form.Item>

                <Form.Item
                    label="Tempat Lahir"
                    name="tempatlahir"
                    rules={[{ required: true, message: 'Tempat Lahir mohon untuk diisi!' }]}
                >
                    <Input type="text" id="tempatlahir"/>
                </Form.Item>
                
                <Form.Item
                    label="Tanggal Lahir"
                    name="tanggalahir"
                    rules={[{ required: true, message: 'Tanggal Lahir mohon untuk diisi!' }]}
                >
                    <DatePicker id="tanggalahir" />
                </Form.Item>

                <Form.Item
                    label="Jenis Kelamin"
                    name="jeniskelamin"
                    rules={[{ required: true, message: 'Jenis Kelamin mohon untuk diisi!' }]}
                >
                    <Select
                        id="jeniskelamin"
                        options={[
                        { value: 'Laki-laki', label: 'Laki-laki' },
                        { value: 'Perempuan', label: 'Perempuan' },
                        ]}
                        />
                </Form.Item>

                <Form.Item
                    label="No. Handphone"
                    name="phone"
                    rules={[{ required: true, message: 'No. Handphone mohon untuk diisi!' }]}
                >
                    <Input type="tel" id="phone"/>
                </Form.Item>

                <Form.Item
                    label="E-mail"
                    name="email"
                    rules={[{ required: true, message: 'E-mail mohon untuk diisi!' }]}
                >
                    <Input type="email" id="email"/>
                </Form.Item>

                <Form.Item
                    label="Alamat"
                    name="address"
                    rules={[{ required: true, message: 'Alamat mohon untuk diisi!' }]}
                >
                    <Input.TextArea id="address"/>
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