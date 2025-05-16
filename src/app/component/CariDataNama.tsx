'use client';

import { Button, message } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useState } from 'react';

export default function CariDataNama({ form }: { form: any }) {
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    const nip = form.getFieldValue('nip');
    if (!nip) {
      message.warning('Masukkan NIP terlebih dahulu.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`/api/data/${nip}`);
      const result = await res.json();

      if (result.success) {
        const { nip, nama } = result.data;

        form.setFieldsValue({ nip, nama }); // ✅ Fill NIP and Nama into form
        message.success('Data ditemukan!');
      } else {
        form.resetFields(['nama']); // Clear nama
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
