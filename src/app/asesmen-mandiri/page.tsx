'use client';
import React, { useState } from 'react';
import { Card, Input, Form } from 'antd';
import TabelKeterampilan from '../component/TabelKeterampilan';
import TabelKeahlian from '../component/TabelKeahlian';
import CariDataNama from '../component/CariDataNama';

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

const contentList: Record<string, React.ReactNode> = {
  Keterampilan: <TabelKeterampilan />,
  Keahlian: <TabelKeahlian />,
};

const SelfAssesment: React.FC = () => {
  const [form] = Form.useForm();
  const [activeTabKey1, setActiveTabKey1] = useState<string>('tab1');

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
                      style={{ width: 170, borderRadius: 6 }} // ✅ Limit width here
                      onPressEnter={(e) => e.preventDefault()}
                    />
                    <CariDataNama form={form} />
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
        extra={<a href="#">Wiki</a>}
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