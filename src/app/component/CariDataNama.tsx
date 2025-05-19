'use client';

import { Button, message } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useState } from 'react';

export default function CariDataNama({
    form,
    setNip,
    setNama,
  }: {
    form: any;
    setNip: (val: string) => void;
    setNama: (val: string) => void;
  }) {
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    const nipVal = form.getFieldValue('nip');
    if (!nipVal) {
      message.warning('Masukkan NIP terlebih dahulu.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`/api/data/${nipVal}`);
      const result = await res.json();

      if (result.success) {
        const { nip, nama } = result.data;
        form.setFieldsValue({ nip, nama });
        setNip(nip);
        setNama(nama);
        message.success('Data ditemukan!');
      } else {
        form.setFieldsValue({ nama: '' });
        setNip('');
        setNama('');
        message.warning(result.message || 'Data tidak ditemukan!');
      }
    } catch (err) {
      console.error(err);
      message.error('Terjadi kesalahan saat mengambil data!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      type="default"
      icon={<SearchOutlined />}
      onClick={handleSearch}
      loading={loading}
    />
  );
}
