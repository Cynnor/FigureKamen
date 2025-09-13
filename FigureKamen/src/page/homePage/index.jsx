import { Link } from "react-router-dom";
import { heiseiRiders, reiwaRiders, showaRiders } from "../../data/products";
import { useCart } from "../../context/CartContext";
import "./index.scss";

const categories = [
  {
    to: "/collections",
    img: "heisei.jpg",
    title: "Heisei Rider",
    desc: "Khám phá ngay",
    alt: "Heisei Riders",
  },
  {
    to: "/collections",
    img: "neo-heisei.jpg",
    title: "Neo-Heisei Rider",
    desc: "Khám phá ngay",
    alt: "Neo Heisei Riders",
  },
];

const featuredProducts = [
  {
    to: "/collections",
    img: "heisei-full/1.Kyuga/full_body.jpg",
    name: "Kamen Rider Kuuga",
    badge: "Heisei",
    alt: "Kuuga Figure",
  },
  {
    to: "/collections",
    img: "heisei-full/2.Agito/full_body.jpg",
    name: "Kamen Rider Agito",
    badge: "Heisei",
    alt: "Agito Figure",
  },
  {
    to: "/collections",
    img: "heisei-full/3.Ryuki/full_body.jpg",
    name: "Kamen Rider Ryuki",
    badge: "Heisei",
    alt: "Ryuki Figure",
  },
  {
    to: "/collections",
    img: "heisei-full/4.Faiz/full_body.jpg",
    name: "Kamen Rider Faiz",
    badge: "Heisei",
    alt: "Faiz Figure",
  },
  {
    to: "/collections",
    img: "heisei-full/5.Blade/full_body.jpg",
    name: "Kamen Rider Blade",
    badge: "Heisei",
    alt: "Blade Figure",
  },
  {
    to: "/collections",
    img: "heisei-full/6.Hibiki/full_body.jpg",
    name: "Kamen Rider Hibiki",
    badge: "Heisei",
    alt: "Hibiki Figure",
  },
  {
    to: "/collections",
    img: "heisei-full/7.Kabuto/full_body.jpg",
    name: "Kamen Rider Kabuto",
    badge: "Heisei",
    alt: "Kabuto Figure",
  },
  {
    to: "/collections",
    img: "heisei-full/8.Deno/full_body.jpg",
    name: "Kamen Rider Den-O",
    badge: "Heisei",
    alt: "Den-O Figure",
  },
  {
    to: "/collections",
    img: "heisei-full/9.Kiva/full_body.jpg",
    name: "Kamen Rider Kiva",
    badge: "Heisei",
    alt: "Kiva Figure",
  },
  {
    to: "/collections",
    img: "heisei-full/10.Decade/full_body.jpg",
    name: "Kamen Rider Decade",
    badge: "Heisei",
    alt: "Decade Figure",
  },
];

