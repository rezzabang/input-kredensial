'use client'
import React, { useRef, useState, useEffect } from 'react';
import { SearchOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import type { InputRef, TableColumnsType, TableColumnType } from 'antd';
import { Button, Input, Space, Table, Modal, message } from 'antd';
import type { FilterDropdownProps } from 'antd/es/table/interface';
import Highlighter from 'react-highlight-words';
import TambahKompetensi from '../component/TambahKompetensi';

interface DataType {
  kuk: string;
  detail: string;
  kompetensi: string;
  kategori: string;
}

type DataIndex = keyof DataType;

const Kompetensi: React.FC = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => setIsModalVisible(true);
  const handleOk = () => setIsModalVisible(false);
  const handleCancel = () => setIsModalVisible(false);
  const { confirm } = Modal;

  const handleDelete = (kuk: string) => {
    confirm({
      title: 'Yakin ingin menghapus kompetensi ini?',
      icon: <ExclamationCircleOutlined />,
      content: `Kompetensi dengan kode "${kuk}" akan dihapus secara permanen.`,
      okText: 'Ya, Hapus',
      okType: 'danger',
      cancelText: 'Batal',
      onOk: async () => {
        try {
          const res = await fetch(`/api/kompetensi/delete/${encodeURIComponent(kuk)}`, {
            method: 'DELETE',
          });
          const result = await res.json();

          if (result.success) {
            message.success('Kompetensi berhasil dihapus.');
            // Refresh table data
            setData((prev) => prev.filter((item) => item.kuk !== kuk));
          } else {
            message.error(result.message || 'Gagal menghapus data.');
          }
        } catch (error) {
          message.error(error + 'Terjadi kesalahan saat menghapus data.');
        }
      },
    });
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/kompetensi');
      const result = await response.json();
      setData(result.data);
    } catch (error) {
      message.error('Gagal mengambil data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (
    selectedKeys: string[],
    confirm: FilterDropdownProps['confirm'],
    dataIndex: DataIndex,
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex: DataIndex): TableColumnType<DataType> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    filterDropdownProps: {
      onOpenChange(open) {
        if (open) {
          setTimeout(() => searchInput.current?.select(), 100);
        }
      },
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const columns: TableColumnsType<DataType> = [
    {
      title: 'Kode Kompetensi',
      dataIndex: 'kuk',
      key: 'kuk',
      width: '16%',
      ...getColumnSearchProps('kuk'),
    },
    {
      title: 'Detail',
      dataIndex: 'detail',
      key: 'detail',
      width: '40%',
      ...getColumnSearchProps('detail'),
    },
    {
      title: 'Kompetensi',
      dataIndex: 'kompetensi',
      key: 'kompetensi',
      width: '15%',
    },
    {
      title: 'Kategori',
      dataIndex: 'kategori',
      key: 'kategori',
      width: '15%',
      ...getColumnSearchProps('kategori'),
      sorter: (a, b) => a.kategori.length - b.kategori.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Aksi',
      key: 'aksi',
      width: '10%',
      render: (_, record) => (
        <Button danger onClick={() => handleDelete(record.kuk)}>
          Hapus
        </Button>
      ),
    },
  ];

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <h1>Tabel Kompetensi Perekam Medis</h1>
        <Button type="primary" onClick={showModal}>Tambah Kompetensi</Button>
      </div>

      {/* 🏗 Modal with TambahKompetensi Component */}
      <Modal 
        title="Tambah Kompetensi" 
        open={isModalVisible} 
        onOk={handleOk} 
        onCancel={handleCancel} 
        footer={null}
        width={900}
      >
        <TambahKompetensi onSuccess={() => {
          handleCancel(); // close modal
          fetchData(); // refresh table
        }} />
      </Modal>

      {/* 📊 Kompetensi Table */}
      <Table<DataType>
        columns={columns}
        rowKey={(record) => record.kuk}
        dataSource={data}
        loading={loading}
        pagination={{ pageSize: 5 }}
      />
    </>
  );
};

export default Kompetensi;