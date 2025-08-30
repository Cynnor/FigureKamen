import SiteBar from "../../component/siteBar";
import "./index.scss";
import { Button, Form, Table } from "antd";
import { useState } from "react";
import Modal from "antd/es/modal/Modal";
import { useForm } from "antd/es/form/Form";
import Input from "antd/es/input/Input";

function ProductManagement() {
  const [dataSource, setDataSource] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [form] = useForm();

  const columns = [
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Dòng",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Tình trạng",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Hành động",
      dataIndex: "action",
      key: "action",
    },
  ];
  const handleOpenModal = () => {
    setIsVisible(true);
  };
  const handleCloseModal = () => {
    setIsVisible(false);
    form.resetFields();
  };

  const handleSubmit = (values) => {
    console.log("Submitted values:", values);
    setDataSource((prevData) => [...prevData, values]);
  };

  const handleOK = () => {
    form.validateFields().then((values) => {
      handleSubmit(values);
      handleCloseModal();
    });
  };

  return (
    <div className="container">
      <SiteBar />
      <div className="table">
        <Button
          type="primary"
          onClick={handleOpenModal}
          onSubmit={handleSubmit}
          style={{ marginBottom: 16, marginTop: 10 }}
        >
          Thêm sản phẩm
        </Button>
        <Table dataSource={dataSource} columns={columns} />
      </div>
      <Modal
        title="Thêm sản phẩm"
        onOk={handleOK}
        onCancel={handleCloseModal}
        open={isVisible}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Tên sản phẩm:"
            rules={[{ required: true, message: "Vui lòng nhập tên sản phẩm" }]}
            name="name"
          >
            <Input placeholder="Tên sản phẩm" />
          </Form.Item>
          <Form.Item
            label="Dòng sản phẩm:"
            rules={[{ required: true, message: "Vui lòng nhập dòng sản phẩm" }]}
            name="type"
          >
            <Input placeholder="Dòng sản phẩm" />
          </Form.Item>
          <Form.Item
            label="Tình trạng:"
            rules={[{ required: true, message: "Vui lòng nhập tình trạng" }]}
            name="status"
          >
            <Input placeholder="Tình trạng" />
          </Form.Item>
          <Form.Item
            label="Giá:"
            rules={[{ required: true, message: "Vui lòng nhập giá" }]}
            name="price"
          >
            <Input placeholder="Giá" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default ProductManagement;
