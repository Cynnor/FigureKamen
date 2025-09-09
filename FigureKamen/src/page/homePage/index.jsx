import { Link } from "react-router-dom";
import Carosell from "../../component/carosell/index,";
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
  const randomProducts = getRandomProducts(featuredProducts, 4);
  return (
    <div className="homePage">
      <div className="homePage__banner">
        <Carosell />
      </div>
      <section className="homePage__categories">
        <h2 className="section-title">Danh mục nổi bật</h2>
        <div className="categories__grid">
          {categories.map((cat, idx) => (
            <Link to={cat.to} className="category-card" key={idx}>
              <img src={cat.img} alt={cat.alt} />
              <div className="category-card__overlay">
                <h3>{cat.title}</h3>
                <span>{cat.desc}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="homePage__featured">
        <h2 className="section-title">Sản phẩm nổi bật</h2>
        <div className="featured__grid">
          {randomProducts.map((prod, idx) => (
            <Link to={prod.to} className="product-card" key={idx}>
              <div className="product-card__media">
                <img src={prod.img} alt={prod.alt} />
              </div>
              <div className="product-card__info">
                <h4>{prod.name}</h4>
                <span className="badge badge--heisei">{prod.badge}</span>
                <div className="product-card__actions">
                  <span className="btn btn-primary">Xem chi tiết</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "24px" }}>
          <Link to="/collections" className="btn btn-outline">
            Xem thêm
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
    </div>
  );
}

export default HomePage;
