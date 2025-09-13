import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import CartSidebar from "../CartSidebar";
import ProfileDropdown from "../ProfileDropdown";
import "./index.scss";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getTotalItems } = useCart();
  const { isAuthenticated } = useAuth();

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <Link to="/" className="logo">
              <img
                src="/logoWeb.png"
                alt="FigureKamen Logo"
                className="logo-image"
              />
            </Link>

            {/* Navigation */}
            <nav className="nav">
              <Link to="/" className="nav-link">
                Trang chủ
              </Link>
              <Link to="/collections" className="nav-link">
                Bộ sưu tập
              </Link>
              <Link to="/promotions" className="nav-link">
                Khuyến mãi
              </Link>
              <Link to="/about" className="nav-link">
                Về chúng tôi
              </Link>
              <Link to="/contact" className="nav-link">
                Liên hệ
              </Link>
            </nav>

            {/* Actions */}
            <div className="header-actions">
              {isAuthenticated() ? (
                <div className="auth-actions">
                  <button
                    className="cart-btn"
                    onClick={() => setIsCartOpen(true)}
                    title="Giỏ hàng"
                  >
                    <span className="cart-icon">🛒</span>
                    {getTotalItems() > 0 && (
                      <span className="cart-badge">{getTotalItems()}</span>
                    )}
                  </button>
                  <ProfileDropdown />
                </div>
              ) : (
                <div className="guest-actions">
                  <Link to="/login" className="auth-btn login-btn">
                    Đăng nhập
                  </Link>
                  <Link to="/register" className="auth-btn register-btn">
                    Đăng ký
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <Link
              to="/"
              className="mobile-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Trang chủ
            </Link>
            <Link
              to="/collections"
              className="mobile-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Bộ sưu tập
            </Link>
            <Link
              to="/promotions"
              className="mobile-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Khuyến mãi
            </Link>
            <Link
              to="/about"
              className="mobile-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Về chúng tôi
            </Link>
            <Link
              to="/contact"
              className="mobile-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Liên hệ
            </Link>

            {!isAuthenticated() && (
              <div className="mobile-auth-actions">
                <Link
                  to="/login"
                  className="mobile-auth-btn"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Đăng nhập
                </Link>
                <Link
                  to="/register"
                  className="mobile-auth-btn"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Đăng ký
                </Link>
              </div>
            )}
          </div>
        )}
      </header>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}

export default Header;
