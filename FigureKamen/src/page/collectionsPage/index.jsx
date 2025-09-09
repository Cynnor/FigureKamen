import { Link } from "react-router-dom";
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
  return (
    <div className="collections-page" style={{ padding: "32px" }}>
      <h2 style={{ marginBottom: "24px" }}>Bộ sưu tập</h2>
      <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
        {collections.map((item, idx) => (
          <Link
            to={`/product/${item.id}`}
            key={item.id}
            style={{
              background: "#fff",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              padding: "16px",
              width: "220px",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <img
              src={item.img}
              alt={item.name}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h4 style={{ margin: "12px 0 4px" }}>{item.name}</h4>
            <p style={{ color: "#666" }}>{item.type}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CollectionsPage;
