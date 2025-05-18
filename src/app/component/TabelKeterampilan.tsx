'use client';
import React, { useState, useEffect } from 'react';
import { Table, Select, Button } from 'antd';
import type { TableProps } from 'antd';

interface KompetensiItem {
  key: string;
  kuk: string;
  desc: string;
  asesmen?: string;
}

interface KategoriGroup {
  key: string;
  name: string; // kategori
  kompetensi: KompetensiItem[];
}

// Add typings for your API response items
interface ApiItem {
  kategori: string;
  kuk: string;
  detail: string;
  asesmen?: string;
}

interface ApiResponse {
  data: ApiItem[];
}

const TabelKeterampilan: React.FC = () => {
  const [data, setData] = useState<KategoriGroup[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedKeysMap, setSelectedKeysMap] = useState<Record<string, React.Key[]>>({});

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/kompetensi');
        const json: ApiResponse = await res.json();

        if (res.ok) {
          // Group items by kategori
          const grouped = json.data.reduce((acc: Record<string, KompetensiItem[]>, item: ApiItem) => {
            const kategori = item.kategori || 'Lainnya';
            if (!acc[kategori]) acc[kategori] = [];
            acc[kategori].push({
              key: item.kuk,
              kuk: item.kuk,
              desc: item.detail,
              asesmen: item.asesmen,
            });
            return acc;
          }, {});

          // Transform to KategoriGroup[]
          const transformed: KategoriGroup[] = Object.entries(grouped).map(
            ([kategori, kompetensi], index) => ({
              key: String(index + 1),
              name: kategori,
              kompetensi,
            })
          );

          setData(transformed);
        }
      } catch (err) {
        console.error('Gagal mengambil data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Table
        bordered={false}
        loading={loading}
        size="large"
        columns={[{ title: 'Kategori Kompetensi', dataIndex: 'name' }]}
        dataSource={data}
        footer={() => '*) Pilih minimal 7 kompetensi'}
        expandable={{
          expandedRowRender: (record) => {
            const selectedKeys = selectedKeysMap[record.key] || [];

            const onSelectChange = (newSelectedKeys: React.Key[]) => {
              setSelectedKeysMap((prev) => ({
                ...prev,
                [record.key]: newSelectedKeys,
              }));
            };

            const innerColumns: TableProps<KompetensiItem>['columns'] = [
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
                render: (_: unknown, rowRecord: KompetensiItem) => (
                  <Select
                    defaultValue="Pilih"
                    style={{ width: 160 }}
                    options={[
                      { value: 'Dengan Supervisi', label: 'Dengan Supervisi' },
                      { value: 'Mandiri', label: 'Mandiri' },
                    ]}
                    onChange={(value: string) => {
                      rowRecord.asesmen = value;
                      if (!selectedKeys.includes(rowRecord.key)) {
                        onSelectChange([...selectedKeys, rowRecord.key]);
                      }
                    }}
                  />
                ),
              },
            ];

            return (
              <Table
                columns={innerColumns}
                dataSource={record.kompetensi}
                pagination={false}
                size="small"
                rowSelection={{
                  type: 'checkbox',
                  selectedRowKeys: selectedKeys,
                  onChange: onSelectChange, 
                }}
              />
            );
          },
        }}
        pagination={false}
      />
      <div style={{ textAlign: 'center', marginTop: 24 }}>
        <Button type="primary">Simpan Hasil Asesmen Mandiri</Button>
      </div>
    </>
  );
};

export default TabelKeterampilan;