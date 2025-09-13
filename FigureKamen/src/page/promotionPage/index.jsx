import { useState } from "react";
import { Link } from "react-router-dom";
import {
  heiseiRiders,
  showaRiders,
  reiwaRiders,
  allProducts,
} from "../../data/products";
import "./index.scss";

function PromotionPage() {
  const [activeTab, setActiveTab] = useState("current");

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  const currentPromotions = [
    {
      id: "flash-sale",
      title: "Flash Sale 10%",
      description:
        "Giảm giá đặc biệt cho toàn bộ bộ sưu tập Figure Rise Standard",
      discount: 10,
      endDate: "2025-01-31",
      products: allProducts.slice(0, 6),
      banner: "🔥",
      type: "flash",
    },
    {
      id: "bundle-deal",
      title: "Mua 5 Tặng 1",
      description:
        "Mua 5 mô hình bất kỳ, tặng ngay 1 mô hình Figure Rise Standard",
      discount: 17, // Equivalent to getting 1 free out of 6
      endDate: "2025-02-28",
      products: heiseiRiders.slice(0, 6),
      banner: "🎁",
      type: "bundle",
    },
    {
      id: "new-year",
      title: "Tết 2025 Sale",
      description: "Mừng năm mới - Giảm 10% toàn bộ bộ sưu tập",
      discount: 10,
      endDate: "2025-02-15",
      products: allProducts.slice(6, 12),
      banner: "🧧",
      type: "seasonal",
    },
  ];

  const upcomingPromotions = [
    {
      id: "spring-sale",
      title: "Spring Collection",
      description: "Sắp có - Giảm giá mùa xuân cho toàn bộ bộ sưu tập",
      discount: 15,
      startDate: "2025-03-01",
      banner: "🌸",
      type: "upcoming",
    },
    {
      id: "member-exclusive",
      title: "Member Exclusive Sale",
      description: "Ưu đãi độc quyền dành cho thành viên VIP",
      discount: 20,
      startDate: "2025-03-15",
      banner: "💎",
      type: "exclusive",
    },
  ];

  const timeLeft = (endDate) => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = end - now;

    if (diff <= 0) return "Đã kết thúc";

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    return `${days} ngày ${hours} giờ`;
  };

  return (
    <div className="promotion-page">
      {/* Hero Section */}
      <section className="promotion-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Khuyến mãi đặc biệt</h1>
              <p>
                Đừng bỏ lỡ những ưu đãi tuyệt vời cho bộ sưu tập Figure Rise
                Standard
              </p>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">10%</span>
                  <span className="stat-label">Giảm giá</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">5+1</span>
                  <span className="stat-label">Mua 5 tặng 1</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">15</span>
                  <span className="stat-label">Ngày còn lại</span>
                </div>
              </div>
            </div>

            <div className="hero-sidebar">
              <div className="featured-highlight">
                <h3>Sản phẩm nổi bật</h3>
                <div className="highlight-grid">
                  <div className="highlight-item">
                    <img src="/Heisei/1.Kuuga/box.jpg" alt="Kuuga" />
                    <span>Kuuga</span>
                  </div>
                  <div className="highlight-item">
                    <img src="/Heisei/10.Decade/box.jpg" alt="Decade" />
                    <span>Decade</span>
                  </div>
                  <div className="highlight-item">
                    <img src="/Reiwa/1.Zero-One/box.jpg" alt="Zero-One" />
                    <span>Zero-One</span>
                  </div>
                  <div className="highlight-item">
                    <img src="/Showa/1.Black/box.jpg" alt="Black" />
                    <span>Black</span>
                  </div>
                </div>
              </div>

              <div className="info-cards">
                <div className="info-card">
                  <div className="info-icon">🎯</div>
                  <div className="info-content">
                    <h4>Chất lượng cao</h4>
                    <p>Mô hình chi tiết, linh hoạt với nhiều khớp nối</p>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-icon">🚚</div>
                  <div className="info-content">
                    <h4>Giao hàng nhanh</h4>
                    <p>Miễn phí ship toàn quốc với đơn từ 500k</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="promotion-container">
        {/* Navigation Tabs */}
        <div className="promotion-tabs">
          <button
            className={`tab-btn ${activeTab === "current" ? "active" : ""}`}
            onClick={() => setActiveTab("current")}
          >
            <span className="tab-icon">🔥</span>
            Đang diễn ra
          </button>
          <button
            className={`tab-btn ${activeTab === "upcoming" ? "active" : ""}`}
            onClick={() => setActiveTab("upcoming")}
          >
            <span className="tab-icon">⏰</span>
            Sắp diễn ra
          </button>
        </div>

        {/* Current Promotions */}
        {activeTab === "current" && (
          <div className="promotions-section">
            <div className="section-header">
              <h2>Khuyến mãi đang diễn ra</h2>
              <p>Áp dụng ngay để nhận ưu đãi tốt nhất</p>
            </div>

            <div className="promotions-grid">
              {currentPromotions.map((promo) => (
                <div key={promo.id} className={`promotion-card ${promo.type}`}>
                  <div className="promo-header">
                    <div className="promo-banner">{promo.banner}</div>
                    <div className="promo-discount">-{promo.discount}%</div>
                  </div>

                  <div className="promo-content">
                    <h3>{promo.title}</h3>
                    <p>{promo.description}</p>

                    <div className="promo-timer">
                      <span className="timer-label">Còn lại:</span>
                      <span className="timer-value">
                        {timeLeft(promo.endDate)}
                      </span>
                    </div>
                  </div>

                  <div className="promo-products">
                    <div className="products-preview">
                      {promo.products.slice(0, 3).map((product) => (
                        <img
                          key={product.id}
                          src={product.img}
                          alt={product.name}
                          className="product-thumb"
                        />
                      ))}
                      {promo.products.length > 3 && (
                        <div className="more-products">
                          +{promo.products.length - 3}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="promo-action">
                    <Link to="/collections" className="promo-btn">
                      Mua ngay
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Featured Sale Products */}
            <div className="featured-sale">
              <h3>Sản phẩm khuyến mãi nổi bật</h3>
              <div className="sale-products-grid">
                {heiseiRiders.slice(0, 6).map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="sale-product-card"
                  >
                    <div className="product-image">
                      <img src={product.img} alt={product.name} />
                      <div className="sale-badge">-10%</div>
                    </div>
                    <div className="product-info">
                      <h4>{product.name}</h4>
                      <div className="price-info">
                        <span className="original-price">
                          {formatPrice(product.price)}
                        </span>
                        <span className="sale-price">
                          {formatPrice(product.price * 0.9)}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Upcoming Promotions */}
        {activeTab === "upcoming" && (
          <div className="promotions-section">
            <div className="section-header">
              <h2>Khuyến mãi sắp diễn ra</h2>
              <p>Đăng ký nhận thông báo để không bỏ lỡ</p>
            </div>

            <div className="promotions-grid">
              {upcomingPromotions.map((promo) => (
                <div key={promo.id} className={`promotion-card ${promo.type}`}>
                  <div className="promo-header">
                    <div className="promo-banner">{promo.banner}</div>
                    <div className="promo-discount">-{promo.discount}%</div>
                  </div>

                  <div className="promo-content">
                    <h3>{promo.title}</h3>
                    <p>{promo.description}</p>

                    <div className="promo-timer upcoming">
                      <span className="timer-label">Bắt đầu:</span>
                      <span className="timer-value">
                        {new Date(promo.startDate).toLocaleDateString("vi-VN")}
                      </span>
                    </div>
                  </div>

                  <div className="promo-action">
                    <button className="notify-btn">Nhận thông báo</button>
                  </div>
                </div>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="newsletter-signup">
              <div className="newsletter-content">
                <h3>Đăng ký nhận thông báo khuyến mãi</h3>
                <p>
                  Nhận email thông báo về các chương trình khuyến mãi mới nhất
                </p>
                <form className="newsletter-form">
                  <input
                    type="email"
                    placeholder="Nhập email của bạn"
                    className="email-input"
                  />
                  <button type="submit" className="subscribe-btn">
                    Đăng ký
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Promotion Rules */}
        <div className="promotion-rules">
          <h3>Điều kiện áp dụng</h3>
          <div className="rules-grid">
            <div className="rule-item">
              <span className="rule-icon">📅</span>
              <div className="rule-text">
                <h4>Thời gian áp dụng</h4>
                <p>
                  Khuyến mãi có thời hạn, vui lòng kiểm tra thời gian kết thúc
                </p>
              </div>
            </div>
            <div className="rule-item">
              <span className="rule-icon">🛒</span>
              <div className="rule-text">
                <h4>Số lượng có hạn</h4>
                <p>Áp dụng theo số lượng sản phẩm còn lại trong kho</p>
              </div>
            </div>
            <div className="rule-item">
              <span className="rule-icon">💳</span>
              <div className="rule-text">
                <h4>Thanh toán</h4>
                <p>
                  Không áp dụng đồng thời với các chương trình khuyến mãi khác
                </p>
              </div>
            </div>
            <div className="rule-item">
              <span className="rule-icon">🚚</span>
              <div className="rule-text">
                <h4>Giao hàng</h4>
                <p>Miễn phí vận chuyển cho đơn hàng từ 1.000.000đ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromotionPage;
