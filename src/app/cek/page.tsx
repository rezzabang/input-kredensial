'use client';
import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme, Cascader, DatePicker, Form, Input, Mentions,  Select, TreeSelect,} from 'antd';

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [form] = Form.useForm();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Data Pribadi',
            },
            {
              key: '2',
              icon: <UploadOutlined />,
              label: 'Kompetensi',
            },
            {
              key: '3',
              icon: <VideoCameraOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
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
            <div>A. Data Pribadi
              <Form
                    form={form}
                    style={{ maxWidth: 600 }}
                    >

                    <Form.Item label="Nama" name="nama" rules={[{ required: true, message: 'Nama mohon untuk diisi!' }]}>
                        <Input type="text" id="name"/>
                    </Form.Item>

                    <Form.Item
                        label="No. Handphone"
                        name="phone"
                        rules={[{ required: true, message: 'No. Handphone mohon untuk diisi!' }]}
                    >
                        <Input type="tel" id="phone"/>
                    </Form.Item>

                    <Form.Item
                        label="Alamat"
                        name="address"
                        rules={[{ required: true, message: 'Alamat mohon untuk diisi!' }]}
                    >
                        <Input.TextArea id="address"/>
                    </Form.Item>

                    <Form.Item
                        label="Mentions"
                        name="Mentions"
                        rules={[{ required: true, message: 'Please input!' }]}
                    >
                        <Mentions />
                    </Form.Item>

                    <Form.Item
                        label="Select"
                        name="Select"
                        rules={[{ required: true, message: 'Please input!' }]}
                    >
                        <Select />
                    </Form.Item>

                    <Form.Item
                        label="Cascader"
                        name="Cascader"
                        rules={[{ required: true, message: 'Please input!' }]}
                    >
                        <Cascader />
                    </Form.Item>

                    <Form.Item
                        label="TreeSelect"
                        name="TreeSelect"
                        rules={[{ required: true, message: 'Please input!' }]}
                    >
                        <TreeSelect />
                    </Form.Item>

                    <Form.Item
                        label="DatePicker"
                        name="DatePicker"
                        rules={[{ required: true, message: 'Please input!' }]}
                    >
                        <DatePicker />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                        Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;