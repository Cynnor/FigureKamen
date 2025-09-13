import { Link } from "react-router-dom";
import "./index.scss";

function SiteBar() {
  return (
    <div className="site-bar">
      <ul className="site-bar-list">
        <li className="site-bar-list-item">
          <Link to="/productManagement">Quản lý sản phẩm</Link>
        </li>
        <li className="site-bar-list-item">
          <Link to="/orderManagement">Quản lý đơn hàng</Link>
        </li>
        <li className="site-bar-list-item">
          <Link to="/userManagement">Quản lý người dùng</Link>
        </li>
      </ul>
    </div>
  );
}

export default SiteBar;
