import { Link } from "react-router-dom";
import "./index.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="logoWeb.png" alt="Logo" className="logoWeb" />
      </div>
      <div className="header__nav">
        <ul>
          <li>
            <Link to="/">Trang chủ</Link>
          </li>
          <li>
            <Link to="/product">Mô hình</Link>
          </li>
          <li>
            <Link to="/about">Giới thiệu</Link>
          </li>
          <li>
            <Link to="/policy">Chính sách</Link>
          </li>
          <li>
            <Link to="/checkout">Thanh toán</Link>
          </li>
        </ul>
      </div>
      <div className="header__actions">
        <Link to="/login">Đăng nhập</Link>
        <Link to="/register">Đăng ký</Link>
      </div>
    </header>
  );
}

export default Header;
