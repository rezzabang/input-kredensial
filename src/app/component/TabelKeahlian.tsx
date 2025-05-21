'use client';

import React, { useState, useEffect } from 'react';
import { Table, Select, Button, message } from 'antd';
import type { TableProps } from 'antd';

interface KompetensiItem {
  key: string;
  kuk: string;
  desc: string;
  asesmen?: string;
}

interface ApiItem {
  kategori: string;
  kuk: string;
  detail: string;
  kompetensi: string;
}

interface ApiResponse {
  success: boolean;
  data: ApiItem[];
}

interface TabelKeahlianProps {
  nip: string;
  nama: string;
  onReset?: () => void;
}

const TabelKeahlian: React.FC<TabelKeahlianProps> = ({ nip, nama, onReset }) => {
  const [data, setData] = useState<KompetensiItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);
  const wikiUrl = process.env.NEXT_PUBLIC_WIKI_URL || '';

  const handleSubmit = async () => {
    const selectedKompetensi: { kuk: string; asesmen: string }[] = [];

    selectedKeys.forEach((key) => {
      const item = data.find((k) => k.key === key);
      if (item && item.asesmen) {
        selectedKompetensi.push({ kuk: item.kuk, asesmen: item.asesmen });
      }
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
        setData((prevData) =>
          prevData.map((item) => ({ ...item, asesmen: undefined }))
        );
        setSelectedKeys([]);
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

        if (res.ok && json.success) {
          const keahlianOnly = json.data.filter(item => item.kompetensi === 'Keahlian');
          const kompetensiData: KompetensiItem[] = keahlianOnly.map(item => ({
            key: item.kuk,
            kuk: item.kuk,
            desc: item.detail,
            asesmen: undefined,
          }));

          setData(kompetensiData);
        }
      } catch (err) {
        message.error('Gagal mengambil data:' + err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [nip]);

  const columns: TableProps<KompetensiItem>['columns'] = [
    {
      title: 'Kode Kompetensi',
      dataIndex: 'kuk',
      render: (text: string) => {
        const sanitizedKuk = text.replace(/\./g, '');
        const mappedKategori = 'ahli'; // Adjust this if you have a mapping for categories
        const url = `${wikiUrl}${mappedKategori}/${sanitizedKuk}`;

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
      render: (_: unknown, record: KompetensiItem) => (
        <Select
          value={record.asesmen || undefined}
          placeholder="Pilih"
          style={{ width: 160 }}
          options={[
            { value: 'Mandiri', label: 'Mandiri' },
            { value: 'Dengan Supervisi', label: 'Dengan Supervisi' }
          ]}
          onChange={(value: string) => {
            // Set asesmen value
            record.asesmen = value;
            // Update data state to trigger re-render
            setData([...data]);

            if (value === 'Dengan Supervisi' || value === 'Mandiri') {
              if (!selectedKeys.includes(record.key)) {
                setSelectedKeys((prev) => [...prev, record.key]);
              }
            } else {
              // If value not in these, uncheck the row
              if (selectedKeys.includes(record.key)) {
                setSelectedKeys((prev) => prev.filter(key => key !== record.key));
              }
            }
          }}
        />
      ),
    },
  ];

  return (
    <>
      <h2 style={{ marginBottom: 16 }}>Kompetensi: Keahlian</h2>
      <Table
        bordered={false}
        loading={loading}
        size="large"
        columns={columns}
        dataSource={data}
        rowSelection={{
          type: 'checkbox',
          selectedRowKeys: selectedKeys,
          onChange: (keys) => setSelectedKeys(keys),
        }}
        pagination={false}
        footer={() => (
          <div>
            Klik <a><strong>Kode Kompetensi</strong></a> untuk melihat deskripsi lengkap setiap kompetensi.
            <br />
            *) Pilih minimal 7 kompetensi
          </div>
        )}
      />
      <div style={{ textAlign: 'center', marginTop: 24 }}>
        <Button type="primary" onClick={handleSubmit}>Simpan Hasil Asesmen Mandiri</Button>
      </div>
    </>
  );
};

export default TabelKeahlian;