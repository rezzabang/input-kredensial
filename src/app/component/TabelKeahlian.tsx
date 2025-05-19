'use client';

import React, { useState, useEffect } from 'react';
import { Table, Select, Button, message } from 'antd';
import type { TableProps } from 'antd';

interface DataTypes {
  key: string;
  kuk: string;
  desc: string;
  asesmen?: string;
}

interface TabelKeahlianProps {
  nip: string;
  nama: string;
}

const TabelKeahlian: React.FC<TabelKeahlianProps> = ({ nip, nama }) => {
  const [innerData, setInnerData] = useState<DataTypes[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);

  // Reset data to initial empty state (clear selections and data)
  const resetData = () => {
    setSelectedRowKeys([]);
    setInnerData([]);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!nip) return;

      setLoading(true);
      try {
        // Fetch all kompetensi with type 'Keahlian'
        const kompetensiRes = await fetch('/api/kompetensi');
        const kompetensiJson = await kompetensiRes.json();

        let kompetensiData: DataTypes[] = kompetensiJson.data
          .filter((item: any) => item.kompetensi === 'Keahlian')
          .map((item: any) => ({
            key: item.kuk,
            kuk: item.kuk,
            desc: item.detail,
            asesmen: '',
          }));

        // Fetch existing asesmen for this nip
        const asesmenRes = await fetch(`/api/asesmen/mandiri/${nip}`);
        const asesmenJson = await asesmenRes.json();

        if (Array.isArray(asesmenJson.data)) {
          // Map existing asesmen by kuk
          const asesmenMap = new Map(
            asesmenJson.data
              .filter((item: any) => item.tipe === 'Keahlian')
              .map((item: any) => [item.kuk, item.asesmen])
          );

          // Merge asesmen into kompetensi data
          kompetensiData = kompetensiData.map((item) => {
            const asesmenValue = asesmenMap.get(item.kuk);
            return {
              ...item,
              asesmen: typeof asesmenValue === 'string' ? asesmenValue : '',
            };
          });

          // Select rows which have an assessment value
          const selectedKeys = kompetensiData
            .filter((item) => item.asesmen && item.asesmen.length > 0)
            .map((item) => item.kuk);

          setSelectedRowKeys(selectedKeys);
        }

        setInnerData(kompetensiData);
      } catch (err) {
        console.error('Gagal mengambil data:', err);
        message.error('Gagal mengambil data kompetensi');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [nip]);


  const handleAsesmenChange = (value: string, key: string) => {
    setInnerData((prevData) =>
      prevData.map((item) =>
        item.key === key ? { ...item, asesmen: value } : item
      )
    );

    // Automatically select row if not selected
    setSelectedRowKeys((prevKeys) =>
      prevKeys.includes(key) ? prevKeys : [...prevKeys, key]
    );
  };

  const handleSubmit = async () => {
    if (!nip || !nama) {
      message.warning('NIP dan Nama wajib diisi!');
      return;
    }

    // Filter selected competencies and validate
    const selectedData = innerData
      .filter((item) => selectedRowKeys.includes(item.key))
      .map((item) => ({
        nip,
        kuk: item.kuk,
        asesmen: item.asesmen,
        tipe: 'Keahlian',
      }));

    if (selectedData.length < 7) {
      message.warning('Pilih minimal 7 kompetensi keahlian.');
      return;
    }

    try {
      const res = await fetch('/api/asesmen/mandiri/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nip, kompetensi: selectedData }),
      });

      const text = await res.text();
      let result;
      try {
        result = JSON.parse(text);
      } catch (err) {
        message.error('Respons server tidak valid! ' + err);
        return;
      }

      if (res.ok) {
        resetData();
        message.success(result.message || 'Data berhasil disimpan!');
      } else {
        message.warning(`Gagal menyimpan: ${result.message || 'Terjadi kesalahan'}`);
      }
    } catch (err) {
      message.error('Terjadi kesalahan saat menyimpan. ' + err);
    }
  };

  const columns: TableProps<DataTypes>['columns'] = [
    {
      title: 'Kode Kompetensi',
      dataIndex: 'kuk',
      render: (text: string) => <a><strong>{text}</strong></a>,
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
    onChange: (keys) => {
      setSelectedRowKeys(keys);
      // Clear asesmen for rows that are no longer selected
      setInnerData((prev) =>
        prev.map((item) =>
          keys.includes(item.key) ? item : { ...item, asesmen: '' }
        )
      );
    },
  };

  return (
    <>
      <h2 style={{ marginBottom: 16 }}>Kompetensi: Keahlian</h2>
      <Table
        columns={columns}
        dataSource={innerData}
        rowSelection={rowSelection}
        loading={loading}
        pagination={false}
        size="small"
        footer={() => (
          <div>
            Klik <a><strong>Kode Kompetensi</strong></a> untuk melihat deskripsi lengkap setiap kompetensi.
            <br />
            *) Pilih minimal 7 kompetensi
          </div>
        )}
      />
      <div style={{ textAlign: 'center', marginTop: 24 }}>
        <Button
          type="primary"
          loading={loading}
          onClick={handleSubmit}
        >
          Simpan Hasil Asesmen Mandiri
        </Button>
      </div>
    </>
  );
};

export default TabelKeahlian;