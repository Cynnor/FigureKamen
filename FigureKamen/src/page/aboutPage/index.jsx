import { Link } from "react-router-dom";
import { heiseiRiders, showaRiders, reiwaRiders } from "../../data/products";
import "./index.scss";

function AboutPage() {
  const milestones = [
    {
      year: "2024",
      title: "Sưu tầm mô hình",
      desc: "Bắt đầu hành trình sưu tầm các mô hình Figure Rise Standard, nghiên cứu và tìm hiểu về chất lượng sản phẩm từ Bandai.",
    },
    {
      year: "2025",
      title: "Ra mắt FigureKamen",
      desc: "Chính thức thành lập FigureKamen với mục tiêu trở thành địa chỉ tin cậy cho người yêu thích mô hình Kamen Rider tại Việt Nam.",
    },
    {
      year: "Tương lai",
      title: "Mở rộng",
      desc: "Kế hoạch mở rộng bộ sưu tập với nhiều dòng sản phẩm khác nhau và xây dựng cộng đồng người hâm mộ mạnh mẽ.",
    },
    {
      year: "Mục tiêu",
      title: "Phát triển bền vững",
      desc: "Trở thành đại lý chính thức của Bandai tại Việt Nam và phục vụ cộng đồng người yêu Kamen Rider trên toàn quốc.",
    },
  ];

  // Get featured products from data
  const featuredProducts = [
    heiseiRiders.find((rider) => rider.id === "kuuga"),
    heiseiRiders.find((rider) => rider.id === "decade"),
    reiwaRiders.find((rider) => rider.id === "zero-one"),
    showaRiders.find((rider) => rider.id === "black"),
  ].filter(Boolean); // Remove any undefined items

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>Về FigureKamen</h1>
          <p>
            Nơi quy tụ những người yêu thích Kamen Rider và mô hình chất lượng
            cao
          </p>
        </div>
      </section>

      <div className="about-container">
        {/* Story Section */}
        <section className="story-section">
          <div className="section-content">
            <div className="story-text">
              <h2>Câu chuyện của chúng tôi</h2>
              <p>
                FigureKamen ra đời từ tình yêu thuần khiết dành cho series Kamen
                Rider - những siêu anh hùng đã đồng hành cùng tuổi thơ của biết
                bao thế hệ. Chúng tôi hiểu rằng mỗi mô hình không chỉ là một sản
                phẩm, mà còn là kỷ niệm, là niềm đam mê và là cầu nối giữa các
                thế hệ fan.
              </p>
              <p>
                Với sứ mệnh mang đến những sản phẩm Figure Rise Standard chính
                hãng từ Bandai, chúng tôi cam kết về chất lượng và tính xác thực
                của từng sản phẩm. Mỗi mô hình đều được tuyển chọn kỹ lưỡng, đảm
                bảo chi tiết hoàn hảo và độ bền cao.
              </p>
            </div>
            <div className="story-image">
              <div className="image-grid">
                {featuredProducts.map((product, index) => (
                  <img
                    key={product.id}
                    src={product.images?.[1] || product.img}
                    alt={`${product.name} Figure`}
                    onError={(e) => {
                      e.target.src = product.img; // Fallback to box image
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <h2>Giá trị cốt lõi</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">✨</div>
              <h3>Chất lượng</h3>
              <p>
                100% sản phẩm chính hãng từ Bandai Nhật Bản, đảm bảo chất lượng
                tốt nhất.
              </p>
            </div>
            <div className="value-item">
              <div className="value-icon">❤️</div>
              <h3>Đam mê</h3>
              <p>
                Được vận hành bởi những người thực sự yêu thích và hiểu biết về
                Kamen Rider.
              </p>
            </div>
            <div className="value-item">
              <div className="value-icon">🤝</div>
              <h3>Tin cậy</h3>
              <p>
                Xây dựng mối quan hệ lâu dài với khách hàng dựa trên sự tin
                tưởng và uy tín.
              </p>
            </div>
            <div className="value-item">
              <div className="value-icon">🚀</div>
              <h3>Đổi mới</h3>
              <p>
                Luôn cập nhật những sản phẩm mới nhất và xu hướng trong cộng
                đồng người hâm mộ.
              </p>
            </div>
            <div className="value-item">
              <div className="value-icon">🎯</div>
              <h3>Chuyên nghiệp</h3>
              <p>
                Dịch vụ khách hàng tận tâm với đội ngũ am hiểu sâu về từng sản
                phẩm và series.
              </p>
            </div>
            <div className="value-item">
              <div className="value-icon">🌟</div>
              <h3>Cộng đồng</h3>
              <p>
                Kết nối và xây dựng cộng đồng những người yêu thích Kamen Rider
                tại Việt Nam.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="timeline-section">
          <h2>Hành trình phát triển</h2>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{milestone.year}</div>
                <div className="timeline-content">
                  <h3>{milestone.title}</h3>
                  <p>{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">23</div>
              <div className="stat-label">Mô hình có sẵn</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Khách hàng hài lòng</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3</div>
              <div className="stat-label">Kỷ nguyên Kamen Rider</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Sản phẩm chính hãng</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-content">
            <h2>Sẵn sàng khám phá bộ sưu tập?</h2>
            <p>
              Hãy cùng chúng tôi khám phá thế giới tuyệt vời của các Kamen Rider
              qua những mô hình Figure Rise Standard chất lượng cao.
            </p>
            <div className="cta-buttons">
              <Link to="/collections" className="btn btn-primary">
                Xem bộ sưu tập
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Liên hệ với chúng tôi
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
