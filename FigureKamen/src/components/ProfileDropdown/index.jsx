import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./index.scss";

function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  return (
    <div className="profile-dropdown" ref={dropdownRef}>
      <button className="profile-btn" onClick={() => setIsOpen(!isOpen)}>
        <span className="avatar">{user?.avatar}</span>
        <span className="user-name">{user?.firstName}</span>
        <span className={`dropdown-arrow ${isOpen ? "open" : ""}`}>▼</span>
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-header">
            <div className="user-info">
              <span className="avatar-large">{user?.avatar}</span>
              <div className="user-details">
                <h4>
                  {user?.firstName} {user?.lastName}
                </h4>
                <p>{user?.email}</p>
              </div>
            </div>
          </div>

          <div className="dropdown-body">
            <Link
              to="/profile"
              className="dropdown-item"
              onClick={() => setIsOpen(false)}
            >
              <span className="item-icon">👤</span>
              Thông tin cá nhân
            </Link>
            <Link
              to="/orders"
              className="dropdown-item"
              onClick={() => setIsOpen(false)}
            >
              <span className="item-icon">📦</span>
              Đơn hàng của tôi
            </Link>
            <Link
              to="/wishlist"
              className="dropdown-item"
              onClick={() => setIsOpen(false)}
            >
              <span className="item-icon">❤️</span>
              Danh sách yêu thích
            </Link>
            <Link
              to="/settings"
              className="dropdown-item"
              onClick={() => setIsOpen(false)}
            >
              <span className="item-icon">⚙️</span>
              Cài đặt
            </Link>
          </div>

          <div className="dropdown-footer">
            <button className="logout-btn" onClick={handleLogout}>
              <span className="item-icon">🚪</span>
              Đăng xuất
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileDropdown;
