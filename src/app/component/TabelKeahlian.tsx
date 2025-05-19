'use client';

import React, { useState, useEffect } from 'react';
import { Table, Select, Button } from 'antd';
import type { TableProps } from 'antd';

interface DataTypes {
  key: string;
  kuk: string;
  desc: string;
  asesmen?: string;
}

const TabelKeahlian: React.FC = () => {
  const [innerData, setInnerData] = useState<DataTypes[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchKompetensi = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/kompetensi');
        const json = await res.json();

        if (res.ok) {
          const filtered = json.data
            .filter((item: any) => item.kompetensi === 'Keahlian')
            .map((item: any, index: number) => ({
              key: `${index + 1}`,
              kuk: item.kuk,
              desc: item.detail,
            }));

          setInnerData(filtered);
        }
      } catch (err) {
        console.error('Gagal mengambil data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchKompetensi();
  }, []);

  const handleAsesmenChange = (value: string, key: string) => {
    const updatedData = innerData.map((item) =>
      item.key === key ? { ...item, asesmen: value } : item
    );
    setInnerData(updatedData);

    // Auto-select checkbox
    setSelectedRowKeys((prevKeys) =>
      prevKeys.includes(key) ? prevKeys : [...prevKeys, key]
    );

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
            { value: 'Mandiri', label: 'Mandiri' },
          ]}
          onChange={(value) => handleAsesmenChange(value, record.key)}
        />
      ),
    },
  ];

  const rowSelection: TableProps<DataTypes>['rowSelection'] = {
    type: 'checkbox',
    selectedRowKeys,
    onChange: (keys) => setSelectedRowKeys(keys),
  };

  return (
    <>
      <h2 style={{ marginBottom: 16 }}>Kompetensi: Keahlian</h2>
      <Table
        columns={columns}
        dataSource={innerData}
        rowSelection={rowSelection}
        loading={loading}
        footer={() => (
          <div>
            Untuk melihat deskripsi lengkap kompetensi klik <strong>Kode Kompetensi</strong>
            <br />
            *) Pilih minimal 7 kompetensi
          </div>
        )}
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

export default TabelKeahlian;