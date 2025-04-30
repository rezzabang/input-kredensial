'use client';

import React, { useState } from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import {
  HomeOutlined,
  SafetyCertificateOutlined,
  BankOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import Link from 'next/link';
import Image from 'next/image';


const { Header, Sider, Content } = Layout;

const RootLayout = ({ children }: React.PropsWithChildren) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <AntdRegistry>
      <html lang="id">
        <body>
          <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
              <div className="logo-vertical"/>
              <Image src="/Logo.png" alt="Logo" width={200} height={80} onClick={() => setCollapsed(!collapsed)}></Image>
              <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                  {
                    key: '1',
                    icon: <HomeOutlined />,
                    label: <Link href="/">Beranda</Link>,
                  },
                  {
                    key: '2',
                    icon: <UserOutlined />,
                    label: <Link href="/data-pribadi">Data Pribadi</Link>,
                  },
                  {
                    key: '3',
                    icon: <BankOutlined />,
                    label: <Link href="/data-pendidikan">Data Pendidikan</Link>,
                  },
                  {
                    key: '4',
                    icon: <VideoCameraOutlined />,
                    label: <Link href="/data-pekerjaan">Data Pekerjaan</Link>,
                  },
                  {
                    key: '5',
                    icon: <SafetyCertificateOutlined />,
                    label: 'Kompetensi',
                  },
                ]}
              />
            </Sider>
            <Layout>
              <Header style={{ height: 80,padding: 10, background: colorBgContainer }}>
              </Header>
              <Content
                style={{
                  margin: '24px 16px',
                  padding: 24,
                  minHeight: 280,
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                }}
              >
                {children}
              </Content>
            </Layout>
          </Layout>
        </body>
      </html>
    </AntdRegistry>
  );
};

export default RootLayout;
