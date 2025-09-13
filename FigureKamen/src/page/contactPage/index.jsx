import { useState } from "react";
import "./index.scss";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
    alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Liên hệ với chúng tôi</h1>
          <p>
            Hãy để lại thông tin để được tư vấn về các sản phẩm Figure Rise
            Standard
          </p>
        </div>
      </section>

      <div className="contact-container">
        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-section">
            <div className="form-header">
              <h2>Gửi tin nhắn</h2>
              <p>
                Điền thông tin vào form bên dưới và chúng tôi sẽ liên hệ lại với
                bạn
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Họ và tên *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Nhập họ và tên của bạn"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Số điện thoại</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="0123 456 789"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Chủ đề</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                  >
                    <option value="">Chọn chủ đề</option>
                    <option value="product-inquiry">Hỏi về sản phẩm</option>
                    <option value="order-status">Tình trạng đơn hàng</option>
                    <option value="support">Hỗ trợ kỹ thuật</option>
                    <option value="partnership">Hợp tác kinh doanh</option>
                    <option value="other">Khác</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Tin nhắn *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  placeholder="Nhập tin nhắn của bạn..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <span>Gửi tin nhắn</span>
                <i className="arrow">→</i>
              </button>
            </form>
          </div>

          {/* Contact Info Sidebar */}
          <div className="contact-info-section">
            <div className="info-card">
              <h3>Thông tin liên hệ</h3>

              <div className="info-item">
                <div className="info-icon">📍</div>
                <div className="info-content">
                  <h4>Địa chỉ</h4>
                  <p>
                    12/18 Nguyễn Khuyến, Liên <br />
                    Nghĩa, Đức Trọng, Lâm Đồng
                  </p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📞</div>
                <div className="info-content">
                  <h4>Số điện thoại</h4>
                  <p>+84 335 165 044</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">✉️</div>
                <div className="info-content">
                  <h4>Email</h4>
                  <p>Figurekamen@gmail.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">🕒</div>
                <div className="info-content">
                  <h4>Giờ làm việc</h4>
                  <p>
                    Thứ 2 - Thứ 6: 9:00 - 18:00
                    <br />
                    Thứ 7 - Chủ nhật: 9:00 - 17:00
                  </p>
                </div>
              </div>
            </div>

            <div className="social-card">
              <h3>Theo dõi chúng tôi</h3>
              <div className="social-links">
                <a
                  href="https://www.facebook.com/cong.huy.213035/"
                  className="social-link facebook"
                >
                  <span>📘</span>
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/cynnor.url/"
                  className="social-link instagram"
                >
                  <span>📷</span>
                  Instagram
                </a>
                <a
                  href="https://www.youtube.com/"
                  className="social-link youtube"
                >
                  <span>📺</span>
                  YouTube
                </a>
              </div>
            </div>

            <div className="support-card">
              <h3>Hỗ trợ nhanh</h3>
              <p>Cần hỗ trợ ngay? Liên hệ với chúng tôi qua:</p>
              <div className="quick-contact">
                <a href="tel:+84123456789" className="quick-btn call">
                  📞 Gọi ngay
                </a>
                <a
                  href="mailto:info@figurekamen.com"
                  className="quick-btn email"
                >
                  ✉️ Gửi email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