function getRandomProducts(arr, count) {
  const shuffled = arr.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function HomePage() {
  // Hiển thị 6 sản phẩm nổi bật từ cả 3 kỷ nguyên
  const featuredProducts = [
    heiseiRiders.find((rider) => rider.id === "kuuga"),
    heiseiRiders.find((rider) => rider.id === "agito"),
    heiseiRiders.find((rider) => rider.id === "decade"),
    showaRiders.find((rider) => rider.id === "black"),
    showaRiders.find((rider) => rider.id === "shin"),
    reiwaRiders.find((rider) => rider.id === "zero-one"),
  ].filter(Boolean); // Remove any undefined items

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  const { addToCart } = useCart();

  const handleAddToCart = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    alert(`Đã thêm ${product.name} vào giỏ hàng!`);
  };

  return (
    <div className="homepage">
      {/* Hero Section with Background */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-badge">Chính hãng Bandai</span>
            <h1>
              Bộ sưu tập <span className="highlight">Kamen Rider</span> độc
              quyền
            </h1>
            <p>
              Khám phá thế giới các siêu anh hùng Kamen Rider với 23 mô hình
              Figure Rise Standard từ Kamen Rider Black, Kamen Rider Kuuga đến
              Kamen Rider Zi-O và Kamen Rider Zero-One.
            </p>
            <div className="hero-buttons">
              <Link to="/collections" className="btn-primary">
                <span>Khám phá ngay</span>
                <i className="arrow">→</i>
              </Link>
              <Link to="/about" className="btn-secondary">
                Tìm hiểu thêm
              </Link>
            </div>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">23</span>
              <span className="stat-label">Mô hình có sẵn</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3</span>
              <span className="stat-label">Kỷ nguyên</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Chính hãng</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Nổi bật</span>
            <h2>Bộ sưu tập Figure Rise Standard</h2>
            <p>
              23 mô hình Kamen Rider chính thức từ Bandai - Từ Showa đến Reiwa
            </p>
          </div>

          <div className="featured-grid">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="product-card">
                <Link to={`/product/${product.id}`} className="product-link">
                  <div className="product-image">
                    <img
                      src={product.img}
                      alt={product.name}
                      onError={(e) => {
                        e.target.src = "/placeholder-box.jpg";
                      }}
                    />
                    <div className="product-overlay">
                      <span className="view-btn">Xem chi tiết</span>
                    </div>
                    {index === 0 && (
                      <span className="featured-badge">Phổ biến nhất</span>
                    )}
                  </div>
                  <div className="product-info">
                    <span className="product-category">
                      {product.category.toUpperCase()}
                    </span>
                    <h3>{product.name}</h3>
                    <p className="product-type">{product.type}</p>
                    <div className="product-footer">
                      <span className="product-price">
                        {formatPrice(product.price)}
                      </span>
                      <span className="stock-status">Còn hàng</span>
                    </div>
                  </div>
                </Link>
                <button
                  className="add-to-cart-btn"
                  onClick={(e) => handleAddToCart(product, e)}
                >
                  Thêm vào giỏ
                </button>
              </div>
            ))}
          </div>

          <div className="section-footer">
            <Link to="/collections" className="view-all-btn">
              Xem toàn bộ 23 mô hình
              <i className="arrow">→</i>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories with Icons */}
      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Danh mục</span>
            <h2>3 Kỷ nguyên Kamen Rider</h2>
            <p>
              Từ Showa cổ điển, Heisei hiện đại đến Reiwa tương lai - Hành trình
              tiến hóa của Kamen Rider
            </p>
          </div>

          <div className="categories-grid">
            <Link
              to="/collections?category=showa"
              className="category-card showa"
            >
              <div className="category-icon">🦾</div>
              <div className="category-content">
                <h3>Kỷ nguyên Showa</h3>
                <p>
                  Black và Shin Kamen Rider - Những huyền thoại bất diệt
                  (1987-2023)
                </p>
                <span className="category-count">
                  {showaRiders.length} sản phẩm
                </span>
              </div>
              <div className="category-arrow">→</div>
            </Link>

            <Link
              to="/collections?category=heisei"
              className="category-card heisei"
            >
              <div className="category-icon">⚡</div>
              <div className="category-content">
                <h3>Kỷ nguyên Heisei</h3>
                <p>
                  Từ Kuuga đến Zi-O - 20 năm phát triển và cải tiến (2000-2018)
                </p>
                <span className="category-count">
                  {heiseiRiders.length} sản phẩm
                </span>
              </div>
              <div className="category-arrow">→</div>
            </Link>

            <Link
              to="/collections?category=reiwa"
              className="category-card reiwa"
            >
              <div className="category-icon">🚀</div>
              <div className="category-content">
                <h3>Kỷ nguyên Reiwa</h3>
                <p>
                  Zero-One - Khởi đầu của kỷ nguyên AI và tương lai (2019-hiện
                  tại)
                </p>
                <span className="category-count">
                  {reiwaRiders.length} sản phẩm
                </span>
              </div>
              <div className="category-arrow">→</div>
            </Link>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Tại sao chọn chúng tôi</span>
            <h2>Cam kết chất lượng hàng đầu</h2>
          </div>

          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">✅</div>
              <h3>100% Chính hãng</h3>
              <p>
                Tất cả sản phẩm đều được nhập khẩu trực tiếp từ Bandai Nhật Bản
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">🚚</div>
              <h3>Giao hàng miễn phí</h3>
              <p>Miễn phí vận chuyển toàn quốc cho đơn hàng trên 1.000.000đ</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">🛡️</div>
              <h3>Bảo hành 12 tháng</h3>
              <p>Cam kết bảo hành và hỗ trợ kỹ thuật trong suốt 12 tháng</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">💬</div>
              <h3>Hỗ trợ 24/7</h3>
              <p>Đội ngũ tư vấn chuyên nghiệp luôn sẵn sàng hỗ trợ bạn</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
