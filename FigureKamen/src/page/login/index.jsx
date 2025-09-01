import { Link } from "react-router-dom";
import "./index.scss";
import { Input, Button } from "antd";
import { useState } from "react";

function Login() {
  const [formData, setFormData] = useState([]);

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div className="login">
      <div className="login__logo">
        <Link className="logo" to="/">
          <img src="logoWeb.png" alt="Logo" className="logoWeb" />
        </Link>
      </div>
      <div className="login__form">
        <div className="login__form__title">
          <h3>Chào mừng bạn đến với trang đăng nhập</h3>
          <label htmlFor="username">Tên đăng nhập</label>
          <Input
            placeholder="Nhập tên đăng nhập"
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
          <label htmlFor="password">Mật khẩu</label>
          <Input
            placeholder="Nhập mật khẩu"
            type="password"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <div className="login__form__divider">
            <Button type="primary" onClick={handleSubmit}>
              Đăng nhập
            </Button>
            <Link to="/register">
              <Button type="default">Đăng ký</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
