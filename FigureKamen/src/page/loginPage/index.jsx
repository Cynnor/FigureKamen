import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./index.scss";

function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const { login, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const result = await login(formData.email, formData.password);

    if (result.success) {
      navigate("/");
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-content">
          {/* Left Side - Login Form */}
          <div className="login-form-section">
            <div className="form-header">
              <Link to="/" className="back-home">
                <span>←</span> Quay lại trang chủ
              </Link>

              <div className="logo-section">
                <h1>FigureKamen</h1>
                <p>Chào mừng trở lại!</p>
              </div>
            </div>

            <form className="login-form" onSubmit={handleSubmit}>
              {error && (
                <div className="error-message">
                  {error}
                </div>
              )}

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <div className="input-wrapper">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Nhập email của bạn"
                  />
                  <span className="input-icon">✉️</span>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="password">Mật khẩu</label>
                <div className="input-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    placeholder="Nhập mật khẩu"
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "👁️" : "👁️‍🗨️"}
                  </button>
                </div>
              </div>

              <div className="form-options">
                <label className="checkbox-wrapper">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                  />
                  <span className="checkmark"></span>
                  Ghi nhớ đăng nhập
                </label>

                <Link to="/forgot-password" className="forgot-password">
                  Quên mật khẩu?
                </Link>
              </div>

              <button type="submit" className="login-btn" disabled={isLoading}>
                {isLoading ? "Đang đăng nhập..." : "Đăng nhập"}
              </button>

              <div className="divider">
                <span>hoặc</span>
              </div>

              <div className="social-login">
                <button type="button" className="social-btn google">
                  <span>🌐</span>
                  Đăng nhập với Google
                </button>
                <button type="button" className="social-btn facebook">
                  <span>📘</span>
                  Đăng nhập với Facebook
                </button>
              </div>

              <div className="signup-link">
                <p>
                  Chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link>
                </p>
              </div>
            </form>
          </div>

          {/* Right Side - Info Panel */}
          <div className="login-info-section">
            <div className="info-content">
              <h2>Khám phá thế giới Kamen Rider</h2>
              <p>
                Đăng nhập để trải nghiệm đầy đủ các tính năng của FigureKamen
              </p>

              <div className="features-list">
                <div className="feature-item">
                  <span className="feature-icon">⭐</span>
                  <div className="feature-text">
                    <h4>Bộ sưu tập cá nhân</h4>
                    <p>Lưu trữ và quản lý wishlist của bạn</p>
                  </div>
                </div>

                <div className="feature-item">
                  <span className="feature-icon">🛒</span>
                  <div className="feature-text">
                    <h4>Mua sắm dễ dàng</h4>
                    <p>Thanh toán nhanh chóng và theo dõi đơn hàng</p>
                  </div>
                </div>

                <div className="feature-item">
                  <span className="feature-icon">🎁</span>
                  <div className="feature-text">
                    <h4>Ưu đãi độc quyền</h4>
                    <p>Nhận thông báo về sản phẩm mới và khuyến mãi</p>
                  </div>
                </div>
              </div>

              <div className="featured-products">
                <h3>Sản phẩm nổi bật</h3>
                <div className="product-preview">
                  <img src="/Heisei/1.Kuuga/box.jpg" alt="Kuuga" />
                  <img src="/Heisei/10.Decade/box.jpg" alt="Decade" />
                  <img src="/Reiwa/1.Zero-One/box.jpg" alt="Zero-One" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
