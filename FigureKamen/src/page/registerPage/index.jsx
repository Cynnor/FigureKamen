import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";

function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    birthDate: "",
    agreeTerms: false,
    subscribeNewsletter: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert("Mật khẩu xác nhận không khớp!");
      return;
    }

    if (!formData.agreeTerms) {
      alert("Vui lòng đồng ý với điều khoản sử dụng!");
      return;
    }

    console.log("Registration data:", formData);
    alert("Đăng ký thành công! Chào mừng bạn đến với FigureKamen!");
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-content">
          {/* Left Side - Registration Form */}
          <div className="register-form-section">
            <div className="form-header">
              <Link to="/" className="back-home">
                <span>←</span> Quay lại trang chủ
              </Link>

              <div className="logo-section">
                <h1>Tham gia FigureKamen</h1>
                <p>Tạo tài khoản để khám phá thế giới Kamen Rider</p>
              </div>
            </div>

            <form className="register-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">Họ *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    placeholder="Nguyễn"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Tên *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    placeholder="Văn An"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <div className="input-wrapper">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="example@email.com"
                  />
                  <span className="input-icon">✉️</span>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="phone">Số điện thoại</label>
                <div className="input-wrapper">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="0123 456 789"
                  />
                  <span className="input-icon">📞</span>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="birthDate">Ngày sinh</label>
                <input
                  type="date"
                  id="birthDate"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleInputChange}
                  max={new Date().toISOString().split("T")[0]}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="password">Mật khẩu *</label>
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
                <div className="form-group">
                  <label htmlFor="confirmPassword">Xác nhận mật khẩu *</label>
                  <div className="input-wrapper">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required
                      placeholder="Nhập lại mật khẩu"
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
                    </button>
                  </div>
                </div>
              </div>

              <div className="form-options">
                <label className="checkbox-wrapper">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleInputChange}
                    required
                  />
                  <span className="checkmark"></span>
                  Tôi đồng ý với <Link to="/terms">
                    điều khoản sử dụng
                  </Link> và <Link to="/privacy">chính sách bảo mật</Link>
                </label>

                <label className="checkbox-wrapper">
                  <input
                    type="checkbox"
                    name="subscribeNewsletter"
                    checked={formData.subscribeNewsletter}
                    onChange={handleInputChange}
                  />
                  <span className="checkmark"></span>
                  Nhận thông báo về sản phẩm mới và khuyến mãi
                </label>
              </div>

              <button type="submit" className="register-btn">
                Tạo tài khoản
              </button>

              <div className="divider">
                <span>hoặc</span>
              </div>

              <div className="social-login">
                <button type="button" className="social-btn google">
                  <span>🌐</span>
                  Đăng ký với Google
                </button>
                <button type="button" className="social-btn facebook">
                  <span>📘</span>
                  Đăng ký với Facebook
                </button>
              </div>

              <div className="login-link">
                <p>
                  Đã có tài khoản? <Link to="/login">Đăng nhập ngay</Link>
                </p>
              </div>
            </form>
          </div>

          {/* Right Side - Info Panel */}
          <div className="register-info-section">
            <div className="info-content">
              <h2>Trở thành thành viên FigureKamen</h2>
              <p>
                Tham gia cộng đồng người yêu thích Kamen Rider lớn nhất Việt Nam
              </p>

              <div className="benefits-list">
                <div className="benefit-item">
                  <span className="benefit-icon">🎯</span>
                  <div className="benefit-text">
                    <h4>Ưu đãi độc quyền</h4>
                    <p>
                      Nhận mã giảm giá và ưu đãi đặc biệt dành riêng cho thành
                      viên
                    </p>
                  </div>
                </div>

                <div className="benefit-item">
                  <span className="benefit-icon">⚡</span>
                  <div className="benefit-text">
                    <h4>Sản phẩm mới sớm nhất</h4>
                    <p>
                      Được thông báo và đặt hàng trước khi sản phẩm ra mắt chính
                      thức
                    </p>
                  </div>
                </div>

                <div className="benefit-item">
                  <span className="benefit-icon">🏆</span>
                  <div className="benefit-text">
                    <h4>Chương trình tích điểm</h4>
                    <p>
                      Tích điểm từ mỗi giao dịch để đổi lấy quà tặng hấp dẫn
                    </p>
                  </div>
                </div>

                <div className="benefit-item">
                  <span className="benefit-icon">👥</span>
                  <div className="benefit-text">
                    <h4>Cộng đồng sôi nổi</h4>
                    <p>
                      Kết nối với những người cùng sở thích và chia sẻ niềm đam
                      mê
                    </p>
                  </div>
                </div>
              </div>

              <div className="member-stats">
                <div className="stat">
                  <span className="number">500+</span>
                  <span className="label">Thành viên</span>
                </div>
                <div className="stat">
                  <span className="number">23</span>
                  <span className="label">Mô hình</span>
                </div>
                <div className="stat">
                  <span className="number">100%</span>
                  <span className="label">Hài lòng</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
