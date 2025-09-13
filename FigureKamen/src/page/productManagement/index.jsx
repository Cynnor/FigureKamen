import "./index.scss";
import SiteBar from "../../components/siteBar";
import { Button, Form, Select, Table, Dropdown, Modal } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useForm } from "antd/es/form/Form";
import Input from "antd/es/input/Input";
import formatCurrency from "./../../utils/formatCurrency";

function ProductManagement() {
  const [dataSource, setDataSource] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [form] = useForm();
  const [editIndex, setEditIndex] = useState(null);

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
      render: (value) => formatCurrency(value),
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record, index) => (
        <Dropdown
          menu={{
            items: [
              {
                key: "edit",
                label: (
                  <span onClick={() => handleEdit(record, index)}>Sửa</span>
                ),
              },
              {
                key: "delete",
                label: <span onClick={() => handleDelete(index)}>Xóa</span>,
              },
            ],
          }}
          trigger={["click"]}
          placement="bottomRight"
        >
          <Button type="text" icon={<EllipsisOutlined />} />
        </Dropdown>
      ),
    },
  ];

  const handleDelete = (index) => {
    setDataSource((prev) => prev.filter((_, i) => i !== index));
  };

  const handleEdit = (record, index) => {
    setIsVisible(true);
    form.setFieldsValue(record);
    setEditIndex(index);
  };

  const handleOpenModal = () => {
    setIsVisible(true);
  };
  const handleCloseModal = () => {
    setIsVisible(false);
    form.resetFields();
    setEditIndex(null);
  };

  const handleSubmit = (values) => {
    if (editIndex !== null) {
      // Sửa dữ liệu
      setDataSource((prev) =>
        prev.map((item, idx) => (idx === editIndex ? values : item))
      );
      setEditIndex(null);
    } else {
      // Thêm mới
      setDataSource((prev) => [...prev, values]);
    }
  };

  const handleOK = () => {
    form.validateFields().then((values) => {
      handleSubmit(values);
      handleCloseModal();
    });
  };

  useEffect(() => {
    const saved = localStorage.getItem("products");
    if (saved) {
      setDataSource(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(dataSource));
  }, [dataSource]);

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
        <Table dataSource={dataSource} columns={columns} rowKey="name" />
      </div>
      <Modal
        title="Thêm sản phẩm"
        onOk={handleOK}
        onCancel={handleCloseModal}
        open={isVisible}
      >
        <Form
          form={form}
          layout="vertical"
          initialValues={{ status: "In Stock" }}
        >
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
          <Form.Item label="Tình trạng:" name="status">
            <Select
              style={{ width: 120 }}
              options={[
                { value: "In Stock", label: "In Stock" },
                { value: "Out of Stock", label: "Out of Stock" },
                { value: "Pre-order", label: "Pre-order" },
                { value: "Discontinued", label: "Discontinued" },
              ]}
            />
          </Form.Item>
          <Form.Item
            label="Giá:"
            rules={[
              { required: true, message: "Vui lòng nhập giá" },
              {
                pattern: /^\d{5,9}$/,
                message: "Giá phải gồm từ 5 đến 9 chữ số",
              },
            ]}
            name="price"
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Input
                placeholder="Giá"
                maxLength={9}
                style={{ width: 120, marginRight: 8 }}
              />
              <span>VND</span>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default ProductManagement;
