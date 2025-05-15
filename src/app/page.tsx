'use client';
import React from 'react';
import { Typography } from 'antd';
const { Title } = Typography;

const Home = () => (
  <div className="Home" style={{textAlign: 'center' }}>
    <div style={{ display: 'flex', gap: '40px' }}>
      <div style={{ flex: 1 }}>
        <Title>Selamat Datang</Title>
        <Title level={2}>Kredensial Rekam Medis</Title>
      </div>
      <div style={{ flex: 1 }}>
        <iframe 
          src="manual-kemenkes.pdf"
          style={{
            border: 'none',
            width: '90vh',
            height: '90vh',
          }}
          title="Manual"
        ></iframe>
      </div>
    </div>
  </div>
);

export default Home;