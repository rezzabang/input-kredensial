'use client';

import React, { useState } from 'react';
import { Table, Select, Button } from 'antd';
import type { TableProps } from 'antd';

interface DataTypes {
  key: string;
  kuk: string;
  desc: string;
  asesmen?: string;
}

const App: React.FC = () => {
  const [innerData, setInnerData] = useState<DataTypes[]>([
    { key: '1', kuk: 'Q123456', desc: 'Mampu mengelola arsip' },
    { key: '2', kuk: 'Q234567', desc: 'Menguasai prosedur pengkodean' },
    { key: '3', kuk: 'Q123456', desc: 'Mampu mengelola arsip' },
    { key: '4', kuk: 'Q234567', desc: 'Menguasai prosedur pengkodean' },
    { key: '5', kuk: 'Q123456', desc: 'Mampu mengelola arsip' },
    { key: '6', kuk: 'Q234567', desc: 'Menguasai prosedur pengkodean' },
    { key: '7', kuk: 'Q123456', desc: 'Mampu mengelola arsip' },
    { key: '8', kuk: 'Q234567', desc: 'Menguasai prosedur pengkodean' },
  ]);

  const handleAsesmenChange = (value: string, key: string) => {
    const updatedData = innerData.map((item) =>
      item.key === key ? { ...item, asesmen: value } : item
    );
    setInnerData(updatedData);
    console.log(`Changed to "${value}" for KUK: ${key}`);
  };

  const columns: TableProps<DataTypes>['columns'] = [
    {
      title: 'Kode Kompetensi',
      dataIndex: 'kuk',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Deskripsi Kompetensi',
      dataIndex: 'desc',
    },
    {
      title: 'Asesmen Mandiri',
      dataIndex: 'asesmen',
      render: (_, record) => (
        <Select
          value={record.asesmen || undefined}
          placeholder="Pilih"
          style={{ width: 160 }}
          options={[
            { value: 'Dengan Supervisi', label: 'Dengan Supervisi' },
            { value: 'Kompeten', label: 'Kompeten' },
          ]}
          onChange={(value) => handleAsesmenChange(value, record.key)}
        />
      ),
    },
  ];

  const rowSelection: TableProps<DataTypes>['rowSelection'] = {
    type: 'checkbox',
    onChange: (selectedRowKeys, selectedRows) => {
      console.log('Selected inner table:', selectedRowKeys, selectedRows);
    },
  };

  return (
    <>
      <Table
        columns={columns}
        dataSource={innerData}
        rowSelection={rowSelection}
        footer={() => '*) Pilih minimal 3 kompetensi'}
        pagination={false}
        size="small"
      />
      <div style={{ textAlign: 'center', marginTop: 24 }}>
        <Button type="primary">
          Simpan Hasil Asesmen Mandiri
        </Button>
      </div>
    </>
  );
};

export default App;
