
import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  allProducts,
  getProductsByCategory,
  heiseiRiders,
  showaRiders,
  reiwaRiders,
} from "../../data/products";
import { useCart } from "../../context/CartContext";

import "./index.scss";

const collections = [
  {
    id: "kyuga",
    name: "Kyuga",
    type: "Figure Rise Standard",
    img: "/heisei-full/1.Kyuga/box.jpg",
    price: 450000,
    desc: "Kamen Rider Kuuga là sản phẩm đầu tiên của dòng Heisei.",
  },
  {
    id: "agito",
    name: "Agito",
    type: "Figure Rise Standard",
    img: "/heisei-full/2.Agito/box.jpg",
    price: 450000,
    desc: "Kamen Rider Agito với thiết kế mạnh mẽ.",
  },
  {
    id: "ryuki",
    name: "Ryuki",
    type: "Figure Rise Standard",
    img: "/heisei-full/3.Ryuki/box.jpg",
    price: 450000,
    desc: "Kamen Rider Ryuki nổi bật với chủ đề rồng.",
  },
  {
    id: "faiz",
    name: "Faiz",
    type: "Figure Rise Standard",
    img: "/heisei-full/4.Faiz/box.jpg",
    price: 450000,
    desc: "Kamen Rider Faiz với thiết kế công nghệ cao.",
  },
  {
    id: "blade",
    name: "Blade",
    type: "Figure Rise Standard",
    img: "/heisei-full/5.Blade/box.jpg",
    price: 450000,
    desc: "Kamen Rider Blade với chủ đề bài tây.",
  },
  {
    id: "hibiki",
    name: "Hibiki",
    type: "Figure Rise Standard",
    img: "/heisei-full/6.Hibiki/box.jpg",
    price: 450000,
    desc: "Kamen Rider Hibiki với chủ đề nhạc cụ.",
  },
  {
    id: "kabuto",
    name: "Kabuto",
    type: "Figure Rise Standard",
    img: "/heisei-full/7.Kabuto/box.jpg",
    price: 450000,
    desc: "Kamen Rider Kabuto với thiết kế côn trùng.",
  },
  {
    id: "deno",
    name: "Den-O",
    type: "Figure Rise Standard",
    img: "/heisei-full/8.Deno/box.jpg",
    price: 450000,
    desc: "Kamen Rider Den-O với chủ đề tàu điện.",
  },
  {
    id: "kiva",
    name: "Kiva",
    type: "Figure Rise Standard",
    img: "/heisei-full/9.Kiva/box.jpg",
    price: 450000,
    desc: "Kamen Rider Kiva với chủ đề ma cà rồng.",
  },
  {
    id: "decade",
    name: "Decade",
    type: "Figure Rise Standard",
    img: "/heisei-full/10.Decade/box.jpg",
    price: 450000,
    desc: "Kamen Rider Decade với khả năng du hành các thế giới.",
  },
];

// Tạo map để truy xuất sản phẩm theo id
export const collectionsMap = collections.reduce((acc, item) => {
  acc[item.id] = item;
  return acc;
}, {});

