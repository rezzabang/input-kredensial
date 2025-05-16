'use client';

import { Table, Select, Button } from 'antd';
import type { TableProps } from 'antd';
import React from 'react';

interface DataType {
  key: string;
  name: string;
}
interface DataTypes {
  key: string;
  kuk: string;
  desc: string;
  asesmen?: string;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Kategori Kompetensi',
    dataIndex: 'name',
  },
];

const data: DataType[] = [
  { key: '1', name: 'Arsip' },
  { key: '2', name: 'Koding' },
  { key: '3', name: 'Pelaporan' },
  { key: '4', name: 'Pendaftaran' },
  { key: '5', name: 'Pelepasan Informasi' },
];

const App: React.FC = () => {
  return (
    <>
      <Table
        bordered={false}
        loading={false}
        size="large"
        columns={columns}
        dataSource={data}
        footer={() => '*) Pilih minimal 3 kompetensi'}
        expandable={{
          expandedRowRender: () => {
            const innerColumns: TableProps<DataTypes>['columns'] = [
              {
                title: 'Kode Kompetensi',
                dataIndex: 'kuk',
                render: (text) => <a>{text}</a>,
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
                    defaultValue="Pilih"
                    style={{ width: 160 }}
                    options={[
                      { value: 'Dengan Supervisi', label: 'Dengan Supervisi' },
                      { value: 'Kompeten', label: 'Kompeten' },
                    ]}
                    onChange={(value) => {
                      console.log(`Changed to "${value}" for KUK: ${record.kuk}`);
                    }}
                  />
                ),
              },
            ];

            const innerData: DataTypes[] = [
              { key: '1', kuk: 'Q123456', desc: 'Mampu mengelola arsip' },
              { key: '2', kuk: 'Q234567', desc: 'Menguasai prosedur pengkodean' },
            ];

            const rowSelection: TableProps<DataTypes>['rowSelection'] = {
              type: 'checkbox',
              onChange: (selectedRowKeys, selectedRows) => {
                console.log('Selected inner table:', selectedRowKeys, selectedRows);
              },
            };

            return (
              <Table
                columns={innerColumns}
                dataSource={innerData}
                rowSelection={rowSelection}
                pagination={false}
                size="small"
              />
            );
          },
        }}
        rowSelection={undefined}
        pagination={false}
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
