'use client';

import React, { useState, useEffect } from 'react';
import { Table, message } from 'antd';
import ExpandedKompetensiTable from '../component/ExpandedKompetensiTable'; // Adjust the path as needed

interface DatapribadiItem {
  nip: string;
  nama: string;
}

interface PersonalApiResponse {
  success: boolean;
  message: string;
  data: {
    Dataribadi: DatapribadiItem[];
  };
}

const TabelPeserta: React.FC = () => {
  const [personalData, setPersonalData] = useState<DatapribadiItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPersonalData = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/data'); // Your API endpoint for personal data
        const json: PersonalApiResponse = await res.json();
        if (res.ok && json.success) {
          let data = json.data.Dataribadi;
          data = data.sort((a, b) => a.nip.localeCompare(b.nip));
          setPersonalData(data);
        } else {
          message.error('Gagal mendapatkan data pribadi.');
        }
      } catch (error) {
        message.error('Gagal mengambil data pribadi: ' + error);
      } finally {
        setLoading(false);
      }
    };
    fetchPersonalData();
  }, []);

  const columns = [
    {
      title: 'Nama Peserta',
      dataIndex: 'nama',
      key: 'nama',
      sorter: (a: DatapribadiItem, b: DatapribadiItem) => a.nama.localeCompare(b.nama),
      render: (text: string) => (
        <span style={{ cursor: 'pointer', color: '#1890ff' }}>{text}</span>
      ),
    },
  ];

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Penilaian Peserta Kredensial</h1>
      <Table
        columns={columns}
        dataSource={personalData.map((person) => ({ ...person, key: person.nip }))}
        loading={loading}
        expandable={{
          expandedRowRender: (record: DatapribadiItem) => <ExpandedKompetensiTable nip={record.nip} />,
        }}
        pagination={false}
      />
    </div>
  );
};

export default TabelPeserta;