function CollectionsPage() {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { addToCart } = useCart();

  useEffect(() => {
    const category = searchParams.get("category");
    if (category && category !== "all") {
      setFilteredProducts(getProductsByCategory(category));
      setSelectedCategory(category);
    } else {
      setFilteredProducts(allProducts);
      setSelectedCategory("all");
    }
  }, [searchParams]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "all") {
      setFilteredProducts(allProducts);
    } else {
      setFilteredProducts(getProductsByCategory(category));
    }
  };

  const handleAddToCart = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    // Optional: Show a toast notification
    alert(`Đã thêm ${product.name} vào giỏ hàng!`);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  // Get featured products for highlight section
  const featuredHighlights = [
    heiseiRiders.find((rider) => rider.id === "kuuga"),
    heiseiRiders.find((rider) => rider.id === "decade"),
    reiwaRiders.find((rider) => rider.id === "zero-one"),
    showaRiders.find((rider) => rider.id === "black"),
  ].filter(Boolean);

  return (
    <div className="collections-page">
      {/* Hero Section */}
      <section className="collections-hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Bộ sưu tập Figure Rise Standard</h1>
              <p>Khám phá 23 mô hình Kamen Rider chính hãng từ Bandai</p>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="number">{allProducts.length}</span>
                  <span className="label">Mô hình</span>
                </div>
                <div className="stat-item">
                  <span className="number">3</span>
                  <span className="label">Kỷ nguyên</span>
                </div>
                <div className="stat-item">
                  <span className="number">100%</span>
                  <span className="label">Chính hãng</span>
                </div>
              </div>
            </div>

            <div className="hero-sidebar">
              <div className="featured-highlight">
                <h3>Sản phẩm nổi bật</h3>
                <div className="highlight-grid">
                  {featuredHighlights.map((product) => (
                    <div key={product.id} className="highlight-item">
                      <img
                        src={product.img}
                        alt={product.name}
                        onError={(e) => {
                          e.target.src = "/placeholder-box.jpg";
                        }}
                      />
                      <span>{product.name.replace("Kamen Rider ", "")}</span>
                    </div>
                  ))}
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

      <div className="collections-container">
        {/* Filter Section */}
        <div className="filter-section">
          <div className="filter-header">
            <h2>Lọc theo kỷ nguyên</h2>
            <p>Chọn kỷ nguyên để khám phá các Kamen Rider</p>
          </div>

          <div className="filter-categories">
            <button
              className={`category-filter ${
                selectedCategory === "all" ? "active" : ""
              }`}
              onClick={() => handleCategoryChange("all")}
            >
              <div className="filter-icon">🌟</div>
              <div className="filter-content">
                <h3>Tất cả</h3>
                <span>{allProducts.length} sản phẩm</span>
              </div>
            </button>

            <button
              className={`category-filter ${
                selectedCategory === "showa" ? "active" : ""
              }`}
              onClick={() => handleCategoryChange("showa")}
            >
              <div className="filter-icon">🦾</div>
              <div className="filter-content">
                <h3>Showa</h3>
                <span>{showaRiders.length} sản phẩm</span>
              </div>
            </button>

            <button
              className={`category-filter ${
                selectedCategory === "heisei" ? "active" : ""
              }`}
              onClick={() => handleCategoryChange("heisei")}
            >
              <div className="filter-icon">⚡</div>
              <div className="filter-content">
                <h3>Heisei</h3>
                <span>{heiseiRiders.length} sản phẩm</span>
              </div>
            </button>

            <button
              className={`category-filter ${
                selectedCategory === "reiwa" ? "active" : ""
              }`}
              onClick={() => handleCategoryChange("reiwa")}
            >
              <div className="filter-icon">🚀</div>
              <div className="filter-content">
                <h3>Reiwa</h3>
                <span>{reiwaRiders.length} sản phẩm</span>
              </div>
            </button>
          </div>
        </div>

        {/* Results Header */}
        <div className="results-header">
          <h2>
            {selectedCategory === "all"
              ? "Tất cả sản phẩm"
              : `Kỷ nguyên ${
                  selectedCategory.charAt(0).toUpperCase() +
                  selectedCategory.slice(1)
                }`}
          </h2>
          <span className="results-count">
            {filteredProducts.length} sản phẩm
          </span>
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {filteredProducts.map((item) => (
            <div key={item.id} className="product-card">
              <Link to={`/product/${item.id}`} className="product-link">
                <div className="product-image">
                  <img
                    src={item.img}
                    alt={item.name}
                    onError={(e) => {
                      e.target.src = "/placeholder-box.jpg";
                    }}
                  />
                  <div className="product-overlay">
                    <span className="view-btn">Xem chi tiết</span>
                  </div>
                  {!item.inStock && (
                    <div className="out-of-stock-overlay">Hết hàng</div>
                  )}
                  <div className="product-badge">
                    {item.category.toUpperCase()}
                  </div>
                </div>
                <div className="product-info">
                  <h4>{item.name}</h4>
                  <p className="product-type">{item.type}</p>
                  <div className="product-footer">
                    <span className="product-price">
                      {formatPrice(item.price)}
                    </span>
                    <span className="stock-status">
                      {item.inStock ? "Còn hàng" : "Hết hàng"}
                    </span>
                  </div>
                </div>
              </Link>
              <button
                className="add-to-cart-btn"
                onClick={(e) => handleAddToCart(item, e)}
                disabled={!item.inStock}
              >
                {item.inStock ? "Thêm vào giỏ" : "Hết hàng"}
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default CollectionsPage;
