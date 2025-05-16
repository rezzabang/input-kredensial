'use client';

import '@ant-design/v5-patch-for-react-19';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import {
  HomeOutlined,
  FileDoneOutlined,
  BookOutlined,
  UserOutlined,
  FileSearchOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme, Skeleton } from 'antd';
import Link from 'next/link';
import Image from 'next/image';

const { Sider, Content } = Layout;

const RootLayout = ({ children }: React.PropsWithChildren) => {
  const [collapsed, setCollapsed] = useState(false);
  const [loading, setLoading] = useState(true);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);

    if (pathname === '/exam') {
      setCollapsed(true);
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [pathname]);

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
                    label: <Link href="/asesmen-mandiri">Asesmen Mandiri</Link>,
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
            <Layout style={{ minHeight: '100vh' }}>
              <Content
                style={{
                  margin: '24px 16px',
                  padding: 24,
                  minHeight: 280,
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                }}
              >
                {loading ? (
                  <Skeleton active paragraph={{ rows: 10 }} />
                ) : (
                  children
                )}
              </Content>
            </Layout>
          </Layout>
        </body>
      </html>
    </AntdRegistry>
  );
};

export default RootLayout;
