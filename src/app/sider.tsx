'use client';

import React, { useState } from 'react';
import {
  HomeOutlined,
  FileDoneOutlined,
  BookOutlined,
  UserOutlined,
  FileSearchOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import Link from 'next/link';
import Image from 'next/image';

const { Sider } = Layout;

const SiderSide = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div
          className="logo-vertical"
          style={{
            textAlign: 'center',
            paddingTop: '10px',
            transition: 'all 0.3s ease',
            paddingBottom: '10px',
            margin: '2px',
          }}
        >
          {collapsed ? (
            <Image
              src="/Logo-min.png"
              alt="Logo Min"
              width={40}
              height={40}
              onClick={() => setCollapsed(!collapsed)}
              style={{ cursor: 'pointer' }}
            />
          ) : (
            <Image
              src="/Logoo.png"
              alt="Logo"
              width={190}
              height={70}
              onClick={() => setCollapsed(!collapsed)}
              style={{ cursor: 'pointer' }}
            />
          )}
        </div>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <HomeOutlined style={{ fontSize: '20px' }} />,
              label: <Link href="/">Beranda</Link>,
            },
            {
              key: '2',
              icon: <UserOutlined style={{ fontSize: '20px' }} />,
              label: <Link href="/data-pribadi">Data Pribadi</Link>,
            },
            {
              key: '3',
              icon: <FileSearchOutlined style={{ fontSize: '20px' }} />,
              label: <Link href="/assesmen-mandiri">Assesmen Mandiri</Link>,
            },
            {
              key: '4',
              icon: <BookOutlined style={{ fontSize: '20px' }} />,
              label: <Link href="/exam">Ujian Tulis</Link>,
            },
            {
              key: '5',
              icon: <FileDoneOutlined style={{ fontSize: '20px' }} />,
              label: 'Penilaian',
            },
          ]}
        />
      </Sider>
    </div>
  );
};

export default SiderSide;
