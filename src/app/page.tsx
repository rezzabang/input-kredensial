'use client';
import React from 'react';
import { Button, Input, DatePicker, Select, Col, Row } from 'antd';
import type { DatePickerProps } from 'antd';

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const Home = () => (
  <div className="App" style={{ padding: '20px' }}>
    <h1>Kredensial Rekam Medis</h1>
    <div>A. Data Pribadi
     <Row>
      <Col span={24}>col</Col>
     </Row> 
      <div>
        <label htmlFor="name">Nama Lengkap:</label>
        <Input type="text" id="name" name="name" style={{ width: 160 }}/>
      </div>
      <div>
        <label htmlFor="ttl">Tempat, Tanggal Lahir:</label>
        <Input type="text" id="tempatlahir" name="tempatlahir" style={{ width: 160 }}/>
        <DatePicker onChange={onChange} id="tanggalahir" name="tanggalahir"/>
      </div>
      <div>
        <label htmlFor="jeniskelamin">Jenis Kelamin:</label>
        <Select
          id="jeniskelamin"
          defaultValue="Pilih Jenis Kelamin"
          style={{ width: 160 }}
          onChange={handleChange}
          options={[
            { value: 'Laki-laki', label: 'Laki-laki' },
            { value: 'Perempuan', label: 'Perempuan' },
          ]}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <Input type="email" id="email" name="email" style={{ width: 160 }}/>
      </div>
      <div>
        <label htmlFor="phone">No. Telepon:</label>
        <Input type="tel" id="phone" name="phone" style={{ width: 160 }}/>
      </div>
    </div>
    <Button type="primary">Button</Button>
  </div>
);

export default Home;