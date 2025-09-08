import { Link } from "react-router-dom";
import Carosell from "../../component/carosell/index,";
import "./index.scss";

function HomePage() {
  return (
    <div className="homePage">
      <div className="homePage__banner">
        <Carosell />
      </div>
      <section className="homePage__categories">
        <h2 className="section-title">Danh mục nổi bật</h2>
        <div className="categories__grid">
          <Link to="/collections" className="category-card">
            <img src="heisei.jpg" alt="Heisei Riders" />
            <div className="category-card__overlay">
              <h3>Heisei Rider</h3>
              <span>Khám phá ngay</span>
            </div>
          </Link>
          <Link to="/collections" className="category-card">
            <img src="neo-heisei.jpg" alt="Neo Heisei Riders" />
            <div className="category-card__overlay">
              <h3>Neo-Heisei Rider</h3>
              <span>Khám phá ngay</span>
            </div>
          </Link>
        </div>
      </section>

      <section className="homePage__featured">
        <h2 className="section-title">Sản phẩm nổi bật</h2>
        <div className="featured__grid">
          <Link to="/collections" className="product-card">
            <div className="product-card__media">
              <img src="heisei-full/1.Kyuga/full_body.jpg" alt="Kuuga Figure" />
            </div>
            <div className="product-card__info">
              <h4>Kamen Rider Kuuga</h4>
              <span className="badge badge--heisei">Heisei</span>
              <div className="product-card__actions">
                <span className="btn btn-primary">Xem chi tiết</span>
              </div>
            </div>
          </Link>
          <Link to="/collections" className="product-card">
            <div className="product-card__media">
              <img
                src="heisei-full/7.Kabuto/full_body.jpg"
                alt="Kabuto Figure"
              />
            </div>
            <div className="product-card__info">
              <h4>Kamen Rider Kabuto</h4>
              <span className="badge badge--heisei">Heisei</span>
              <div className="product-card__actions">
                <span className="btn btn-primary">Xem chi tiết</span>
              </div>
            </div>
          </Link>
          <Link to="/collections" className="product-card">
            <div className="product-card__media">
              <img
                src="heisei-full/10.Decade/full_body.jpg"
                alt="Decade Figure"
              />
            </div>
            <div className="product-card__info">
              <h4>Kamen Rider Decade</h4>
              <span className="badge badge--heisei">Heisei</span>
              <div className="product-card__actions">
                <span className="btn btn-primary">Xem chi tiết</span>
              </div>
            </div>
          </Link>
          <Link to="/collections" className="product-card">
            <div className="product-card__media">
              <img src="heisei-full/3.Ryuki/full_body.jpg" alt="Ryuki Figure" />
            </div>
            <div className="product-card__info">
              <h4>Kamen Rider Ryuki</h4>
              <span className="badge badge--heisei">Heisei</span>
              <div className="product-card__actions">
                <span className="btn btn-primary">Xem chi tiết</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="homePage__promo">
        <div className="promo__content">
          <h3>Giảm giá 20% cho đơn đầu tiên</h3>
          <p>Đăng ký tài khoản để nhận ưu đãi và cập nhật sản phẩm mới.</p>
          <Link to="/promotion" className="btn btn-primary">
            Nhận ưu đãi
          </Link>
        </div>
      </section>

      {/* Removed About section as requested */}
    </div>
  );
}

export default HomePage;
