'use client';
import React, { useEffect, useState } from 'react';
import {
  Button,
  Form,
  Flex,
  message,
  Row,
  Col
} from 'antd';
import {
  SaveOutlined,
  PrinterOutlined
} from '@ant-design/icons';
import DataPribadi from '../component/DataPribadi';
import DataPekerjaan from '../component/DataPekerjaan';
import DataPendidikan from '../component/DataPendidikan';
import DataPelatihan from '../component/DataPelatihan';


const Cek = () => {
  const [form] = Form.useForm();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  const handleSubmit = async (values: any) => {
    try {
      const formData = new FormData();

      formData.append("nip", values.nip.replace(/\s+/g, ""));
      formData.append("nama", values.nama);
      formData.append("tempatLahir", values.tempatLahir);
      formData.append("tanggalLahir", values.tanggalLahir.toDate().toISOString());
      formData.append("jenisKelamin", values.jenisKelamin);
      formData.append("phone", values.phone);
      formData.append("email", values.email);
      formData.append("alamat", values.alamat);

      formData.append("namaTempatBekerja", values.namaTempatBekerja);
      formData.append("alamatPekerjaan", values.alamatPekerjaan);
      formData.append("noStr", values.noStr);
      formData.append("tanggalStr", values.tanggalStr.toDate().toISOString());
      formData.append("noSip", values.noSip);
      formData.append("tanggalSip", values.tanggalSip.toDate().toISOString());

      formData.append("universitas", values.universitas);
      formData.append("jurusan", values.jurusan);
      formData.append("noIjazah", values.noIjazah);
      formData.append("tanggalIjazah", values.tanggalIjazah.toDate().toISOString());

      const fileItem = values.fileIjazah?.[0];
      if (fileItem?.originFileObj) {
        // Jika user mengupload file baru
        formData.append("fileIjazah", fileItem.originFileObj);
      } else if (fileItem?.url) {
        // Jika file lama tidak diubah, bisa kirim nama file saja (optional)
        formData.append("fileIjazah_existing", fileItem.name); // backend harus handle ini
      }

      const fileAiteme = values.fileStr?.[0];
      if (fileAiteme?.originFileObj) {
        // Jika user mengupload file baru
        formData.append("fileStr", fileAiteme.originFileObj);
      } else if (fileAiteme?.url) {
        // Jika file lama tidak diubah, bisa kirim nama file saja (optional)
        formData.append("fileStr_existing", fileAiteme.name); // backend harus handle ini
      }
      const fileAitem = values.fileSik?.[0];
      if (fileAitem?.originFileObj) {
        // Jika user mengupload file baru
        formData.append("fileSik", fileAitem.originFileObj);
      } else if (fileAitem?.url) {
        // Jika file lama tidak diubah, bisa kirim nama file saja (optional)
        formData.append("fileSik_existing", fileAitem.name); // backend harus handle ini
      }

      const response = await fetch("/api/data/create", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit data");
      }

      const result = await response.json();
      message.success("Data berhasil disimpan!");
      console.log("Success:", result);
      form.resetFields();
    } catch (error) {
      message.error("Gagal mengirim data, silakan cek kekurangan dan coba lagi.");
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="App" style={{ padding: '10px' }}>
      <h1>Kredensial Rekam Medis</h1>
        <Form
          form={form}
          name="kredensial-form"
          onFinish={handleSubmit}
          onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            }
          }}
          initialValues={{ fileIjazah: [], fileSik: [] }}
          style={{ maxWidth: '100%' }}
        >
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={24} md={12} lg={12}> {/* Full width on mobile, 3 columns on PC */}
            <DataPribadi form={form} />
          </Col>
          <Col xs={24} sm={24} md={12}  lg={12}>
            <DataPekerjaan form={form} />
          </Col>
          <Col xs={24} sm={24} md={12}  lg={12}>
            <DataPendidikan form={form} />
          </Col>
          {/* <Col xs={24} sm={24} md={12}  lg={12}>
            <DataPelatihan form={form} />
          </Col> */}
        </Row>
          <div style={{ display: 'flex', marginTop: 24, justifyContent: 'center' }}>
            <Form.Item>
              <Flex gap="small" wrap>
                <Button type="primary" htmlType="submit">
                  <SaveOutlined /> SIMPAN
                </Button>
                <Button color="cyan" variant="outlined">
                  <PrinterOutlined /> CETAK
                </Button>
              </Flex>
            </Form.Item>
          </div>
        </Form>
    </div>
  );
};

export default Cek;