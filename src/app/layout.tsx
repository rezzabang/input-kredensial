'use client';

import React, { useState } from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import {
  HomeOutlined,
  FileDoneOutlined,
  BookOutlined,
  UserOutlined,
  FileSearchOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import Link from 'next/link';
import Image from 'next/image';


const { Sider, Content } = Layout;

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
                    style={{ cursor: 'pointer'}}
                  />
                ) : (
                  <Image
                    src="/Logoo.png"
                    alt="Logo"
                    width={190}
                    height={70}
                    onClick={() => setCollapsed(!collapsed)}
                    style={{ cursor: 'pointer'}}
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
                    icon: <FileSearchOutlined />,
                    label: <Link href="/assesmen-mandiri">Assesmen Mandiri</Link>,
                  },
                  {
                    key: '4',
                    icon: <BookOutlined />,
                    label: <Link href="/exam">Ujian Tulis</Link>,
                  },
                  {
                    key: '5',
                    icon: <FileDoneOutlined />,
                    label: 'Penilaian',
                  },
                ]}
              />
            </Sider>
            <Layout>
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
