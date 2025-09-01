import { Link } from "react-router-dom";
import "./index.scss";
import { Input, Button, Form } from "antd";
import { useState } from "react";

function Register() {
  const [data, setData] = useState([]);
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    setData((prevData) => [...prevData, values]);
    form.resetFields();
  };

  const handleSubmit = () => {
    console.log(data);
  };

  return (
    <div>
      <div className="login">
        <div className="login__logo">
          <Link className="logo" to="/">
            <img src="logoWeb.png" alt="Logo" className="logoWeb" />
          </Link>
        </div>
        <div className="login__form">
          <h2>Đăng ký tài khoản</h2>
          <div className="login__form__title">
            <Form form={form} onFinish={handleFinish} layout="horizontal">
              <Form.Item label="Tên đăng nhập">
                <Input placeholder="Nhập tên đăng nhập" />
              </Form.Item>
              <Form.Item label="Email">
                <Input placeholder="Nhập email" />
              </Form.Item>
              <Form.Item label="Số điện thoại">
                <Input placeholder="Nhập số điện thoại" />
              </Form.Item>
              <Form.Item label="Mật khẩu">
                <Input placeholder="Nhập mật khẩu" type="password" />
              </Form.Item>
              <Form.Item label="Xác nhận mật khẩu">
                <Input placeholder="Nhập lại mật khẩu" type="password" />
              </Form.Item>
            </Form>
            <div className="login__form__divider">
              <Link to="/register">
                <Button type="default" onClick={handleSubmit}>
                  Đăng ký
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
