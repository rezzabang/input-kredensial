import React, { useState, useEffect } from 'react';
import { Table, message, Select, Button } from 'antd';
import type { TableProps } from 'antd';
import { SaveOutlined, DeleteOutlined } from '@ant-design/icons';

const wikiUrl = process.env.NEXT_PUBLIC_WIKI_URL || '';

const kategoriMap: Record<string, string> = {
  'koding': 'koder',
  'pelepasan informasi': 'ppid',
};

interface KompetensiItem {
  key: string;
  kuk: string;
  desc: string;
  asesmen?: string;
  asesmenasesor?: string;
  asesor?: string;
  kategori?: string;
  tipe?: string;
}

interface ExpandedKompetensiTableProps {
  nip: string;
}

const fetchKompetensiForNip = async (nip: string): Promise<KompetensiItem[]> => {
  try {
    const res = await fetch(`api/asesmen/mandiri/${nip}`);
    const json = await res.json();
    if (res.ok && json.success && Array.isArray(json.data) && json.data.length > 0) {
      const kompetensiData: KompetensiItem[] = json.data.map((item: any) => ({
        key: item.kuk,
        kuk: item.kuk,
        desc: item.kompetensi.detail,
        asesmen: item.asesmen,
        asesmenasesor: item.asesmenasesor,
        asesor: item.asesor || undefined,
        kategori: item.kompetensi.kategori,
        tipe: item.kompetensi.kompetensi,
      }));
      return kompetensiData;
    }
  } catch (error) {
    message.error('Gagal mengambil data asesmen: ' + error);
  }
  return [];
};

const ExpandedKompetensiTable: React.FC<ExpandedKompetensiTableProps> = ({ nip }) => {
  const [kompetensiData, setKompetensiData] = useState<KompetensiItem[]>([]);
  const [innerLoading, setInnerLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const loadKompetensi = async () => {
      setInnerLoading(true);
      const data = await fetchKompetensiForNip(nip);
      if (isMounted) {
        setKompetensiData(data);
        setInnerLoading(false);
      }
    };
    loadKompetensi();

    return () => {
      isMounted = false;
    };
  }, [nip]);

  const innerColumns: TableProps<KompetensiItem>['columns'] = [
    {
      title: 'Kode Kompetensi',
      dataIndex: 'kuk',
      key: 'kuk',
      render: (text: string, record: KompetensiItem) => {
        const sanitizedKuk = text.replace(/\./g, '');
        const category = record.kategori ? record.kategori.toLowerCase() : '';
        const mappedKategori = kategoriMap[category] || record.kategori || 'default';
        const tipe = record.tipe ? record.tipe.toLowerCase() : '';
        const path =
          tipe === 'keterampilan' ? 'terampil' :
          tipe === 'keahlian' ? 'ahli' : 'default';
        const url = `${wikiUrl}${path}/${mappedKategori}/${sanitizedKuk}`;
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
      key: 'desc',
    },
    {
      title: 'Asesmen Mandiri',
      dataIndex: 'asesmen',
      key: 'asesmen',
    },
    {
      title: 'Asesmen Asesor',
      dataIndex: 'asesmenasesor',
      key: 'asesmenasesor',
      render: (_: any, record: KompetensiItem) => (
        <Select
          value={record.asesmenasesor || undefined}
          style={{ width: 160 }}
          placeholder="Pilih"
          options={[
            { value: 'Mandiri', label: 'Mandiri' },
            { value: 'Dengan Supervisi', label: 'Dengan Supervisi' },
          ]}
          onChange={(value: string) => {
            record.asesmenasesor = value;
            setKompetensiData([...kompetensiData]);
          }}
        />
      ),
    },
    {
      title: 'Penilaian Asesor',
      dataIndex: 'asesor',
      key: 'asesor',
      render: (_: any, record: KompetensiItem) => (
        <Select
          value={record.asesor || undefined}
          style={{ width: 160 }}
          placeholder="Pilih"
          options={[
            { value: 'Kompeten', label: 'Kompeten' },
            { value: 'Belum Kompeten', label: 'Belum Kompeten' },
            { value: 'Penilaian Lanjut', label: 'Penilaian Lanjut' },
          ]}
          onChange={(value: string) => {
            record.asesor = value;
            setKompetensiData([...kompetensiData]);
          }}
        />
      ),
    },
    {
      title: 'Aksi',
      dataIndex: 'aksi',
      key: 'aksi',
      render: (_: any, record: KompetensiItem) => (
        <div>
            <Button style={{padding: 10, marginTop: 5, marginBottom: 10}} type="primary" onClick={() => console.log(`Aksi for ${record.kuk}`)}>
               <SaveOutlined />
            </Button>
            <Button style={{padding: 10, marginTop: 5, marginBottom: 10}} color="danger" variant="solid" onClick={() => console.log(`Aksi for ${record.kuk}`)}>
               <DeleteOutlined />
            </Button>
        </div>
      ),
    },
  ];

  return (
    <Table
      columns={innerColumns}
      dataSource={kompetensiData}
      loading={innerLoading}
      pagination={false}
      size="small"
    />
  );
};

export default ExpandedKompetensiTable;
