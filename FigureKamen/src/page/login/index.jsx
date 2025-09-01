import { Link } from "react-router-dom";
import "./index.scss";
import { Input, Button } from "antd";

function Login() {
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
          <Input placeholder="Nhập tên đăng nhập" />
          <Input placeholder="Nhập mật khẩu" type="password" />
          <div className="login__form__divider">
            <Button type="primary">Đăng nhập</Button>
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
