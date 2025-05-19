'use client';
import React, { useState, useEffect } from 'react';
import { Table, Select, Button, message } from 'antd';
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
  kompetensi: string;
}

interface ApiResponse {
  data: ApiItem[];
}

interface TabelKeterampilanProps {
  nip: string;
  nama: string;
  onReset?: () => void;
}

const kategoriMap: Record<string, string> = {
  'koding': 'koder',
  'pelepasan informasi': 'ppid',
};


const TabelKeterampilan: React.FC<TabelKeterampilanProps> = ({ nip, nama, onReset }) => {
  const [data, setData] = useState<KategoriGroup[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedKeysMap, setSelectedKeysMap] = useState<Record<string, React.Key[]>>({});
  
  const handleSubmit = async () => {
    const selectedKompetensi: { kuk: string; asesmen: string }[] = [];

      data.forEach((group) => {
        const selectedKeys = selectedKeysMap[group.key] || [];
        selectedKeys.forEach((key) => {
          const item = group.kompetensi.find((k) => k.key === key);
          if (item && item.asesmen) {
            selectedKompetensi.push({ kuk: item.kuk, asesmen: item.asesmen });
          }
        });
      });

      if (!nip || !nama) {
        return message.warning('NIP dan Nama wajib diisi!');
      }

      if (selectedKompetensi.length < 7) {
        return message.warning('Pilih minimal 7 kompetensi!');
      }

      try {
        const res = await fetch('/api/asesmen/mandiri/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ nip, kompetensi: selectedKompetensi }),
        });

        const text = await res.text();
        let result;
        try {
          result = JSON.parse(text);
        } catch (err) {
          message.error('Respons server tidak valid!' + err);
          return;
        }

        if (res.ok) {
          message.success(result.message || 'Data berhasil disimpan!');

          const resetData = data.map(group => ({
            ...group,
            kompetensi: group.kompetensi.map(item => ({
              ...item,
              asesmen: undefined,
            })),
          }));

          setData(resetData);
          setSelectedKeysMap({});
          onReset?.();
        } else {
          message.warning(`Gagal menyimpan: ${result.message || 'Terjadi kesalahan'}`);
        }
      } catch (err) {
        message.error('Terjadi kesalahan saat menyimpan.' + err);
      }
    };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/kompetensi');
        const json: ApiResponse = await res.json();

        if (res.ok) {
          const keterampilanOnly = json.data.filter(item => item.kompetensi === 'Keterampilan');
          const grouped = keterampilanOnly.reduce((acc: Record<string, KompetensiItem[]>, item: ApiItem) => {
            const kategori = item.kategori || 'Lainnya';
            if (!acc[kategori]) acc[kategori] = [];
            acc[kategori].push({
              key: item.kuk,
              kuk: item.kuk,
              desc: item.detail,
              asesmen: undefined,
            });
            return acc;
          }, {});

          const transformed: KategoriGroup[] = Object.entries(grouped)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([kategori, kompetensi], index) => ({
              key: String(index + 1),
              name: kategori,
              kompetensi,
            }));

          if (nip) {
            const asesmenRes = await fetch(`/api/asesmen/mandiri/${nip}`);
            if (asesmenRes.ok) {
              const { data: existing } = await asesmenRes.json();
              const keysMap: Record<string, React.Key[]> = {};

              transformed.forEach((group) => {
                const selected: React.Key[] = [];

                group.kompetensi.forEach((item) => {
                  const match = existing.find((e: any) => e.kuk === item.kuk);
                  if (match) {
                    item.asesmen = match.asesmen;
                    selected.push(item.key);
                  }
                });

                if (selected.length) keysMap[group.key] = selected;
              });

              setSelectedKeysMap(keysMap);
            }
          }

          setData(transformed);
        }
      } catch (err) {
        message.error('Gagal mengambil data:' + err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [nip]);

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
            <p>Klik <a><strong>Kode Kompetensi</strong></a> untuk melihat deskripsi lengkap setiap kompetensi.</p>
            <p style={{color: "red"}}>*) Pilih minimal 7 kompetensi</p>
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
                  <strong>{text}</strong>
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
              value={rowRecord.asesmen || "Pilih"}
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
                setData([...data]);
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
      <div onClick={handleSubmit} style={{ textAlign: 'center', marginTop: 24 }}>
        <Button type="primary">Simpan Hasil Asesmen Mandiri</Button>
      </div>
    </>
  );
};

export default TabelKeterampilan;