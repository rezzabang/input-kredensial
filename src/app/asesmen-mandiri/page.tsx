'use client';
import React, { useState } from 'react';
import { Card, Input, Form, Button } from 'antd';
import {
  BookOutlined
} from '@ant-design/icons';
import TabelKeterampilan from '../component/TabelKeterampilan';
import TabelKeahlian from '../component/TabelKeahlian';
import CariDataNama from '../component/CariDataNama';

const wikiUrl = process.env.NEXT_PUBLIC_WIKI_URL || '';

const tabList = [
  {
    key: 'Keterampilan',
    tab: 'Keterampilan',
  },
  {
    key: 'Keahlian',
    tab: 'Keahlian',
  },
];

const SelfAssesment: React.FC = () => {
  const [form] = Form.useForm();
  const [nip, setNip] = useState('');
  const [nama, setNama] = useState('');
  const [activeTabKey1, setActiveTabKey1] = useState<string>('Keterampilan');
  const contentList: Record<string, React.ReactNode> = {
    Keterampilan: <TabelKeterampilan nip={nip} nama={nama} onReset={() => {
      setNip('');
      setNama('');
      form.resetFields(); // reset form inputs
    }} />,
    Keahlian: <TabelKeahlian nip={nip} nama={nama} onReset={() => {
      setNip('');
      setNama('');
      form.resetFields(); // reset form inputs
    }}/>,
  };

  const onTab1Change = (key: string) => {
    setActiveTabKey1(key);
  };

  return (
    <>
      <Card
        style={{ width: '100%' }}
        title={
          <div>
            <h1 style={{ marginBottom: 24, textAlign: 'center' }}>Form Asesmen Mandiri</h1>
            <div style={{ fontSize: 14 }}>
              <Form
                form={form}
              >
                <Form.Item
                  label="NIP"
                  name="nip"
                  rules={[
                    { required: true, message: 'NIP mohon untuk diisi!' },
                    { pattern: /^\S+$/, message: 'NIP tidak boleh mengandung spasi!' },
                  ]}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Input
                      size="middle"
                      style={{ width: 170, borderRadius: 6 }}
                      onPressEnter={(e) => e.preventDefault()}
                      placeholder='Masukkan NIP, klik -->'
                    />
                    <CariDataNama form={form} setNip={setNip} setNama={setNama} />
                  </div>
                </Form.Item>

                <Form.Item
                  label="Nama"
                  name="nama"
                >
                  <Input
                    size="middle"
                    disabled
                    style={{ width: 220, borderRadius: 6 }} // ✅ Limit width here too
                  />
                </Form.Item>
              </Form>
            </div>
          </div>
        }
        extra={
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <h3>Panduan Kompetensi?</h3>
            <Button color="default" variant="solid" onClick={() => window.open(wikiUrl, "_blank")}><BookOutlined />Wiki</Button>
          </div>
        }
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={onTab1Change}
      >
        {contentList[activeTabKey1]}
      </Card>
    </>
  );
};

export default SelfAssesment;