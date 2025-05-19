'use client';
import React, { useState, useEffect } from 'react';
import { Table, Select, Button } from 'antd';
import type { TableProps } from 'antd';

const wikiUrl = process.env.NEXT_PUBLIC_WIKI_URL || '';

interface KompetensiItem {
  key: string;
  kuk: string;
  desc: string;
  asesmen?: string;
}

interface KategoriGroup {
  key: string;
  name: string;
  kompetensi: KompetensiItem[];
}

interface ApiItem {
  kategori: string;
  kuk: string;
  detail: string;
  asesmen?: string;
}

interface ApiResponse {
  data: ApiItem[];
}

const kategoriMap: Record<string, string> = {
  'koding': 'koder',
  'pelepasan informasi': 'ppid',
};

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
          // ✅ Step 1: Filter where kompetensi === 'Keterampilan'
          const keterampilanOnly = json.data.filter(
            (item) => item.kompetensi === 'Keterampilan'
          );

          // ✅ Step 2: Group by kategori
          const grouped = keterampilanOnly.reduce((acc: Record<string, KompetensiItem[]>, item: ApiItem) => {
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

          // ✅ Step 3: Transform into KategoriGroup format (sorted alphabetically by kategori)
          const transformed: KategoriGroup[] = Object.entries(grouped)
            .sort(([a], [b]) => a.localeCompare(b)) // Sort kategori names
            .map(([kategori, kompetensi], index) => ({
              key: String(index + 1),
              name: kategori,
              kompetensi,
            }));

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
        footer={() => (
          <div>
            Untuk melihat deskripsi lengkap kompetensi klik <strong>Kode Kompetensi</strong>
            <br />
            *) Pilih minimal 7 kompetensi
          </div>
        )}
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
            render: (text) => {
              const sanitizedKuk = text.replace(/\./g, '');

              const mappedKategori = kategoriMap[record.name.toLowerCase()] || record.name;

              const url = `${wikiUrl}terampil/${mappedKategori}/${sanitizedKuk}`;

              return (
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {text}
                </a>
              );
            },
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