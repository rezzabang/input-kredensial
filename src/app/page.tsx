'use client';
import React from 'react';
import { Typography } from 'antd';
const { Title } = Typography;

const Home = () => (
  <div className="App" style={{ padding: '20px' }}>
    <Title>Selamat Datang</Title>
    <Title level={2}>Kredensial Rekam Medis</Title>
  </div>
);

export default Home;